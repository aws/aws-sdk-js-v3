// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { Keyspaces } from "../Keyspaces";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KeyspacesClient,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Keyspaces,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.listTables(input, ...args);
};
export async function* paginateListTables(
  config: KeyspacesPaginationConfiguration,
  input: ListTablesCommandInput,
  ...additionalArguments: any
): Paginator<ListTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTablesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Keyspaces) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KeyspacesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Keyspaces | KeyspacesClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
