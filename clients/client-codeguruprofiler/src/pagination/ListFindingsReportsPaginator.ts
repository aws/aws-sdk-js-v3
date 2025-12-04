// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  ListFindingsReportsCommand,
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
} from "../commands/ListFindingsReportsCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindingsReports: (
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListFindingsReportsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsReportsCommandOutput> = createPaginator<
  CodeGuruProfilerPaginationConfiguration,
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput
>(CodeGuruProfilerClient, ListFindingsReportsCommand, "nextToken", "nextToken", "maxResults");
