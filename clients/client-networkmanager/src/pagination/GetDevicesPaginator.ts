// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetDevicesCommand, GetDevicesCommandInput, GetDevicesCommandOutput } from "../commands/GetDevicesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDevices: (
  config: NetworkManagerPaginationConfiguration,
  input: GetDevicesCommandInput,
  ...rest: any[]
) => Paginator<GetDevicesCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetDevicesCommandInput,
  GetDevicesCommandOutput
>(NetworkManagerClient, GetDevicesCommand, "NextToken", "NextToken", "MaxResults");
