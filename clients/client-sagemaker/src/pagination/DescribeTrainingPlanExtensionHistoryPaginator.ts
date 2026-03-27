// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrainingPlanExtensionHistoryCommand,
  DescribeTrainingPlanExtensionHistoryCommandInput,
  DescribeTrainingPlanExtensionHistoryCommandOutput,
} from "../commands/DescribeTrainingPlanExtensionHistoryCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrainingPlanExtensionHistory: (
  config: SageMakerPaginationConfiguration,
  input: DescribeTrainingPlanExtensionHistoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrainingPlanExtensionHistoryCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  DescribeTrainingPlanExtensionHistoryCommandInput,
  DescribeTrainingPlanExtensionHistoryCommandOutput
>(SageMakerClient, DescribeTrainingPlanExtensionHistoryCommand, "NextToken", "NextToken", "MaxResults");
