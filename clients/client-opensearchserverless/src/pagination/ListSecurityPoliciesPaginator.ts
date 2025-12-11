// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityPolicies: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListSecurityPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityPoliciesCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput
>(OpenSearchServerlessClient, ListSecurityPoliciesCommand, "nextToken", "nextToken", "");
