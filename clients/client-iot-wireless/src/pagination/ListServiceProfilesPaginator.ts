// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceProfilesCommand,
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput,
} from "../commands/ListServiceProfilesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceProfiles: (
  config: IoTWirelessPaginationConfiguration,
  input: ListServiceProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceProfilesCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput
>(IoTWirelessClient, ListServiceProfilesCommand, "NextToken", "NextToken", "MaxResults");
