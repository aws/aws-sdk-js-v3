// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelMetadataCommand,
  ListModelMetadataCommandInput,
  ListModelMetadataCommandOutput,
} from "../commands/ListModelMetadataCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelMetadata: (
  config: SageMakerPaginationConfiguration,
  input: ListModelMetadataCommandInput,
  ...rest: any[]
) => Paginator<ListModelMetadataCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelMetadataCommandInput,
  ListModelMetadataCommandOutput
>(SageMakerClient, ListModelMetadataCommand, "NextToken", "NextToken", "MaxResults");
