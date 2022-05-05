// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeAutomationExecutionsCommand,
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "../commands/DescribeAutomationExecutionsCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAutomationExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutomationExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeAutomationExecutionsCommandInput,
  ...args: any
): Promise<DescribeAutomationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.describeAutomationExecutions(input, ...args);
};
export async function* paginateDescribeAutomationExecutions(
  config: SSMPaginationConfiguration,
  input: DescribeAutomationExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutomationExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
