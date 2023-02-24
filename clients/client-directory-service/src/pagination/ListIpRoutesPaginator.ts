// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListIpRoutesCommand,
  ListIpRoutesCommandInput,
  ListIpRoutesCommandOutput,
} from "../commands/ListIpRoutesCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: ListIpRoutesCommandInput,
  ...args: any
): Promise<ListIpRoutesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIpRoutesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: ListIpRoutesCommandInput,
  ...args: any
): Promise<ListIpRoutesCommandOutput> => {
  // @ts-ignore
  return await client.listIpRoutes(input, ...args);
};
export async function* paginateListIpRoutes(
  config: DirectoryServicePaginationConfiguration,
  input: ListIpRoutesCommandInput,
  ...additionalArguments: any
): Paginator<ListIpRoutesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIpRoutesCommandOutput;
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
