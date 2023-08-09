// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLaunchProfileMembersCommand,
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "../commands/ListLaunchProfileMembersCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListLaunchProfileMembersCommandInput,
  ...args: any
): Promise<ListLaunchProfileMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLaunchProfileMembersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLaunchProfileMembers(
  config: NimblePaginationConfiguration,
  input: ListLaunchProfileMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListLaunchProfileMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLaunchProfileMembersCommandOutput;
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
