// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachedGroupPoliciesCommand,
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "../commands/ListAttachedGroupPoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedGroupPolicies: (
  config: IAMPaginationConfiguration,
  input: ListAttachedGroupPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedGroupPoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput
>(IAMClient, ListAttachedGroupPoliciesCommand, "Marker", "Marker", "MaxItems");
