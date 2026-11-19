// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { PartnerCentralMarketingClient } from "../PartnerCentralMarketingClient";
import type { PartnerCentralMarketingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCampaigns: (
  config: PartnerCentralMarketingPaginationConfiguration,
  input: ListCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListCampaignsCommandOutput> = createPaginator<
  PartnerCentralMarketingPaginationConfiguration,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
>(PartnerCentralMarketingClient, ListCampaignsCommand, "NextToken", "NextToken", "MaxResults");
