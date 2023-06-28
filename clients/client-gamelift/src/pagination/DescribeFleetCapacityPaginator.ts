// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFleetCapacityCommand,
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "../commands/DescribeFleetCapacityCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof GameLiftClient) {
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
