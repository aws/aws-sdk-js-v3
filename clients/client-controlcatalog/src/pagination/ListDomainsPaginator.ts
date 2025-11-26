// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ControlCatalogClient } from "../ControlCatalogClient";
import { ControlCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomains: (
  config: ControlCatalogPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsCommandOutput> = createPaginator<
  ControlCatalogPaginationConfiguration,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
>(ControlCatalogClient, ListDomainsCommand, "NextToken", "NextToken", "MaxResults");
