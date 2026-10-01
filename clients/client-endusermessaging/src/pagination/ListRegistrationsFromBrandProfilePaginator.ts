// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRegistrationsFromBrandProfileCommand,
  ListRegistrationsFromBrandProfileCommandInput,
  ListRegistrationsFromBrandProfileCommandOutput,
} from "../commands/ListRegistrationsFromBrandProfileCommand";
import { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistrationsFromBrandProfile: (
  config: EndUserMessagingPaginationConfiguration,
  input: ListRegistrationsFromBrandProfileCommandInput,
  ...rest: any[]
) => Paginator<ListRegistrationsFromBrandProfileCommandOutput> = createPaginator<
  EndUserMessagingPaginationConfiguration,
  ListRegistrationsFromBrandProfileCommandInput,
  ListRegistrationsFromBrandProfileCommandOutput
>(EndUserMessagingClient, ListRegistrationsFromBrandProfileCommand, "nextToken", "nextToken", "maxResults");
