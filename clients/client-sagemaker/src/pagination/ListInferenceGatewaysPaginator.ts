// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceGatewaysCommand,
  ListInferenceGatewaysCommandInput,
  ListInferenceGatewaysCommandOutput,
} from "../commands/ListInferenceGatewaysCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceGateways: (
  config: SageMakerPaginationConfiguration,
  input: ListInferenceGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceGatewaysCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListInferenceGatewaysCommandInput,
  ListInferenceGatewaysCommandOutput
>(SageMakerClient, ListInferenceGatewaysCommand, "NextToken", "NextToken", "MaxResults");
