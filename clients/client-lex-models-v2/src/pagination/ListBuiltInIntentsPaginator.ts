// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBuiltInIntentsCommand,
  ListBuiltInIntentsCommandInput,
  ListBuiltInIntentsCommandOutput,
} from "../commands/ListBuiltInIntentsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LexModelsV2Client,
  input: ListBuiltInIntentsCommandInput,
  ...args: any
): Promise<ListBuiltInIntentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuiltInIntentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBuiltInIntents(
  config: LexModelsV2PaginationConfiguration,
  input: ListBuiltInIntentsCommandInput,
  ...additionalArguments: any
): Paginator<ListBuiltInIntentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuiltInIntentsCommandOutput;
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
