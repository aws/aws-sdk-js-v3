// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowExecutionTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowExecutionTasks(input, ...args);
};
export async function* paginateDescribeMaintenanceWindowExecutionTasks(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowExecutionTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowExecutionTasksCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
