// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectInstanceIntegrationsCommand,
  ListConnectInstanceIntegrationsCommandInput,
  ListConnectInstanceIntegrationsCommandOutput,
} from "../commands/ListConnectInstanceIntegrationsCommand";
import { ConnectCampaignsV2Client } from "../ConnectCampaignsV2Client";
import { ConnectCampaignsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectInstanceIntegrations: (
  config: ConnectCampaignsV2PaginationConfiguration,
  input: ListConnectInstanceIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectInstanceIntegrationsCommandOutput> = createPaginator<
  ConnectCampaignsV2PaginationConfiguration,
  ListConnectInstanceIntegrationsCommandInput,
  ListConnectInstanceIntegrationsCommandOutput
>(ConnectCampaignsV2Client, ListConnectInstanceIntegrationsCommand, "nextToken", "nextToken", "maxResults");
