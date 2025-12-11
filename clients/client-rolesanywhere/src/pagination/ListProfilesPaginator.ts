// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "../commands/ListProfilesCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfiles: (
  config: RolesAnywherePaginationConfiguration,
  input: ListProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProfilesCommandOutput> = createPaginator<
  RolesAnywherePaginationConfiguration,
  ListProfilesCommandInput,
  ListProfilesCommandOutput
>(RolesAnywhereClient, ListProfilesCommand, "nextToken", "nextToken", "");
