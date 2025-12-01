// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHarvestJobsCommand,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput,
} from "../commands/ListHarvestJobsCommand";
import { MediaPackageClient } from "../MediaPackageClient";
import { MediaPackagePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHarvestJobs: (
  config: MediaPackagePaginationConfiguration,
  input: ListHarvestJobsCommandInput,
  ...rest: any[]
) => Paginator<ListHarvestJobsCommandOutput> = createPaginator<
  MediaPackagePaginationConfiguration,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput
>(MediaPackageClient, ListHarvestJobsCommand, "NextToken", "NextToken", "MaxResults");
