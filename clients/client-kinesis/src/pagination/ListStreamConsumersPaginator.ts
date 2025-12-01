// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamConsumersCommand,
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "../commands/ListStreamConsumersCommand";
import { KinesisClient } from "../KinesisClient";
import { KinesisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamConsumers: (
  config: KinesisPaginationConfiguration,
  input: ListStreamConsumersCommandInput,
  ...rest: any[]
) => Paginator<ListStreamConsumersCommandOutput> = createPaginator<
  KinesisPaginationConfiguration,
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput
>(KinesisClient, ListStreamConsumersCommand, "NextToken", "NextToken", "MaxResults");
