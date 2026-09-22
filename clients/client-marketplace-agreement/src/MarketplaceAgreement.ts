// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptAgreementCancellationRequestCommandInput,
  type AcceptAgreementCancellationRequestCommandOutput,
  AcceptAgreementCancellationRequestCommand,
} from "./commands/AcceptAgreementCancellationRequestCommand";
import {
  type AcceptAgreementPaymentRequestCommandInput,
  type AcceptAgreementPaymentRequestCommandOutput,
  AcceptAgreementPaymentRequestCommand,
} from "./commands/AcceptAgreementPaymentRequestCommand";
import {
  type AcceptAgreementRequestCommandInput,
  type AcceptAgreementRequestCommandOutput,
  AcceptAgreementRequestCommand,
} from "./commands/AcceptAgreementRequestCommand";
import {
  type BatchCreateBillingAdjustmentRequestCommandInput,
  type BatchCreateBillingAdjustmentRequestCommandOutput,
  BatchCreateBillingAdjustmentRequestCommand,
} from "./commands/BatchCreateBillingAdjustmentRequestCommand";
import {
  type CancelAgreementCancellationRequestCommandInput,
  type CancelAgreementCancellationRequestCommandOutput,
  CancelAgreementCancellationRequestCommand,
} from "./commands/CancelAgreementCancellationRequestCommand";
import {
  type CancelAgreementCommandInput,
  type CancelAgreementCommandOutput,
  CancelAgreementCommand,
} from "./commands/CancelAgreementCommand";
import {
  type CancelAgreementPaymentRequestCommandInput,
  type CancelAgreementPaymentRequestCommandOutput,
  CancelAgreementPaymentRequestCommand,
} from "./commands/CancelAgreementPaymentRequestCommand";
import {
  type CreateAgreementRequestCommandInput,
  type CreateAgreementRequestCommandOutput,
  CreateAgreementRequestCommand,
} from "./commands/CreateAgreementRequestCommand";
import {
  type DescribeAgreementCommandInput,
  type DescribeAgreementCommandOutput,
  DescribeAgreementCommand,
} from "./commands/DescribeAgreementCommand";
import {
  type GetAgreementCancellationRequestCommandInput,
  type GetAgreementCancellationRequestCommandOutput,
  GetAgreementCancellationRequestCommand,
} from "./commands/GetAgreementCancellationRequestCommand";
import {
  type GetAgreementEntitlementsCommandInput,
  type GetAgreementEntitlementsCommandOutput,
  GetAgreementEntitlementsCommand,
} from "./commands/GetAgreementEntitlementsCommand";
import {
  type GetAgreementPaymentRequestCommandInput,
  type GetAgreementPaymentRequestCommandOutput,
  GetAgreementPaymentRequestCommand,
} from "./commands/GetAgreementPaymentRequestCommand";
import {
  type GetAgreementTermsCommandInput,
  type GetAgreementTermsCommandOutput,
  GetAgreementTermsCommand,
} from "./commands/GetAgreementTermsCommand";
import {
  type GetBillingAdjustmentRequestCommandInput,
  type GetBillingAdjustmentRequestCommandOutput,
  GetBillingAdjustmentRequestCommand,
} from "./commands/GetBillingAdjustmentRequestCommand";
import {
  type ListAgreementCancellationRequestsCommandInput,
  type ListAgreementCancellationRequestsCommandOutput,
  ListAgreementCancellationRequestsCommand,
} from "./commands/ListAgreementCancellationRequestsCommand";
import {
  type ListAgreementChargesCommandInput,
  type ListAgreementChargesCommandOutput,
  ListAgreementChargesCommand,
} from "./commands/ListAgreementChargesCommand";
import {
  type ListAgreementInvoiceLineItemsCommandInput,
  type ListAgreementInvoiceLineItemsCommandOutput,
  ListAgreementInvoiceLineItemsCommand,
} from "./commands/ListAgreementInvoiceLineItemsCommand";
import {
  type ListAgreementPaymentRequestsCommandInput,
  type ListAgreementPaymentRequestsCommandOutput,
  ListAgreementPaymentRequestsCommand,
} from "./commands/ListAgreementPaymentRequestsCommand";
import {
  type ListBillingAdjustmentRequestsCommandInput,
  type ListBillingAdjustmentRequestsCommandOutput,
  ListBillingAdjustmentRequestsCommand,
} from "./commands/ListBillingAdjustmentRequestsCommand";
import {
  type RejectAgreementCancellationRequestCommandInput,
  type RejectAgreementCancellationRequestCommandOutput,
  RejectAgreementCancellationRequestCommand,
} from "./commands/RejectAgreementCancellationRequestCommand";
import {
  type RejectAgreementPaymentRequestCommandInput,
  type RejectAgreementPaymentRequestCommandOutput,
  RejectAgreementPaymentRequestCommand,
} from "./commands/RejectAgreementPaymentRequestCommand";
import {
  type SearchAgreementsCommandInput,
  type SearchAgreementsCommandOutput,
  SearchAgreementsCommand,
} from "./commands/SearchAgreementsCommand";
import {
  type SendAgreementCancellationRequestCommandInput,
  type SendAgreementCancellationRequestCommandOutput,
  SendAgreementCancellationRequestCommand,
} from "./commands/SendAgreementCancellationRequestCommand";
import {
  type SendAgreementPaymentRequestCommandInput,
  type SendAgreementPaymentRequestCommandOutput,
  SendAgreementPaymentRequestCommand,
} from "./commands/SendAgreementPaymentRequestCommand";
import {
  type UpdatePurchaseOrdersCommandInput,
  type UpdatePurchaseOrdersCommandOutput,
  UpdatePurchaseOrdersCommand,
} from "./commands/UpdatePurchaseOrdersCommand";
import { MarketplaceAgreementClient } from "./MarketplaceAgreementClient";
import { paginateGetAgreementEntitlements } from "./pagination/GetAgreementEntitlementsPaginator";
import { paginateGetAgreementTerms } from "./pagination/GetAgreementTermsPaginator";
import { paginateListAgreementCancellationRequests } from "./pagination/ListAgreementCancellationRequestsPaginator";
import { paginateListAgreementCharges } from "./pagination/ListAgreementChargesPaginator";
import { paginateListAgreementInvoiceLineItems } from "./pagination/ListAgreementInvoiceLineItemsPaginator";
import { paginateListAgreementPaymentRequests } from "./pagination/ListAgreementPaymentRequestsPaginator";
import { paginateListBillingAdjustmentRequests } from "./pagination/ListBillingAdjustmentRequestsPaginator";
import { paginateSearchAgreements } from "./pagination/SearchAgreementsPaginator";

