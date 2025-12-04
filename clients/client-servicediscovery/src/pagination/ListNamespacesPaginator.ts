// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "../commands/ListNamespacesCommand";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNamespaces: (
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListNamespacesCommandOutput> = createPaginator<
  ServiceDiscoveryPaginationConfiguration,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput
>(ServiceDiscoveryClient, ListNamespacesCommand, "NextToken", "NextToken", "MaxResults");
