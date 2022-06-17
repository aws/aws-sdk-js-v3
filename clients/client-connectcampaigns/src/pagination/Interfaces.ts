// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ConnectCampaigns } from "../ConnectCampaigns";
import { ConnectCampaignsClient } from "../ConnectCampaignsClient";

export interface ConnectCampaignsPaginationConfiguration extends PaginationConfiguration {
  client: ConnectCampaigns | ConnectCampaignsClient;
}
