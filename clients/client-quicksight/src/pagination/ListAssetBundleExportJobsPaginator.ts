// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetBundleExportJobsCommand,
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput,
} from "../commands/ListAssetBundleExportJobsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetBundleExportJobs: (
  config: QuickSightPaginationConfiguration,
  input: ListAssetBundleExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetBundleExportJobsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput
>(QuickSightClient, ListAssetBundleExportJobsCommand, "NextToken", "NextToken", "MaxResults");
