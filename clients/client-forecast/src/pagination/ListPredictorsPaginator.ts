// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPredictorsCommand,
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput,
} from "../commands/ListPredictorsCommand";
import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListPredictorsCommandInput,
  ...args: any
): Promise<ListPredictorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPredictorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Forecast,
  input: ListPredictorsCommandInput,
  ...args: any
): Promise<ListPredictorsCommandOutput> => {
  // @ts-ignore
  return await client.listPredictors(input, ...args);
};
export async function* paginateListPredictors(
  config: ForecastPaginationConfiguration,
  input: ListPredictorsCommandInput,
  ...additionalArguments: any
): Paginator<ListPredictorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPredictorsCommandOutput;
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
