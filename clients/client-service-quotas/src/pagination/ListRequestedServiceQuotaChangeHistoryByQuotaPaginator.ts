// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "../commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRequestedServiceQuotaChangeHistoryByQuota: (
  config: ServiceQuotasPaginationConfiguration,
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ...rest: any[]
) => Paginator<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> = createPaginator<
  ServiceQuotasPaginationConfiguration,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
>(ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand, "NextToken", "NextToken", "MaxResults");
