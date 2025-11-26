// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { KinesisAnalyticsV2Client } from "../KinesisAnalyticsV2Client";
import { KinesisAnalyticsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: KinesisAnalyticsV2PaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  KinesisAnalyticsV2PaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(KinesisAnalyticsV2Client, ListApplicationsCommand, "NextToken", "NextToken", "Limit");
