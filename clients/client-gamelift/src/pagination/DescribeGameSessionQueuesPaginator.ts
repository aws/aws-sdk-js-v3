// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "../commands/DescribeGameSessionQueuesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameSessionQueuesCommandInput,
  ...args: any
): Promise<DescribeGameSessionQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameSessionQueuesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeGameSessionQueues(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionQueuesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameSessionQueuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameSessionQueuesCommandOutput;
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
