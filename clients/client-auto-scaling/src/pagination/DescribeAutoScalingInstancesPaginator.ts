// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "../commands/DescribeAutoScalingInstancesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingInstancesCommandInput,
  ...args: any
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutoScalingInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeAutoScalingInstancesCommandInput,
  ...args: any
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeAutoScalingInstances(input, ...args);
};
export async function* paginateDescribeAutoScalingInstances(
  config: AutoScalingPaginationConfiguration,
  input: DescribeAutoScalingInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutoScalingInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAutoScalingInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
