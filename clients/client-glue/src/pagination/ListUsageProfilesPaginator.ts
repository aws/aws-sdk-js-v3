// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUsageProfilesCommand,
  ListUsageProfilesCommandInput,
  ListUsageProfilesCommandOutput,
} from "../commands/ListUsageProfilesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsageProfiles: (
  config: GluePaginationConfiguration,
  input: ListUsageProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListUsageProfilesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListUsageProfilesCommandInput,
  ListUsageProfilesCommandOutput
>(GlueClient, ListUsageProfilesCommand, "NextToken", "NextToken", "MaxResults");
