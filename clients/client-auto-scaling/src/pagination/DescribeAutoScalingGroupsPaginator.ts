// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "../commands/DescribeAutoScalingGroupsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingGroupsCommandInput,
  ...args: any
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutoScalingGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAutoScalingGroups(
  config: AutoScalingPaginationConfiguration,
  input: DescribeAutoScalingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutoScalingGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAutoScalingGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScalingClient) {
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
