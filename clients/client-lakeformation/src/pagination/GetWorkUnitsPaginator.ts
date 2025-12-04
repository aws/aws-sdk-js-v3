// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetWorkUnitsCommand,
  GetWorkUnitsCommandInput,
  GetWorkUnitsCommandOutput,
} from "../commands/GetWorkUnitsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetWorkUnits: (
  config: LakeFormationPaginationConfiguration,
  input: GetWorkUnitsCommandInput,
  ...rest: any[]
) => Paginator<GetWorkUnitsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  GetWorkUnitsCommandInput,
  GetWorkUnitsCommandOutput
>(LakeFormationClient, GetWorkUnitsCommand, "NextToken", "NextToken", "PageSize");
