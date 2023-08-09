// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchSchemasCommand,
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
} from "../commands/SearchSchemasCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SchemasClient,
  input: SearchSchemasCommandInput,
  ...args: any
): Promise<SearchSchemasCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSchemasCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchSchemas(
  config: SchemasPaginationConfiguration,
  input: SearchSchemasCommandInput,
  ...additionalArguments: any
): Paginator<SearchSchemasCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSchemasCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof SchemasClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Schemas | SchemasClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
