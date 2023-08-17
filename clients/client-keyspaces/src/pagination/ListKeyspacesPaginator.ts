// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKeyspacesCommand,
  ListKeyspacesCommandInput,
  ListKeyspacesCommandOutput,
} from "../commands/ListKeyspacesCommand";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KeyspacesClient,
  input: ListKeyspacesCommandInput,
  ...args: any
): Promise<ListKeyspacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyspacesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKeyspaces(
  config: KeyspacesPaginationConfiguration,
  input: ListKeyspacesCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyspacesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeyspacesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof KeyspacesClient) {
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
