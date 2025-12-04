// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataTableValuesCommand,
  ListDataTableValuesCommandInput,
  ListDataTableValuesCommandOutput,
} from "../commands/ListDataTableValuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTableValues: (
  config: ConnectPaginationConfiguration,
  input: ListDataTableValuesCommandInput,
  ...rest: any[]
) => Paginator<ListDataTableValuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListDataTableValuesCommandInput,
  ListDataTableValuesCommandOutput
>(ConnectClient, ListDataTableValuesCommand, "NextToken", "NextToken", "MaxResults");
