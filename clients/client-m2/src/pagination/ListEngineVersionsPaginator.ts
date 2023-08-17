// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "../commands/ListEngineVersionsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: M2Client,
  input: ListEngineVersionsCommandInput,
  ...args: any
): Promise<ListEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEngineVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEngineVersions(
  config: M2PaginationConfiguration,
  input: ListEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListEngineVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEngineVersionsCommandOutput;
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
