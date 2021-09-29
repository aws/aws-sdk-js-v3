import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "../commands/DescribePackagesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
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
  client: ElasticsearchService,
  input: DescribePackagesCommandInput,
  ...args: any
): Promise<DescribePackagesCommandOutput> => {
  // @ts-ignore
  return await client.describePackages(input, ...args);
};
export async function* paginateDescribePackages(
  config: ElasticsearchServicePaginationConfiguration,
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
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
