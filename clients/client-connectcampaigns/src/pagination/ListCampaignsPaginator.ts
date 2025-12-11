// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { ConnectCampaignsClient } from "../ConnectCampaignsClient";
import { ConnectCampaignsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCampaigns: (
  config: ConnectCampaignsPaginationConfiguration,
  input: ListCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListCampaignsCommandOutput> = createPaginator<
  ConnectCampaignsPaginationConfiguration,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
>(ConnectCampaignsClient, ListCampaignsCommand, "nextToken", "nextToken", "maxResults");
