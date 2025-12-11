// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceDataSyncCommand,
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "../commands/ListResourceDataSyncCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceDataSync: (
  config: SSMPaginationConfiguration,
  input: ListResourceDataSyncCommandInput,
  ...rest: any[]
) => Paginator<ListResourceDataSyncCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput
>(SSMClient, ListResourceDataSyncCommand, "NextToken", "NextToken", "MaxResults");
