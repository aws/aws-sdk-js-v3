// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTableStorageOptimizersCommand,
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "../commands/ListTableStorageOptimizersCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableStorageOptimizers: (
  config: LakeFormationPaginationConfiguration,
  input: ListTableStorageOptimizersCommandInput,
  ...rest: any[]
) => Paginator<ListTableStorageOptimizersCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput
>(LakeFormationClient, ListTableStorageOptimizersCommand, "NextToken", "NextToken", "MaxResults");
