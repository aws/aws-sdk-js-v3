// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevices: (
  config: PanoramaPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListDevicesCommandInput,
  ListDevicesCommandOutput
>(PanoramaClient, ListDevicesCommand, "NextToken", "NextToken", "MaxResults");
