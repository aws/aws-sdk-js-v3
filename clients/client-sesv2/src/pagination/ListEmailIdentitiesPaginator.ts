// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "../commands/ListEmailIdentitiesCommand";
import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListEmailIdentitiesCommandInput,
  ...args: any
): Promise<ListEmailIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEmailIdentitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SESv2,
  input: ListEmailIdentitiesCommandInput,
  ...args: any
): Promise<ListEmailIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.listEmailIdentities(input, ...args);
};
export async function* paginateListEmailIdentities(
  config: SESv2PaginationConfiguration,
  input: ListEmailIdentitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListEmailIdentitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEmailIdentitiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
