// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEffectivePermissionsForPathCommand,
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "../commands/GetEffectivePermissionsForPathCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEffectivePermissionsForPath: (
  config: LakeFormationPaginationConfiguration,
  input: GetEffectivePermissionsForPathCommandInput,
  ...rest: any[]
) => Paginator<GetEffectivePermissionsForPathCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput
>(LakeFormationClient, GetEffectivePermissionsForPathCommand, "NextToken", "NextToken", "MaxResults");
