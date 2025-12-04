// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThreatIntelSetsCommand,
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "../commands/ListThreatIntelSetsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThreatIntelSets: (
  config: GuardDutyPaginationConfiguration,
  input: ListThreatIntelSetsCommandInput,
  ...rest: any[]
) => Paginator<ListThreatIntelSetsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput
>(GuardDutyClient, ListThreatIntelSetsCommand, "NextToken", "NextToken", "MaxResults");
