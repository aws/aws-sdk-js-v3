// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCZonalShiftClient } from "../ARCZonalShiftClient";
import {
  ListZonalShiftsCommand,
  ListZonalShiftsCommandInput,
  ListZonalShiftsCommandOutput,
} from "../commands/ListZonalShiftsCommand";
import { ARCZonalShiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListZonalShifts: (
  config: ARCZonalShiftPaginationConfiguration,
  input: ListZonalShiftsCommandInput,
  ...rest: any[]
) => Paginator<ListZonalShiftsCommandOutput> = createPaginator<
  ARCZonalShiftPaginationConfiguration,
  ListZonalShiftsCommandInput,
  ListZonalShiftsCommandOutput
>(ARCZonalShiftClient, ListZonalShiftsCommand, "nextToken", "nextToken", "maxResults");
