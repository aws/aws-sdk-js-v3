// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImages: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImagesCommandInput,
  ...rest: any[]
) => Paginator<ListImagesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImagesCommandInput,
  ListImagesCommandOutput
>(ImagebuilderClient, ListImagesCommand, "nextToken", "nextToken", "maxResults");
