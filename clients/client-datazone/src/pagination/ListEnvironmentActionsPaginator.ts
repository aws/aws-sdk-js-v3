// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentActionsCommand,
  ListEnvironmentActionsCommandInput,
  ListEnvironmentActionsCommandOutput,
} from "../commands/ListEnvironmentActionsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentActions: (
  config: DataZonePaginationConfiguration,
  input: ListEnvironmentActionsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentActionsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListEnvironmentActionsCommandInput,
  ListEnvironmentActionsCommandOutput
>(DataZoneClient, ListEnvironmentActionsCommand, "nextToken", "nextToken", "maxResults");
