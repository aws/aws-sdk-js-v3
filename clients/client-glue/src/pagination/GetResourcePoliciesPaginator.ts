// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourcePolicies: (
  config: GluePaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcePoliciesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput
>(GlueClient, GetResourcePoliciesCommand, "NextToken", "NextToken", "MaxResults");
