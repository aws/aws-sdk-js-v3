// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLabelsCommand, ListLabelsCommandInput, ListLabelsCommandOutput } from "../commands/ListLabelsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLabels: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListLabelsCommandInput,
  ...rest: any[]
) => Paginator<ListLabelsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListLabelsCommandInput,
  ListLabelsCommandOutput
>(LookoutEquipmentClient, ListLabelsCommand, "NextToken", "NextToken", "MaxResults");
