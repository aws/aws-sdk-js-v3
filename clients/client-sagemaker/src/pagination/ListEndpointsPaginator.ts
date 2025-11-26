// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "../commands/ListEndpointsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEndpoints: (
  config: SageMakerPaginationConfiguration,
  input: ListEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListEndpointsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput
>(SageMakerClient, ListEndpointsCommand, "NextToken", "NextToken", "MaxResults");
