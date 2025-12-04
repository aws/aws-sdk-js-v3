// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSensorStatisticsCommand,
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
} from "../commands/ListSensorStatisticsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSensorStatistics: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListSensorStatisticsCommandInput,
  ...rest: any[]
) => Paginator<ListSensorStatisticsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput
>(LookoutEquipmentClient, ListSensorStatisticsCommand, "NextToken", "NextToken", "MaxResults");
