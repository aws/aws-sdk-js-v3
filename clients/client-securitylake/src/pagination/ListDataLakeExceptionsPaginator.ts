// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDataLakeExceptionsCommand,
  ListDataLakeExceptionsCommandInput,
  ListDataLakeExceptionsCommandOutput,
} from "../commands/ListDataLakeExceptionsCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityLakeClient,
  input: ListDataLakeExceptionsCommandInput,
  ...args: any
): Promise<ListDataLakeExceptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataLakeExceptionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataLakeExceptions(
  config: SecurityLakePaginationConfiguration,
  input: ListDataLakeExceptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataLakeExceptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataLakeExceptionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SecurityLakeClient) {
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
