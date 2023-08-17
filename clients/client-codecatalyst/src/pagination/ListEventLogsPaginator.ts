// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListEventLogsCommand,
  ListEventLogsCommandInput,
  ListEventLogsCommandOutput,
} from "../commands/ListEventLogsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListEventLogsCommandInput,
  ...args: any
): Promise<ListEventLogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventLogsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventLogs(
  config: CodeCatalystPaginationConfiguration,
  input: ListEventLogsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventLogsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventLogsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCatalystClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCatalyst | CodeCatalystClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
