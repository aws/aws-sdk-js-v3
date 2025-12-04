// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelBiasJobDefinitionsCommand,
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "../commands/ListModelBiasJobDefinitionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelBiasJobDefinitions: (
  config: SageMakerPaginationConfiguration,
  input: ListModelBiasJobDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListModelBiasJobDefinitionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput
>(SageMakerClient, ListModelBiasJobDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
