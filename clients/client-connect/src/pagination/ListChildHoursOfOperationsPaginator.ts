// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChildHoursOfOperationsCommand,
  ListChildHoursOfOperationsCommandInput,
  ListChildHoursOfOperationsCommandOutput,
} from "../commands/ListChildHoursOfOperationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChildHoursOfOperations: (
  config: ConnectPaginationConfiguration,
  input: ListChildHoursOfOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListChildHoursOfOperationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListChildHoursOfOperationsCommandInput,
  ListChildHoursOfOperationsCommandOutput
>(ConnectClient, ListChildHoursOfOperationsCommand, "NextToken", "NextToken", "MaxResults");
