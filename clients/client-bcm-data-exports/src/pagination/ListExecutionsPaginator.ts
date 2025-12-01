// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMDataExportsClient } from "../BCMDataExportsClient";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { BCMDataExportsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExecutions: (
  config: BCMDataExportsPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListExecutionsCommandOutput> = createPaginator<
  BCMDataExportsPaginationConfiguration,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput
>(BCMDataExportsClient, ListExecutionsCommand, "NextToken", "NextToken", "MaxResults");
