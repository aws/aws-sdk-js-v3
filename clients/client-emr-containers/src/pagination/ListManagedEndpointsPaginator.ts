// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedEndpointsCommand,
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "../commands/ListManagedEndpointsCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedEndpoints: (
  config: EMRContainersPaginationConfiguration,
  input: ListManagedEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedEndpointsCommandOutput> = createPaginator<
  EMRContainersPaginationConfiguration,
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput
>(EMRContainersClient, ListManagedEndpointsCommand, "nextToken", "nextToken", "maxResults");
