// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLaunchProfilesCommand,
  ListLaunchProfilesCommandInput,
  ListLaunchProfilesCommandOutput,
} from "../commands/ListLaunchProfilesCommand";
import { Nimble } from "../Nimble";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListLaunchProfilesCommandInput,
  ...args: any
): Promise<ListLaunchProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLaunchProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Nimble,
  input: ListLaunchProfilesCommandInput,
  ...args: any
): Promise<ListLaunchProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listLaunchProfiles(input, ...args);
};
export async function* paginateListLaunchProfiles(
  config: NimblePaginationConfiguration,
  input: ListLaunchProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListLaunchProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLaunchProfilesCommandOutput;
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
