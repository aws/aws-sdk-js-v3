// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceComponentsCommand,
  ListInferenceComponentsCommandInput,
  ListInferenceComponentsCommandOutput,
} from "../commands/ListInferenceComponentsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceComponents: (
  config: SageMakerPaginationConfiguration,
  input: ListInferenceComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceComponentsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListInferenceComponentsCommandInput,
  ListInferenceComponentsCommandOutput
>(SageMakerClient, ListInferenceComponentsCommand, "NextToken", "NextToken", "MaxResults");
