// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchQuickResponsesCommand,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "../commands/SearchQuickResponsesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QConnectClient,
  input: SearchQuickResponsesCommandInput,
  ...args: any
): Promise<SearchQuickResponsesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchQuickResponsesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchQuickResponses(
  config: QConnectPaginationConfiguration,
  input: SearchQuickResponsesCommandInput,
  ...additionalArguments: any
): Paginator<SearchQuickResponsesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchQuickResponsesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof QConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QConnect | QConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
