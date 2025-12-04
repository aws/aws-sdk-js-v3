// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicies: (
  config: IAMPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
>(IAMClient, ListPoliciesCommand, "Marker", "Marker", "MaxItems");
