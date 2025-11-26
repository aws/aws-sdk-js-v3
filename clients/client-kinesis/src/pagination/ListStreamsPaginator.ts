// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KinesisClient } from "../KinesisClient";
import { KinesisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreams: (
  config: KinesisPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamsCommandOutput> = createPaginator<
  KinesisPaginationConfiguration,
  ListStreamsCommandInput,
  ListStreamsCommandOutput
>(KinesisClient, ListStreamsCommand, "NextToken", "NextToken", "Limit");
