// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListControlOperationsCommand,
  ListControlOperationsCommandInput,
  ListControlOperationsCommandOutput,
} from "../commands/ListControlOperationsCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControlOperations: (
  config: ControlTowerPaginationConfiguration,
  input: ListControlOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListControlOperationsCommandOutput> = createPaginator<
  ControlTowerPaginationConfiguration,
  ListControlOperationsCommandInput,
  ListControlOperationsCommandOutput
>(ControlTowerClient, ListControlOperationsCommand, "nextToken", "nextToken", "maxResults");
