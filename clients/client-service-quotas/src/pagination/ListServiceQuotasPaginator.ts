// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceQuotasCommand,
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
} from "../commands/ListServiceQuotasCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceQuotas: (
  config: ServiceQuotasPaginationConfiguration,
  input: ListServiceQuotasCommandInput,
  ...rest: any[]
) => Paginator<ListServiceQuotasCommandOutput> = createPaginator<
  ServiceQuotasPaginationConfiguration,
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput
>(ServiceQuotasClient, ListServiceQuotasCommand, "NextToken", "NextToken", "MaxResults");
