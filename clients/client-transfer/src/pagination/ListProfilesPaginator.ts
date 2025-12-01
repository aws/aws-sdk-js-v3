// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "../commands/ListProfilesCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfiles: (
  config: TransferPaginationConfiguration,
  input: ListProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProfilesCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListProfilesCommandInput,
  ListProfilesCommandOutput
>(TransferClient, ListProfilesCommand, "NextToken", "NextToken", "MaxResults");
