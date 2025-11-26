// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListReportGroupsCommand,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput,
} from "../commands/ListReportGroupsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReportGroups: (
  config: CodeBuildPaginationConfiguration,
  input: ListReportGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListReportGroupsCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput
>(CodeBuildClient, ListReportGroupsCommand, "nextToken", "nextToken", "maxResults");
