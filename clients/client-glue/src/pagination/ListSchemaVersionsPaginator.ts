// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "../commands/ListSchemaVersionsCommand";
import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: ListSchemaVersionsCommandInput,
  ...args: any
): Promise<ListSchemaVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchemaVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: ListSchemaVersionsCommandInput,
  ...args: any
): Promise<ListSchemaVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listSchemaVersions(input, ...args);
};
export async function* paginateListSchemaVersions(
  config: GluePaginationConfiguration,
  input: ListSchemaVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSchemaVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchemaVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
