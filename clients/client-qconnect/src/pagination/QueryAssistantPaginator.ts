// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "../commands/QueryAssistantCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QConnectClient,
  input: QueryAssistantCommandInput,
  ...args: any
): Promise<QueryAssistantCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryAssistantCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateQueryAssistant(
  config: QConnectPaginationConfiguration,
  input: QueryAssistantCommandInput,
  ...additionalArguments: any
): Paginator<QueryAssistantCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryAssistantCommandOutput;
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
