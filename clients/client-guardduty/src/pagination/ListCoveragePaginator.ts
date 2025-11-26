// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "../commands/ListCoverageCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoverage: (
  config: GuardDutyPaginationConfiguration,
  input: ListCoverageCommandInput,
  ...rest: any[]
) => Paginator<ListCoverageCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListCoverageCommandInput,
  ListCoverageCommandOutput
>(GuardDutyClient, ListCoverageCommand, "NextToken", "NextToken", "MaxResults");
