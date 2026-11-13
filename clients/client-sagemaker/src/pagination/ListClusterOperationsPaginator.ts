// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterOperationsCommand,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "../commands/ListClusterOperationsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterOperations: (
  config: SageMakerPaginationConfiguration,
  input: ListClusterOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterOperationsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput
>(SageMakerClient, ListClusterOperationsCommand, "NextToken", "NextToken", "MaxResults");
