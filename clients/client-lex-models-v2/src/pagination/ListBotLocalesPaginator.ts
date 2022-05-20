// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBotLocalesCommand,
  ListBotLocalesCommandInput,
  ListBotLocalesCommandOutput,
} from "../commands/ListBotLocalesCommand";
import { LexModelsV2 } from "../LexModelsV2";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelsV2Client,
  input: ListBotLocalesCommandInput,
  ...args: any
): Promise<ListBotLocalesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBotLocalesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelsV2,
  input: ListBotLocalesCommandInput,
  ...args: any
): Promise<ListBotLocalesCommandOutput> => {
  // @ts-ignore
  return await client.listBotLocales(input, ...args);
};
export async function* paginateListBotLocales(
  config: LexModelsV2PaginationConfiguration,
  input: ListBotLocalesCommandInput,
  ...additionalArguments: any
): Paginator<ListBotLocalesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBotLocalesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelsV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelsV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelsV2 | LexModelsV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
