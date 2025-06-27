// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListClusterSchedulerConfigsCommand,
  ListClusterSchedulerConfigsCommandInput,
  ListClusterSchedulerConfigsCommandOutput,
} from "../commands/ListClusterSchedulerConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterSchedulerConfigs: (
  config: SageMakerPaginationConfiguration,
  input: ListClusterSchedulerConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterSchedulerConfigsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListClusterSchedulerConfigsCommandInput,
  ListClusterSchedulerConfigsCommandOutput
>(SageMakerClient, ListClusterSchedulerConfigsCommand, "NextToken", "NextToken", "MaxResults");
