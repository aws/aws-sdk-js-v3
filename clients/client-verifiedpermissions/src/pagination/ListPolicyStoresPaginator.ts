// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyStoresCommand,
  ListPolicyStoresCommandInput,
  ListPolicyStoresCommandOutput,
} from "../commands/ListPolicyStoresCommand";
import { VerifiedPermissionsClient } from "../VerifiedPermissionsClient";
import { VerifiedPermissionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyStores: (
  config: VerifiedPermissionsPaginationConfiguration,
  input: ListPolicyStoresCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyStoresCommandOutput> = createPaginator<
  VerifiedPermissionsPaginationConfiguration,
  ListPolicyStoresCommandInput,
  ListPolicyStoresCommandOutput
>(VerifiedPermissionsClient, ListPolicyStoresCommand, "nextToken", "nextToken", "maxResults");
