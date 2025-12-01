// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModels: (
  config: SageMakerPaginationConfiguration,
  input: ListModelsCommandInput,
  ...rest: any[]
) => Paginator<ListModelsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelsCommandInput,
  ListModelsCommandOutput
>(SageMakerClient, ListModelsCommand, "NextToken", "NextToken", "MaxResults");
