import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import {
  ListMultiplexesCommand,
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput,
} from "../commands/ListMultiplexesCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListMultiplexesCommandInput,
  ...args: any
): Promise<ListMultiplexesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMultiplexesCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
