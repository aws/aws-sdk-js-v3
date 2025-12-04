// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSharedReportGroupsCommand,
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "../commands/ListSharedReportGroupsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSharedReportGroups: (
  config: CodeBuildPaginationConfiguration,
  input: ListSharedReportGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListSharedReportGroupsCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput
>(CodeBuildClient, ListSharedReportGroupsCommand, "nextToken", "nextToken", "maxResults");
