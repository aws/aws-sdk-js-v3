// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFindingAggregationsCommand,
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "../commands/ListFindingAggregationsCommand";
import { Inspector2 } from "../Inspector2";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: ListFindingAggregationsCommandInput,
  ...args: any
): Promise<ListFindingAggregationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingAggregationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector2,
  input: ListFindingAggregationsCommandInput,
  ...args: any
): Promise<ListFindingAggregationsCommandOutput> => {
  // @ts-ignore
  return await client.listFindingAggregations(input, ...args);
};
export async function* paginateListFindingAggregations(
  config: Inspector2PaginationConfiguration,
  input: ListFindingAggregationsCommandInput,
  ...additionalArguments: any
): Paginator<ListFindingAggregationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFindingAggregationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Inspector2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector2 | Inspector2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
