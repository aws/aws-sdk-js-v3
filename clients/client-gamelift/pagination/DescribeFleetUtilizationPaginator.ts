import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeFleetUtilizationCommand,
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "../commands/DescribeFleetUtilizationCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetUtilizationCommandInput,
  ...args: any
): Promise<DescribeFleetUtilizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetUtilizationCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeFleetUtilizationCommandInput,
  ...args: any
): Promise<DescribeFleetUtilizationCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetUtilization(input, ...args);
};
export async function* describeFleetUtilizationPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetUtilizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetUtilizationCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetUtilizationCommandOutput;
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
