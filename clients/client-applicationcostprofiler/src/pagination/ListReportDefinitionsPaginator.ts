// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ApplicationCostProfilerClient } from "../ApplicationCostProfilerClient";
import {
  ListReportDefinitionsCommand,
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
} from "../commands/ListReportDefinitionsCommand";
import { ApplicationCostProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationCostProfilerClient,
  input: ListReportDefinitionsCommandInput,
  ...args: any
): Promise<ListReportDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListReportDefinitions(
  config: ApplicationCostProfilerPaginationConfiguration,
  input: ListReportDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListReportDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReportDefinitionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationCostProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationCostProfiler | ApplicationCostProfilerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
