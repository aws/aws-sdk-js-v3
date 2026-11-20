// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGlobalInferenceGatewaysCommand,
  ListGlobalInferenceGatewaysCommandInput,
  ListGlobalInferenceGatewaysCommandOutput,
} from "../commands/ListGlobalInferenceGatewaysCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGlobalInferenceGateways: (
  config: SageMakerPaginationConfiguration,
  input: ListGlobalInferenceGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListGlobalInferenceGatewaysCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListGlobalInferenceGatewaysCommandInput,
  ListGlobalInferenceGatewaysCommandOutput
>(SageMakerClient, ListGlobalInferenceGatewaysCommand, "NextToken", "NextToken", "MaxResults");
