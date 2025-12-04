// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelines: (
  config: ElasticTranscoderPaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListPipelinesCommandOutput> = createPaginator<
  ElasticTranscoderPaginationConfiguration,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
>(ElasticTranscoderClient, ListPipelinesCommand, "PageToken", "NextPageToken", "");
