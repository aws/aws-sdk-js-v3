// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelines: (
  config: SageMakerPaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListPipelinesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
>(SageMakerClient, ListPipelinesCommand, "NextToken", "NextToken", "MaxResults");
