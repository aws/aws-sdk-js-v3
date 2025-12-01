// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWhatIfAnalysesCommand,
  ListWhatIfAnalysesCommandInput,
  ListWhatIfAnalysesCommandOutput,
} from "../commands/ListWhatIfAnalysesCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWhatIfAnalyses: (
  config: ForecastPaginationConfiguration,
  input: ListWhatIfAnalysesCommandInput,
  ...rest: any[]
) => Paginator<ListWhatIfAnalysesCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListWhatIfAnalysesCommandInput,
  ListWhatIfAnalysesCommandOutput
>(ForecastClient, ListWhatIfAnalysesCommand, "NextToken", "NextToken", "MaxResults");
