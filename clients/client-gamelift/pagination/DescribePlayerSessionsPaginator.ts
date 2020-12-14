import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribePlayerSessionsCommand,
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "../commands/DescribePlayerSessionsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribePlayerSessionsCommandInput,
  ...args: any
): Promise<DescribePlayerSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePlayerSessionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: DescribePlayerSessionsCommandInput,
  ...args: any
): Promise<DescribePlayerSessionsCommandOutput> => {
  // @ts-ignore
  return await client.describePlayerSessions(input, ...args);
};
export async function* paginateDescribePlayerSessions(
  config: GameLiftPaginationConfiguration,
  input: DescribePlayerSessionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePlayerSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePlayerSessionsCommandOutput;
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
