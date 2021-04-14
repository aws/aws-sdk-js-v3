import { LexModelsV2 } from "../LexModelsV2";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelsV2Client,
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
  client: LexModelsV2,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.listBots(input, ...args);
};
export async function* paginateListBots(
  config: LexModelsV2PaginationConfiguration,
  input: ListBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListBotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBotsCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
