// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptAgreementApprovalCommandInput,
  type AcceptAgreementApprovalCommandOutput,
  AcceptAgreementApprovalCommand,
} from "./commands/AcceptAgreementApprovalCommand";
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
  type CancelAgreementRequestCommandInput,
  type CancelAgreementRequestCommandOutput,
  CancelAgreementRequestCommand,
} from "./commands/CancelAgreementRequestCommand";
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
  type GetAgreementApprovalCommandInput,
  type GetAgreementApprovalCommandOutput,
  GetAgreementApprovalCommand,
} from "./commands/GetAgreementApprovalCommand";
import {
  type GetAgreementCancellationRequestCommandInput,
  type GetAgreementCancellationRequestCommandOutput,
  GetAgreementCancellationRequestCommand,
} from "./commands/GetAgreementCancellationRequestCommand";
import {
  type GetAgreementContactsCommandInput,
  type GetAgreementContactsCommandOutput,
  GetAgreementContactsCommand,
} from "./commands/GetAgreementContactsCommand";
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
  type GetAgreementRequestApprovalPlansCommandInput,
  type GetAgreementRequestApprovalPlansCommandOutput,
  GetAgreementRequestApprovalPlansCommand,
} from "./commands/GetAgreementRequestApprovalPlansCommand";
import {
  type GetAgreementRequestCommandInput,
  type GetAgreementRequestCommandOutput,
  GetAgreementRequestCommand,
} from "./commands/GetAgreementRequestCommand";
import {
  type GetAgreementRequestTermsCommandInput,
  type GetAgreementRequestTermsCommandOutput,
  GetAgreementRequestTermsCommand,
} from "./commands/GetAgreementRequestTermsCommand";
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
  type ListAgreementApprovalsCommandInput,
  type ListAgreementApprovalsCommandOutput,
  ListAgreementApprovalsCommand,
} from "./commands/ListAgreementApprovalsCommand";
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
  type ListAgreementRequestsCommandInput,
  type ListAgreementRequestsCommandOutput,
  ListAgreementRequestsCommand,
} from "./commands/ListAgreementRequestsCommand";
import {
  type ListBillingAdjustmentRequestsCommandInput,
  type ListBillingAdjustmentRequestsCommandOutput,
  ListBillingAdjustmentRequestsCommand,
} from "./commands/ListBillingAdjustmentRequestsCommand";
import {
  type RejectAgreementApprovalCommandInput,
  type RejectAgreementApprovalCommandOutput,
  RejectAgreementApprovalCommand,
} from "./commands/RejectAgreementApprovalCommand";
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
  type StartAgreementApprovalsCommandInput,
  type StartAgreementApprovalsCommandOutput,
  StartAgreementApprovalsCommand,
} from "./commands/StartAgreementApprovalsCommand";
import {
  type UpdatePurchaseOrdersCommandInput,
  type UpdatePurchaseOrdersCommandOutput,
  UpdatePurchaseOrdersCommand,
} from "./commands/UpdatePurchaseOrdersCommand";
import { MarketplaceAgreementClient } from "./MarketplaceAgreementClient";
import { paginateGetAgreementEntitlements } from "./pagination/GetAgreementEntitlementsPaginator";
import { paginateGetAgreementRequestApprovalPlans } from "./pagination/GetAgreementRequestApprovalPlansPaginator";
import { paginateGetAgreementRequestTerms } from "./pagination/GetAgreementRequestTermsPaginator";
import { paginateGetAgreementTerms } from "./pagination/GetAgreementTermsPaginator";
import { paginateListAgreementApprovals } from "./pagination/ListAgreementApprovalsPaginator";
import { paginateListAgreementCancellationRequests } from "./pagination/ListAgreementCancellationRequestsPaginator";
import { paginateListAgreementCharges } from "./pagination/ListAgreementChargesPaginator";
import { paginateListAgreementInvoiceLineItems } from "./pagination/ListAgreementInvoiceLineItemsPaginator";
import { paginateListAgreementPaymentRequests } from "./pagination/ListAgreementPaymentRequestsPaginator";
import { paginateListAgreementRequests } from "./pagination/ListAgreementRequestsPaginator";
import { paginateListBillingAdjustmentRequests } from "./pagination/ListBillingAdjustmentRequestsPaginator";
import { paginateSearchAgreements } from "./pagination/SearchAgreementsPaginator";

