// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCampaigns: (
  config: PersonalizePaginationConfiguration,
  input: ListCampaignsCommandInput,
  ...rest: any[]
) => Paginator<ListCampaignsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
>(PersonalizeClient, ListCampaignsCommand, "nextToken", "nextToken", "maxResults");
