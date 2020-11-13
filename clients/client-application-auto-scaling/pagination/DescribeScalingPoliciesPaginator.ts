import { ApplicationAutoScaling } from "../ApplicationAutoScaling";
import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ApplicationAutoScalingClient,
  input: DescribeScalingPoliciesCommandInput,
  ...args: any
): Promise<DescribeScalingPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScalingPoliciesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ApplicationAutoScaling,
  input: DescribeScalingPoliciesCommandInput,
  ...args: any
): Promise<DescribeScalingPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.describeScalingPolicies(input, ...args);
};
export async function* describeScalingPoliciesPaginate(
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalingPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalingPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScalingPoliciesCommandOutput;
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
