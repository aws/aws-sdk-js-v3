import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListChannelMessagesCommandInput,
  ...args: any
): Promise<ListChannelMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMessagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListChannelMessagesCommandInput,
  ...args: any
): Promise<ListChannelMessagesCommandOutput> => {
  // @ts-ignore
  return await client.listChannelMessages(input, ...args);
};
export async function* paginateListChannelMessages(
  config: ChimePaginationConfiguration,
  input: ListChannelMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMessagesCommandOutput;
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
