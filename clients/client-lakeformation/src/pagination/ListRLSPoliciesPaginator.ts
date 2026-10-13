// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRLSPoliciesCommand,
  ListRLSPoliciesCommandInput,
  ListRLSPoliciesCommandOutput,
} from "../commands/ListRLSPoliciesCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import type { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRLSPolicies: (
  config: LakeFormationPaginationConfiguration,
  input: ListRLSPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListRLSPoliciesCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListRLSPoliciesCommandInput,
  ListRLSPoliciesCommandOutput
>(LakeFormationClient, ListRLSPoliciesCommand, "NextToken", "NextToken", "MaxResults");
