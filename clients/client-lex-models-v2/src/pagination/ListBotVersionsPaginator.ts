// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListBotVersionsCommand,
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
} from "../commands/ListBotVersionsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LexModelsV2Client,
  input: ListBotVersionsCommandInput,
  ...args: any
): Promise<ListBotVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBotVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBotVersions(
  config: LexModelsV2PaginationConfiguration,
  input: ListBotVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBotVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBotVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelsV2Client) {
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
