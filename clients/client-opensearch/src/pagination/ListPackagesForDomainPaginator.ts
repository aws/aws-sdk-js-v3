// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackagesForDomainCommand,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "../commands/ListPackagesForDomainCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackagesForDomain: (
  config: OpenSearchPaginationConfiguration,
  input: ListPackagesForDomainCommandInput,
  ...rest: any[]
) => Paginator<ListPackagesForDomainCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput
>(OpenSearchClient, ListPackagesForDomainCommand, "NextToken", "NextToken", "MaxResults");
