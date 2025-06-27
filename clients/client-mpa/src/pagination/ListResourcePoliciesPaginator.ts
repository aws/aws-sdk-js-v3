// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import { MPAClient } from "../MPAClient";
import { MPAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcePolicies: (
  config: MPAPaginationConfiguration,
  input: ListResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcePoliciesCommandOutput> = createPaginator<
  MPAPaginationConfiguration,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput
>(MPAClient, ListResourcePoliciesCommand, "NextToken", "NextToken", "MaxResults");
