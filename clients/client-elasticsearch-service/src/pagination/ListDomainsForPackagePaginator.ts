// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainsForPackageCommand,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "../commands/ListDomainsForPackageCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainsForPackage: (
  config: ElasticsearchServicePaginationConfiguration,
  input: ListDomainsForPackageCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsForPackageCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput
>(ElasticsearchServiceClient, ListDomainsForPackageCommand, "NextToken", "NextToken", "MaxResults");
