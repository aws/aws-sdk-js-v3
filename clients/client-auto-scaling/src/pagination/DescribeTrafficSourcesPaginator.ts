// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeTrafficSourcesCommand,
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
} from "../commands/DescribeTrafficSourcesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeTrafficSourcesCommandInput,
  ...args: any
): Promise<DescribeTrafficSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrafficSourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTrafficSources(
  config: AutoScalingPaginationConfiguration,
  input: DescribeTrafficSourcesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrafficSourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrafficSourcesCommandOutput;
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
