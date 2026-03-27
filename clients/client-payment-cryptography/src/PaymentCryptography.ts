// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AddKeyReplicationRegionsCommandInput,
  type AddKeyReplicationRegionsCommandOutput,
  AddKeyReplicationRegionsCommand,
} from "./commands/AddKeyReplicationRegionsCommand";
import {
  type CreateAliasCommandInput,
  type CreateAliasCommandOutput,
  CreateAliasCommand,
} from "./commands/CreateAliasCommand";
import { type CreateKeyCommandInput, type CreateKeyCommandOutput, CreateKeyCommand } from "./commands/CreateKeyCommand";
import {
  type DeleteAliasCommandInput,
  type DeleteAliasCommandOutput,
  DeleteAliasCommand,
} from "./commands/DeleteAliasCommand";
import { type DeleteKeyCommandInput, type DeleteKeyCommandOutput, DeleteKeyCommand } from "./commands/DeleteKeyCommand";
import {
  type DisableDefaultKeyReplicationRegionsCommandInput,
  type DisableDefaultKeyReplicationRegionsCommandOutput,
  DisableDefaultKeyReplicationRegionsCommand,
} from "./commands/DisableDefaultKeyReplicationRegionsCommand";
import {
  type EnableDefaultKeyReplicationRegionsCommandInput,
  type EnableDefaultKeyReplicationRegionsCommandOutput,
  EnableDefaultKeyReplicationRegionsCommand,
} from "./commands/EnableDefaultKeyReplicationRegionsCommand";
import { type ExportKeyCommandInput, type ExportKeyCommandOutput, ExportKeyCommand } from "./commands/ExportKeyCommand";
import { type GetAliasCommandInput, type GetAliasCommandOutput, GetAliasCommand } from "./commands/GetAliasCommand";
import {
  type GetCertificateSigningRequestCommandInput,
  type GetCertificateSigningRequestCommandOutput,
  GetCertificateSigningRequestCommand,
} from "./commands/GetCertificateSigningRequestCommand";
import {
  type GetDefaultKeyReplicationRegionsCommandInput,
  type GetDefaultKeyReplicationRegionsCommandOutput,
  GetDefaultKeyReplicationRegionsCommand,
} from "./commands/GetDefaultKeyReplicationRegionsCommand";
import { type GetKeyCommandInput, type GetKeyCommandOutput, GetKeyCommand } from "./commands/GetKeyCommand";
import {
  type GetParametersForExportCommandInput,
  type GetParametersForExportCommandOutput,
  GetParametersForExportCommand,
} from "./commands/GetParametersForExportCommand";
import {
  type GetParametersForImportCommandInput,
  type GetParametersForImportCommandOutput,
  GetParametersForImportCommand,
} from "./commands/GetParametersForImportCommand";
import {
  type GetPublicKeyCertificateCommandInput,
  type GetPublicKeyCertificateCommandOutput,
  GetPublicKeyCertificateCommand,
} from "./commands/GetPublicKeyCertificateCommand";
import { type ImportKeyCommandInput, type ImportKeyCommandOutput, ImportKeyCommand } from "./commands/ImportKeyCommand";
import {
  type ListAliasesCommandInput,
  type ListAliasesCommandOutput,
  ListAliasesCommand,
} from "./commands/ListAliasesCommand";
import { type ListKeysCommandInput, type ListKeysCommandOutput, ListKeysCommand } from "./commands/ListKeysCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RemoveKeyReplicationRegionsCommandInput,
  type RemoveKeyReplicationRegionsCommandOutput,
  RemoveKeyReplicationRegionsCommand,
} from "./commands/RemoveKeyReplicationRegionsCommand";
import {
  type RestoreKeyCommandInput,
  type RestoreKeyCommandOutput,
  RestoreKeyCommand,
} from "./commands/RestoreKeyCommand";
import {
  type StartKeyUsageCommandInput,
  type StartKeyUsageCommandOutput,
  StartKeyUsageCommand,
} from "./commands/StartKeyUsageCommand";
import {
  type StopKeyUsageCommandInput,
  type StopKeyUsageCommandOutput,
  StopKeyUsageCommand,
} from "./commands/StopKeyUsageCommand";
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
import {
  type UpdateAliasCommandInput,
  type UpdateAliasCommandOutput,
  UpdateAliasCommand,
} from "./commands/UpdateAliasCommand";
import { paginateListAliases } from "./pagination/ListAliasesPaginator";
import { paginateListKeys } from "./pagination/ListKeysPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { PaymentCryptographyClient } from "./PaymentCryptographyClient";

