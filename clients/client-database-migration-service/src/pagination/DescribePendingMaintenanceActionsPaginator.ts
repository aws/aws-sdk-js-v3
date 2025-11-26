// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePendingMaintenanceActions: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribePendingMaintenanceActionsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
>(DatabaseMigrationServiceClient, DescribePendingMaintenanceActionsCommand, "Marker", "Marker", "MaxRecords");
