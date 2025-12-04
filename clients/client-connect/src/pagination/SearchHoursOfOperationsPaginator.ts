// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchHoursOfOperationsCommand,
  SearchHoursOfOperationsCommandInput,
  SearchHoursOfOperationsCommandOutput,
} from "../commands/SearchHoursOfOperationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchHoursOfOperations: (
  config: ConnectPaginationConfiguration,
  input: SearchHoursOfOperationsCommandInput,
  ...rest: any[]
) => Paginator<SearchHoursOfOperationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchHoursOfOperationsCommandInput,
  SearchHoursOfOperationsCommandOutput
>(ConnectClient, SearchHoursOfOperationsCommand, "NextToken", "NextToken", "MaxResults");
