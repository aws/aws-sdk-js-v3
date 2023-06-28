// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeGuruSecurityClient, CodeGuruSecurityClientConfig } from "./CodeGuruSecurityClient";
import {
  BatchGetFindingsCommand,
  BatchGetFindingsCommandInput,
  BatchGetFindingsCommandOutput,
} from "./commands/BatchGetFindingsCommand";
import { CreateScanCommand, CreateScanCommandInput, CreateScanCommandOutput } from "./commands/CreateScanCommand";
import {
  CreateUploadUrlCommand,
  CreateUploadUrlCommandInput,
  CreateUploadUrlCommandOutput,
} from "./commands/CreateUploadUrlCommand";
import {
  GetAccountConfigurationCommand,
  GetAccountConfigurationCommandInput,
  GetAccountConfigurationCommandOutput,
} from "./commands/GetAccountConfigurationCommand";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetMetricsSummaryCommand,
  GetMetricsSummaryCommandInput,
  GetMetricsSummaryCommandOutput,
} from "./commands/GetMetricsSummaryCommand";
import { GetScanCommand, GetScanCommandInput, GetScanCommandOutput } from "./commands/GetScanCommand";
import {
  ListFindingsMetricsCommand,
  ListFindingsMetricsCommandInput,
  ListFindingsMetricsCommandOutput,
} from "./commands/ListFindingsMetricsCommand";
import { ListScansCommand, ListScansCommandInput, ListScansCommandOutput } from "./commands/ListScansCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountConfigurationCommand,
  UpdateAccountConfigurationCommandInput,
  UpdateAccountConfigurationCommandOutput,
} from "./commands/UpdateAccountConfigurationCommand";

const commands = {
  BatchGetFindingsCommand,
  CreateScanCommand,
  CreateUploadUrlCommand,
  GetAccountConfigurationCommand,
  GetFindingsCommand,
  GetMetricsSummaryCommand,
  GetScanCommand,
  ListFindingsMetricsCommand,
  ListScansCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountConfigurationCommand,
};

export interface CodeGuruSecurity {
  /**
   * @see {@link BatchGetFindingsCommand}
   */
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFindingsCommandOutput>;
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    cb: (err: any, data?: BatchGetFindingsCommandOutput) => void
  ): void;
  batchGetFindings(
    args: BatchGetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScanCommand}
   */
  createScan(args: CreateScanCommandInput, options?: __HttpHandlerOptions): Promise<CreateScanCommandOutput>;
  createScan(args: CreateScanCommandInput, cb: (err: any, data?: CreateScanCommandOutput) => void): void;
  createScan(
    args: CreateScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUploadUrlCommand}
   */
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUploadUrlCommandOutput>;
  createUploadUrl(args: CreateUploadUrlCommandInput, cb: (err: any, data?: CreateUploadUrlCommandOutput) => void): void;
  createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountConfigurationCommand}
   */
  getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountConfigurationCommandOutput>;
  getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    cb: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): void;
  getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsCommand}
   */
  getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
  getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
  getFindings(
    args: GetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricsSummaryCommand}
   */
  getMetricsSummary(
    args: GetMetricsSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricsSummaryCommandOutput>;
  getMetricsSummary(
    args: GetMetricsSummaryCommandInput,
    cb: (err: any, data?: GetMetricsSummaryCommandOutput) => void
  ): void;
  getMetricsSummary(
    args: GetMetricsSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricsSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScanCommand}
   */
  getScan(args: GetScanCommandInput, options?: __HttpHandlerOptions): Promise<GetScanCommandOutput>;
  getScan(args: GetScanCommandInput, cb: (err: any, data?: GetScanCommandOutput) => void): void;
  getScan(
    args: GetScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScanCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsMetricsCommand}
   */
  listFindingsMetrics(
    args: ListFindingsMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsMetricsCommandOutput>;
  listFindingsMetrics(
    args: ListFindingsMetricsCommandInput,
    cb: (err: any, data?: ListFindingsMetricsCommandOutput) => void
  ): void;
  listFindingsMetrics(
    args: ListFindingsMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScansCommand}
   */
  listScans(args: ListScansCommandInput, options?: __HttpHandlerOptions): Promise<ListScansCommandOutput>;
  listScans(args: ListScansCommandInput, cb: (err: any, data?: ListScansCommandOutput) => void): void;
  listScans(
    args: ListScansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScansCommandOutput) => void
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
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountConfigurationCommand}
   */
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountConfigurationCommandOutput>;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccountConfigurationCommandOutput) => void
  ): void;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This section provides documentation for the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/codeguru/latest/security-ug/what-is-codeguru-security.html">Amazon CodeGuru Security</a> API operations.
 *       CodeGuru Security is a service that uses program analysis and machine learning to detect
 *       security policy violations and vulnerabilities, and recommends ways to address these security
 *       risks.</p>
 *          <p>By proactively detecting and providing recommendations for addressing security risks,
 *       CodeGuru Security improves the overall security of your application code. For more information
 *       about CodeGuru Security, see the
 *       <a href="https://docs.aws.amazon.com/codeguru/latest/security-ug/what-is-codeguru-security.html">Amazon CodeGuru Security User Guide</a>. </p>
 */
export class CodeGuruSecurity extends CodeGuruSecurityClient implements CodeGuruSecurity {}
createAggregatedClient(commands, CodeGuruSecurity);
