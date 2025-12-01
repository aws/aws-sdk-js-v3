// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "../commands/ListDomainDeliverabilityCampaignsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainDeliverabilityCampaigns: (
  config: SESv2PaginationConfiguration,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainDeliverabilityCampaignsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput
>(SESv2Client, ListDomainDeliverabilityCampaignsCommand, "NextToken", "NextToken", "PageSize");
