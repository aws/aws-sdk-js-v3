// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCZonalShiftClient } from "../ARCZonalShiftClient";
import {
  ListAutoshiftsCommand,
  ListAutoshiftsCommandInput,
  ListAutoshiftsCommandOutput,
} from "../commands/ListAutoshiftsCommand";
import type { ARCZonalShiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutoshifts: (
  config: ARCZonalShiftPaginationConfiguration,
  input: ListAutoshiftsCommandInput,
  ...rest: any[]
) => Paginator<ListAutoshiftsCommandOutput> = createPaginator<
  ARCZonalShiftPaginationConfiguration,
  ListAutoshiftsCommandInput,
  ListAutoshiftsCommandOutput
>(ARCZonalShiftClient, ListAutoshiftsCommand, "nextToken", "nextToken", "maxResults");
