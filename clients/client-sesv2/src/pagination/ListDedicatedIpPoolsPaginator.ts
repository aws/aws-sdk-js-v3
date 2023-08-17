// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListDedicatedIpPoolsCommandInput,
  ...args: any
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDedicatedIpPoolsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDedicatedIpPools(
  config: SESv2PaginationConfiguration,
  input: ListDedicatedIpPoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListDedicatedIpPoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDedicatedIpPoolsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2Client) {
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
