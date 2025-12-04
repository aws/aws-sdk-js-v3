// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "../commands/ListProfilesCommand";
import { Route53ProfilesClient } from "../Route53ProfilesClient";
import { Route53ProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfiles: (
  config: Route53ProfilesPaginationConfiguration,
  input: ListProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProfilesCommandOutput> = createPaginator<
  Route53ProfilesPaginationConfiguration,
  ListProfilesCommandInput,
  ListProfilesCommandOutput
>(Route53ProfilesClient, ListProfilesCommand, "NextToken", "NextToken", "MaxResults");
