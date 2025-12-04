// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAnalyzedResourcesCommand,
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "../commands/ListAnalyzedResourcesCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalyzedResources: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAnalyzedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListAnalyzedResourcesCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput
>(AccessAnalyzerClient, ListAnalyzedResourcesCommand, "nextToken", "nextToken", "maxResults");
