import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowTasksCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowTasks(input, ...args);
};
export async function* describeMaintenanceWindowTasksPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
