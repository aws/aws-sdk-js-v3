// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetBundleImportJobsCommand,
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput,
} from "../commands/ListAssetBundleImportJobsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetBundleImportJobs: (
  config: QuickSightPaginationConfiguration,
  input: ListAssetBundleImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetBundleImportJobsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput
>(QuickSightClient, ListAssetBundleImportJobsCommand, "NextToken", "NextToken", "MaxResults");
