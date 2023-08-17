// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import { ListIndexCommand, ListIndexCommandInput, ListIndexCommandOutput } from "../commands/ListIndexCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListIndexCommandInput,
  ...args: any
): Promise<ListIndexCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndexCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIndex(
  config: CloudDirectoryPaginationConfiguration,
  input: ListIndexCommandInput,
  ...additionalArguments: any
): Paginator<ListIndexCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndexCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
