// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "../commands/ListDetectorsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDetectors: (
  config: GuardDutyPaginationConfiguration,
  input: ListDetectorsCommandInput,
  ...rest: any[]
) => Paginator<ListDetectorsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput
>(GuardDutyClient, ListDetectorsCommand, "NextToken", "NextToken", "MaxResults");
