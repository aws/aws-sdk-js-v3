import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeAutomationExecutionsCommand,
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "../commands/DescribeAutomationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAutomationExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutomationExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeAutomationExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.describeAutomationExecutions(input, ...args);
};
export async function* describeAutomationExecutionsPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeAutomationExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutomationExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAutomationExecutionsCommandOutput;
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
