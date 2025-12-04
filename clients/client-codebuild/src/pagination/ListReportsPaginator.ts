// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReports: (
  config: CodeBuildPaginationConfiguration,
  input: ListReportsCommandInput,
  ...rest: any[]
) => Paginator<ListReportsCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListReportsCommandInput,
  ListReportsCommandOutput
>(CodeBuildClient, ListReportsCommand, "nextToken", "nextToken", "maxResults");
