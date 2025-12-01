// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackagesForDomainCommand,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "../commands/ListPackagesForDomainCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackagesForDomain: (
  config: ElasticsearchServicePaginationConfiguration,
  input: ListPackagesForDomainCommandInput,
  ...rest: any[]
) => Paginator<ListPackagesForDomainCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput
>(ElasticsearchServiceClient, ListPackagesForDomainCommand, "NextToken", "NextToken", "MaxResults");
