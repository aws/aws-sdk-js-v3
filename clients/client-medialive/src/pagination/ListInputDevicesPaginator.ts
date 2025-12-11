// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInputDevicesCommand,
  ListInputDevicesCommandInput,
  ListInputDevicesCommandOutput,
} from "../commands/ListInputDevicesCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInputDevices: (
  config: MediaLivePaginationConfiguration,
  input: ListInputDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListInputDevicesCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListInputDevicesCommandInput,
  ListInputDevicesCommandOutput
>(MediaLiveClient, ListInputDevicesCommand, "NextToken", "NextToken", "MaxResults");
