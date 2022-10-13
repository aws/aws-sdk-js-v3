// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLogSubscriptionsCommand,
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "../commands/ListLogSubscriptionsCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: ListLogSubscriptionsCommandInput,
  ...args: any
): Promise<ListLogSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLogSubscriptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: ListLogSubscriptionsCommandInput,
  ...args: any
): Promise<ListLogSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.listLogSubscriptions(input, ...args);
};
export async function* paginateListLogSubscriptions(
  config: DirectoryServicePaginationConfiguration,
  input: ListLogSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLogSubscriptionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DirectoryServiceClient) {
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
