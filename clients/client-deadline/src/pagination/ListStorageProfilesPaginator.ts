// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStorageProfilesCommand,
  ListStorageProfilesCommandInput,
  ListStorageProfilesCommandOutput,
} from "../commands/ListStorageProfilesCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStorageProfiles: (
  config: DeadlinePaginationConfiguration,
  input: ListStorageProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListStorageProfilesCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListStorageProfilesCommandInput,
  ListStorageProfilesCommandOutput
>(DeadlineClient, ListStorageProfilesCommand, "nextToken", "nextToken", "maxResults");
