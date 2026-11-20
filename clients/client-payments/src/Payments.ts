// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchGetFinancialRecordCommandInput,
  type BatchGetFinancialRecordCommandOutput,
  BatchGetFinancialRecordCommand,
} from "./commands/BatchGetFinancialRecordCommand";
import {
  type GetAccountBalanceCommandInput,
  type GetAccountBalanceCommandOutput,
  GetAccountBalanceCommand,
} from "./commands/GetAccountBalanceCommand";
import {
  type GetFinancialRecordCommandInput,
  type GetFinancialRecordCommandOutput,
  GetFinancialRecordCommand,
} from "./commands/GetFinancialRecordCommand";
import {
  type GetPaymentInstrumentCommandInput,
  type GetPaymentInstrumentCommandOutput,
  GetPaymentInstrumentCommand,
} from "./commands/GetPaymentInstrumentCommand";
import {
  type ListFinancialRecordsCommandInput,
  type ListFinancialRecordsCommandOutput,
  ListFinancialRecordsCommand,
} from "./commands/ListFinancialRecordsCommand";
import {
  type ListPaymentInstrumentsCommandInput,
  type ListPaymentInstrumentsCommandOutput,
  ListPaymentInstrumentsCommand,
} from "./commands/ListPaymentInstrumentsCommand";
import { paginateGetAccountBalance } from "./pagination/GetAccountBalancePaginator";
import { paginateListFinancialRecords } from "./pagination/ListFinancialRecordsPaginator";
import { paginateListPaymentInstruments } from "./pagination/ListPaymentInstrumentsPaginator";
import { PaymentsClient } from "./PaymentsClient";

const commands = {
  BatchGetFinancialRecordCommand,
  GetAccountBalanceCommand,
  GetFinancialRecordCommand,
  GetPaymentInstrumentCommand,
  ListFinancialRecordsCommand,
  ListPaymentInstrumentsCommand,
};
const paginators = {
  paginateGetAccountBalance,
  paginateListFinancialRecords,
  paginateListPaymentInstruments,
};

/**
 * @public
 */
export interface PaymentsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Payments {
  /**
   * @see {@link BatchGetFinancialRecordCommand}
   */
  batchGetFinancialRecord(
    args: BatchGetFinancialRecordCommandInput,
    options?: PaymentsRequestOptions
  ): Promise<BatchGetFinancialRecordCommandOutput>;
  batchGetFinancialRecord(
    args: BatchGetFinancialRecordCommandInput,
    cb: (err: any, data?: BatchGetFinancialRecordCommandOutput) => void
  ): void;
  batchGetFinancialRecord(
    args: BatchGetFinancialRecordCommandInput,
    options: PaymentsRequestOptions,
    cb: (err: any, data?: BatchGetFinancialRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountBalanceCommand}
   */
  getAccountBalance(
    args: GetAccountBalanceCommandInput,
    options?: PaymentsRequestOptions
  ): Promise<GetAccountBalanceCommandOutput>;
  getAccountBalance(
    args: GetAccountBalanceCommandInput,
    cb: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): void;
  getAccountBalance(
    args: GetAccountBalanceCommandInput,
    options: PaymentsRequestOptions,
    cb: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFinancialRecordCommand}
   */
  getFinancialRecord(): Promise<GetFinancialRecordCommandOutput>;
  getFinancialRecord(
    args: GetFinancialRecordCommandInput,
    options?: PaymentsRequestOptions
  ): Promise<GetFinancialRecordCommandOutput>;
  getFinancialRecord(
    args: GetFinancialRecordCommandInput,
    cb: (err: any, data?: GetFinancialRecordCommandOutput) => void
  ): void;
  getFinancialRecord(
    args: GetFinancialRecordCommandInput,
    options: PaymentsRequestOptions,
    cb: (err: any, data?: GetFinancialRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPaymentInstrumentCommand}
   */
  getPaymentInstrument(
    args: GetPaymentInstrumentCommandInput,
    options?: PaymentsRequestOptions
  ): Promise<GetPaymentInstrumentCommandOutput>;
  getPaymentInstrument(
    args: GetPaymentInstrumentCommandInput,
    cb: (err: any, data?: GetPaymentInstrumentCommandOutput) => void
  ): void;
  getPaymentInstrument(
    args: GetPaymentInstrumentCommandInput,
    options: PaymentsRequestOptions,
    cb: (err: any, data?: GetPaymentInstrumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFinancialRecordsCommand}
   */
  listFinancialRecords(
    args: ListFinancialRecordsCommandInput,
    options?: PaymentsRequestOptions
  ): Promise<ListFinancialRecordsCommandOutput>;
  listFinancialRecords(
    args: ListFinancialRecordsCommandInput,
    cb: (err: any, data?: ListFinancialRecordsCommandOutput) => void
  ): void;
  listFinancialRecords(
    args: ListFinancialRecordsCommandInput,
    options: PaymentsRequestOptions,
    cb: (err: any, data?: ListFinancialRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPaymentInstrumentsCommand}
   */
  listPaymentInstruments(): Promise<ListPaymentInstrumentsCommandOutput>;
  listPaymentInstruments(
    args: ListPaymentInstrumentsCommandInput,
    options?: PaymentsRequestOptions
  ): Promise<ListPaymentInstrumentsCommandOutput>;
  listPaymentInstruments(
    args: ListPaymentInstrumentsCommandInput,
    cb: (err: any, data?: ListPaymentInstrumentsCommandOutput) => void
  ): void;
  listPaymentInstruments(
    args: ListPaymentInstrumentsCommandInput,
    options: PaymentsRequestOptions,
    cb: (err: any, data?: ListPaymentInstrumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountBalanceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAccountBalanceCommandOutput}.
   */
  paginateGetAccountBalance(
    args: GetAccountBalanceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAccountBalanceCommandOutput>;

  /**
   * @see {@link ListFinancialRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFinancialRecordsCommandOutput}.
   */
  paginateListFinancialRecords(
    args: ListFinancialRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFinancialRecordsCommandOutput>;

  /**
   * @see {@link ListPaymentInstrumentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPaymentInstrumentsCommandOutput}.
   */
  paginateListPaymentInstruments(
    args?: ListPaymentInstrumentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPaymentInstrumentsCommandOutput>;
}

/**
 * <p>Amazon Web Services Payments manages how money moves between you and Amazon Web Services. It holds the payment instruments you use to pay Amazon Web Services and to receive money from Amazon Web Services, such as cards and bank accounts. It collects payment for your Amazon Web Services invoices, applies your payments and credit memos to them, and returns refunds.</p> <p>A payment instrument is a channel that moves money between you and Amazon Web Services, and its payment method is the kind of instrument, such as a card or a bank account. A financial record is an invoice or credit memo. It shows how much of its amount is outstanding, processing, settled, and canceled as Amazon Web Services applies payments and credits.</p> <p>With the Amazon Web Services Payments API, you can read your financial records and account balances, and read your payment instruments and their status.</p> <p>The Amazon Web Services Payments API provides the following endpoint:</p> <p> <code>https://payments.us-east-1.api.aws</code> </p>
 * @public
 */
export class Payments extends PaymentsClient implements Payments {}
createAggregatedClient(commands, Payments, { paginators });
