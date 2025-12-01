// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListFindingsV2Command,
  ListFindingsV2CommandInput,
  ListFindingsV2CommandOutput,
} from "../commands/ListFindingsV2Command";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindingsV2: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListFindingsV2CommandInput,
  ...rest: any[]
) => Paginator<ListFindingsV2CommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListFindingsV2CommandInput,
  ListFindingsV2CommandOutput
>(AccessAnalyzerClient, ListFindingsV2Command, "nextToken", "nextToken", "maxResults");
