// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "../commands/ListProfilesCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RolesAnywhereClient,
  input: ListProfilesCommandInput,
  ...args: any
): Promise<ListProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProfiles(
  config: RolesAnywherePaginationConfiguration,
  input: ListProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProfilesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof RolesAnywhereClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RolesAnywhere | RolesAnywhereClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
