import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "../commands/DescribeInstancesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeInstancesCommandInput,
  ...args: any
): Promise<DescribeInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: DescribeInstancesCommandInput,
  ...args: any
): Promise<DescribeInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeInstances(input, ...args);
};
export async function* paginateDescribeInstances(
  config: GameLiftPaginationConfiguration,
  input: DescribeInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancesCommandOutput;
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
