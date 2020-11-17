import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowsForTargetCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
