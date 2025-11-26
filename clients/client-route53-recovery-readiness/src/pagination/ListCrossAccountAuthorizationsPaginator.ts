// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCrossAccountAuthorizationsCommand,
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
} from "../commands/ListCrossAccountAuthorizationsCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCrossAccountAuthorizations: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListCrossAccountAuthorizationsCommandInput,
  ...rest: any[]
) => Paginator<ListCrossAccountAuthorizationsCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput
>(Route53RecoveryReadinessClient, ListCrossAccountAuthorizationsCommand, "NextToken", "NextToken", "MaxResults");
