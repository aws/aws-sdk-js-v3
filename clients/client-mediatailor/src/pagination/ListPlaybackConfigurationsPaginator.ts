// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPlaybackConfigurationsCommand,
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "../commands/ListPlaybackConfigurationsCommand";
import { MediaTailor } from "../MediaTailor";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaTailorClient,
  input: ListPlaybackConfigurationsCommandInput,
  ...args: any
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlaybackConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaTailor,
  input: ListPlaybackConfigurationsCommandInput,
  ...args: any
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listPlaybackConfigurations(input, ...args);
};
export async function* paginateListPlaybackConfigurations(
  config: MediaTailorPaginationConfiguration,
  input: ListPlaybackConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlaybackConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlaybackConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaTailor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaTailorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
