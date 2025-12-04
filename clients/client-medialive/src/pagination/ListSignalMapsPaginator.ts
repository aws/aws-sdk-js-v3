// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSignalMapsCommand,
  ListSignalMapsCommandInput,
  ListSignalMapsCommandOutput,
} from "../commands/ListSignalMapsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSignalMaps: (
  config: MediaLivePaginationConfiguration,
  input: ListSignalMapsCommandInput,
  ...rest: any[]
) => Paginator<ListSignalMapsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListSignalMapsCommandInput,
  ListSignalMapsCommandOutput
>(MediaLiveClient, ListSignalMapsCommand, "NextToken", "NextToken", "MaxResults");
