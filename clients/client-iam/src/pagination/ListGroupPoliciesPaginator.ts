// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupPoliciesCommand,
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "../commands/ListGroupPoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupPolicies: (
  config: IAMPaginationConfiguration,
  input: ListGroupPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListGroupPoliciesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput
>(IAMClient, ListGroupPoliciesCommand, "Marker", "Marker", "MaxItems");
