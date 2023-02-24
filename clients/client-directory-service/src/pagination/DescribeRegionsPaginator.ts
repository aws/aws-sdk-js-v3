// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeRegionsCommand,
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
} from "../commands/DescribeRegionsCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeRegionsCommandInput,
  ...args: any
): Promise<DescribeRegionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRegionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: DescribeRegionsCommandInput,
  ...args: any
): Promise<DescribeRegionsCommandOutput> => {
  // @ts-ignore
  return await client.describeRegions(input, ...args);
};
export async function* paginateDescribeRegions(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeRegionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRegionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRegionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof DirectoryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DirectoryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
