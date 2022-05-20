// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDiscoverersCommand,
  ListDiscoverersCommandInput,
  ListDiscoverersCommandOutput,
} from "../commands/ListDiscoverersCommand";
import { Schemas } from "../Schemas";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SchemasClient,
  input: ListDiscoverersCommandInput,
  ...args: any
): Promise<ListDiscoverersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDiscoverersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Schemas,
  input: ListDiscoverersCommandInput,
  ...args: any
): Promise<ListDiscoverersCommandOutput> => {
  // @ts-ignore
  return await client.listDiscoverers(input, ...args);
};
export async function* paginateListDiscoverers(
  config: SchemasPaginationConfiguration,
  input: ListDiscoverersCommandInput,
  ...additionalArguments: any
): Paginator<ListDiscoverersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDiscoverersCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
