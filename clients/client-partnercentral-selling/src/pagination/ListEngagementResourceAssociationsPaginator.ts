// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngagementResourceAssociationsCommand,
  ListEngagementResourceAssociationsCommandInput,
  ListEngagementResourceAssociationsCommandOutput,
} from "../commands/ListEngagementResourceAssociationsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagementResourceAssociations: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementResourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementResourceAssociationsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementResourceAssociationsCommandInput,
  ListEngagementResourceAssociationsCommandOutput
>(PartnerCentralSellingClient, ListEngagementResourceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
