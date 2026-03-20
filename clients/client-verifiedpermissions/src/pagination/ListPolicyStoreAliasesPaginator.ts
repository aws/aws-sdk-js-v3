// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyStoreAliasesCommand,
  ListPolicyStoreAliasesCommandInput,
  ListPolicyStoreAliasesCommandOutput,
} from "../commands/ListPolicyStoreAliasesCommand";
import { VerifiedPermissionsClient } from "../VerifiedPermissionsClient";
import { VerifiedPermissionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyStoreAliases: (
  config: VerifiedPermissionsPaginationConfiguration,
  input: ListPolicyStoreAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyStoreAliasesCommandOutput> = createPaginator<
  VerifiedPermissionsPaginationConfiguration,
  ListPolicyStoreAliasesCommandInput,
  ListPolicyStoreAliasesCommandOutput
>(VerifiedPermissionsClient, ListPolicyStoreAliasesCommand, "nextToken", "nextToken", "maxResults");
