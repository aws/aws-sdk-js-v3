// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { KinesisClient } from "../KinesisClient";
import type { KinesisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: KinesisPaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  KinesisPaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(KinesisClient, ListChannelsCommand, "NextToken", "NextToken", "MaxResults");
