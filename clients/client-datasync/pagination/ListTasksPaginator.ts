import { DataSync } from "../DataSync";
import { DataSyncClient } from "../DataSyncClient";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataSyncClient,
  input: ListTasksCommandInput,
  ...args: any
): Promise<ListTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTasksCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataSync,
  input: ListTasksCommandInput,
  ...args: any
): Promise<ListTasksCommandOutput> => {
  // @ts-ignore
  return await client.listTasks(input, ...args);
};
export async function* listTasksPaginate(
  config: DataSyncPaginationConfiguration,
  input: ListTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTasksCommandOutput;
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
