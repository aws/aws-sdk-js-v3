// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListInstanceTypeDetailsCommand,
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
} from "../commands/ListInstanceTypeDetailsCommand";
import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: ListInstanceTypeDetailsCommandInput,
  ...args: any
): Promise<ListInstanceTypeDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceTypeDetailsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: ListInstanceTypeDetailsCommandInput,
  ...args: any
): Promise<ListInstanceTypeDetailsCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceTypeDetails(input, ...args);
};
export async function* paginateListInstanceTypeDetails(
  config: OpenSearchPaginationConfiguration,
  input: ListInstanceTypeDetailsCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceTypeDetailsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceTypeDetailsCommandOutput;
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
