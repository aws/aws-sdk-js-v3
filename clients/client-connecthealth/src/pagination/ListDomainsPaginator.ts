// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ConnectHealthClient } from "../ConnectHealthClient";
import { ConnectHealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomains: (
  config: ConnectHealthPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsCommandOutput> = createPaginator<
  ConnectHealthPaginationConfiguration,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
>(ConnectHealthClient, ListDomainsCommand, "nextToken", "nextToken", "maxResults");
