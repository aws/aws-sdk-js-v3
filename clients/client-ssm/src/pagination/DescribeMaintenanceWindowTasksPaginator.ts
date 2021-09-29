import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowTasks(input, ...args);
};
export async function* paginateDescribeMaintenanceWindowTasks(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowTasksCommandOutput;
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
