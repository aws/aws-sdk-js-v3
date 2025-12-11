// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServices: (
  config: ServiceQuotasPaginationConfiguration,
  input: ListServicesCommandInput,
  ...rest: any[]
) => Paginator<ListServicesCommandOutput> = createPaginator<
  ServiceQuotasPaginationConfiguration,
  ListServicesCommandInput,
  ListServicesCommandOutput
>(ServiceQuotasClient, ListServicesCommand, "NextToken", "NextToken", "MaxResults");
