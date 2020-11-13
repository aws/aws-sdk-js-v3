import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBotsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Chime,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.listBots(input, ...args);
};
export async function* listBotsPaginate(
  config: ChimePaginationConfiguration,
  input: ListBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListBotsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBotsCommandOutput;
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
