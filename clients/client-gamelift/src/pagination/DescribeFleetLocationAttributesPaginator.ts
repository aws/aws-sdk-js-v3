// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "../commands/DescribeFleetLocationAttributesCommand";
import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetLocationAttributesCommandInput,
  ...args: any
): Promise<DescribeFleetLocationAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetLocationAttributesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: DescribeFleetLocationAttributesCommandInput,
  ...args: any
): Promise<DescribeFleetLocationAttributesCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetLocationAttributes(input, ...args);
};
export async function* paginateDescribeFleetLocationAttributes(
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetLocationAttributesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetLocationAttributesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetLocationAttributesCommandOutput;
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
