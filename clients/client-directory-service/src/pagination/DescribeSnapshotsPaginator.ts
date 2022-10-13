// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeSnapshotsCommandInput,
  ...args: any
): Promise<DescribeSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSnapshotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: DescribeSnapshotsCommandInput,
  ...args: any
): Promise<DescribeSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.describeSnapshots(input, ...args);
};
export async function* paginateDescribeSnapshots(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSnapshotsCommandOutput;
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