const commands = {
  AcceptAgreementCancellationRequestCommand,
  AcceptAgreementPaymentRequestCommand,
  AcceptAgreementRequestCommand,
  BatchCreateBillingAdjustmentRequestCommand,
  CancelAgreementCommand,
  CancelAgreementCancellationRequestCommand,
  CancelAgreementPaymentRequestCommand,
  CreateAgreementRequestCommand,
  DescribeAgreementCommand,
  GetAgreementCancellationRequestCommand,
  GetAgreementEntitlementsCommand,
  GetAgreementPaymentRequestCommand,
  GetAgreementTermsCommand,
  GetBillingAdjustmentRequestCommand,
  ListAgreementCancellationRequestsCommand,
  ListAgreementChargesCommand,
  ListAgreementInvoiceLineItemsCommand,
  ListAgreementPaymentRequestsCommand,
  ListBillingAdjustmentRequestsCommand,
  RejectAgreementCancellationRequestCommand,
  RejectAgreementPaymentRequestCommand,
  SearchAgreementsCommand,
  SendAgreementCancellationRequestCommand,
  SendAgreementPaymentRequestCommand,
  UpdatePurchaseOrdersCommand,
};
const paginators = {
  paginateGetAgreementEntitlements,
  paginateGetAgreementTerms,
  paginateListAgreementCancellationRequests,
  paginateListAgreementCharges,
  paginateListAgreementInvoiceLineItems,
  paginateListAgreementPaymentRequests,
  paginateListBillingAdjustmentRequests,
  paginateSearchAgreements,
};

