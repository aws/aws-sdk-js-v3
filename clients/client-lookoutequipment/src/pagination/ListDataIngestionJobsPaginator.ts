// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataIngestionJobsCommand,
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "../commands/ListDataIngestionJobsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataIngestionJobs: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListDataIngestionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDataIngestionJobsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput
>(LookoutEquipmentClient, ListDataIngestionJobsCommand, "NextToken", "NextToken", "MaxResults");
