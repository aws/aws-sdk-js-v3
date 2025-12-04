// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePendingMaintenanceActions: (
  config: RDSPaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribePendingMaintenanceActionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
>(RDSClient, DescribePendingMaintenanceActionsCommand, "Marker", "Marker", "MaxRecords");
