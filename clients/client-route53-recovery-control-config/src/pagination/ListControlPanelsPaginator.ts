// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListControlPanelsCommand,
  ListControlPanelsCommandInput,
  ListControlPanelsCommandOutput,
} from "../commands/ListControlPanelsCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControlPanels: (
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListControlPanelsCommandInput,
  ...rest: any[]
) => Paginator<ListControlPanelsCommandOutput> = createPaginator<
  Route53RecoveryControlConfigPaginationConfiguration,
  ListControlPanelsCommandInput,
  ListControlPanelsCommandOutput
>(Route53RecoveryControlConfigClient, ListControlPanelsCommand, "NextToken", "NextToken", "MaxResults");
