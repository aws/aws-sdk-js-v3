// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvestigationsCommand,
  ListInvestigationsCommandInput,
  ListInvestigationsCommandOutput,
} from "../commands/ListInvestigationsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import type { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvestigations: (
  config: GuardDutyPaginationConfiguration,
  input: ListInvestigationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvestigationsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListInvestigationsCommandInput,
  ListInvestigationsCommandOutput
>(GuardDutyClient, ListInvestigationsCommand, "NextToken", "NextToken", "MaxResults");
