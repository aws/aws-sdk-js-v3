// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomerAccountBulkJobResultsCommand,
  ListCustomerAccountBulkJobResultsCommandInput,
  ListCustomerAccountBulkJobResultsCommandOutput,
} from "../commands/ListCustomerAccountBulkJobResultsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomerAccountBulkJobResults: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListCustomerAccountBulkJobResultsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomerAccountBulkJobResultsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListCustomerAccountBulkJobResultsCommandInput,
  ListCustomerAccountBulkJobResultsCommandOutput
>(PartnerCentralSellingClient, ListCustomerAccountBulkJobResultsCommand, "NextToken", "NextToken", "MaxResults");