const commands = {
  AddKeyReplicationRegionsCommand,
  CreateAliasCommand,
  CreateKeyCommand,
  DeleteAliasCommand,
  DeleteKeyCommand,
  DisableDefaultKeyReplicationRegionsCommand,
  EnableDefaultKeyReplicationRegionsCommand,
  ExportKeyCommand,
  GetAliasCommand,
  GetCertificateSigningRequestCommand,
  GetDefaultKeyReplicationRegionsCommand,
  GetKeyCommand,
  GetParametersForExportCommand,
  GetParametersForImportCommand,
  GetPublicKeyCertificateCommand,
  ImportKeyCommand,
  ListAliasesCommand,
  ListKeysCommand,
  ListTagsForResourceCommand,
  RemoveKeyReplicationRegionsCommand,
  RestoreKeyCommand,
  StartKeyUsageCommand,
  StopKeyUsageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
};
const paginators = {
  paginateListAliases,
  paginateListKeys,
  paginateListTagsForResource,
};

export interface PaymentCryptography {
  /**
   * @see {@link AddKeyReplicationRegionsCommand}
   */
  addKeyReplicationRegions(
    args: AddKeyReplicationRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddKeyReplicationRegionsCommandOutput>;
  addKeyReplicationRegions(
    args: AddKeyReplicationRegionsCommandInput,
    cb: (err: any, data?: AddKeyReplicationRegionsCommandOutput) => void
  ): void;
  addKeyReplicationRegions(
    args: AddKeyReplicationRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddKeyReplicationRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAliasCommandOutput>;
  createAlias(
    args: CreateAliasCommandInput,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyCommand}
   */
  createKey(
    args: CreateKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyCommandOutput>;
  createKey(
    args: CreateKeyCommandInput,
    cb: (err: any, data?: CreateKeyCommandOutput) => void
  ): void;
  createKey(
    args: CreateKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAliasCommandOutput>;
  deleteAlias(
    args: DeleteAliasCommandInput,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;
  deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyCommand}
   */
  deleteKey(
    args: DeleteKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyCommandOutput>;
  deleteKey(
    args: DeleteKeyCommandInput,
    cb: (err: any, data?: DeleteKeyCommandOutput) => void
  ): void;
  deleteKey(
    args: DeleteKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableDefaultKeyReplicationRegionsCommand}
   */
  disableDefaultKeyReplicationRegions(
    args: DisableDefaultKeyReplicationRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDefaultKeyReplicationRegionsCommandOutput>;
  disableDefaultKeyReplicationRegions(
    args: DisableDefaultKeyReplicationRegionsCommandInput,
    cb: (err: any, data?: DisableDefaultKeyReplicationRegionsCommandOutput) => void
  ): void;
  disableDefaultKeyReplicationRegions(
    args: DisableDefaultKeyReplicationRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDefaultKeyReplicationRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableDefaultKeyReplicationRegionsCommand}
   */
  enableDefaultKeyReplicationRegions(
    args: EnableDefaultKeyReplicationRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDefaultKeyReplicationRegionsCommandOutput>;
  enableDefaultKeyReplicationRegions(
    args: EnableDefaultKeyReplicationRegionsCommandInput,
    cb: (err: any, data?: EnableDefaultKeyReplicationRegionsCommandOutput) => void
  ): void;
  enableDefaultKeyReplicationRegions(
    args: EnableDefaultKeyReplicationRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDefaultKeyReplicationRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportKeyCommand}
   */
  exportKey(
    args: ExportKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportKeyCommandOutput>;
  exportKey(
    args: ExportKeyCommandInput,
    cb: (err: any, data?: ExportKeyCommandOutput) => void
  ): void;
  exportKey(
    args: ExportKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAliasCommandOutput>;
  getAlias(
    args: GetAliasCommandInput,
    cb: (err: any, data?: GetAliasCommandOutput) => void
  ): void;
  getAlias(
    args: GetAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificateSigningRequestCommand}
   */
  getCertificateSigningRequest(
    args: GetCertificateSigningRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateSigningRequestCommandOutput>;
  getCertificateSigningRequest(
    args: GetCertificateSigningRequestCommandInput,
    cb: (err: any, data?: GetCertificateSigningRequestCommandOutput) => void
  ): void;
  getCertificateSigningRequest(
    args: GetCertificateSigningRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateSigningRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultKeyReplicationRegionsCommand}
   */
  getDefaultKeyReplicationRegions(): Promise<GetDefaultKeyReplicationRegionsCommandOutput>;
  getDefaultKeyReplicationRegions(
    args: GetDefaultKeyReplicationRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultKeyReplicationRegionsCommandOutput>;
  getDefaultKeyReplicationRegions(
    args: GetDefaultKeyReplicationRegionsCommandInput,
    cb: (err: any, data?: GetDefaultKeyReplicationRegionsCommandOutput) => void
  ): void;
  getDefaultKeyReplicationRegions(
    args: GetDefaultKeyReplicationRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultKeyReplicationRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyCommand}
   */
  getKey(
    args: GetKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyCommandOutput>;
  getKey(
    args: GetKeyCommandInput,
    cb: (err: any, data?: GetKeyCommandOutput) => void
  ): void;
  getKey(
    args: GetKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParametersForExportCommand}
   */
  getParametersForExport(
    args: GetParametersForExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersForExportCommandOutput>;
  getParametersForExport(
    args: GetParametersForExportCommandInput,
    cb: (err: any, data?: GetParametersForExportCommandOutput) => void
  ): void;
  getParametersForExport(
    args: GetParametersForExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersForExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParametersForImportCommand}
   */
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersForImportCommandOutput>;
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    cb: (err: any, data?: GetParametersForImportCommandOutput) => void
  ): void;
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersForImportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyCertificateCommand}
   */
  getPublicKeyCertificate(
    args: GetPublicKeyCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyCertificateCommandOutput>;
  getPublicKeyCertificate(
    args: GetPublicKeyCertificateCommandInput,
    cb: (err: any, data?: GetPublicKeyCertificateCommandOutput) => void
  ): void;
  getPublicKeyCertificate(
    args: GetPublicKeyCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportKeyCommand}
   */
  importKey(
    args: ImportKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportKeyCommandOutput>;
  importKey(
    args: ImportKeyCommandInput,
    cb: (err: any, data?: ImportKeyCommandOutput) => void
  ): void;
  importKey(
    args: ImportKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(): Promise<ListAliasesCommandOutput>;
  listAliases(
    args: ListAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAliasesCommandOutput>;
  listAliases(
    args: ListAliasesCommandInput,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(): Promise<ListKeysCommandOutput>;
  listKeys(
    args: ListKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeysCommandOutput>;
  listKeys(
    args: ListKeysCommandInput,
    cb: (err: any, data?: ListKeysCommandOutput) => void
  ): void;
  listKeys(
    args: ListKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeysCommandOutput) => void
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
   * @see {@link RemoveKeyReplicationRegionsCommand}
   */
  removeKeyReplicationRegions(
    args: RemoveKeyReplicationRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveKeyReplicationRegionsCommandOutput>;
  removeKeyReplicationRegions(
    args: RemoveKeyReplicationRegionsCommandInput,
    cb: (err: any, data?: RemoveKeyReplicationRegionsCommandOutput) => void
  ): void;
  removeKeyReplicationRegions(
    args: RemoveKeyReplicationRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveKeyReplicationRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreKeyCommand}
   */
  restoreKey(
    args: RestoreKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreKeyCommandOutput>;
  restoreKey(
    args: RestoreKeyCommandInput,
    cb: (err: any, data?: RestoreKeyCommandOutput) => void
  ): void;
  restoreKey(
    args: RestoreKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartKeyUsageCommand}
   */
  startKeyUsage(
    args: StartKeyUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartKeyUsageCommandOutput>;
  startKeyUsage(
    args: StartKeyUsageCommandInput,
    cb: (err: any, data?: StartKeyUsageCommandOutput) => void
  ): void;
  startKeyUsage(
    args: StartKeyUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartKeyUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link StopKeyUsageCommand}
   */
  stopKeyUsage(
    args: StopKeyUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopKeyUsageCommandOutput>;
  stopKeyUsage(
    args: StopKeyUsageCommandInput,
    cb: (err: any, data?: StopKeyUsageCommandOutput) => void
  ): void;
  stopKeyUsage(
    args: StopKeyUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopKeyUsageCommandOutput) => void
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
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAliasCommandOutput>;
  updateAlias(
    args: UpdateAliasCommandInput,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;
  updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAliasesCommandOutput}.
   */
  paginateListAliases(
    args?: ListAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAliasesCommandOutput>;

  /**
   * @see {@link ListKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKeysCommandOutput}.
   */
  paginateListKeys(
    args?: ListKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKeysCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;
}

/**
 * <p>Amazon Web Services Payment Cryptography Control Plane APIs manage encryption keys for use during payment-related cryptographic operations. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security-iam.html">Identity and access management</a> in the <i>Amazon Web Services Payment Cryptography User Guide.</i> </p> <p>To use encryption keys for payment-related transaction processing and associated cryptographic operations, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/Welcome.html">Amazon Web Services Payment Cryptography Data Plane</a>. You can perform actions like encrypt, decrypt, generate, and verify payment-related data.</p> <p>All Amazon Web Services Payment Cryptography API calls must be signed and transmitted using Transport Layer Security (TLS). We recommend you always use the latest supported TLS version for logging API requests. </p> <p>Amazon Web Services Payment Cryptography supports CloudTrail for control plane operations, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket you specify. By using the information collected by CloudTrail, you can determine what requests were made to Amazon Web Services Payment Cryptography, who made the request, when it was made, and so on. If you don't conﬁgure a trail, you can still view the most recent events in the CloudTrail console. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
 * @public
 */
export class PaymentCryptography extends PaymentCryptographyClient implements PaymentCryptography {}
createAggregatedClient(commands, PaymentCryptography, { paginators });
