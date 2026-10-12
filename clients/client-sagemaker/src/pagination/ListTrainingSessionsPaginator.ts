// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrainingSessionsCommand,
  ListTrainingSessionsCommandInput,
  ListTrainingSessionsCommandOutput,
} from "../commands/ListTrainingSessionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainingSessions: (
  config: SageMakerPaginationConfiguration,
  input: ListTrainingSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListTrainingSessionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTrainingSessionsCommandInput,
  ListTrainingSessionsCommandOutput
>(SageMakerClient, ListTrainingSessionsCommand, "NextToken", "NextToken", "MaxResults");
