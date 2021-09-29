import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "../commands/DescribeMaintenanceWindowScheduleCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowScheduleCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowScheduleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowScheduleCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowSchedule(input, ...args);
};
export async function* paginateDescribeMaintenanceWindowSchedule(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowScheduleCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowScheduleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowScheduleCommandOutput;
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
