// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "../commands/ListAccessPoliciesCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPolicies: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListAccessPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPoliciesCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput
>(OpenSearchServerlessClient, ListAccessPoliciesCommand, "nextToken", "nextToken", "");
