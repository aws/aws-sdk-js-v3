// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListTrustedEntitySetsCommand,
  ListTrustedEntitySetsCommandInput,
  ListTrustedEntitySetsCommandOutput,
} from "../commands/ListTrustedEntitySetsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustedEntitySets: (
  config: GuardDutyPaginationConfiguration,
  input: ListTrustedEntitySetsCommandInput,
  ...rest: any[]
) => Paginator<ListTrustedEntitySetsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListTrustedEntitySetsCommandInput,
  ListTrustedEntitySetsCommandOutput
>(GuardDutyClient, ListTrustedEntitySetsCommand, "NextToken", "NextToken", "MaxResults");
