// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMonitorEvaluationsCommand,
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
} from "../commands/ListMonitorEvaluationsCommand";
import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListMonitorEvaluationsCommandInput,
  ...args: any
): Promise<ListMonitorEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMonitorEvaluationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Forecast,
  input: ListMonitorEvaluationsCommandInput,
  ...args: any
): Promise<ListMonitorEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.listMonitorEvaluations(input, ...args);
};
export async function* paginateListMonitorEvaluations(
  config: ForecastPaginationConfiguration,
  input: ListMonitorEvaluationsCommandInput,
  ...additionalArguments: any
): Paginator<ListMonitorEvaluationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMonitorEvaluationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Forecast) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
