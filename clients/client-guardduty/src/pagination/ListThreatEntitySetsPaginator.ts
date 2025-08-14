// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListThreatEntitySetsCommand,
  ListThreatEntitySetsCommandInput,
  ListThreatEntitySetsCommandOutput,
} from "../commands/ListThreatEntitySetsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThreatEntitySets: (
  config: GuardDutyPaginationConfiguration,
  input: ListThreatEntitySetsCommandInput,
  ...rest: any[]
) => Paginator<ListThreatEntitySetsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListThreatEntitySetsCommandInput,
  ListThreatEntitySetsCommandOutput
>(GuardDutyClient, ListThreatEntitySetsCommand, "NextToken", "NextToken", "MaxResults");
