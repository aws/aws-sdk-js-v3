// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachedUserPoliciesCommand,
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "../commands/ListAttachedUserPoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedUserPolicies: (
  config: IAMPaginationConfiguration,
  input: ListAttachedUserPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedUserPoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput
>(IAMClient, ListAttachedUserPoliciesCommand, "Marker", "Marker", "MaxItems");
