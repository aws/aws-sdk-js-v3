// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBrandProfileAttributesCommand,
  ListBrandProfileAttributesCommandInput,
  ListBrandProfileAttributesCommandOutput,
} from "../commands/ListBrandProfileAttributesCommand";
import { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrandProfileAttributes: (
  config: EndUserMessagingPaginationConfiguration,
  input: ListBrandProfileAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListBrandProfileAttributesCommandOutput> = createPaginator<
  EndUserMessagingPaginationConfiguration,
  ListBrandProfileAttributesCommandInput,
  ListBrandProfileAttributesCommandOutput
>(EndUserMessagingClient, ListBrandProfileAttributesCommand, "nextToken", "nextToken", "maxResults");
