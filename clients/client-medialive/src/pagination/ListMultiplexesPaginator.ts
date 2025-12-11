// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMultiplexesCommand,
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput,
} from "../commands/ListMultiplexesCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultiplexes: (
  config: MediaLivePaginationConfiguration,
  input: ListMultiplexesCommandInput,
  ...rest: any[]
) => Paginator<ListMultiplexesCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput
>(MediaLiveClient, ListMultiplexesCommand, "NextToken", "NextToken", "MaxResults");
