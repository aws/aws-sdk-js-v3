// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "../commands/DescribeFleetLocationAttributesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
