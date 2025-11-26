// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { B2biClient } from "../B2biClient";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "../commands/ListProfilesCommand";
import { B2biPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfiles: (
  config: B2biPaginationConfiguration,
  input: ListProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProfilesCommandOutput> = createPaginator<
  B2biPaginationConfiguration,
  ListProfilesCommandInput,
  ListProfilesCommandOutput
>(B2biClient, ListProfilesCommand, "nextToken", "nextToken", "maxResults");
