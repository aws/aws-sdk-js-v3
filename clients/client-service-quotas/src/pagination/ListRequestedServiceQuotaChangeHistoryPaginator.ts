// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "../commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRequestedServiceQuotaChangeHistory: (
  config: ServiceQuotasPaginationConfiguration,
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListRequestedServiceQuotaChangeHistoryCommandOutput> = createPaginator<
  ServiceQuotasPaginationConfiguration,
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput
>(ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryCommand, "NextToken", "NextToken", "MaxResults");
