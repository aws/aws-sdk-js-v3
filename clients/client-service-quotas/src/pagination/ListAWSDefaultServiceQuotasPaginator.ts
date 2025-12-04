// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "../commands/ListAWSDefaultServiceQuotasCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAWSDefaultServiceQuotas: (
  config: ServiceQuotasPaginationConfiguration,
  input: ListAWSDefaultServiceQuotasCommandInput,
  ...rest: any[]
) => Paginator<ListAWSDefaultServiceQuotasCommandOutput> = createPaginator<
  ServiceQuotasPaginationConfiguration,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput
>(ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand, "NextToken", "NextToken", "MaxResults");
