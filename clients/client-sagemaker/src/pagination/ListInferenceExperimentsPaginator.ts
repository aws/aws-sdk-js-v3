// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceExperimentsCommand,
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput,
} from "../commands/ListInferenceExperimentsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceExperiments: (
  config: SageMakerPaginationConfiguration,
  input: ListInferenceExperimentsCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceExperimentsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput
>(SageMakerClient, ListInferenceExperimentsCommand, "NextToken", "NextToken", "MaxResults");
