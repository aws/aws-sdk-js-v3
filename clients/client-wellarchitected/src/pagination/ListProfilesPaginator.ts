// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "../commands/ListProfilesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfiles: (
  config: WellArchitectedPaginationConfiguration,
  input: ListProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProfilesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListProfilesCommandInput,
  ListProfilesCommandOutput
>(WellArchitectedClient, ListProfilesCommand, "NextToken", "NextToken", "MaxResults");
