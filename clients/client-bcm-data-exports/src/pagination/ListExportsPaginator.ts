// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMDataExportsClient } from "../BCMDataExportsClient";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { BCMDataExportsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExports: (
  config: BCMDataExportsPaginationConfiguration,
  input: ListExportsCommandInput,
  ...rest: any[]
) => Paginator<ListExportsCommandOutput> = createPaginator<
  BCMDataExportsPaginationConfiguration,
  ListExportsCommandInput,
  ListExportsCommandOutput
>(BCMDataExportsClient, ListExportsCommand, "NextToken", "NextToken", "MaxResults");
