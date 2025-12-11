// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { DataPipelineClient } from "../DataPipelineClient";
import { DataPipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelines: (
  config: DataPipelinePaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListPipelinesCommandOutput> = createPaginator<
  DataPipelinePaginationConfiguration,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
>(DataPipelineClient, ListPipelinesCommand, "marker", "marker", "");
