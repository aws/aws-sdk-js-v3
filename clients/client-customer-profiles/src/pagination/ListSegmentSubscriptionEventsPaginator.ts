// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSegmentSubscriptionEventsCommand,
  ListSegmentSubscriptionEventsCommandInput,
  ListSegmentSubscriptionEventsCommandOutput,
} from "../commands/ListSegmentSubscriptionEventsCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import type { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSegmentSubscriptionEvents: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListSegmentSubscriptionEventsCommandInput,
  ...rest: any[]
) => Paginator<ListSegmentSubscriptionEventsCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListSegmentSubscriptionEventsCommandInput,
  ListSegmentSubscriptionEventsCommandOutput
>(CustomerProfilesClient, ListSegmentSubscriptionEventsCommand, "NextToken", "NextToken", "MaxResults");
