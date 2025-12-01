// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBootstrapActionsCommand,
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "../commands/ListBootstrapActionsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBootstrapActions: (
  config: EMRPaginationConfiguration,
  input: ListBootstrapActionsCommandInput,
  ...rest: any[]
) => Paginator<ListBootstrapActionsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput
>(EMRClient, ListBootstrapActionsCommand, "Marker", "Marker", "");
