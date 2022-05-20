// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMultiplexesCommand,
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput,
} from "../commands/ListMultiplexesCommand";
import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListMultiplexesCommandInput,
  ...args: any
): Promise<ListMultiplexesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMultiplexesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: ListMultiplexesCommandInput,
  ...args: any
): Promise<ListMultiplexesCommandOutput> => {
  // @ts-ignore
  return await client.listMultiplexes(input, ...args);
};
export async function* paginateListMultiplexes(
  config: MediaLivePaginationConfiguration,
  input: ListMultiplexesCommandInput,
  ...additionalArguments: any
): Paginator<ListMultiplexesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMultiplexesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaLive) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
