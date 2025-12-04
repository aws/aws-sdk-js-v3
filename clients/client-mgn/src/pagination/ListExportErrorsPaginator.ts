// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExportErrorsCommand,
  ListExportErrorsCommandInput,
  ListExportErrorsCommandOutput,
} from "../commands/ListExportErrorsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExportErrors: (
  config: MgnPaginationConfiguration,
  input: ListExportErrorsCommandInput,
  ...rest: any[]
) => Paginator<ListExportErrorsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListExportErrorsCommandInput,
  ListExportErrorsCommandOutput
>(MgnClient, ListExportErrorsCommand, "nextToken", "nextToken", "maxResults");
