// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchRoutingProfilesCommand,
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "../commands/SearchRoutingProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: SearchRoutingProfilesCommandInput,
  ...args: any
): Promise<SearchRoutingProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchRoutingProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchRoutingProfiles(
  config: ConnectPaginationConfiguration,
  input: SearchRoutingProfilesCommandInput,
  ...additionalArguments: any
): Paginator<SearchRoutingProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchRoutingProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
