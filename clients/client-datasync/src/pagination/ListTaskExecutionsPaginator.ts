import { DataSync } from "../DataSync";
import { DataSyncClient } from "../DataSyncClient";
import {
  ListTaskExecutionsCommand,
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput,
} from "../commands/ListTaskExecutionsCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataSyncClient,
  input: ListTaskExecutionsCommandInput,
  ...args: any
): Promise<ListTaskExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTaskExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataSync,
  input: ListTaskExecutionsCommandInput,
  ...args: any
): Promise<ListTaskExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listTaskExecutions(input, ...args);
};
export async function* paginateListTaskExecutions(
  config: DataSyncPaginationConfiguration,
  input: ListTaskExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTaskExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTaskExecutionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataSync) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataSyncClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataSync | DataSyncClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
