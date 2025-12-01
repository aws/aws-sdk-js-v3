// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVirtualClustersCommand,
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "../commands/ListVirtualClustersCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualClusters: (
  config: EMRContainersPaginationConfiguration,
  input: ListVirtualClustersCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualClustersCommandOutput> = createPaginator<
  EMRContainersPaginationConfiguration,
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput
>(EMRContainersClient, ListVirtualClustersCommand, "nextToken", "nextToken", "maxResults");
