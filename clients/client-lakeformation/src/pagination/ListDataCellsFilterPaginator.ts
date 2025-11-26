// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataCellsFilterCommand,
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "../commands/ListDataCellsFilterCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataCellsFilter: (
  config: LakeFormationPaginationConfiguration,
  input: ListDataCellsFilterCommandInput,
  ...rest: any[]
) => Paginator<ListDataCellsFilterCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput
>(LakeFormationClient, ListDataCellsFilterCommand, "NextToken", "NextToken", "MaxResults");
