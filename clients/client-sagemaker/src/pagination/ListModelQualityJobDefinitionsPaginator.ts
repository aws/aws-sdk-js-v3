// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelQualityJobDefinitionsCommand,
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "../commands/ListModelQualityJobDefinitionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelQualityJobDefinitions: (
  config: SageMakerPaginationConfiguration,
  input: ListModelQualityJobDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListModelQualityJobDefinitionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput
>(SageMakerClient, ListModelQualityJobDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
