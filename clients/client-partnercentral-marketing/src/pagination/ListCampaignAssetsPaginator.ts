// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCampaignAssetsCommand,
  ListCampaignAssetsCommandInput,
  ListCampaignAssetsCommandOutput,
} from "../commands/ListCampaignAssetsCommand";
import { PartnerCentralMarketingClient } from "../PartnerCentralMarketingClient";
import type { PartnerCentralMarketingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCampaignAssets: (
  config: PartnerCentralMarketingPaginationConfiguration,
  input: ListCampaignAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListCampaignAssetsCommandOutput> = createPaginator<
  PartnerCentralMarketingPaginationConfiguration,
  ListCampaignAssetsCommandInput,
  ListCampaignAssetsCommandOutput
>(PartnerCentralMarketingClient, ListCampaignAssetsCommand, "NextToken", "NextToken", "MaxResults");
