// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeWarmPoolCommand,
  DescribeWarmPoolCommandInput,
  DescribeWarmPoolCommandOutput,
} from "../commands/DescribeWarmPoolCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeWarmPoolCommandInput,
  ...args: any
): Promise<DescribeWarmPoolCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeWarmPoolCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeWarmPool(
  config: AutoScalingPaginationConfiguration,
  input: DescribeWarmPoolCommandInput,
  ...additionalArguments: any
): Paginator<DescribeWarmPoolCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeWarmPoolCommandOutput;
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
