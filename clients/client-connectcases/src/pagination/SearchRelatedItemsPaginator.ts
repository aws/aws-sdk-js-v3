// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchRelatedItemsCommand,
  SearchRelatedItemsCommandInput,
  SearchRelatedItemsCommandOutput,
} from "../commands/SearchRelatedItemsCommand";
import { ConnectCases } from "../ConnectCases";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: SearchRelatedItemsCommandInput,
  ...args: any
): Promise<SearchRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchRelatedItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectCases,
  input: SearchRelatedItemsCommandInput,
  ...args: any
): Promise<SearchRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.searchRelatedItems(input, ...args);
};
export async function* paginateSearchRelatedItems(
  config: ConnectCasesPaginationConfiguration,
  input: SearchRelatedItemsCommandInput,
  ...additionalArguments: any
): Paginator<SearchRelatedItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchRelatedItemsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ConnectCases) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectCasesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectCases | ConnectCasesClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
