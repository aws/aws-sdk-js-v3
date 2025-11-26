// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainMaintenancesCommand,
  ListDomainMaintenancesCommandInput,
  ListDomainMaintenancesCommandOutput,
} from "../commands/ListDomainMaintenancesCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainMaintenances: (
  config: OpenSearchPaginationConfiguration,
  input: ListDomainMaintenancesCommandInput,
  ...rest: any[]
) => Paginator<ListDomainMaintenancesCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  ListDomainMaintenancesCommandInput,
  ListDomainMaintenancesCommandOutput
>(OpenSearchClient, ListDomainMaintenancesCommand, "NextToken", "NextToken", "MaxResults");
