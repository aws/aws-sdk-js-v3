// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListFacetNamesCommand,
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput,
} from "../commands/ListFacetNamesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListFacetNamesCommandInput,
  ...args: any
): Promise<ListFacetNamesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFacetNamesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListFacetNamesCommandInput,
  ...args: any
): Promise<ListFacetNamesCommandOutput> => {
  // @ts-ignore
  return await client.listFacetNames(input, ...args);
};
export async function* paginateListFacetNames(
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetNamesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacetNamesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFacetNamesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
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
