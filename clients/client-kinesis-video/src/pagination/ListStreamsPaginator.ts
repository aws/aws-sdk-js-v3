// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreams: (
  config: KinesisVideoPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamsCommandOutput> = createPaginator<
  KinesisVideoPaginationConfiguration,
  ListStreamsCommandInput,
  ListStreamsCommandOutput
>(KinesisVideoClient, ListStreamsCommand, "NextToken", "NextToken", "MaxResults");
