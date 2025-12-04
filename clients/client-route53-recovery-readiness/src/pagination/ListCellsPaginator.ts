// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListCellsCommand, ListCellsCommandInput, ListCellsCommandOutput } from "../commands/ListCellsCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCells: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListCellsCommandInput,
  ...rest: any[]
) => Paginator<ListCellsCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  ListCellsCommandInput,
  ListCellsCommandOutput
>(Route53RecoveryReadinessClient, ListCellsCommand, "NextToken", "NextToken", "MaxResults");
