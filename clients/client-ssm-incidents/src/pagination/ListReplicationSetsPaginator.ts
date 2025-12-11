// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReplicationSetsCommand,
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput,
} from "../commands/ListReplicationSetsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReplicationSets: (
  config: SSMIncidentsPaginationConfiguration,
  input: ListReplicationSetsCommandInput,
  ...rest: any[]
) => Paginator<ListReplicationSetsCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput
>(SSMIncidentsClient, ListReplicationSetsCommand, "nextToken", "nextToken", "maxResults");
