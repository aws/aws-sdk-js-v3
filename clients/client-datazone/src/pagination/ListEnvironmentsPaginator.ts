// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironments: (
  config: DataZonePaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
>(DataZoneClient, ListEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
