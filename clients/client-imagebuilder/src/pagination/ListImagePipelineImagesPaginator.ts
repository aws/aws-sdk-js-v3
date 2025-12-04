// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImagePipelineImagesCommand,
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "../commands/ListImagePipelineImagesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImagePipelineImages: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePipelineImagesCommandInput,
  ...rest: any[]
) => Paginator<ListImagePipelineImagesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput
>(ImagebuilderClient, ListImagePipelineImagesCommand, "nextToken", "nextToken", "maxResults");
