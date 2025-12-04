// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcePolicies: (
  config: XRayPaginationConfiguration,
  input: ListResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcePoliciesCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput
>(XRayClient, ListResourcePoliciesCommand, "NextToken", "NextToken", "");
