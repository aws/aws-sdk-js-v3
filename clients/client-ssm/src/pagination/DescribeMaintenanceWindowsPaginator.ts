import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "../commands/DescribeMaintenanceWindowsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindows(input, ...args);
};
export async function* paginateDescribeMaintenanceWindows(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
