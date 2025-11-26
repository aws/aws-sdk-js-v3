// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrainingPlansCommand,
  ListTrainingPlansCommandInput,
  ListTrainingPlansCommandOutput,
} from "../commands/ListTrainingPlansCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainingPlans: (
  config: SageMakerPaginationConfiguration,
  input: ListTrainingPlansCommandInput,
  ...rest: any[]
) => Paginator<ListTrainingPlansCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTrainingPlansCommandInput,
  ListTrainingPlansCommandOutput
>(SageMakerClient, ListTrainingPlansCommand, "NextToken", "NextToken", "MaxResults");
