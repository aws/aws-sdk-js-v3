// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFindingAggregatorsCommand,
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "../commands/ListFindingAggregatorsCommand";
import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListFindingAggregatorsCommandInput,
  ...args: any
): Promise<ListFindingAggregatorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingAggregatorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: ListFindingAggregatorsCommandInput,
  ...args: any
): Promise<ListFindingAggregatorsCommandOutput> => {
  // @ts-ignore
  return await client.listFindingAggregators(input, ...args);
};
export async function* paginateListFindingAggregators(
  config: SecurityHubPaginationConfiguration,
  input: ListFindingAggregatorsCommandInput,
  ...additionalArguments: any
): Paginator<ListFindingAggregatorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFindingAggregatorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
