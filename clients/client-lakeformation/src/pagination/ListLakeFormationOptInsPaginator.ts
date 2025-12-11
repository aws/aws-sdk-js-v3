// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLakeFormationOptInsCommand,
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput,
} from "../commands/ListLakeFormationOptInsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLakeFormationOptIns: (
  config: LakeFormationPaginationConfiguration,
  input: ListLakeFormationOptInsCommandInput,
  ...rest: any[]
) => Paginator<ListLakeFormationOptInsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput
>(LakeFormationClient, ListLakeFormationOptInsCommand, "NextToken", "NextToken", "MaxResults");
