// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "../commands/GetConformancePackComplianceDetailsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConformancePackComplianceDetails: (
  config: ConfigServicePaginationConfiguration,
  input: GetConformancePackComplianceDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetConformancePackComplianceDetailsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput
>(ConfigServiceClient, GetConformancePackComplianceDetailsCommand, "NextToken", "NextToken", "Limit");
