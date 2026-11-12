// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvestigationRecordsCommand,
  ListInvestigationRecordsCommandInput,
  ListInvestigationRecordsCommandOutput,
} from "../commands/ListInvestigationRecordsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import type { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvestigationRecords: (
  config: GuardDutyPaginationConfiguration,
  input: ListInvestigationRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListInvestigationRecordsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListInvestigationRecordsCommandInput,
  ListInvestigationRecordsCommandOutput
>(GuardDutyClient, ListInvestigationRecordsCommand, "NextToken", "NextToken", "MaxResults");
