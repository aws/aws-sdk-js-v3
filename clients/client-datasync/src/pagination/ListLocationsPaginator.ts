import { DataSync } from "../DataSync";
import { DataSyncClient } from "../DataSyncClient";
import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
} from "../commands/ListLocationsCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataSyncClient,
  input: ListLocationsCommandInput,
  ...args: any
): Promise<ListLocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLocationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataSync,
  input: ListLocationsCommandInput,
  ...args: any
): Promise<ListLocationsCommandOutput> => {
  // @ts-ignore
  return await client.listLocations(input, ...args);
};
export async function* paginateListLocations(
  config: DataSyncPaginationConfiguration,
  input: ListLocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListLocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLocationsCommandOutput;
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
