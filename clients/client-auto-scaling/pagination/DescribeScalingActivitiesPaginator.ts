import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeScalingActivitiesCommandInput,
  ...args: any
): Promise<DescribeScalingActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScalingActivitiesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeScalingActivitiesCommandInput,
  ...args: any
): Promise<DescribeScalingActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.describeScalingActivities(input, ...args);
};
export async function* describeScalingActivitiesPaginate(
  config: AutoScalingPaginationConfiguration,
  input: DescribeScalingActivitiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalingActivitiesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScalingActivitiesCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
