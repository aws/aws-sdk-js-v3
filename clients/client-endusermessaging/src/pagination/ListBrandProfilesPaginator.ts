// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBrandProfilesCommand,
  ListBrandProfilesCommandInput,
  ListBrandProfilesCommandOutput,
} from "../commands/ListBrandProfilesCommand";
import { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrandProfiles: (
  config: EndUserMessagingPaginationConfiguration,
  input: ListBrandProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListBrandProfilesCommandOutput> = createPaginator<
  EndUserMessagingPaginationConfiguration,
  ListBrandProfilesCommandInput,
  ListBrandProfilesCommandOutput
>(EndUserMessagingClient, ListBrandProfilesCommand, "nextToken", "nextToken", "maxResults");
