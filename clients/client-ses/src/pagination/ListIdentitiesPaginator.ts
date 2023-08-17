// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIdentitiesCommand,
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "../commands/ListIdentitiesCommand";
import { SESClient } from "../SESClient";
import { SESPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SESClient,
  input: ListIdentitiesCommandInput,
  ...args: any
): Promise<ListIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIdentities(
  config: SESPaginationConfiguration,
  input: ListIdentitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdentitiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof SESClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SES | SESClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
