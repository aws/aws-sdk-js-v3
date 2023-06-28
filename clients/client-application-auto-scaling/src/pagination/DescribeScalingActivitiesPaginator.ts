// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationAutoScalingClient,
  input: DescribeScalingActivitiesCommandInput,
  ...args: any
): Promise<DescribeScalingActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScalingActivitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeScalingActivities(
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalingActivitiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalingActivitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScalingActivitiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationAutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationAutoScaling | ApplicationAutoScalingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
