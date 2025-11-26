// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportErrorsCommand,
  ListImportErrorsCommandInput,
  ListImportErrorsCommandOutput,
} from "../commands/ListImportErrorsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportErrors: (
  config: MgnPaginationConfiguration,
  input: ListImportErrorsCommandInput,
  ...rest: any[]
) => Paginator<ListImportErrorsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListImportErrorsCommandInput,
  ListImportErrorsCommandOutput
>(MgnClient, ListImportErrorsCommand, "nextToken", "nextToken", "maxResults");
