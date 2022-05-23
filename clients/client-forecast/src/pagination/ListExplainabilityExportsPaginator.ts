// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListExplainabilityExportsCommand,
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
} from "../commands/ListExplainabilityExportsCommand";
import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListExplainabilityExportsCommandInput,
  ...args: any
): Promise<ListExplainabilityExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExplainabilityExportsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Forecast,
  input: ListExplainabilityExportsCommandInput,
  ...args: any
): Promise<ListExplainabilityExportsCommandOutput> => {
  // @ts-ignore
  return await client.listExplainabilityExports(input, ...args);
};
export async function* paginateListExplainabilityExports(
  config: ForecastPaginationConfiguration,
  input: ListExplainabilityExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListExplainabilityExportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExplainabilityExportsCommandOutput;
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
