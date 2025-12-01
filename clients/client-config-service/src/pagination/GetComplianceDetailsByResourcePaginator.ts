// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetComplianceDetailsByResourceCommand,
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "../commands/GetComplianceDetailsByResourceCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetComplianceDetailsByResource: (
  config: ConfigServicePaginationConfiguration,
  input: GetComplianceDetailsByResourceCommandInput,
  ...rest: any[]
) => Paginator<GetComplianceDetailsByResourceCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput
>(ConfigServiceClient, GetComplianceDetailsByResourceCommand, "NextToken", "NextToken", "");
