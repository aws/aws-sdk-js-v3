// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWhatIfForecastExportsCommand,
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput,
} from "../commands/ListWhatIfForecastExportsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatIfForecastExports: (
  config: ForecastPaginationConfiguration,
  input: ListWhatIfForecastExportsCommandInput,
  ...rest: any[]
) => Paginator<ListWhatIfForecastExportsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput
>(ForecastClient, ListWhatIfForecastExportsCommand, "NextToken", "NextToken", "MaxResults");
