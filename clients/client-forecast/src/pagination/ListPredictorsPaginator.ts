// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPredictorsCommand,
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput,
} from "../commands/ListPredictorsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPredictors: (
  config: ForecastPaginationConfiguration,
  input: ListPredictorsCommandInput,
  ...rest: any[]
) => Paginator<ListPredictorsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput
>(ForecastClient, ListPredictorsCommand, "NextToken", "NextToken", "MaxResults");
