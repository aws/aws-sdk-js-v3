// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListAnomaliesCommand,
  ListAnomaliesCommandInput,
  ListAnomaliesCommandOutput,
} from "../commands/ListAnomaliesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: ListAnomaliesCommandInput,
  ...args: any
): Promise<ListAnomaliesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomaliesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnomalies(
  config: CloudWatchLogsPaginationConfiguration,
  input: ListAnomaliesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomaliesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomaliesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
