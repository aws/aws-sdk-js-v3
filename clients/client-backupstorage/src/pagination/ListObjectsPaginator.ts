// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BackupStorageClient } from "../BackupStorageClient";
import { ListObjectsCommand, ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import { BackupStoragePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BackupStorageClient,
  input: ListObjectsCommandInput,
  ...args: any
): Promise<ListObjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListObjects(
  config: BackupStoragePaginationConfiguration,
  input: ListObjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BackupStorageClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected BackupStorage | BackupStorageClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
