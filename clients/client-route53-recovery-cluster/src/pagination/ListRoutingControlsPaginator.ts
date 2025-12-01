// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoutingControlsCommand,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
} from "../commands/ListRoutingControlsCommand";
import { Route53RecoveryClusterClient } from "../Route53RecoveryClusterClient";
import { Route53RecoveryClusterPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutingControls: (
  config: Route53RecoveryClusterPaginationConfiguration,
  input: ListRoutingControlsCommandInput,
  ...rest: any[]
) => Paginator<ListRoutingControlsCommandOutput> = createPaginator<
  Route53RecoveryClusterPaginationConfiguration,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput
>(Route53RecoveryClusterClient, ListRoutingControlsCommand, "NextToken", "NextToken", "MaxResults");
