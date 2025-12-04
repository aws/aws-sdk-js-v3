// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePendingMaintenanceActions: (
  config: DocDBPaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribePendingMaintenanceActionsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
>(DocDBClient, DescribePendingMaintenanceActionsCommand, "Marker", "Marker", "MaxRecords");
