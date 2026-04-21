// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAIWorkloadConfigsCommand,
  ListAIWorkloadConfigsCommandInput,
  ListAIWorkloadConfigsCommandOutput,
} from "../commands/ListAIWorkloadConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIWorkloadConfigs: (
  config: SageMakerPaginationConfiguration,
  input: ListAIWorkloadConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListAIWorkloadConfigsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAIWorkloadConfigsCommandInput,
  ListAIWorkloadConfigsCommandOutput
>(SageMakerClient, ListAIWorkloadConfigsCommand, "NextToken", "NextToken", "MaxResults");
