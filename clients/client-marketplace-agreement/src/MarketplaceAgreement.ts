// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CancelAgreementPaymentRequestCommandInput,
  type CancelAgreementPaymentRequestCommandOutput,
  CancelAgreementPaymentRequestCommand,
} from "./commands/CancelAgreementPaymentRequestCommand";
import {
  type DescribeAgreementCommandInput,
  type DescribeAgreementCommandOutput,
  DescribeAgreementCommand,
} from "./commands/DescribeAgreementCommand";
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
  type ListAgreementPaymentRequestsCommandInput,
  type ListAgreementPaymentRequestsCommandOutput,
  ListAgreementPaymentRequestsCommand,
} from "./commands/ListAgreementPaymentRequestsCommand";
import {
  type SearchAgreementsCommandInput,
  type SearchAgreementsCommandOutput,
  SearchAgreementsCommand,
} from "./commands/SearchAgreementsCommand";
import {
  type SendAgreementPaymentRequestCommandInput,
  type SendAgreementPaymentRequestCommandOutput,
  SendAgreementPaymentRequestCommand,
} from "./commands/SendAgreementPaymentRequestCommand";
import { MarketplaceAgreementClient } from "./MarketplaceAgreementClient";
import { paginateGetAgreementTerms } from "./pagination/GetAgreementTermsPaginator";
import { paginateListAgreementPaymentRequests } from "./pagination/ListAgreementPaymentRequestsPaginator";
import { paginateSearchAgreements } from "./pagination/SearchAgreementsPaginator";

const commands = {
  CancelAgreementPaymentRequestCommand,
  DescribeAgreementCommand,
  GetAgreementPaymentRequestCommand,
  GetAgreementTermsCommand,
  ListAgreementPaymentRequestsCommand,
  SearchAgreementsCommand,
  SendAgreementPaymentRequestCommand,
};
const paginators = {
  paginateGetAgreementTerms,
  paginateListAgreementPaymentRequests,
  paginateSearchAgreements,
};

export interface MarketplaceAgreement {
  /**
   * @see {@link CancelAgreementPaymentRequestCommand}
   */
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAgreementPaymentRequestCommandOutput>;
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: CancelAgreementPaymentRequestCommandOutput) => void
  ): void;
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgreementCommand}
   */
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgreementCommandOutput>;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementPaymentRequestCommand}
   */
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgreementPaymentRequestCommandOutput>;
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: GetAgreementPaymentRequestCommandOutput) => void
  ): void;
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementTermsCommand}
   */
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgreementTermsCommandOutput>;
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    cb: (err: any, data?: GetAgreementTermsCommandOutput) => void
  ): void;
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgreementTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementPaymentRequestsCommand}
   */
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgreementPaymentRequestsCommandOutput>;
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    cb: (err: any, data?: ListAgreementPaymentRequestsCommandOutput) => void
  ): void;
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgreementPaymentRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAgreementsCommand}
   */
  searchAgreements(): Promise<SearchAgreementsCommandOutput>;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAgreementsCommandOutput>;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    cb: (err: any, data?: SearchAgreementsCommandOutput) => void
  ): void;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAgreementsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAgreementPaymentRequestCommand}
   */
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAgreementPaymentRequestCommandOutput>;
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: SendAgreementPaymentRequestCommandOutput) => void
  ): void;
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAgreementPaymentRequestCommandOutput) => void
  ): void;

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
 * <p>AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers manage their product-related agreements, including listing, searching, and filtering agreements.</p> <p>To manage agreements in AWS Marketplace, you must ensure that your AWS Identity and Access Management (IAM) policies and roles are set up. The user must have the required policies/permissions that allow them to carry out the actions in AWS:</p> <ul> <li> <p> <code>DescribeAgreement</code> – Grants permission to users to obtain detailed meta data about any of their agreements.</p> </li> <li> <p> <code>GetAgreementTerms</code> – Grants permission to users to obtain details about the terms of an agreement.</p> </li> <li> <p> <code>SearchAgreements</code> – Grants permission to users to search through all their agreements.</p> </li> </ul>
 * @public
 */
export class MarketplaceAgreement extends MarketplaceAgreementClient implements MarketplaceAgreement {}
createAggregatedClient(commands, MarketplaceAgreement, { paginators });
