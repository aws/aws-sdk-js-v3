import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import {
  DescribeEventAggregatesCommand,
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
} from "../commands/DescribeEventAggregatesCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeEventAggregatesCommandInput,
  ...args: any
): Promise<DescribeEventAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventAggregatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Health,
  input: DescribeEventAggregatesCommandInput,
  ...args: any
): Promise<DescribeEventAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.describeEventAggregates(input, ...args);
};
export async function* paginateDescribeEventAggregates(
  config: HealthPaginationConfiguration,
  input: DescribeEventAggregatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventAggregatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventAggregatesCommandOutput;
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
