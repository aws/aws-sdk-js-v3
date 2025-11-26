// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "../commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceQuotaIncreaseRequestsInTemplate: (
  config: ServiceQuotasPaginationConfiguration,
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ...rest: any[]
) => Paginator<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> = createPaginator<
  ServiceQuotasPaginationConfiguration,
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
>(ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand, "NextToken", "NextToken", "MaxResults");
