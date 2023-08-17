// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "../commands/ListSchemaVersionsCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SchemasClient,
  input: ListSchemaVersionsCommandInput,
  ...args: any
): Promise<ListSchemaVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchemaVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSchemaVersions(
  config: SchemasPaginationConfiguration,
  input: ListSchemaVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSchemaVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchemaVersionsCommandOutput;
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
