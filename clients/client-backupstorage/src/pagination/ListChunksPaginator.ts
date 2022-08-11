// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BackupStorage } from "../BackupStorage";
import { BackupStorageClient } from "../BackupStorageClient";
import { ListChunksCommand, ListChunksCommandInput, ListChunksCommandOutput } from "../commands/ListChunksCommand";
import { BackupStoragePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupStorageClient,
  input: ListChunksCommandInput,
  ...args: any
): Promise<ListChunksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChunksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: BackupStorage,
  input: ListChunksCommandInput,
  ...args: any
): Promise<ListChunksCommandOutput> => {
  // @ts-ignore
  return await client.listChunks(input, ...args);
};
export async function* paginateListChunks(
  config: BackupStoragePaginationConfiguration,
  input: ListChunksCommandInput,
  ...additionalArguments: any
): Paginator<ListChunksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChunksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BackupStorage) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupStorageClient) {
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
