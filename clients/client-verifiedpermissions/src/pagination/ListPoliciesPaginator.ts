// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import { VerifiedPermissionsClient } from "../VerifiedPermissionsClient";
import { VerifiedPermissionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicies: (
  config: VerifiedPermissionsPaginationConfiguration,
  input: ListPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPoliciesCommandOutput> = createPaginator<
  VerifiedPermissionsPaginationConfiguration,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
>(VerifiedPermissionsClient, ListPoliciesCommand, "nextToken", "nextToken", "maxResults");
