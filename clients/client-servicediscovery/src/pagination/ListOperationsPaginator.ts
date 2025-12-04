// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOperations: (
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListOperationsCommandOutput> = createPaginator<
  ServiceDiscoveryPaginationConfiguration,
  ListOperationsCommandInput,
  ListOperationsCommandOutput
>(ServiceDiscoveryClient, ListOperationsCommand, "NextToken", "NextToken", "MaxResults");
