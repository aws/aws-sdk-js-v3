// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourcePolicies: (
  config: RAMPaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcePoliciesCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput
>(RAMClient, GetResourcePoliciesCommand, "nextToken", "nextToken", "maxResults");
