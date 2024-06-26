// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import { KinesisAnalyticsV2Client } from "../KinesisAnalyticsV2Client";
import { KinesisAnalyticsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationVersions: (
  config: KinesisAnalyticsV2PaginationConfiguration,
  input: ListApplicationVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationVersionsCommandOutput> = createPaginator<
  KinesisAnalyticsV2PaginationConfiguration,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput
>(KinesisAnalyticsV2Client, ListApplicationVersionsCommand, "NextToken", "NextToken", "Limit");
