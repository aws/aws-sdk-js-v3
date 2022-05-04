// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFleetEventsCommand,
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "../commands/DescribeFleetEventsCommand";
import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetEventsCommandInput,
  ...args: any
): Promise<DescribeFleetEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetEventsCommand(input), ...args);
};
/**
 * @private
 */
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
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
