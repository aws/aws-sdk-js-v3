// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDataSetImportHistoryCommand,
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput,
} from "../commands/ListDataSetImportHistoryCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: M2Client,
  input: ListDataSetImportHistoryCommandInput,
  ...args: any
): Promise<ListDataSetImportHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSetImportHistoryCommand(input), ...args);
};
export async function* paginateListDataSetImportHistory(
  config: M2PaginationConfiguration,
  input: ListDataSetImportHistoryCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSetImportHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSetImportHistoryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof M2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected M2 | M2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
