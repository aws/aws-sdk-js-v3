// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomains: (
  config: DataZonePaginationConfiguration,
  input: ListDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
>(DataZoneClient, ListDomainsCommand, "nextToken", "nextToken", "maxResults");
