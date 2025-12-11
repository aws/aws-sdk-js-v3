// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExplainabilityExportsCommand,
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
} from "../commands/ListExplainabilityExportsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExplainabilityExports: (
  config: ForecastPaginationConfiguration,
  input: ListExplainabilityExportsCommandInput,
  ...rest: any[]
) => Paginator<ListExplainabilityExportsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput
>(ForecastClient, ListExplainabilityExportsCommand, "NextToken", "NextToken", "MaxResults");
