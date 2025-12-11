// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHoursOfOperationsCommand,
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "../commands/ListHoursOfOperationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHoursOfOperations: (
  config: ConnectPaginationConfiguration,
  input: ListHoursOfOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListHoursOfOperationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput
>(ConnectClient, ListHoursOfOperationsCommand, "NextToken", "NextToken", "MaxResults");
