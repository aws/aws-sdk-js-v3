// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "../commands/ListChannelBansCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListChannelBansCommandInput,
  ...args: any
): Promise<ListChannelBansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelBansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListChannelBansCommandInput,
  ...args: any
): Promise<ListChannelBansCommandOutput> => {
  // @ts-ignore
  return await client.listChannelBans(input, ...args);
};
export async function* paginateListChannelBans(
  config: ChimePaginationConfiguration,
  input: ListChannelBansCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelBansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelBansCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
