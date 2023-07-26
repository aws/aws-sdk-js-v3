// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSchemaMappingsCommand,
  ListSchemaMappingsCommandInput,
  ListSchemaMappingsCommandOutput,
} from "../commands/ListSchemaMappingsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EntityResolutionClient,
  input: ListSchemaMappingsCommandInput,
  ...args: any
): Promise<ListSchemaMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchemaMappingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSchemaMappings(
  config: EntityResolutionPaginationConfiguration,
  input: ListSchemaMappingsCommandInput,
  ...additionalArguments: any
): Paginator<ListSchemaMappingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchemaMappingsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EntityResolutionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EntityResolution | EntityResolutionClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
