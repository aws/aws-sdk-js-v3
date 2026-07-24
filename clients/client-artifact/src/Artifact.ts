// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { ArtifactClient } from "./ArtifactClient";
import {
  type CreateComplianceInquiryCommandInput,
  type CreateComplianceInquiryCommandOutput,
  CreateComplianceInquiryCommand,
} from "./commands/CreateComplianceInquiryCommand";
import {
  type ExportComplianceInquiryCommandInput,
  type ExportComplianceInquiryCommandOutput,
  ExportComplianceInquiryCommand,
} from "./commands/ExportComplianceInquiryCommand";
import {
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAccountSettingsCommand,
} from "./commands/GetAccountSettingsCommand";
import {
  type GetComplianceInquiryMetadataCommandInput,
  type GetComplianceInquiryMetadataCommandOutput,
  GetComplianceInquiryMetadataCommand,
} from "./commands/GetComplianceInquiryMetadataCommand";
import { type GetReportCommandInput, type GetReportCommandOutput, GetReportCommand } from "./commands/GetReportCommand";
import {
  type GetReportMetadataCommandInput,
  type GetReportMetadataCommandOutput,
  GetReportMetadataCommand,
} from "./commands/GetReportMetadataCommand";
import {
  type GetTermForReportCommandInput,
  type GetTermForReportCommandOutput,
  GetTermForReportCommand,
} from "./commands/GetTermForReportCommand";
import {
  type ListComplianceInquiriesCommandInput,
  type ListComplianceInquiriesCommandOutput,
  ListComplianceInquiriesCommand,
} from "./commands/ListComplianceInquiriesCommand";
import {
  type ListComplianceInquiryQueriesCommandInput,
  type ListComplianceInquiryQueriesCommandOutput,
  ListComplianceInquiryQueriesCommand,
} from "./commands/ListComplianceInquiryQueriesCommand";
import {
  type ListCustomerAgreementsCommandInput,
  type ListCustomerAgreementsCommandOutput,
  ListCustomerAgreementsCommand,
} from "./commands/ListCustomerAgreementsCommand";
import {
  type ListReportsCommandInput,
  type ListReportsCommandOutput,
  ListReportsCommand,
} from "./commands/ListReportsCommand";
import {
  type ListReportVersionsCommandInput,
  type ListReportVersionsCommandOutput,
  ListReportVersionsCommand,
} from "./commands/ListReportVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAccountSettingsCommandInput,
  type PutAccountSettingsCommandOutput,
  PutAccountSettingsCommand,
} from "./commands/PutAccountSettingsCommand";
import {
  type PutComplianceInquiryFeedbackCommandInput,
  type PutComplianceInquiryFeedbackCommandOutput,
  PutComplianceInquiryFeedbackCommand,
} from "./commands/PutComplianceInquiryFeedbackCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { paginateListComplianceInquiries } from "./pagination/ListComplianceInquiriesPaginator";
import { paginateListComplianceInquiryQueries } from "./pagination/ListComplianceInquiryQueriesPaginator";
import { paginateListCustomerAgreements } from "./pagination/ListCustomerAgreementsPaginator";
import { paginateListReports } from "./pagination/ListReportsPaginator";
import { paginateListReportVersions } from "./pagination/ListReportVersionsPaginator";

const commands = {
  CreateComplianceInquiryCommand,
  ExportComplianceInquiryCommand,
  GetAccountSettingsCommand,
  GetComplianceInquiryMetadataCommand,
  GetReportCommand,
  GetReportMetadataCommand,
  GetTermForReportCommand,
  ListComplianceInquiriesCommand,
  ListComplianceInquiryQueriesCommand,
  ListCustomerAgreementsCommand,
  ListReportsCommand,
  ListReportVersionsCommand,
  ListTagsForResourceCommand,
  PutAccountSettingsCommand,
  PutComplianceInquiryFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListComplianceInquiries,
  paginateListComplianceInquiryQueries,
  paginateListCustomerAgreements,
  paginateListReports,
  paginateListReportVersions,
};

