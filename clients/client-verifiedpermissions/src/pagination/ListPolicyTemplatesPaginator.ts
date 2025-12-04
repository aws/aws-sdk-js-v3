// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyTemplatesCommand,
  ListPolicyTemplatesCommandInput,
  ListPolicyTemplatesCommandOutput,
} from "../commands/ListPolicyTemplatesCommand";
import { VerifiedPermissionsClient } from "../VerifiedPermissionsClient";
import { VerifiedPermissionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyTemplates: (
  config: VerifiedPermissionsPaginationConfiguration,
  input: ListPolicyTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyTemplatesCommandOutput> = createPaginator<
  VerifiedPermissionsPaginationConfiguration,
  ListPolicyTemplatesCommandInput,
  ListPolicyTemplatesCommandOutput
>(VerifiedPermissionsClient, ListPolicyTemplatesCommand, "nextToken", "nextToken", "maxResults");
