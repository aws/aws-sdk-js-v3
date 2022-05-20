// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.listBots(input, ...args);
};
export async function* paginateListBots(
  config: ChimePaginationConfiguration,
  input: ListBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListBotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
