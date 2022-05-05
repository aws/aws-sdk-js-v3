// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppRunner } from "../AppRunner";
import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppRunnerClient,
  input: ListConnectionsCommandInput,
  ...args: any
): Promise<ListConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppRunner,
  input: ListConnectionsCommandInput,
  ...args: any
): Promise<ListConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.listConnections(input, ...args);
};
export async function* paginateListConnections(
  config: AppRunnerPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppRunner) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppRunner | AppRunnerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
