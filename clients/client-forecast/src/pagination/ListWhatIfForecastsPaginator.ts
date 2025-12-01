// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWhatIfForecastsCommand,
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
} from "../commands/ListWhatIfForecastsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatIfForecasts: (
  config: ForecastPaginationConfiguration,
  input: ListWhatIfForecastsCommandInput,
  ...rest: any[]
) => Paginator<ListWhatIfForecastsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput
>(ForecastClient, ListWhatIfForecastsCommand, "NextToken", "NextToken", "MaxResults");
