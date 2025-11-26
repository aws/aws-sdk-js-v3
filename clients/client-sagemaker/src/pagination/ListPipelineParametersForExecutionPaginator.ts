// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelineParametersForExecutionCommand,
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "../commands/ListPipelineParametersForExecutionCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineParametersForExecution: (
  config: SageMakerPaginationConfiguration,
  input: ListPipelineParametersForExecutionCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineParametersForExecutionCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput
>(SageMakerClient, ListPipelineParametersForExecutionCommand, "NextToken", "NextToken", "MaxResults");
