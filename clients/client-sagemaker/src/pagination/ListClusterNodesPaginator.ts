// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListClusterNodesCommand,
  ListClusterNodesCommandInput,
  ListClusterNodesCommandOutput,
} from "../commands/ListClusterNodesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterNodes: (
  config: SageMakerPaginationConfiguration,
  input: ListClusterNodesCommandInput,
  ...rest: any[]
) => Paginator<ListClusterNodesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListClusterNodesCommandInput,
  ListClusterNodesCommandOutput
>(SageMakerClient, ListClusterNodesCommand, "NextToken", "NextToken", "MaxResults");
