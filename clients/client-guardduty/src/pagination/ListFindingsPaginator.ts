// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindings: (
  config: GuardDutyPaginationConfiguration,
  input: ListFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListFindingsCommandInput,
  ListFindingsCommandOutput
>(GuardDutyClient, ListFindingsCommand, "NextToken", "NextToken", "MaxResults");
