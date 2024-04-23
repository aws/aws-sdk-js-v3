// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListJournalS3ExportsCommand,
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "../commands/ListJournalS3ExportsCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJournalS3Exports: (
  config: QLDBPaginationConfiguration,
  input: ListJournalS3ExportsCommandInput,
  ...rest: any[]
) => Paginator<ListJournalS3ExportsCommandOutput> = createPaginator<
  QLDBPaginationConfiguration,
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput
>(QLDBClient, ListJournalS3ExportsCommand, "NextToken", "NextToken", "MaxResults");
