// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMediaCapturePipelines: (
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaCapturePipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListMediaCapturePipelinesCommandOutput> = createPaginator<
  ChimeSDKMediaPipelinesPaginationConfiguration,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput
>(ChimeSDKMediaPipelinesClient, ListMediaCapturePipelinesCommand, "NextToken", "NextToken", "MaxResults");
