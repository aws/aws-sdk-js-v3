// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVectorEnrichmentJobsCommand,
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput,
} from "../commands/ListVectorEnrichmentJobsCommand";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVectorEnrichmentJobs: (
  config: SageMakerGeospatialPaginationConfiguration,
  input: ListVectorEnrichmentJobsCommandInput,
  ...rest: any[]
) => Paginator<ListVectorEnrichmentJobsCommandOutput> = createPaginator<
  SageMakerGeospatialPaginationConfiguration,
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput
>(SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand, "NextToken", "NextToken", "");
