// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeSharedDirectoriesCommand,
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "../commands/DescribeSharedDirectoriesCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeSharedDirectoriesCommandInput,
  ...args: any
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSharedDirectoriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: DescribeSharedDirectoriesCommandInput,
  ...args: any
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.describeSharedDirectories(input, ...args);
};
export async function* paginateDescribeSharedDirectories(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeSharedDirectoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSharedDirectoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSharedDirectoriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
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
