import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import {
  ListMultiplexProgramsCommand,
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "../commands/ListMultiplexProgramsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListMultiplexProgramsCommandInput,
  ...args: any
): Promise<ListMultiplexProgramsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMultiplexProgramsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaLive,
  input: ListMultiplexProgramsCommandInput,
  ...args: any
): Promise<ListMultiplexProgramsCommandOutput> => {
  // @ts-ignore
  return await client.listMultiplexPrograms(input, ...args);
};
export async function* listMultiplexProgramsPaginate(
  config: MediaLivePaginationConfiguration,
  input: ListMultiplexProgramsCommandInput,
  ...additionalArguments: any
): Paginator<ListMultiplexProgramsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMultiplexProgramsCommandOutput;
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
