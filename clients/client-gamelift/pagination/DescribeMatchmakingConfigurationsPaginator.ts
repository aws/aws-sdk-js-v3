import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "../commands/DescribeMatchmakingConfigurationsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeMatchmakingConfigurationsCommandInput,
  ...args: any
): Promise<DescribeMatchmakingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMatchmakingConfigurationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeMatchmakingConfigurationsCommandInput,
  ...args: any
): Promise<DescribeMatchmakingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.describeMatchmakingConfigurations(input, ...args);
};
export async function* describeMatchmakingConfigurationsPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeMatchmakingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMatchmakingConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMatchmakingConfigurationsCommandOutput;
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
