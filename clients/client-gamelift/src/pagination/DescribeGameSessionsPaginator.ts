// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeGameSessionsCommand,
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "../commands/DescribeGameSessionsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameSessionsCommandInput,
  ...args: any
): Promise<DescribeGameSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameSessionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeGameSessions(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameSessionsCommandOutput;
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
