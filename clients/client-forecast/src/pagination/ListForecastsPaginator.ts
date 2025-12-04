// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListForecastsCommand,
  ListForecastsCommandInput,
  ListForecastsCommandOutput,
} from "../commands/ListForecastsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListForecasts: (
  config: ForecastPaginationConfiguration,
  input: ListForecastsCommandInput,
  ...rest: any[]
) => Paginator<ListForecastsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListForecastsCommandInput,
  ListForecastsCommandOutput
>(ForecastClient, ListForecastsCommand, "NextToken", "NextToken", "MaxResults");
