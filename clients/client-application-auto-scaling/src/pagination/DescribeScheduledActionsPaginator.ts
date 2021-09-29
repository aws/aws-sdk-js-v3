import { ApplicationAutoScaling } from "../ApplicationAutoScaling";
import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ApplicationAutoScalingClient,
  input: DescribeScheduledActionsCommandInput,
  ...args: any
): Promise<DescribeScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScheduledActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ApplicationAutoScaling,
  input: DescribeScheduledActionsCommandInput,
  ...args: any
): Promise<DescribeScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.describeScheduledActions(input, ...args);
};
export async function* paginateDescribeScheduledActions(
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScheduledActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScheduledActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScheduledActionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationAutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationAutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationAutoScaling | ApplicationAutoScalingClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
