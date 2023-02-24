// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeUpdateDirectoryCommand,
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "../commands/DescribeUpdateDirectoryCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeUpdateDirectoryCommandInput,
  ...args: any
): Promise<DescribeUpdateDirectoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUpdateDirectoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: DescribeUpdateDirectoryCommandInput,
  ...args: any
): Promise<DescribeUpdateDirectoryCommandOutput> => {
  // @ts-ignore
  return await client.describeUpdateDirectory(input, ...args);
};
export async function* paginateDescribeUpdateDirectory(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeUpdateDirectoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUpdateDirectoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUpdateDirectoryCommandOutput;
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
