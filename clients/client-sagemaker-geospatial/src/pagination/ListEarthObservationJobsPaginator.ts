// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEarthObservationJobsCommand,
  ListEarthObservationJobsCommandInput,
  ListEarthObservationJobsCommandOutput,
} from "../commands/ListEarthObservationJobsCommand";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEarthObservationJobs: (
  config: SageMakerGeospatialPaginationConfiguration,
  input: ListEarthObservationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListEarthObservationJobsCommandOutput> = createPaginator<
  SageMakerGeospatialPaginationConfiguration,
  ListEarthObservationJobsCommandInput,
  ListEarthObservationJobsCommandOutput
>(SageMakerGeospatialClient, ListEarthObservationJobsCommand, "NextToken", "NextToken", "");
