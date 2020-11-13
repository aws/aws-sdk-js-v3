import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMaintenanceWindowExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  ...args: any
): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.describeMaintenanceWindowExecutions(input, ...args);
};
export async function* describeMaintenanceWindowExecutionsPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMaintenanceWindowExecutionsCommandOutput;
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
