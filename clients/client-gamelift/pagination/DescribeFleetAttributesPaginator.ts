import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  DescribeFleetAttributesCommand,
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "../commands/DescribeFleetAttributesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeFleetAttributesCommandInput,
  ...args: any
): Promise<DescribeFleetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetAttributesCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: DescribeFleetAttributesCommandInput,
  ...args: any
): Promise<DescribeFleetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetAttributes(input, ...args);
};
export async function* describeFleetAttributesPaginate(
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetAttributesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetAttributesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetAttributesCommandOutput;
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
