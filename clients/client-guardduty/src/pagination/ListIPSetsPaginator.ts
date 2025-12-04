// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIPSets: (
  config: GuardDutyPaginationConfiguration,
  input: ListIPSetsCommandInput,
  ...rest: any[]
) => Paginator<ListIPSetsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListIPSetsCommandInput,
  ListIPSetsCommandOutput
>(GuardDutyClient, ListIPSetsCommand, "NextToken", "NextToken", "MaxResults");
