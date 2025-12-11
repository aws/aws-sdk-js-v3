// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStageDevicesCommand,
  ListStageDevicesCommandInput,
  ListStageDevicesCommandOutput,
} from "../commands/ListStageDevicesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStageDevices: (
  config: SageMakerPaginationConfiguration,
  input: ListStageDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListStageDevicesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListStageDevicesCommandInput,
  ListStageDevicesCommandOutput
>(SageMakerClient, ListStageDevicesCommand, "NextToken", "NextToken", "MaxResults");
