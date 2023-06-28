// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSchemaExtensionsCommand,
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "../commands/ListSchemaExtensionsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: ListSchemaExtensionsCommandInput,
  ...args: any
): Promise<ListSchemaExtensionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchemaExtensionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSchemaExtensions(
  config: DirectoryServicePaginationConfiguration,
  input: ListSchemaExtensionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSchemaExtensionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchemaExtensionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
