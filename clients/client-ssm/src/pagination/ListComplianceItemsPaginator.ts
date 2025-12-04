// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComplianceItemsCommand,
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "../commands/ListComplianceItemsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComplianceItems: (
  config: SSMPaginationConfiguration,
  input: ListComplianceItemsCommandInput,
  ...rest: any[]
) => Paginator<ListComplianceItemsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput
>(SSMClient, ListComplianceItemsCommand, "NextToken", "NextToken", "MaxResults");
