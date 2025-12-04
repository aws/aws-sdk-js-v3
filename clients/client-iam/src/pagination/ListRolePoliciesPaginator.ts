// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRolePoliciesCommand,
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "../commands/ListRolePoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRolePolicies: (
  config: IAMPaginationConfiguration,
  input: ListRolePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListRolePoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput
>(IAMClient, ListRolePoliciesCommand, "Marker", "Marker", "MaxItems");
