// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListExtensionsCommand,
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput,
} from "../commands/ListExtensionsCommand";
import { GameSparks } from "../GameSparks";
import { GameSparksClient } from "../GameSparksClient";
import { GameSparksPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameSparksClient,
  input: ListExtensionsCommandInput,
  ...args: any
): Promise<ListExtensionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExtensionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameSparks,
  input: ListExtensionsCommandInput,
  ...args: any
): Promise<ListExtensionsCommandOutput> => {
  // @ts-ignore
  return await client.listExtensions(input, ...args);
};
export async function* paginateListExtensions(
  config: GameSparksPaginationConfiguration,
  input: ListExtensionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExtensionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExtensionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GameSparks) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameSparksClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameSparks | GameSparksClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