export interface Artifact {
  /**
   * @see {@link CreateComplianceInquiryCommand}
   */
  createComplianceInquiry(
    args: CreateComplianceInquiryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComplianceInquiryCommandOutput>;
  createComplianceInquiry(
    args: CreateComplianceInquiryCommandInput,
    cb: (err: any, data?: CreateComplianceInquiryCommandOutput) => void
  ): void;
  createComplianceInquiry(
    args: CreateComplianceInquiryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComplianceInquiryCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportComplianceInquiryCommand}
   */
  exportComplianceInquiry(
    args: ExportComplianceInquiryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportComplianceInquiryCommandOutput>;
  exportComplianceInquiry(
    args: ExportComplianceInquiryCommandInput,
    cb: (err: any, data?: ExportComplianceInquiryCommandOutput) => void
  ): void;
  exportComplianceInquiry(
    args: ExportComplianceInquiryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportComplianceInquiryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceInquiryMetadataCommand}
   */
  getComplianceInquiryMetadata(
    args: GetComplianceInquiryMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceInquiryMetadataCommandOutput>;
  getComplianceInquiryMetadata(
    args: GetComplianceInquiryMetadataCommandInput,
    cb: (err: any, data?: GetComplianceInquiryMetadataCommandOutput) => void
  ): void;
  getComplianceInquiryMetadata(
    args: GetComplianceInquiryMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceInquiryMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReportCommand}
   */
  getReport(
    args: GetReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportCommandOutput>;
  getReport(
    args: GetReportCommandInput,
    cb: (err: any, data?: GetReportCommandOutput) => void
  ): void;
  getReport(
    args: GetReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReportMetadataCommand}
   */
  getReportMetadata(
    args: GetReportMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportMetadataCommandOutput>;
  getReportMetadata(
    args: GetReportMetadataCommandInput,
    cb: (err: any, data?: GetReportMetadataCommandOutput) => void
  ): void;
  getReportMetadata(
    args: GetReportMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTermForReportCommand}
   */
  getTermForReport(
    args: GetTermForReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTermForReportCommandOutput>;
  getTermForReport(
    args: GetTermForReportCommandInput,
    cb: (err: any, data?: GetTermForReportCommandOutput) => void
  ): void;
  getTermForReport(
    args: GetTermForReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTermForReportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceInquiriesCommand}
   */
  listComplianceInquiries(): Promise<ListComplianceInquiriesCommandOutput>;
  listComplianceInquiries(
    args: ListComplianceInquiriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceInquiriesCommandOutput>;
  listComplianceInquiries(
    args: ListComplianceInquiriesCommandInput,
    cb: (err: any, data?: ListComplianceInquiriesCommandOutput) => void
  ): void;
  listComplianceInquiries(
    args: ListComplianceInquiriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceInquiriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceInquiryQueriesCommand}
   */
  listComplianceInquiryQueries(
    args: ListComplianceInquiryQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceInquiryQueriesCommandOutput>;
  listComplianceInquiryQueries(
    args: ListComplianceInquiryQueriesCommandInput,
    cb: (err: any, data?: ListComplianceInquiryQueriesCommandOutput) => void
  ): void;
  listComplianceInquiryQueries(
    args: ListComplianceInquiryQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceInquiryQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomerAgreementsCommand}
   */
  listCustomerAgreements(): Promise<ListCustomerAgreementsCommandOutput>;
  listCustomerAgreements(
    args: ListCustomerAgreementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomerAgreementsCommandOutput>;
  listCustomerAgreements(
    args: ListCustomerAgreementsCommandInput,
    cb: (err: any, data?: ListCustomerAgreementsCommandOutput) => void
  ): void;
  listCustomerAgreements(
    args: ListCustomerAgreementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomerAgreementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportsCommand}
   */
  listReports(): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsCommandOutput>;
  listReports(
    args: ListReportsCommandInput,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  listReports(
    args: ListReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportVersionsCommand}
   */
  listReportVersions(
    args: ListReportVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportVersionsCommandOutput>;
  listReportVersions(
    args: ListReportVersionsCommandInput,
    cb: (err: any, data?: ListReportVersionsCommandOutput) => void
  ): void;
  listReportVersions(
    args: ListReportVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountSettingsCommand}
   */
  putAccountSettings(): Promise<PutAccountSettingsCommandOutput>;
  putAccountSettings(
    args: PutAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSettingsCommandOutput>;
  putAccountSettings(
    args: PutAccountSettingsCommandInput,
    cb: (err: any, data?: PutAccountSettingsCommandOutput) => void
  ): void;
  putAccountSettings(
    args: PutAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutComplianceInquiryFeedbackCommand}
   */
  putComplianceInquiryFeedback(
    args: PutComplianceInquiryFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutComplianceInquiryFeedbackCommandOutput>;
  putComplianceInquiryFeedback(
    args: PutComplianceInquiryFeedbackCommandInput,
    cb: (err: any, data?: PutComplianceInquiryFeedbackCommandOutput) => void
  ): void;
  putComplianceInquiryFeedback(
    args: PutComplianceInquiryFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutComplianceInquiryFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceInquiriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComplianceInquiriesCommandOutput}.
   */
  paginateListComplianceInquiries(
    args?: ListComplianceInquiriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComplianceInquiriesCommandOutput>;

  /**
   * @see {@link ListComplianceInquiryQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComplianceInquiryQueriesCommandOutput}.
   */
  paginateListComplianceInquiryQueries(
    args: ListComplianceInquiryQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComplianceInquiryQueriesCommandOutput>;

  /**
   * @see {@link ListCustomerAgreementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomerAgreementsCommandOutput}.
   */
  paginateListCustomerAgreements(
    args?: ListCustomerAgreementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomerAgreementsCommandOutput>;

  /**
   * @see {@link ListReportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportsCommandOutput}.
   */
  paginateListReports(
    args?: ListReportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportsCommandOutput>;

  /**
   * @see {@link ListReportVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportVersionsCommandOutput}.
   */
  paginateListReportVersions(
    args: ListReportVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportVersionsCommandOutput>;
}

/**
 * <p>This reference provides descriptions of the low-level AWS Artifact Service API.</p>
 * @public
 */
export class Artifact extends ArtifactClient implements Artifact {}
createAggregatedClient(commands, Artifact, { paginators });
