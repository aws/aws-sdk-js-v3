import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowExecutionTaskInvocations(input, ...args);
};
export async function* paginateDescribeMaintenanceWindowExecutionTaskInvocations(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput;
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
