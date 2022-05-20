// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Appflow } from "../Appflow";
import { AppflowClient } from "../AppflowClient";
import {
  DescribeFlowExecutionRecordsCommand,
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "../commands/DescribeFlowExecutionRecordsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppflowClient,
  input: DescribeFlowExecutionRecordsCommandInput,
  ...args: any
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFlowExecutionRecordsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Appflow,
  input: DescribeFlowExecutionRecordsCommandInput,
  ...args: any
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  // @ts-ignore
  return await client.describeFlowExecutionRecords(input, ...args);
};
export async function* paginateDescribeFlowExecutionRecords(
  config: AppflowPaginationConfiguration,
  input: DescribeFlowExecutionRecordsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFlowExecutionRecordsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFlowExecutionRecordsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Appflow) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
