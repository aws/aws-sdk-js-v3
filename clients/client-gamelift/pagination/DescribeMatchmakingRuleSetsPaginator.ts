import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeMatchmakingRuleSetsCommand,
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "../commands/DescribeMatchmakingRuleSetsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeMatchmakingRuleSetsCommandInput,
  ...args: any
): Promise<DescribeMatchmakingRuleSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMatchmakingRuleSetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeMatchmakingRuleSetsCommandInput,
  ...args: any
): Promise<DescribeMatchmakingRuleSetsCommandOutput> => {
  // @ts-ignore
  return await client.describeMatchmakingRuleSets(input, ...args);
};
export async function* describeMatchmakingRuleSetsPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeMatchmakingRuleSetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMatchmakingRuleSetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMatchmakingRuleSetsCommandOutput;
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
