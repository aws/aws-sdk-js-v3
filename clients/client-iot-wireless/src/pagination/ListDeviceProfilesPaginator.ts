// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeviceProfilesCommand,
  ListDeviceProfilesCommandInput,
  ListDeviceProfilesCommandOutput,
} from "../commands/ListDeviceProfilesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeviceProfiles: (
  config: IoTWirelessPaginationConfiguration,
  input: ListDeviceProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListDeviceProfilesCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListDeviceProfilesCommandInput,
  ListDeviceProfilesCommandOutput
>(IoTWirelessClient, ListDeviceProfilesCommand, "NextToken", "NextToken", "MaxResults");
