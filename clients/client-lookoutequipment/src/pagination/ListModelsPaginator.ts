// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModels: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListModelsCommandInput,
  ...rest: any[]
) => Paginator<ListModelsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListModelsCommandInput,
  ListModelsCommandOutput
>(LookoutEquipmentClient, ListModelsCommand, "NextToken", "NextToken", "MaxResults");
