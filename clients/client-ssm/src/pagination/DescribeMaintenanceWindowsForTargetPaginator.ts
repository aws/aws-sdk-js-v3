import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowsForTargetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowsForTarget(input, ...args);
};
export async function* paginateDescribeMaintenanceWindowsForTarget(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowsForTargetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowsForTargetCommandOutput;
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
