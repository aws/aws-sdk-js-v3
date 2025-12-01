// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStorageProfilesForQueueCommand,
  ListStorageProfilesForQueueCommandInput,
  ListStorageProfilesForQueueCommandOutput,
} from "../commands/ListStorageProfilesForQueueCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStorageProfilesForQueue: (
  config: DeadlinePaginationConfiguration,
  input: ListStorageProfilesForQueueCommandInput,
  ...rest: any[]
) => Paginator<ListStorageProfilesForQueueCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListStorageProfilesForQueueCommandInput,
  ListStorageProfilesForQueueCommandOutput
>(DeadlineClient, ListStorageProfilesForQueueCommand, "nextToken", "nextToken", "maxResults");
