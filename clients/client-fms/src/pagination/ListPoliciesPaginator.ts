// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicies: (
  config: FMSPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPoliciesCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
>(FMSClient, ListPoliciesCommand, "NextToken", "NextToken", "MaxResults");
