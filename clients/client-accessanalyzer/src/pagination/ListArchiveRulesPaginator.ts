// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListArchiveRulesCommand,
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput,
} from "../commands/ListArchiveRulesCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListArchiveRules: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListArchiveRulesCommandInput,
  ...rest: any[]
) => Paginator<ListArchiveRulesCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput
>(AccessAnalyzerClient, ListArchiveRulesCommand, "nextToken", "nextToken", "maxResults");
