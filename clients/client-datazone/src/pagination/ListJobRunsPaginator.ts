// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobRuns: (
  config: DataZonePaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...rest: any[]
) => Paginator<ListJobRunsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput
>(DataZoneClient, ListJobRunsCommand, "nextToken", "nextToken", "maxResults");
