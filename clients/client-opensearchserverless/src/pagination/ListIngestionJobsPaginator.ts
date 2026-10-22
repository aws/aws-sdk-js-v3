// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIngestionJobsCommand,
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput,
} from "../commands/ListIngestionJobsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import type { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestionJobs: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListIngestionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestionJobsCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput
>(OpenSearchServerlessClient, ListIngestionJobsCommand, "nextToken", "nextToken", "");