/**
 * @public
 */
export interface MarketplaceAgreementRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MarketplaceAgreement {
  /**
   * @see {@link AcceptAgreementCancellationRequestCommand}
   */
  acceptAgreementCancellationRequest(
    args: AcceptAgreementCancellationRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<AcceptAgreementCancellationRequestCommandOutput>;
  acceptAgreementCancellationRequest(
    args: AcceptAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: AcceptAgreementCancellationRequestCommandOutput) => void
  ): void;
  acceptAgreementCancellationRequest(
    args: AcceptAgreementCancellationRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: AcceptAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptAgreementPaymentRequestCommand}
   */
  acceptAgreementPaymentRequest(
    args: AcceptAgreementPaymentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<AcceptAgreementPaymentRequestCommandOutput>;
  acceptAgreementPaymentRequest(
    args: AcceptAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: AcceptAgreementPaymentRequestCommandOutput) => void
  ): void;
  acceptAgreementPaymentRequest(
    args: AcceptAgreementPaymentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: AcceptAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptAgreementRequestCommand}
   */
  acceptAgreementRequest(
    args: AcceptAgreementRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<AcceptAgreementRequestCommandOutput>;
  acceptAgreementRequest(
    args: AcceptAgreementRequestCommandInput,
    cb: (err: any, data?: AcceptAgreementRequestCommandOutput) => void
  ): void;
  acceptAgreementRequest(
    args: AcceptAgreementRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: AcceptAgreementRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateBillingAdjustmentRequestCommand}
   */
  batchCreateBillingAdjustmentRequest(
    args: BatchCreateBillingAdjustmentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<BatchCreateBillingAdjustmentRequestCommandOutput>;
  batchCreateBillingAdjustmentRequest(
    args: BatchCreateBillingAdjustmentRequestCommandInput,
    cb: (err: any, data?: BatchCreateBillingAdjustmentRequestCommandOutput) => void
  ): void;
  batchCreateBillingAdjustmentRequest(
    args: BatchCreateBillingAdjustmentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: BatchCreateBillingAdjustmentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAgreementCommand}
   */
  cancelAgreement(
    args: CancelAgreementCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<CancelAgreementCommandOutput>;
  cancelAgreement(
    args: CancelAgreementCommandInput,
    cb: (err: any, data?: CancelAgreementCommandOutput) => void
  ): void;
  cancelAgreement(
    args: CancelAgreementCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: CancelAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAgreementCancellationRequestCommand}
   */
  cancelAgreementCancellationRequest(
    args: CancelAgreementCancellationRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<CancelAgreementCancellationRequestCommandOutput>;
  cancelAgreementCancellationRequest(
    args: CancelAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: CancelAgreementCancellationRequestCommandOutput) => void
  ): void;
  cancelAgreementCancellationRequest(
    args: CancelAgreementCancellationRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: CancelAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAgreementPaymentRequestCommand}
   */
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<CancelAgreementPaymentRequestCommandOutput>;
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: CancelAgreementPaymentRequestCommandOutput) => void
  ): void;
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: CancelAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgreementRequestCommand}
   */
  createAgreementRequest(
    args: CreateAgreementRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<CreateAgreementRequestCommandOutput>;
  createAgreementRequest(
    args: CreateAgreementRequestCommandInput,
    cb: (err: any, data?: CreateAgreementRequestCommandOutput) => void
  ): void;
  createAgreementRequest(
    args: CreateAgreementRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: CreateAgreementRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgreementCommand}
   */
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<DescribeAgreementCommandOutput>;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementCancellationRequestCommand}
   */
  getAgreementCancellationRequest(
    args: GetAgreementCancellationRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementCancellationRequestCommandOutput>;
  getAgreementCancellationRequest(
    args: GetAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: GetAgreementCancellationRequestCommandOutput) => void
  ): void;
  getAgreementCancellationRequest(
    args: GetAgreementCancellationRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementEntitlementsCommand}
   */
  getAgreementEntitlements(
    args: GetAgreementEntitlementsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementEntitlementsCommandOutput>;
  getAgreementEntitlements(
    args: GetAgreementEntitlementsCommandInput,
    cb: (err: any, data?: GetAgreementEntitlementsCommandOutput) => void
  ): void;
  getAgreementEntitlements(
    args: GetAgreementEntitlementsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementPaymentRequestCommand}
   */
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementPaymentRequestCommandOutput>;
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: GetAgreementPaymentRequestCommandOutput) => void
  ): void;
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementTermsCommand}
   */
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementTermsCommandOutput>;
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    cb: (err: any, data?: GetAgreementTermsCommandOutput) => void
  ): void;
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillingAdjustmentRequestCommand}
   */
  getBillingAdjustmentRequest(
    args: GetBillingAdjustmentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetBillingAdjustmentRequestCommandOutput>;
  getBillingAdjustmentRequest(
    args: GetBillingAdjustmentRequestCommandInput,
    cb: (err: any, data?: GetBillingAdjustmentRequestCommandOutput) => void
  ): void;
  getBillingAdjustmentRequest(
    args: GetBillingAdjustmentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetBillingAdjustmentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementCancellationRequestsCommand}
   */
  listAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListAgreementCancellationRequestsCommandOutput>;
  listAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    cb: (err: any, data?: ListAgreementCancellationRequestsCommandOutput) => void
  ): void;
  listAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListAgreementCancellationRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementChargesCommand}
   */
  listAgreementCharges(): Promise<ListAgreementChargesCommandOutput>;
  listAgreementCharges(
    args: ListAgreementChargesCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListAgreementChargesCommandOutput>;
  listAgreementCharges(
    args: ListAgreementChargesCommandInput,
    cb: (err: any, data?: ListAgreementChargesCommandOutput) => void
  ): void;
  listAgreementCharges(
    args: ListAgreementChargesCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListAgreementChargesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementInvoiceLineItemsCommand}
   */
  listAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListAgreementInvoiceLineItemsCommandOutput>;
  listAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    cb: (err: any, data?: ListAgreementInvoiceLineItemsCommandOutput) => void
  ): void;
  listAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListAgreementInvoiceLineItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementPaymentRequestsCommand}
   */
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListAgreementPaymentRequestsCommandOutput>;
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    cb: (err: any, data?: ListAgreementPaymentRequestsCommandOutput) => void
  ): void;
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListAgreementPaymentRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingAdjustmentRequestsCommand}
   */
  listBillingAdjustmentRequests(): Promise<ListBillingAdjustmentRequestsCommandOutput>;
  listBillingAdjustmentRequests(
    args: ListBillingAdjustmentRequestsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListBillingAdjustmentRequestsCommandOutput>;
  listBillingAdjustmentRequests(
    args: ListBillingAdjustmentRequestsCommandInput,
    cb: (err: any, data?: ListBillingAdjustmentRequestsCommandOutput) => void
  ): void;
  listBillingAdjustmentRequests(
    args: ListBillingAdjustmentRequestsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListBillingAdjustmentRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectAgreementCancellationRequestCommand}
   */
  rejectAgreementCancellationRequest(
    args: RejectAgreementCancellationRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<RejectAgreementCancellationRequestCommandOutput>;
  rejectAgreementCancellationRequest(
    args: RejectAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: RejectAgreementCancellationRequestCommandOutput) => void
  ): void;
  rejectAgreementCancellationRequest(
    args: RejectAgreementCancellationRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: RejectAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectAgreementPaymentRequestCommand}
   */
  rejectAgreementPaymentRequest(
    args: RejectAgreementPaymentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<RejectAgreementPaymentRequestCommandOutput>;
  rejectAgreementPaymentRequest(
    args: RejectAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: RejectAgreementPaymentRequestCommandOutput) => void
  ): void;
  rejectAgreementPaymentRequest(
    args: RejectAgreementPaymentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: RejectAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAgreementsCommand}
   */
  searchAgreements(): Promise<SearchAgreementsCommandOutput>;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<SearchAgreementsCommandOutput>;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    cb: (err: any, data?: SearchAgreementsCommandOutput) => void
  ): void;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: SearchAgreementsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAgreementCancellationRequestCommand}
   */
  sendAgreementCancellationRequest(
    args: SendAgreementCancellationRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<SendAgreementCancellationRequestCommandOutput>;
  sendAgreementCancellationRequest(
    args: SendAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: SendAgreementCancellationRequestCommandOutput) => void
  ): void;
  sendAgreementCancellationRequest(
    args: SendAgreementCancellationRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: SendAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAgreementPaymentRequestCommand}
   */
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<SendAgreementPaymentRequestCommandOutput>;
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: SendAgreementPaymentRequestCommandOutput) => void
  ): void;
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: SendAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePurchaseOrdersCommand}
   */
  updatePurchaseOrders(
    args: UpdatePurchaseOrdersCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<UpdatePurchaseOrdersCommandOutput>;
  updatePurchaseOrders(
    args: UpdatePurchaseOrdersCommandInput,
    cb: (err: any, data?: UpdatePurchaseOrdersCommandOutput) => void
  ): void;
  updatePurchaseOrders(
    args: UpdatePurchaseOrdersCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: UpdatePurchaseOrdersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementEntitlementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAgreementEntitlementsCommandOutput}.
   */
  paginateGetAgreementEntitlements(
    args: GetAgreementEntitlementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAgreementEntitlementsCommandOutput>;

  /**
   * @see {@link GetAgreementTermsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAgreementTermsCommandOutput}.
   */
  paginateGetAgreementTerms(
    args: GetAgreementTermsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAgreementTermsCommandOutput>;

  /**
   * @see {@link ListAgreementCancellationRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementCancellationRequestsCommandOutput}.
   */
  paginateListAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementCancellationRequestsCommandOutput>;

  /**
   * @see {@link ListAgreementChargesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementChargesCommandOutput}.
   */
  paginateListAgreementCharges(
    args?: ListAgreementChargesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementChargesCommandOutput>;

  /**
   * @see {@link ListAgreementInvoiceLineItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementInvoiceLineItemsCommandOutput}.
   */
  paginateListAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementInvoiceLineItemsCommandOutput>;

  /**
   * @see {@link ListAgreementPaymentRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementPaymentRequestsCommandOutput}.
   */
  paginateListAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementPaymentRequestsCommandOutput>;

  /**
   * @see {@link ListBillingAdjustmentRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillingAdjustmentRequestsCommandOutput}.
   */
  paginateListBillingAdjustmentRequests(
    args?: ListBillingAdjustmentRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillingAdjustmentRequestsCommandOutput>;

  /**
   * @see {@link SearchAgreementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAgreementsCommandOutput}.
   */
  paginateSearchAgreements(
    args?: SearchAgreementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAgreementsCommandOutput>;
}

/**
 * <p>AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers and buyers manage their product-related agreements, including listing, searching, creating, and filtering agreements.</p>
 * @public
 */
export class MarketplaceAgreement extends MarketplaceAgreementClient implements MarketplaceAgreement {}
createAggregatedClient(commands, MarketplaceAgreement, { paginators });
