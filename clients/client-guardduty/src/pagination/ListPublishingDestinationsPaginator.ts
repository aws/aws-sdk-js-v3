// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPublishingDestinationsCommand,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "../commands/ListPublishingDestinationsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublishingDestinations: (
  config: GuardDutyPaginationConfiguration,
  input: ListPublishingDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListPublishingDestinationsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput
>(GuardDutyClient, ListPublishingDestinationsCommand, "NextToken", "NextToken", "MaxResults");
