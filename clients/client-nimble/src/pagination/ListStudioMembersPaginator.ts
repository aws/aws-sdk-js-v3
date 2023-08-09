// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStudioMembersCommand,
  ListStudioMembersCommandInput,
  ListStudioMembersCommandOutput,
} from "../commands/ListStudioMembersCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListStudioMembersCommandInput,
  ...args: any
): Promise<ListStudioMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudioMembersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStudioMembers(
  config: NimblePaginationConfiguration,
  input: ListStudioMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListStudioMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudioMembersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof NimbleClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Nimble | NimbleClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
