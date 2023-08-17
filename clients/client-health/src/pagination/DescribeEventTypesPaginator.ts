// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeEventTypesCommand,
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
} from "../commands/DescribeEventTypesCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeEventTypesCommandInput,
  ...args: any
): Promise<DescribeEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEventTypes(
  config: HealthPaginationConfiguration,
  input: DescribeEventTypesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
