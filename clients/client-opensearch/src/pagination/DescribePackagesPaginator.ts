import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "../commands/DescribePackagesCommand";
import { OpenSearchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribePackagesCommandInput,
  ...args: any
): Promise<DescribePackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePackagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: DescribePackagesCommandInput,
  ...args: any
): Promise<DescribePackagesCommandOutput> => {
  // @ts-ignore
  return await client.describePackages(input, ...args);
};
export async function* paginateDescribePackages(
  config: OpenSearchPaginationConfiguration,
  input: DescribePackagesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePackagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePackagesCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
