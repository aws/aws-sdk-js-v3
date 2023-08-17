// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAppMonitorsCommand,
  ListAppMonitorsCommandInput,
  ListAppMonitorsCommandOutput,
} from "../commands/ListAppMonitorsCommand";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RUMClient,
  input: ListAppMonitorsCommandInput,
  ...args: any
): Promise<ListAppMonitorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppMonitorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppMonitors(
  config: RUMPaginationConfiguration,
  input: ListAppMonitorsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppMonitorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppMonitorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RUMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RUM | RUMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
