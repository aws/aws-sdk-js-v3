import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeScalingPoliciesCommandInput,
  ...args: any
): Promise<DescribeScalingPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScalingPoliciesCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeScalingPoliciesCommandInput,
  ...args: any
): Promise<DescribeScalingPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.describeScalingPolicies(input, ...args);
};
export async function* describeScalingPoliciesPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeScalingPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalingPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScalingPoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof GameLift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
