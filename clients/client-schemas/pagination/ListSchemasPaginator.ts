import { Schemas } from "../Schemas";
import { SchemasClient } from "../SchemasClient";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SchemasClient,
  input: ListSchemasCommandInput,
  ...args: any
): Promise<ListSchemasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchemasCommand(input), ...args);
};
const makePagedRequest = async (
  client: Schemas,
  input: ListSchemasCommandInput,
  ...args: any
): Promise<ListSchemasCommandOutput> => {
  // @ts-ignore
  return await client.listSchemas(input, ...args);
};
export async function* listSchemasPaginate(
  config: SchemasPaginationConfiguration,
  input: ListSchemasCommandInput,
  ...additionalArguments: any
): Paginator<ListSchemasCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchemasCommandOutput;
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
