// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessEntriesCommand,
  ListAccessEntriesCommandInput,
  ListAccessEntriesCommandOutput,
} from "../commands/ListAccessEntriesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessEntries: (
  config: EKSPaginationConfiguration,
  input: ListAccessEntriesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessEntriesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListAccessEntriesCommandInput,
  ListAccessEntriesCommandOutput
>(EKSClient, ListAccessEntriesCommand, "nextToken", "nextToken", "maxResults");
