// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataflowEndpointGroupsCommand,
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput,
} from "../commands/ListDataflowEndpointGroupsCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataflowEndpointGroups: (
  config: GroundStationPaginationConfiguration,
  input: ListDataflowEndpointGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListDataflowEndpointGroupsCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput
>(GroundStationClient, ListDataflowEndpointGroupsCommand, "nextToken", "nextToken", "maxResults");
