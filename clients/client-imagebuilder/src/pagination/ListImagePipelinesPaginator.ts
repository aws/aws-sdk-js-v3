// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImagePipelinesCommand,
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
} from "../commands/ListImagePipelinesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImagePipelines: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListImagePipelinesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput
>(ImagebuilderClient, ListImagePipelinesCommand, "nextToken", "nextToken", "maxResults");
