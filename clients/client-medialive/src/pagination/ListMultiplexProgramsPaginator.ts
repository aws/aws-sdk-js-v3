// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMultiplexProgramsCommand,
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "../commands/ListMultiplexProgramsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultiplexPrograms: (
  config: MediaLivePaginationConfiguration,
  input: ListMultiplexProgramsCommandInput,
  ...rest: any[]
) => Paginator<ListMultiplexProgramsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput
>(MediaLiveClient, ListMultiplexProgramsCommand, "NextToken", "NextToken", "MaxResults");
