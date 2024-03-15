// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ArtifactClient, ArtifactClientConfig } from "./ArtifactClient";
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
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import {
  PutAccountSettingsCommand,
  PutAccountSettingsCommandInput,
  PutAccountSettingsCommandOutput,
} from "./commands/PutAccountSettingsCommand";

const commands = {
  GetAccountSettingsCommand,
  GetReportCommand,
  GetReportMetadataCommand,
  GetTermForReportCommand,
  ListReportsCommand,
  PutAccountSettingsCommand,
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
  getReport(args: GetReportCommandInput, options?: __HttpHandlerOptions): Promise<GetReportCommandOutput>;
  getReport(args: GetReportCommandInput, cb: (err: any, data?: GetReportCommandOutput) => void): void;
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
   * @see {@link ListReportsCommand}
   */
  listReports(): Promise<ListReportsCommandOutput>;
  listReports(args: ListReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListReportsCommandOutput>;
  listReports(args: ListReportsCommandInput, cb: (err: any, data?: ListReportsCommandOutput) => void): void;
  listReports(
    args: ListReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
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
}

/**
 * <p>This reference provides descriptions of the low-level AWS Artifact Service API.</p>
 * @public
 */
export class Artifact extends ArtifactClient implements Artifact {}
createAggregatedClient(commands, Artifact);
