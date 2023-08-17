// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectChildrenCommand,
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
} from "../commands/ListObjectChildrenCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectChildrenCommandInput,
  ...args: any
): Promise<ListObjectChildrenCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectChildrenCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListObjectChildren(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectChildrenCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectChildrenCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectChildrenCommandOutput;
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
