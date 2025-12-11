// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
} from "../commands/ListMediaInsightsPipelineConfigurationsCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMediaInsightsPipelineConfigurations: (
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaInsightsPipelineConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListMediaInsightsPipelineConfigurationsCommandOutput> = createPaginator<
  ChimeSDKMediaPipelinesPaginationConfiguration,
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput
>(ChimeSDKMediaPipelinesClient, ListMediaInsightsPipelineConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
