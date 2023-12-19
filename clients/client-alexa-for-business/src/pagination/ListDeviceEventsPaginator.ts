// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListDeviceEventsCommand,
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput,
} from "../commands/ListDeviceEventsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeviceEvents: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListDeviceEventsCommandInput,
  ...rest: any[]
) => Paginator<ListDeviceEventsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput
>(AlexaForBusinessClient, ListDeviceEventsCommand, "NextToken", "NextToken", "MaxResults");
