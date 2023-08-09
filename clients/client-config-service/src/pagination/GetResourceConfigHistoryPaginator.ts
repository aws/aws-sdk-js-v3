// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetResourceConfigHistoryCommand,
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "../commands/GetResourceConfigHistoryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetResourceConfigHistoryCommandInput,
  ...args: any
): Promise<GetResourceConfigHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourceConfigHistoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetResourceConfigHistory(
  config: ConfigServicePaginationConfiguration,
  input: GetResourceConfigHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetResourceConfigHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourceConfigHistoryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
