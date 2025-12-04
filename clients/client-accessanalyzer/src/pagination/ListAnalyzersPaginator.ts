// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAnalyzersCommand,
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput,
} from "../commands/ListAnalyzersCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalyzers: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAnalyzersCommandInput,
  ...rest: any[]
) => Paginator<ListAnalyzersCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput
>(AccessAnalyzerClient, ListAnalyzersCommand, "nextToken", "nextToken", "maxResults");
