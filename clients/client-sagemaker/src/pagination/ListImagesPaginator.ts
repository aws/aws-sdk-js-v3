// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImages: (
  config: SageMakerPaginationConfiguration,
  input: ListImagesCommandInput,
  ...rest: any[]
) => Paginator<ListImagesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListImagesCommandInput,
  ListImagesCommandOutput
>(SageMakerClient, ListImagesCommand, "NextToken", "NextToken", "MaxResults");
