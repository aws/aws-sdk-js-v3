// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListJournalS3ExportsForLedgerCommand,
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "../commands/ListJournalS3ExportsForLedgerCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJournalS3ExportsForLedger: (
  config: QLDBPaginationConfiguration,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...rest: any[]
) => Paginator<ListJournalS3ExportsForLedgerCommandOutput> = createPaginator<
  QLDBPaginationConfiguration,
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput
>(QLDBClient, ListJournalS3ExportsForLedgerCommand, "NextToken", "NextToken", "MaxResults");
