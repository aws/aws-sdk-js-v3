// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetCurrentUserDataCommand,
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput,
} from "../commands/GetCurrentUserDataCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: GetCurrentUserDataCommandInput,
  ...args: any
): Promise<GetCurrentUserDataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCurrentUserDataCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: GetCurrentUserDataCommandInput,
  ...args: any
): Promise<GetCurrentUserDataCommandOutput> => {
  // @ts-ignore
  return await client.getCurrentUserData(input, ...args);
};
export async function* paginateGetCurrentUserData(
  config: ConnectPaginationConfiguration,
  input: GetCurrentUserDataCommandInput,
  ...additionalArguments: any
): Paginator<GetCurrentUserDataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCurrentUserDataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
