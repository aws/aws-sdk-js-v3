// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "../commands/ListReportsForReportGroupCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReportsForReportGroup: (
  config: CodeBuildPaginationConfiguration,
  input: ListReportsForReportGroupCommandInput,
  ...rest: any[]
) => Paginator<ListReportsForReportGroupCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput
>(CodeBuildClient, ListReportsForReportGroupCommand, "nextToken", "nextToken", "maxResults");
