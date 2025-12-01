// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserPoliciesCommand,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "../commands/ListUserPoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserPolicies: (
  config: IAMPaginationConfiguration,
  input: ListUserPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListUserPoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput
>(IAMClient, ListUserPoliciesCommand, "Marker", "Marker", "MaxItems");
