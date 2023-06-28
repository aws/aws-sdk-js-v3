// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWhatIfForecastsCommand,
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
} from "../commands/ListWhatIfForecastsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListWhatIfForecastsCommandInput,
  ...args: any
): Promise<ListWhatIfForecastsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWhatIfForecastsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWhatIfForecasts(
  config: ForecastPaginationConfiguration,
  input: ListWhatIfForecastsCommandInput,
  ...additionalArguments: any
): Paginator<ListWhatIfForecastsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWhatIfForecastsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ForecastClient) {
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
