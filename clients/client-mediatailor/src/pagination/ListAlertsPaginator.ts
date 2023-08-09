// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaTailorClient,
  input: ListAlertsCommandInput,
  ...args: any
): Promise<ListAlertsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAlertsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAlerts(
  config: MediaTailorPaginationConfiguration,
  input: ListAlertsCommandInput,
  ...additionalArguments: any
): Paginator<ListAlertsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAlertsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaTailorClient) {
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
