// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSignalingChannelsCommand,
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
} from "../commands/ListSignalingChannelsCommand";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSignalingChannels: (
  config: KinesisVideoPaginationConfiguration,
  input: ListSignalingChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListSignalingChannelsCommandOutput> = createPaginator<
  KinesisVideoPaginationConfiguration,
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput
>(KinesisVideoClient, ListSignalingChannelsCommand, "NextToken", "NextToken", "MaxResults");
