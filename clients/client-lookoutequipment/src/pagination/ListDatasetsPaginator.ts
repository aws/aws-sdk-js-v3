// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import type { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasets: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
>(LookoutEquipmentClient, ListDatasetsCommand, "NextToken", "NextToken", "MaxResults");
