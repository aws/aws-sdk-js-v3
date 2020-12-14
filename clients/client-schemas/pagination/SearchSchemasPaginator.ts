import { Schemas } from "../Schemas";
import { SchemasClient } from "../SchemasClient";
import {
  SearchSchemasCommand,
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
} from "../commands/SearchSchemasCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Schemas,
  input: SearchSchemasCommandInput,
  ...args: any
): Promise<SearchSchemasCommandOutput> => {
  // @ts-ignore
  return await client.searchSchemas(input, ...args);
};
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
    if (config.client instanceof Schemas) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SchemasClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Schemas | SchemasClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
