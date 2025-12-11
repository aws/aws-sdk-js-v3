// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListReportPlansCommand,
  ListReportPlansCommandInput,
  ListReportPlansCommandOutput,
} from "../commands/ListReportPlansCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReportPlans: (
  config: BackupPaginationConfiguration,
  input: ListReportPlansCommandInput,
  ...rest: any[]
) => Paginator<ListReportPlansCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListReportPlansCommandInput,
  ListReportPlansCommandOutput
>(BackupClient, ListReportPlansCommand, "NextToken", "NextToken", "MaxResults");
