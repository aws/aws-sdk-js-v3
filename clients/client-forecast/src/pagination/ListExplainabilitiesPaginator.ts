// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExplainabilitiesCommand,
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
} from "../commands/ListExplainabilitiesCommand";
import { ForecastClient } from "../ForecastClient";
import type { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExplainabilities: (
  config: ForecastPaginationConfiguration,
  input: ListExplainabilitiesCommandInput,
  ...rest: any[]
) => Paginator<ListExplainabilitiesCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput
>(ForecastClient, ListExplainabilitiesCommand, "NextToken", "NextToken", "MaxResults");
