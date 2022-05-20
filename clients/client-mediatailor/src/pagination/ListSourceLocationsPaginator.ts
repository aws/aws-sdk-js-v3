// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSourceLocationsCommand,
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "../commands/ListSourceLocationsCommand";
import { MediaTailor } from "../MediaTailor";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaTailorClient,
  input: ListSourceLocationsCommandInput,
  ...args: any
): Promise<ListSourceLocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSourceLocationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaTailor,
  input: ListSourceLocationsCommandInput,
  ...args: any
): Promise<ListSourceLocationsCommandOutput> => {
  // @ts-ignore
  return await client.listSourceLocations(input, ...args);
};
export async function* paginateListSourceLocations(
  config: MediaTailorPaginationConfiguration,
  input: ListSourceLocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSourceLocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSourceLocationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaTailor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaTailorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
