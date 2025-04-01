// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchHoursOfOperationOverridesCommand,
  SearchHoursOfOperationOverridesCommandInput,
  SearchHoursOfOperationOverridesCommandOutput,
} from "../commands/SearchHoursOfOperationOverridesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchHoursOfOperationOverrides: (
  config: ConnectPaginationConfiguration,
  input: SearchHoursOfOperationOverridesCommandInput,
  ...rest: any[]
) => Paginator<SearchHoursOfOperationOverridesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchHoursOfOperationOverridesCommandInput,
  SearchHoursOfOperationOverridesCommandOutput
>(ConnectClient, SearchHoursOfOperationOverridesCommand, "NextToken", "NextToken", "MaxResults");
