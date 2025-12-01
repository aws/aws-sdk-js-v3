// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataTablePrimaryValuesCommand,
  ListDataTablePrimaryValuesCommandInput,
  ListDataTablePrimaryValuesCommandOutput,
} from "../commands/ListDataTablePrimaryValuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTablePrimaryValues: (
  config: ConnectPaginationConfiguration,
  input: ListDataTablePrimaryValuesCommandInput,
  ...rest: any[]
) => Paginator<ListDataTablePrimaryValuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListDataTablePrimaryValuesCommandInput,
  ListDataTablePrimaryValuesCommandOutput
>(ConnectClient, ListDataTablePrimaryValuesCommand, "NextToken", "NextToken", "MaxResults");
