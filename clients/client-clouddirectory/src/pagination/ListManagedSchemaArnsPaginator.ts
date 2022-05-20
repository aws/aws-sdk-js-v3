// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListManagedSchemaArnsCommand,
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "../commands/ListManagedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListManagedSchemaArnsCommandInput,
  ...args: any
): Promise<ListManagedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedSchemaArnsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListManagedSchemaArnsCommandInput,
  ...args: any
): Promise<ListManagedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.listManagedSchemaArns(input, ...args);
};
export async function* paginateListManagedSchemaArns(
  config: CloudDirectoryPaginationConfiguration,
  input: ListManagedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedSchemaArnsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedSchemaArnsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
