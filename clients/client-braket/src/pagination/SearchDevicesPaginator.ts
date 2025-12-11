// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BraketClient } from "../BraketClient";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "../commands/SearchDevicesCommand";
import { BraketPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDevices: (
  config: BraketPaginationConfiguration,
  input: SearchDevicesCommandInput,
  ...rest: any[]
) => Paginator<SearchDevicesCommandOutput> = createPaginator<
  BraketPaginationConfiguration,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput
>(BraketClient, SearchDevicesCommand, "nextToken", "nextToken", "maxResults");
