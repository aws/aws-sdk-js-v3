// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectMembershipsCommand,
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "../commands/ListProjectMembershipsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjectMemberships: (
  config: DataZonePaginationConfiguration,
  input: ListProjectMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectMembershipsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput
>(DataZoneClient, ListProjectMembershipsCommand, "nextToken", "nextToken", "maxResults");
