// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLaunchProfileMembersCommand,
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "../commands/ListLaunchProfileMembersCommand";
import { Nimble } from "../Nimble";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Nimble,
  input: ListLaunchProfileMembersCommandInput,
  ...args: any
): Promise<ListLaunchProfileMembersCommandOutput> => {
  // @ts-ignore
  return await client.listLaunchProfileMembers(input, ...args);
};
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
    if (config.client instanceof Nimble) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NimbleClient) {
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
