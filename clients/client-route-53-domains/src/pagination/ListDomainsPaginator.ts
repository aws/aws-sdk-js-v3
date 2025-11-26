// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomains: (
  config: Route53DomainsPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsCommandOutput> = createPaginator<
  Route53DomainsPaginationConfiguration,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
>(Route53DomainsClient, ListDomainsCommand, "Marker", "NextPageMarker", "MaxItems");
