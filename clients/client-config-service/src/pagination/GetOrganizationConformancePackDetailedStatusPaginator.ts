// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOrganizationConformancePackDetailedStatusCommand,
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
} from "../commands/GetOrganizationConformancePackDetailedStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOrganizationConformancePackDetailedStatus: (
  config: ConfigServicePaginationConfiguration,
  input: GetOrganizationConformancePackDetailedStatusCommandInput,
  ...rest: any[]
) => Paginator<GetOrganizationConformancePackDetailedStatusCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput
>(ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand, "NextToken", "NextToken", "Limit");
