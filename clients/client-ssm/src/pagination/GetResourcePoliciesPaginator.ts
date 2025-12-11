// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourcePolicies: (
  config: SSMPaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcePoliciesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput
>(SSMClient, GetResourcePoliciesCommand, "NextToken", "NextToken", "MaxResults");
