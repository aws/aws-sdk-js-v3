// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFinancialRecordsCommand,
  ListFinancialRecordsCommandInput,
  ListFinancialRecordsCommandOutput,
} from "../commands/ListFinancialRecordsCommand";
import { PaymentsClient } from "../PaymentsClient";
import type { PaymentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFinancialRecords: (
  config: PaymentsPaginationConfiguration,
  input: ListFinancialRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListFinancialRecordsCommandOutput> = createPaginator<
  PaymentsPaginationConfiguration,
  ListFinancialRecordsCommandInput,
  ListFinancialRecordsCommandOutput
>(PaymentsClient, ListFinancialRecordsCommand, "nextToken", "nextToken", "maxResults");
