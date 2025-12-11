// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "../commands/ListArtifactsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListArtifacts: (
  config: SageMakerPaginationConfiguration,
  input: ListArtifactsCommandInput,
  ...rest: any[]
) => Paginator<ListArtifactsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput
>(SageMakerClient, ListArtifactsCommand, "NextToken", "NextToken", "MaxResults");
