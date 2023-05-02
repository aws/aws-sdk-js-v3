// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWhatIfAnalysesCommand,
  ListWhatIfAnalysesCommandInput,
  ListWhatIfAnalysesCommandOutput,
} from "../commands/ListWhatIfAnalysesCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListWhatIfAnalysesCommandInput,
  ...args: any
): Promise<ListWhatIfAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWhatIfAnalysesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWhatIfAnalyses(
  config: ForecastPaginationConfiguration,
  input: ListWhatIfAnalysesCommandInput,
  ...additionalArguments: any
): Paginator<ListWhatIfAnalysesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWhatIfAnalysesCommandOutput;
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
