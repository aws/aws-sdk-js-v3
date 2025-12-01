// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRetrainingSchedulersCommand,
  ListRetrainingSchedulersCommandInput,
  ListRetrainingSchedulersCommandOutput,
} from "../commands/ListRetrainingSchedulersCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRetrainingSchedulers: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListRetrainingSchedulersCommandInput,
  ...rest: any[]
) => Paginator<ListRetrainingSchedulersCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListRetrainingSchedulersCommandInput,
  ListRetrainingSchedulersCommandOutput
>(LookoutEquipmentClient, ListRetrainingSchedulersCommand, "NextToken", "NextToken", "MaxResults");
