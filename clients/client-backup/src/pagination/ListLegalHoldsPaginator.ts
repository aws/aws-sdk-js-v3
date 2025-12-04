// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListLegalHoldsCommand,
  ListLegalHoldsCommandInput,
  ListLegalHoldsCommandOutput,
} from "../commands/ListLegalHoldsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLegalHolds: (
  config: BackupPaginationConfiguration,
  input: ListLegalHoldsCommandInput,
  ...rest: any[]
) => Paginator<ListLegalHoldsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListLegalHoldsCommandInput,
  ListLegalHoldsCommandOutput
>(BackupClient, ListLegalHoldsCommand, "NextToken", "NextToken", "MaxResults");
