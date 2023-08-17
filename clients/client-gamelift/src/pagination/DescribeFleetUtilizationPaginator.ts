// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFleetUtilizationCommand,
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "../commands/DescribeFleetUtilizationCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetUtilizationCommandInput,
  ...args: any
): Promise<DescribeFleetUtilizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetUtilizationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeFleetUtilization(
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetUtilizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetUtilizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetUtilizationCommandOutput;
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
