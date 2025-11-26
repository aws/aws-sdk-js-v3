// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImages: (
  config: ECRPaginationConfiguration,
  input: ListImagesCommandInput,
  ...rest: any[]
) => Paginator<ListImagesCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  ListImagesCommandInput,
  ListImagesCommandOutput
>(ECRClient, ListImagesCommand, "nextToken", "nextToken", "maxResults");
