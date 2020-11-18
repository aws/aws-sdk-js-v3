import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeFleetEventsCommand,
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "../commands/DescribeFleetEventsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetEventsCommandInput,
  ...args: any
): Promise<DescribeFleetEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetEventsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeFleetEventsCommandInput,
  ...args: any
): Promise<DescribeFleetEventsCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetEvents(input, ...args);
};
export async function* paginateDescribeFleetEvents(
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetEventsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetEventsCommandOutput;
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
