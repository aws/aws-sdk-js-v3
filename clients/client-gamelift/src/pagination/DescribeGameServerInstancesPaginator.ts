// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeGameServerInstancesCommand,
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "../commands/DescribeGameServerInstancesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameServerInstancesCommandInput,
  ...args: any
): Promise<DescribeGameServerInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameServerInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeGameServerInstances(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameServerInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameServerInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameServerInstancesCommandOutput;
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
