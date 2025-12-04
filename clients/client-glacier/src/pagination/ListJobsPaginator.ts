// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: GlacierPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  GlacierPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(GlacierClient, ListJobsCommand, "marker", "Marker", "limit");
