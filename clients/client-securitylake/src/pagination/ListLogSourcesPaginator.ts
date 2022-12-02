// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLogSourcesCommand,
  ListLogSourcesCommandInput,
  ListLogSourcesCommandOutput,
} from "../commands/ListLogSourcesCommand";
import { SecurityLake } from "../SecurityLake";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityLakeClient,
  input: ListLogSourcesCommandInput,
  ...args: any
): Promise<ListLogSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLogSourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityLake,
  input: ListLogSourcesCommandInput,
  ...args: any
): Promise<ListLogSourcesCommandOutput> => {
  // @ts-ignore
  return await client.listLogSources(input, ...args);
};
export async function* paginateListLogSources(
  config: SecurityLakePaginationConfiguration,
  input: ListLogSourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListLogSourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLogSourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SecurityLake) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityLake | SecurityLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
