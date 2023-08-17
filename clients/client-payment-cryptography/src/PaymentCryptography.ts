// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateKeyCommand, CreateKeyCommandInput, CreateKeyCommandOutput } from "./commands/CreateKeyCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteKeyCommand, DeleteKeyCommandInput, DeleteKeyCommandOutput } from "./commands/DeleteKeyCommand";
import { ExportKeyCommand, ExportKeyCommandInput, ExportKeyCommandOutput } from "./commands/ExportKeyCommand";
import { GetAliasCommand, GetAliasCommandInput, GetAliasCommandOutput } from "./commands/GetAliasCommand";
import { GetKeyCommand, GetKeyCommandInput, GetKeyCommandOutput } from "./commands/GetKeyCommand";
import {
  GetParametersForExportCommand,
  GetParametersForExportCommandInput,
  GetParametersForExportCommandOutput,
} from "./commands/GetParametersForExportCommand";
import {
  GetParametersForImportCommand,
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
} from "./commands/GetParametersForImportCommand";
import {
  GetPublicKeyCertificateCommand,
  GetPublicKeyCertificateCommandInput,
  GetPublicKeyCertificateCommandOutput,
} from "./commands/GetPublicKeyCertificateCommand";
import { ImportKeyCommand, ImportKeyCommandInput, ImportKeyCommandOutput } from "./commands/ImportKeyCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "./commands/ListKeysCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RestoreKeyCommand, RestoreKeyCommandInput, RestoreKeyCommandOutput } from "./commands/RestoreKeyCommand";
import {
  StartKeyUsageCommand,
  StartKeyUsageCommandInput,
  StartKeyUsageCommandOutput,
} from "./commands/StartKeyUsageCommand";
import {
  StopKeyUsageCommand,
  StopKeyUsageCommandInput,
  StopKeyUsageCommandOutput,
} from "./commands/StopKeyUsageCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAliasCommand, UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import { PaymentCryptographyClient, PaymentCryptographyClientConfig } from "./PaymentCryptographyClient";

const commands = {
  CreateAliasCommand,
  CreateKeyCommand,
  DeleteAliasCommand,
  DeleteKeyCommand,
  ExportKeyCommand,
  GetAliasCommand,
  GetKeyCommand,
  GetParametersForExportCommand,
  GetParametersForImportCommand,
  GetPublicKeyCertificateCommand,
  ImportKeyCommand,
  ListAliasesCommand,
  ListKeysCommand,
  ListTagsForResourceCommand,
  RestoreKeyCommand,
  StartKeyUsageCommand,
  StopKeyUsageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
};

export interface PaymentCryptography {
  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyCommand}
   */
  createKey(args: CreateKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyCommandOutput>;
  createKey(args: CreateKeyCommandInput, cb: (err: any, data?: CreateKeyCommandOutput) => void): void;
  createKey(
    args: CreateKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyCommand}
   */
  deleteKey(args: DeleteKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeyCommandOutput>;
  deleteKey(args: DeleteKeyCommandInput, cb: (err: any, data?: DeleteKeyCommandOutput) => void): void;
  deleteKey(
    args: DeleteKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportKeyCommand}
   */
  exportKey(args: ExportKeyCommandInput, options?: __HttpHandlerOptions): Promise<ExportKeyCommandOutput>;
  exportKey(args: ExportKeyCommandInput, cb: (err: any, data?: ExportKeyCommandOutput) => void): void;
  exportKey(
    args: ExportKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(args: GetAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetAliasCommandOutput>;
  getAlias(args: GetAliasCommandInput, cb: (err: any, data?: GetAliasCommandOutput) => void): void;
  getAlias(
    args: GetAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyCommand}
   */
  getKey(args: GetKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyCommandOutput>;
  getKey(args: GetKeyCommandInput, cb: (err: any, data?: GetKeyCommandOutput) => void): void;
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
  importKey(args: ImportKeyCommandInput, options?: __HttpHandlerOptions): Promise<ImportKeyCommandOutput>;
  importKey(args: ImportKeyCommandInput, cb: (err: any, data?: ImportKeyCommandOutput) => void): void;
  importKey(
    args: ImportKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(args: ListKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListKeysCommandOutput>;
  listKeys(args: ListKeysCommandInput, cb: (err: any, data?: ListKeysCommandOutput) => void): void;
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
   * @see {@link RestoreKeyCommand}
   */
  restoreKey(args: RestoreKeyCommandInput, options?: __HttpHandlerOptions): Promise<RestoreKeyCommandOutput>;
  restoreKey(args: RestoreKeyCommandInput, cb: (err: any, data?: RestoreKeyCommandOutput) => void): void;
  restoreKey(
    args: RestoreKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartKeyUsageCommand}
   */
  startKeyUsage(args: StartKeyUsageCommandInput, options?: __HttpHandlerOptions): Promise<StartKeyUsageCommandOutput>;
  startKeyUsage(args: StartKeyUsageCommandInput, cb: (err: any, data?: StartKeyUsageCommandOutput) => void): void;
  startKeyUsage(
    args: StartKeyUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartKeyUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link StopKeyUsageCommand}
   */
  stopKeyUsage(args: StopKeyUsageCommandInput, options?: __HttpHandlerOptions): Promise<StopKeyUsageCommandOutput>;
  stopKeyUsage(args: StopKeyUsageCommandInput, cb: (err: any, data?: StopKeyUsageCommandOutput) => void): void;
  stopKeyUsage(
    args: StopKeyUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopKeyUsageCommandOutput) => void
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
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
  updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
  updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>You use the Amazon Web Services Payment Cryptography Control Plane to manage the encryption keys you use for payment-related cryptographic operations. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security-iam.html">Identity and access management</a> in the <i>Amazon Web Services Payment Cryptography User Guide.</i>
 *          </p>
 *          <p>To use encryption keys for payment-related transaction processing and associated cryptographic operations, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/Welcome.html">Amazon Web Services Payment Cryptography Data Plane</a>. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations. </p>
 *          <p>All Amazon Web Services Payment Cryptography API calls must be signed and transmitted using Transport Layer Security (TLS). We recommend you always use the latest supported TLS version for logging API requests. </p>
 *          <p>Amazon Web Services Payment Cryptography supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to Amazon Web Services Payment Cryptography, who made the request, when it was made, and so on. If you don't conﬁgure a trail, you can still view the most recent events in the CloudTrail console. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
 */
export class PaymentCryptography extends PaymentCryptographyClient implements PaymentCryptography {}
createAggregatedClient(commands, PaymentCryptography);
