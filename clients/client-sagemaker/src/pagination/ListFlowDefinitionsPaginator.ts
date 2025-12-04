// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlowDefinitionsCommand,
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "../commands/ListFlowDefinitionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowDefinitions: (
  config: SageMakerPaginationConfiguration,
  input: ListFlowDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowDefinitionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput
>(SageMakerClient, ListFlowDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
