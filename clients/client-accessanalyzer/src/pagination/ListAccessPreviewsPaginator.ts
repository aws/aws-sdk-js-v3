// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAccessPreviewsCommand,
  ListAccessPreviewsCommandInput,
  ListAccessPreviewsCommandOutput,
} from "../commands/ListAccessPreviewsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPreviews: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAccessPreviewsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPreviewsCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListAccessPreviewsCommandInput,
  ListAccessPreviewsCommandOutput
>(AccessAnalyzerClient, ListAccessPreviewsCommand, "nextToken", "nextToken", "maxResults");
