// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHarvestJobsCommand,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput,
} from "../commands/ListHarvestJobsCommand";
import { MediaPackageV2Client } from "../MediaPackageV2Client";
import { MediaPackageV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHarvestJobs: (
  config: MediaPackageV2PaginationConfiguration,
  input: ListHarvestJobsCommandInput,
  ...rest: any[]
) => Paginator<ListHarvestJobsCommandOutput> = createPaginator<
  MediaPackageV2PaginationConfiguration,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput
>(MediaPackageV2Client, ListHarvestJobsCommand, "NextToken", "NextToken", "MaxResults");
