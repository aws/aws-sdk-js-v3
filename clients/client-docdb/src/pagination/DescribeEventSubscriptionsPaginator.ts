// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeEventSubscriptionsCommandInput,
  ...args: any
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventSubscriptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DocDB,
  input: DescribeEventSubscriptionsCommandInput,
  ...args: any
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeEventSubscriptions(input, ...args);
};
export async function* paginateDescribeEventSubscriptions(
  config: DocDBPaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventSubscriptionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
