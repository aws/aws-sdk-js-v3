// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInputDeviceTransfersCommand,
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "../commands/ListInputDeviceTransfersCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInputDeviceTransfers: (
  config: MediaLivePaginationConfiguration,
  input: ListInputDeviceTransfersCommandInput,
  ...rest: any[]
) => Paginator<ListInputDeviceTransfersCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput
>(MediaLiveClient, ListInputDeviceTransfersCommand, "NextToken", "NextToken", "MaxResults");
