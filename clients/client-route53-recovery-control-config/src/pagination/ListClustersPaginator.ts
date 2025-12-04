// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  Route53RecoveryControlConfigPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(Route53RecoveryControlConfigClient, ListClustersCommand, "NextToken", "NextToken", "MaxResults");
