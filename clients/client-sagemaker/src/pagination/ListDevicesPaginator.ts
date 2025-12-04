// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevices: (
  config: SageMakerPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListDevicesCommandInput,
  ListDevicesCommandOutput
>(SageMakerClient, ListDevicesCommand, "NextToken", "NextToken", "MaxResults");
