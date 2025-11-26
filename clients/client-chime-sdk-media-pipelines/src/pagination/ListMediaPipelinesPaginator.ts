// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaPipelinesCommand,
  ListMediaPipelinesCommandInput,
  ListMediaPipelinesCommandOutput,
} from "../commands/ListMediaPipelinesCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMediaPipelines: (
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListMediaPipelinesCommandOutput> = createPaginator<
  ChimeSDKMediaPipelinesPaginationConfiguration,
  ListMediaPipelinesCommandInput,
  ListMediaPipelinesCommandOutput
>(ChimeSDKMediaPipelinesClient, ListMediaPipelinesCommand, "NextToken", "NextToken", "MaxResults");
