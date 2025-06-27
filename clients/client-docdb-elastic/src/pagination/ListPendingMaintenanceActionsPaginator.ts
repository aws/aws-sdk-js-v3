// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPendingMaintenanceActionsCommand,
  ListPendingMaintenanceActionsCommandInput,
  ListPendingMaintenanceActionsCommandOutput,
} from "../commands/ListPendingMaintenanceActionsCommand";
import { DocDBElasticClient } from "../DocDBElasticClient";
import { DocDBElasticPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPendingMaintenanceActions: (
  config: DocDBElasticPaginationConfiguration,
  input: ListPendingMaintenanceActionsCommandInput,
  ...rest: any[]
) => Paginator<ListPendingMaintenanceActionsCommandOutput> = createPaginator<
  DocDBElasticPaginationConfiguration,
  ListPendingMaintenanceActionsCommandInput,
  ListPendingMaintenanceActionsCommandOutput
>(DocDBElasticClient, ListPendingMaintenanceActionsCommand, "nextToken", "nextToken", "maxResults");
