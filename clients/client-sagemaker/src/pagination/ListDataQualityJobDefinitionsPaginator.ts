// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityJobDefinitionsCommand,
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "../commands/ListDataQualityJobDefinitionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityJobDefinitions: (
  config: SageMakerPaginationConfiguration,
  input: ListDataQualityJobDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityJobDefinitionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput
>(SageMakerClient, ListDataQualityJobDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
