// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { ConnectCampaignsV2Client } from "../ConnectCampaignsV2Client";
import { ConnectCampaignsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCampaigns: (
  config: ConnectCampaignsV2PaginationConfiguration,
  input: ListCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListCampaignsCommandOutput> = createPaginator<
  ConnectCampaignsV2PaginationConfiguration,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
>(ConnectCampaignsV2Client, ListCampaignsCommand, "nextToken", "nextToken", "maxResults");
