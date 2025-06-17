// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { MPAClient } from "../MPAClient";
import { MPAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicies: (
  config: MPAPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPoliciesCommandOutput> = createPaginator<
  MPAPaginationConfiguration,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
>(MPAClient, ListPoliciesCommand, "NextToken", "NextToken", "MaxResults");
