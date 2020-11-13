import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "../commands/DescribeGameSessionDetailsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameSessionDetailsCommandInput,
  ...args: any
): Promise<DescribeGameSessionDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameSessionDetailsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeGameSessionDetailsCommandInput,
  ...args: any
): Promise<DescribeGameSessionDetailsCommandOutput> => {
  // @ts-ignore
  return await client.describeGameSessionDetails(input, ...args);
};
export async function* describeGameSessionDetailsPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionDetailsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameSessionDetailsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameSessionDetailsCommandOutput;
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
