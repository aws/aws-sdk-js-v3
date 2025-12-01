// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DescribeAgreementCommand,
  DescribeAgreementCommandInput,
  DescribeAgreementCommandOutput,
} from "./commands/DescribeAgreementCommand";
import {
  GetAgreementTermsCommand,
  GetAgreementTermsCommandInput,
  GetAgreementTermsCommandOutput,
} from "./commands/GetAgreementTermsCommand";
import {
  SearchAgreementsCommand,
  SearchAgreementsCommandInput,
  SearchAgreementsCommandOutput,
} from "./commands/SearchAgreementsCommand";
import { MarketplaceAgreementClient, MarketplaceAgreementClientConfig } from "./MarketplaceAgreementClient";

const commands = {
  DescribeAgreementCommand,
  GetAgreementTermsCommand,
  SearchAgreementsCommand,
};

export interface MarketplaceAgreement {
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
}

/**
 * <p>AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers manage their product-related agreements, including listing, searching, and filtering agreements.</p> <p>To manage agreements in AWS Marketplace, you must ensure that your AWS Identity and Access Management (IAM) policies and roles are set up. The user must have the required policies/permissions that allow them to carry out the actions in AWS:</p> <ul> <li> <p> <code>DescribeAgreement</code> – Grants permission to users to obtain detailed meta data about any of their agreements.</p> </li> <li> <p> <code>GetAgreementTerms</code> – Grants permission to users to obtain details about the terms of an agreement.</p> </li> <li> <p> <code>SearchAgreements</code> – Grants permission to users to search through all their agreements.</p> </li> </ul>
 * @public
 */
export class MarketplaceAgreement extends MarketplaceAgreementClient implements MarketplaceAgreement {}
createAggregatedClient(commands, MarketplaceAgreement);
