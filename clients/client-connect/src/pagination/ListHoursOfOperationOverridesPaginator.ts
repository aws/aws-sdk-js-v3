// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHoursOfOperationOverridesCommand,
  ListHoursOfOperationOverridesCommandInput,
  ListHoursOfOperationOverridesCommandOutput,
} from "../commands/ListHoursOfOperationOverridesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHoursOfOperationOverrides: (
  config: ConnectPaginationConfiguration,
  input: ListHoursOfOperationOverridesCommandInput,
  ...rest: any[]
) => Paginator<ListHoursOfOperationOverridesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListHoursOfOperationOverridesCommandInput,
  ListHoursOfOperationOverridesCommandOutput
>(ConnectClient, ListHoursOfOperationOverridesCommand, "NextToken", "NextToken", "MaxResults");
