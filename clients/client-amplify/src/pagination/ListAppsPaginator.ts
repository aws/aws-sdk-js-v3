// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AmplifyClient,
  input: ListAppsCommandInput,
  ...args: any
): Promise<ListAppsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApps(
  config: AmplifyPaginationConfiguration,
  input: ListAppsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AmplifyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amplify | AmplifyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
