// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCampaigns: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListCampaignsCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
>(IoTFleetWiseClient, ListCampaignsCommand, "nextToken", "nextToken", "maxResults");
