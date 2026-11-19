// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomerAccountBulkJobsCommand,
  ListCustomerAccountBulkJobsCommandInput,
  ListCustomerAccountBulkJobsCommandOutput,
} from "../commands/ListCustomerAccountBulkJobsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomerAccountBulkJobs: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListCustomerAccountBulkJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomerAccountBulkJobsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListCustomerAccountBulkJobsCommandInput,
  ListCustomerAccountBulkJobsCommandOutput
>(PartnerCentralSellingClient, ListCustomerAccountBulkJobsCommand, "NextToken", "NextToken", "MaxResults");
