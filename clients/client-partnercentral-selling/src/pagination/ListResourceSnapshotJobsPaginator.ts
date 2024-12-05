// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourceSnapshotJobsCommand,
  ListResourceSnapshotJobsCommandInput,
  ListResourceSnapshotJobsCommandOutput,
} from "../commands/ListResourceSnapshotJobsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceSnapshotJobs: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListResourceSnapshotJobsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceSnapshotJobsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListResourceSnapshotJobsCommandInput,
  ListResourceSnapshotJobsCommandOutput
>(PartnerCentralSellingClient, ListResourceSnapshotJobsCommand, "NextToken", "NextToken", "MaxResults");
