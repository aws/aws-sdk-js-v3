// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPipelineVersionsCommand,
  ListPipelineVersionsCommandInput,
  ListPipelineVersionsCommandOutput,
} from "../commands/ListPipelineVersionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineVersions: (
  config: SageMakerPaginationConfiguration,
  input: ListPipelineVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineVersionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListPipelineVersionsCommandInput,
  ListPipelineVersionsCommandOutput
>(SageMakerClient, ListPipelineVersionsCommand, "NextToken", "NextToken", "MaxResults");
