import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeAutomationStepExecutionsCommand,
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "../commands/DescribeAutomationStepExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutomationStepExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.describeAutomationStepExecutions(input, ...args);
};
export async function* paginateDescribeAutomationStepExecutions(
  config: SSMPaginationConfiguration,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutomationStepExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAutomationStepExecutionsCommandOutput;
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
