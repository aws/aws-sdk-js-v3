import { Schemas } from "../Schemas";
import { SchemasClient } from "../SchemasClient";
import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "../commands/ListRegistriesCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SchemasClient,
  input: ListRegistriesCommandInput,
  ...args: any
): Promise<ListRegistriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRegistriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Schemas,
  input: ListRegistriesCommandInput,
  ...args: any
): Promise<ListRegistriesCommandOutput> => {
  // @ts-ignore
  return await client.listRegistries(input, ...args);
};
export async function* paginateListRegistries(
  config: SchemasPaginationConfiguration,
  input: ListRegistriesCommandInput,
  ...additionalArguments: any
): Paginator<ListRegistriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRegistriesCommandOutput;
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
