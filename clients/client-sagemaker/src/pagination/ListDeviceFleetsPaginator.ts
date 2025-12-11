// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeviceFleetsCommand,
  ListDeviceFleetsCommandInput,
  ListDeviceFleetsCommandOutput,
} from "../commands/ListDeviceFleetsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeviceFleets: (
  config: SageMakerPaginationConfiguration,
  input: ListDeviceFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListDeviceFleetsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListDeviceFleetsCommandInput,
  ListDeviceFleetsCommandOutput
>(SageMakerClient, ListDeviceFleetsCommand, "NextToken", "NextToken", "MaxResults");
