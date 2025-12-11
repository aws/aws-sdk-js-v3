// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineExecutions: (
  config: SageMakerPaginationConfiguration,
  input: ListPipelineExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineExecutionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput
>(SageMakerClient, ListPipelineExecutionsCommand, "NextToken", "NextToken", "MaxResults");
