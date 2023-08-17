// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { GetSitesCommand, GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetSitesCommandInput,
  ...args: any
): Promise<GetSitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSitesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetSites(
  config: NetworkManagerPaginationConfiguration,
  input: GetSitesCommandInput,
  ...additionalArguments: any
): Paginator<GetSitesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSitesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
