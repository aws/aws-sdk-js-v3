// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachedRolePoliciesCommand,
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "../commands/ListAttachedRolePoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedRolePolicies: (
  config: IAMPaginationConfiguration,
  input: ListAttachedRolePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedRolePoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput
>(IAMClient, ListAttachedRolePoliciesCommand, "Marker", "Marker", "MaxItems");
