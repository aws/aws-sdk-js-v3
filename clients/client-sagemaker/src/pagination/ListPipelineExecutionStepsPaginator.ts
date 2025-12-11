// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelineExecutionStepsCommand,
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "../commands/ListPipelineExecutionStepsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineExecutionSteps: (
  config: SageMakerPaginationConfiguration,
  input: ListPipelineExecutionStepsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineExecutionStepsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput
>(SageMakerClient, ListPipelineExecutionStepsCommand, "NextToken", "NextToken", "MaxResults");
