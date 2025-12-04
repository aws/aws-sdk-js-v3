// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissions: (
  config: LakeFormationPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
>(LakeFormationClient, ListPermissionsCommand, "NextToken", "NextToken", "MaxResults");
