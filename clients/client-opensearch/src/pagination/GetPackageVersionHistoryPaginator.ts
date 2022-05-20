// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "../commands/GetPackageVersionHistoryCommand";
import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: GetPackageVersionHistoryCommandInput,
  ...args: any
): Promise<GetPackageVersionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPackageVersionHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: GetPackageVersionHistoryCommandInput,
  ...args: any
): Promise<GetPackageVersionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getPackageVersionHistory(input, ...args);
};
export async function* paginateGetPackageVersionHistory(
  config: OpenSearchPaginationConfiguration,
  input: GetPackageVersionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetPackageVersionHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPackageVersionHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
