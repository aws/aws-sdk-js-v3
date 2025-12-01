// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainsForPackageCommand,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "../commands/ListDomainsForPackageCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainsForPackage: (
  config: OpenSearchPaginationConfiguration,
  input: ListDomainsForPackageCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsForPackageCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput
>(OpenSearchClient, ListDomainsForPackageCommand, "NextToken", "NextToken", "MaxResults");
