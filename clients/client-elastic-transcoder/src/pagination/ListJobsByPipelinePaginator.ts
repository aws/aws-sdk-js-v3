// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobsByPipelineCommand,
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
} from "../commands/ListJobsByPipelineCommand";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobsByPipeline: (
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByPipelineCommandInput,
  ...rest: any[]
) => Paginator<ListJobsByPipelineCommandOutput> = createPaginator<
  ElasticTranscoderPaginationConfiguration,
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput
>(ElasticTranscoderClient, ListJobsByPipelineCommand, "PageToken", "NextPageToken", "");
