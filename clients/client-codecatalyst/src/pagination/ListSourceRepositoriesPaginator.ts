// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCatalyst } from "../CodeCatalyst";
import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListSourceRepositoriesCommand,
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput,
} from "../commands/ListSourceRepositoriesCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListSourceRepositoriesCommandInput,
  ...args: any
): Promise<ListSourceRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSourceRepositoriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCatalyst,
  input: ListSourceRepositoriesCommandInput,
  ...args: any
): Promise<ListSourceRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.listSourceRepositories(input, ...args);
};
export async function* paginateListSourceRepositories(
  config: CodeCatalystPaginationConfiguration,
  input: ListSourceRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListSourceRepositoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSourceRepositoriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCatalyst) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCatalystClient) {
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
