// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCZonalShiftClient } from "../ARCZonalShiftClient";
import {
  ListManagedResourcesCommand,
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput,
} from "../commands/ListManagedResourcesCommand";
import { ARCZonalShiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedResources: (
  config: ARCZonalShiftPaginationConfiguration,
  input: ListManagedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListManagedResourcesCommandOutput> = createPaginator<
  ARCZonalShiftPaginationConfiguration,
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput
>(ARCZonalShiftClient, ListManagedResourcesCommand, "nextToken", "nextToken", "maxResults");
