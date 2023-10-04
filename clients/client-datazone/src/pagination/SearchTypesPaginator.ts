// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { SearchTypesCommand, SearchTypesCommandInput, SearchTypesCommandOutput } from "../commands/SearchTypesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataZoneClient,
  input: SearchTypesCommandInput,
  ...args: any
): Promise<SearchTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchTypes(
  config: DataZonePaginationConfiguration,
  input: SearchTypesCommandInput,
  ...additionalArguments: any
): Paginator<SearchTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DataZoneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataZone | DataZoneClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
