// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCandidatesForAutoMLJobCommand,
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "../commands/ListCandidatesForAutoMLJobCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCandidatesForAutoMLJob: (
  config: SageMakerPaginationConfiguration,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...rest: any[]
) => Paginator<ListCandidatesForAutoMLJobCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput
>(SageMakerClient, ListCandidatesForAutoMLJobCommand, "NextToken", "NextToken", "MaxResults");
