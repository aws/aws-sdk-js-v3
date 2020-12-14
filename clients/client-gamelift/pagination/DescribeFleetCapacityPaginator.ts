import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeFleetCapacityCommand,
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "../commands/DescribeFleetCapacityCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetCapacityCommandInput,
  ...args: any
): Promise<DescribeFleetCapacityCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetCapacityCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: DescribeFleetCapacityCommandInput,
  ...args: any
): Promise<DescribeFleetCapacityCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetCapacity(input, ...args);
};
export async function* paginateDescribeFleetCapacity(
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetCapacityCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetCapacityCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetCapacityCommandOutput;
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
