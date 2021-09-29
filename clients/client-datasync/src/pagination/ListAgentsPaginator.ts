import { DataSync } from "../DataSync";
import { DataSyncClient } from "../DataSyncClient";
import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataSyncClient,
  input: ListAgentsCommandInput,
  ...args: any
): Promise<ListAgentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAgentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataSync,
  input: ListAgentsCommandInput,
  ...args: any
): Promise<ListAgentsCommandOutput> => {
  // @ts-ignore
  return await client.listAgents(input, ...args);
};
export async function* paginateListAgents(
  config: DataSyncPaginationConfiguration,
  input: ListAgentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAgentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAgentsCommandOutput;
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
