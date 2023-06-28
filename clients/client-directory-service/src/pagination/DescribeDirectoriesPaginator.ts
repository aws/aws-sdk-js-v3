// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDirectoriesCommand,
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "../commands/DescribeDirectoriesCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeDirectoriesCommandInput,
  ...args: any
): Promise<DescribeDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDirectoriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDirectories(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeDirectoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDirectoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDirectoriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryServiceClient) {
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
