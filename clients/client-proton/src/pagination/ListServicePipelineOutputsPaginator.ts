// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicePipelineOutputsCommand,
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "../commands/ListServicePipelineOutputsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServicePipelineOutputs: (
  config: ProtonPaginationConfiguration,
  input: ListServicePipelineOutputsCommandInput,
  ...rest: any[]
) => Paginator<ListServicePipelineOutputsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput
>(ProtonClient, ListServicePipelineOutputsCommand, "nextToken", "nextToken", "");
