// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePendingMaintenanceActions: (
  config: NeptunePaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribePendingMaintenanceActionsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
>(NeptuneClient, DescribePendingMaintenanceActionsCommand, "Marker", "Marker", "MaxRecords");
