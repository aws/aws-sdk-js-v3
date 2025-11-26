// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComputeQuotasCommand,
  ListComputeQuotasCommandInput,
  ListComputeQuotasCommandOutput,
} from "../commands/ListComputeQuotasCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComputeQuotas: (
  config: SageMakerPaginationConfiguration,
  input: ListComputeQuotasCommandInput,
  ...rest: any[]
) => Paginator<ListComputeQuotasCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListComputeQuotasCommandInput,
  ListComputeQuotasCommandOutput
>(SageMakerClient, ListComputeQuotasCommand, "NextToken", "NextToken", "MaxResults");
