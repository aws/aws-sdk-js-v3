import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeGameServerInstancesCommand,
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "../commands/DescribeGameServerInstancesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameServerInstancesCommandInput,
  ...args: any
): Promise<DescribeGameServerInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameServerInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeGameServerInstancesCommandInput,
  ...args: any
): Promise<DescribeGameServerInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeGameServerInstances(input, ...args);
};
export async function* describeGameServerInstancesPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameServerInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameServerInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameServerInstancesCommandOutput;
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
