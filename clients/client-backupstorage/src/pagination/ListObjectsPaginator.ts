// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BackupStorage } from "../BackupStorage";
import { BackupStorageClient } from "../BackupStorageClient";
import { ListObjectsCommand, ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import { BackupStoragePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: BackupStorage,
  input: ListObjectsCommandInput,
  ...args: any
): Promise<ListObjectsCommandOutput> => {
  // @ts-ignore
  return await client.listObjects(input, ...args);
};
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
