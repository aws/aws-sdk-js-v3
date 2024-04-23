// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListJournalKinesisStreamsForLedgerCommand,
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJournalKinesisStreamsForLedger: (
  config: QLDBPaginationConfiguration,
  input: ListJournalKinesisStreamsForLedgerCommandInput,
  ...rest: any[]
) => Paginator<ListJournalKinesisStreamsForLedgerCommandOutput> = createPaginator<
  QLDBPaginationConfiguration,
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput
>(QLDBClient, ListJournalKinesisStreamsForLedgerCommand, "NextToken", "NextToken", "MaxResults");
