// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoutingControlsCommand,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
} from "../commands/ListRoutingControlsCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutingControls: (
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListRoutingControlsCommandInput,
  ...rest: any[]
) => Paginator<ListRoutingControlsCommandOutput> = createPaginator<
  Route53RecoveryControlConfigPaginationConfiguration,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput
>(Route53RecoveryControlConfigClient, ListRoutingControlsCommand, "NextToken", "NextToken", "MaxResults");
