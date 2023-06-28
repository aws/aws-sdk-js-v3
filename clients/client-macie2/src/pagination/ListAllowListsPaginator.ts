// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAllowListsCommand,
  ListAllowListsCommandInput,
  ListAllowListsCommandOutput,
} from "../commands/ListAllowListsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListAllowListsCommandInput,
  ...args: any
): Promise<ListAllowListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAllowListsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAllowLists(
  config: Macie2PaginationConfiguration,
  input: ListAllowListsCommandInput,
  ...additionalArguments: any
): Paginator<ListAllowListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAllowListsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
