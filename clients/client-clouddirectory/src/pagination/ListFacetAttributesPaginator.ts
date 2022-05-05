// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListFacetAttributesCommand,
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "../commands/ListFacetAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListFacetAttributesCommandInput,
  ...args: any
): Promise<ListFacetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFacetAttributesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListFacetAttributesCommandInput,
  ...args: any
): Promise<ListFacetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listFacetAttributes(input, ...args);
};
export async function* paginateListFacetAttributes(
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacetAttributesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFacetAttributesCommandOutput;
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
