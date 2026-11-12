// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import type { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcePolicies: (
  config: SecretsManagerPaginationConfiguration,
  input: ListResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcePoliciesCommandOutput> = createPaginator<
  SecretsManagerPaginationConfiguration,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput
>(SecretsManagerClient, ListResourcePoliciesCommand, "NextToken", "NextToken", "MaxResults");