const commands = {
  AcceptAgreementApprovalCommand,
  AcceptAgreementCancellationRequestCommand,
  AcceptAgreementPaymentRequestCommand,
  AcceptAgreementRequestCommand,
  BatchCreateBillingAdjustmentRequestCommand,
  CancelAgreementCommand,
  CancelAgreementCancellationRequestCommand,
  CancelAgreementPaymentRequestCommand,
  CancelAgreementRequestCommand,
  CreateAgreementRequestCommand,
  DescribeAgreementCommand,
  GetAgreementApprovalCommand,
  GetAgreementCancellationRequestCommand,
  GetAgreementContactsCommand,
  GetAgreementEntitlementsCommand,
  GetAgreementPaymentRequestCommand,
  GetAgreementRequestCommand,
  GetAgreementRequestApprovalPlansCommand,
  GetAgreementRequestTermsCommand,
  GetAgreementTermsCommand,
  GetBillingAdjustmentRequestCommand,
  ListAgreementApprovalsCommand,
  ListAgreementCancellationRequestsCommand,
  ListAgreementChargesCommand,
  ListAgreementInvoiceLineItemsCommand,
  ListAgreementPaymentRequestsCommand,
  ListAgreementRequestsCommand,
  ListBillingAdjustmentRequestsCommand,
  RejectAgreementApprovalCommand,
  RejectAgreementCancellationRequestCommand,
  RejectAgreementPaymentRequestCommand,
  SearchAgreementsCommand,
  SendAgreementCancellationRequestCommand,
  SendAgreementPaymentRequestCommand,
  StartAgreementApprovalsCommand,
  UpdatePurchaseOrdersCommand,
};
const paginators = {
  paginateGetAgreementEntitlements,
  paginateGetAgreementRequestApprovalPlans,
  paginateGetAgreementRequestTerms,
  paginateGetAgreementTerms,
  paginateListAgreementApprovals,
  paginateListAgreementCancellationRequests,
  paginateListAgreementCharges,
  paginateListAgreementInvoiceLineItems,
  paginateListAgreementPaymentRequests,
  paginateListAgreementRequests,
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
   * @see {@link AcceptAgreementApprovalCommand}
   */
  acceptAgreementApproval(): Promise<AcceptAgreementApprovalCommandOutput>;
  acceptAgreementApproval(
    args: AcceptAgreementApprovalCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<AcceptAgreementApprovalCommandOutput>;
  acceptAgreementApproval(
    args: AcceptAgreementApprovalCommandInput,
    cb: (err: any, data?: AcceptAgreementApprovalCommandOutput) => void
  ): void;
  acceptAgreementApproval(
    args: AcceptAgreementApprovalCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: AcceptAgreementApprovalCommandOutput) => void
  ): void;

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
   * @see {@link CancelAgreementRequestCommand}
   */
  cancelAgreementRequest(
    args: CancelAgreementRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<CancelAgreementRequestCommandOutput>;
  cancelAgreementRequest(
    args: CancelAgreementRequestCommandInput,
    cb: (err: any, data?: CancelAgreementRequestCommandOutput) => void
  ): void;
  cancelAgreementRequest(
    args: CancelAgreementRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: CancelAgreementRequestCommandOutput) => void
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
   * @see {@link GetAgreementApprovalCommand}
   */
  getAgreementApproval(
    args: GetAgreementApprovalCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementApprovalCommandOutput>;
  getAgreementApproval(
    args: GetAgreementApprovalCommandInput,
    cb: (err: any, data?: GetAgreementApprovalCommandOutput) => void
  ): void;
  getAgreementApproval(
    args: GetAgreementApprovalCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementApprovalCommandOutput) => void
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
   * @see {@link GetAgreementContactsCommand}
   */
  getAgreementContacts(
    args: GetAgreementContactsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementContactsCommandOutput>;
  getAgreementContacts(
    args: GetAgreementContactsCommandInput,
    cb: (err: any, data?: GetAgreementContactsCommandOutput) => void
  ): void;
  getAgreementContacts(
    args: GetAgreementContactsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementContactsCommandOutput) => void
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
   * @see {@link GetAgreementRequestCommand}
   */
  getAgreementRequest(
    args: GetAgreementRequestCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementRequestCommandOutput>;
  getAgreementRequest(
    args: GetAgreementRequestCommandInput,
    cb: (err: any, data?: GetAgreementRequestCommandOutput) => void
  ): void;
  getAgreementRequest(
    args: GetAgreementRequestCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementRequestApprovalPlansCommand}
   */
  getAgreementRequestApprovalPlans(
    args: GetAgreementRequestApprovalPlansCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementRequestApprovalPlansCommandOutput>;
  getAgreementRequestApprovalPlans(
    args: GetAgreementRequestApprovalPlansCommandInput,
    cb: (err: any, data?: GetAgreementRequestApprovalPlansCommandOutput) => void
  ): void;
  getAgreementRequestApprovalPlans(
    args: GetAgreementRequestApprovalPlansCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementRequestApprovalPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementRequestTermsCommand}
   */
  getAgreementRequestTerms(
    args: GetAgreementRequestTermsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<GetAgreementRequestTermsCommandOutput>;
  getAgreementRequestTerms(
    args: GetAgreementRequestTermsCommandInput,
    cb: (err: any, data?: GetAgreementRequestTermsCommandOutput) => void
  ): void;
  getAgreementRequestTerms(
    args: GetAgreementRequestTermsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: GetAgreementRequestTermsCommandOutput) => void
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
   * @see {@link ListAgreementApprovalsCommand}
   */
  listAgreementApprovals(
    args: ListAgreementApprovalsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListAgreementApprovalsCommandOutput>;
  listAgreementApprovals(
    args: ListAgreementApprovalsCommandInput,
    cb: (err: any, data?: ListAgreementApprovalsCommandOutput) => void
  ): void;
  listAgreementApprovals(
    args: ListAgreementApprovalsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListAgreementApprovalsCommandOutput) => void
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
   * @see {@link ListAgreementRequestsCommand}
   */
  listAgreementRequests(): Promise<ListAgreementRequestsCommandOutput>;
  listAgreementRequests(
    args: ListAgreementRequestsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<ListAgreementRequestsCommandOutput>;
  listAgreementRequests(
    args: ListAgreementRequestsCommandInput,
    cb: (err: any, data?: ListAgreementRequestsCommandOutput) => void
  ): void;
  listAgreementRequests(
    args: ListAgreementRequestsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: ListAgreementRequestsCommandOutput) => void
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
   * @see {@link RejectAgreementApprovalCommand}
   */
  rejectAgreementApproval(): Promise<RejectAgreementApprovalCommandOutput>;
  rejectAgreementApproval(
    args: RejectAgreementApprovalCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<RejectAgreementApprovalCommandOutput>;
  rejectAgreementApproval(
    args: RejectAgreementApprovalCommandInput,
    cb: (err: any, data?: RejectAgreementApprovalCommandOutput) => void
  ): void;
  rejectAgreementApproval(
    args: RejectAgreementApprovalCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: RejectAgreementApprovalCommandOutput) => void
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
   * @see {@link StartAgreementApprovalsCommand}
   */
  startAgreementApprovals(
    args: StartAgreementApprovalsCommandInput,
    options?: MarketplaceAgreementRequestOptions
  ): Promise<StartAgreementApprovalsCommandOutput>;
  startAgreementApprovals(
    args: StartAgreementApprovalsCommandInput,
    cb: (err: any, data?: StartAgreementApprovalsCommandOutput) => void
  ): void;
  startAgreementApprovals(
    args: StartAgreementApprovalsCommandInput,
    options: MarketplaceAgreementRequestOptions,
    cb: (err: any, data?: StartAgreementApprovalsCommandOutput) => void
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
   * @see {@link GetAgreementRequestApprovalPlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAgreementRequestApprovalPlansCommandOutput}.
   */
  paginateGetAgreementRequestApprovalPlans(
    args: GetAgreementRequestApprovalPlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAgreementRequestApprovalPlansCommandOutput>;

  /**
   * @see {@link GetAgreementRequestTermsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAgreementRequestTermsCommandOutput}.
   */
  paginateGetAgreementRequestTerms(
    args: GetAgreementRequestTermsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAgreementRequestTermsCommandOutput>;

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
   * @see {@link ListAgreementApprovalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementApprovalsCommandOutput}.
   */
  paginateListAgreementApprovals(
    args: ListAgreementApprovalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementApprovalsCommandOutput>;

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
   * @see {@link ListAgreementRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementRequestsCommandOutput}.
   */
  paginateListAgreementRequests(
    args?: ListAgreementRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementRequestsCommandOutput>;

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
