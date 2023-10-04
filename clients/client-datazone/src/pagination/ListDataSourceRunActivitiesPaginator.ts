// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDataSourceRunActivitiesCommand,
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "../commands/ListDataSourceRunActivitiesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataZoneClient,
  input: ListDataSourceRunActivitiesCommandInput,
  ...args: any
): Promise<ListDataSourceRunActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourceRunActivitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataSourceRunActivities(
  config: DataZonePaginationConfiguration,
  input: ListDataSourceRunActivitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourceRunActivitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourceRunActivitiesCommandOutput;
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
