import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "../commands/ListChannelBansCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListChannelBansCommandInput,
  ...args: any
): Promise<ListChannelBansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelBansCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
