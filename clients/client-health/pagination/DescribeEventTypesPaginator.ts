import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import {
  DescribeEventTypesCommand,
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
} from "../commands/DescribeEventTypesCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeEventTypesCommandInput,
  ...args: any
): Promise<DescribeEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Health,
  input: DescribeEventTypesCommandInput,
  ...args: any
): Promise<DescribeEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.describeEventTypes(input, ...args);
};
export async function* paginateDescribeEventTypes(
  config: HealthPaginationConfiguration,
  input: DescribeEventTypesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Health) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
