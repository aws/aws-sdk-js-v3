// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListScheduledActionsCommand,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "../commands/ListScheduledActionsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: ListScheduledActionsCommandInput,
  ...args: any
): Promise<ListScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScheduledActionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListScheduledActions(
  config: OpenSearchPaginationConfiguration,
  input: ListScheduledActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListScheduledActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScheduledActionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
