// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeInstanceRefreshesCommand,
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
} from "../commands/DescribeInstanceRefreshesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeInstanceRefreshesCommandInput,
  ...args: any
): Promise<DescribeInstanceRefreshesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceRefreshesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeInstanceRefreshes(
  config: AutoScalingPaginationConfiguration,
  input: DescribeInstanceRefreshesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceRefreshesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceRefreshesCommandOutput;
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
