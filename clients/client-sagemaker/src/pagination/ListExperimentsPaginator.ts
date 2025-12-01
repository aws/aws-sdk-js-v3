// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "../commands/ListExperimentsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperiments: (
  config: SageMakerPaginationConfiguration,
  input: ListExperimentsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput
>(SageMakerClient, ListExperimentsCommand, "NextToken", "NextToken", "MaxResults");
