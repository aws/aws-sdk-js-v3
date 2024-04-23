// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "../commands/SearchDevicesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDevices: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchDevicesCommandInput,
  ...rest: any[]
) => Paginator<SearchDevicesCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput
>(AlexaForBusinessClient, SearchDevicesCommand, "NextToken", "NextToken", "MaxResults");
