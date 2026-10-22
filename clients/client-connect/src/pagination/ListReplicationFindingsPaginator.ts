// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReplicationFindingsCommand,
  ListReplicationFindingsCommandInput,
  ListReplicationFindingsCommandOutput,
} from "../commands/ListReplicationFindingsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReplicationFindings: (
  config: ConnectPaginationConfiguration,
  input: ListReplicationFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListReplicationFindingsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListReplicationFindingsCommandInput,
  ListReplicationFindingsCommandOutput
>(ConnectClient, ListReplicationFindingsCommand, "NextToken", "NextToken", "MaxResults");
