// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTrialsCommand, ListTrialsCommandInput, ListTrialsCommandOutput } from "../commands/ListTrialsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrials: (
  config: SageMakerPaginationConfiguration,
  input: ListTrialsCommandInput,
  ...rest: any[]
) => Paginator<ListTrialsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTrialsCommandInput,
  ListTrialsCommandOutput
>(SageMakerClient, ListTrialsCommand, "NextToken", "NextToken", "MaxResults");
