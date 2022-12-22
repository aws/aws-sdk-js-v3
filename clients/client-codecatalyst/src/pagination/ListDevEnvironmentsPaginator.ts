// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCatalyst } from "../CodeCatalyst";
import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListDevEnvironmentsCommand,
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "../commands/ListDevEnvironmentsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListDevEnvironmentsCommandInput,
  ...args: any
): Promise<ListDevEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevEnvironmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCatalyst,
  input: ListDevEnvironmentsCommandInput,
  ...args: any
): Promise<ListDevEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.listDevEnvironments(input, ...args);
};
export async function* paginateListDevEnvironments(
  config: CodeCatalystPaginationConfiguration,
  input: ListDevEnvironmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDevEnvironmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevEnvironmentsCommandOutput;
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
