// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPaymentInstrumentsCommand,
  ListPaymentInstrumentsCommandInput,
  ListPaymentInstrumentsCommandOutput,
} from "../commands/ListPaymentInstrumentsCommand";
import { PaymentsClient } from "../PaymentsClient";
import type { PaymentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPaymentInstruments: (
  config: PaymentsPaginationConfiguration,
  input: ListPaymentInstrumentsCommandInput,
  ...rest: any[]
) => Paginator<ListPaymentInstrumentsCommandOutput> = createPaginator<
  PaymentsPaginationConfiguration,
  ListPaymentInstrumentsCommandInput,
  ListPaymentInstrumentsCommandOutput
>(PaymentsClient, ListPaymentInstrumentsCommand, "nextToken", "nextToken", "maxResults");
