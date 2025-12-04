// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelExplainabilityJobDefinitionsCommand,
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
} from "../commands/ListModelExplainabilityJobDefinitionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelExplainabilityJobDefinitions: (
  config: SageMakerPaginationConfiguration,
  input: ListModelExplainabilityJobDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListModelExplainabilityJobDefinitionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput
>(SageMakerClient, ListModelExplainabilityJobDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
