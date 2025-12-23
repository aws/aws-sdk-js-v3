// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaPipelineKinesisVideoStreamPoolsCommand,
  ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
  ListMediaPipelineKinesisVideoStreamPoolsCommandOutput,
} from "../commands/ListMediaPipelineKinesisVideoStreamPoolsCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMediaPipelineKinesisVideoStreamPools: (
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
  ...rest: any[]
) => Paginator<ListMediaPipelineKinesisVideoStreamPoolsCommandOutput> = createPaginator<
  ChimeSDKMediaPipelinesPaginationConfiguration,
  ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
  ListMediaPipelineKinesisVideoStreamPoolsCommandOutput
>(ChimeSDKMediaPipelinesClient, ListMediaPipelineKinesisVideoStreamPoolsCommand, "NextToken", "NextToken", "MaxResults");
