// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPagesByEngagementCommand,
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
} from "../commands/ListPagesByEngagementCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPagesByEngagement: (
  config: SSMContactsPaginationConfiguration,
  input: ListPagesByEngagementCommandInput,
  ...rest: any[]
) => Paginator<ListPagesByEngagementCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput
>(SSMContactsClient, ListPagesByEngagementCommand, "NextToken", "NextToken", "MaxResults");
