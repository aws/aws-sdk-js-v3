// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportFileEnrichmentsCommand,
  ListImportFileEnrichmentsCommandInput,
  ListImportFileEnrichmentsCommandOutput,
} from "../commands/ListImportFileEnrichmentsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportFileEnrichments: (
  config: MgnPaginationConfiguration,
  input: ListImportFileEnrichmentsCommandInput,
  ...rest: any[]
) => Paginator<ListImportFileEnrichmentsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListImportFileEnrichmentsCommandInput,
  ListImportFileEnrichmentsCommandOutput
>(MgnClient, ListImportFileEnrichmentsCommand, "nextToken", "nextToken", "maxResults");
