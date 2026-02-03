// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { ArtifactClient } from "./ArtifactClient";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetReportCommand, GetReportCommandInput, GetReportCommandOutput } from "./commands/GetReportCommand";
import {
  GetReportMetadataCommand,
  GetReportMetadataCommandInput,
  GetReportMetadataCommandOutput,
} from "./commands/GetReportMetadataCommand";
import {
  GetTermForReportCommand,
  GetTermForReportCommandInput,
  GetTermForReportCommandOutput,
} from "./commands/GetTermForReportCommand";
import {
  ListCustomerAgreementsCommand,
  ListCustomerAgreementsCommandInput,
  ListCustomerAgreementsCommandOutput,
} from "./commands/ListCustomerAgreementsCommand";
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import {
  ListReportVersionsCommand,
  ListReportVersionsCommandInput,
  ListReportVersionsCommandOutput,
} from "./commands/ListReportVersionsCommand";
import {
  PutAccountSettingsCommand,
  PutAccountSettingsCommandInput,
  PutAccountSettingsCommandOutput,
} from "./commands/PutAccountSettingsCommand";
import { paginateListCustomerAgreements } from "./pagination/ListCustomerAgreementsPaginator";
import { paginateListReports } from "./pagination/ListReportsPaginator";
import { paginateListReportVersions } from "./pagination/ListReportVersionsPaginator";

const commands = {
  GetAccountSettingsCommand,
  GetReportCommand,
  GetReportMetadataCommand,
  GetTermForReportCommand,
  ListCustomerAgreementsCommand,
  ListReportsCommand,
  ListReportVersionsCommand,
  PutAccountSettingsCommand,
};
const paginators = {
  paginateListCustomerAgreements,
  paginateListReports,
  paginateListReportVersions,
};

export interface Artifact {
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
