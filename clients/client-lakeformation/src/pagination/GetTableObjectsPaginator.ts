// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTableObjectsCommand,
  GetTableObjectsCommandInput,
  GetTableObjectsCommandOutput,
} from "../commands/GetTableObjectsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTableObjects: (
  config: LakeFormationPaginationConfiguration,
  input: GetTableObjectsCommandInput,
  ...rest: any[]
) => Paginator<GetTableObjectsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  GetTableObjectsCommandInput,
  GetTableObjectsCommandOutput
>(LakeFormationClient, GetTableObjectsCommand, "NextToken", "NextToken", "MaxResults");
