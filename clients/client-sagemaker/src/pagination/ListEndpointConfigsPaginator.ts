// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEndpointConfigsCommand,
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "../commands/ListEndpointConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEndpointConfigs: (
  config: SageMakerPaginationConfiguration,
  input: ListEndpointConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListEndpointConfigsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput
>(SageMakerClient, ListEndpointConfigsCommand, "NextToken", "NextToken", "MaxResults");
