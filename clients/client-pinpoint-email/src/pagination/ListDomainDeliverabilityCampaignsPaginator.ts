// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "../commands/ListDomainDeliverabilityCampaignsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainDeliverabilityCampaigns: (
  config: PinpointEmailPaginationConfiguration,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainDeliverabilityCampaignsCommandOutput> = createPaginator<
  PinpointEmailPaginationConfiguration,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput
>(PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand, "NextToken", "NextToken", "PageSize");
