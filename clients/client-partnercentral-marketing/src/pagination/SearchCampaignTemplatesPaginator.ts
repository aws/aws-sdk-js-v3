// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchCampaignTemplatesCommand,
  SearchCampaignTemplatesCommandInput,
  SearchCampaignTemplatesCommandOutput,
} from "../commands/SearchCampaignTemplatesCommand";
import { PartnerCentralMarketingClient } from "../PartnerCentralMarketingClient";
import type { PartnerCentralMarketingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchCampaignTemplates: (
  config: PartnerCentralMarketingPaginationConfiguration,
  input: SearchCampaignTemplatesCommandInput,
  ...rest: any[]
) => Paginator<SearchCampaignTemplatesCommandOutput> = createPaginator<
  PartnerCentralMarketingPaginationConfiguration,
  SearchCampaignTemplatesCommandInput,
  SearchCampaignTemplatesCommandOutput
>(PartnerCentralMarketingClient, SearchCampaignTemplatesCommand, "NextToken", "NextToken", "MaxResults");
