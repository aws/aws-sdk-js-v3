// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TransferServiceException as __BaseException } from "./TransferServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains Amazon S3 locations for storing specific types of AS2 message files.</p>
 * @public
 */
export interface CustomDirectoriesType {
  /**
   * <p>Specifies a location to store failed AS2 message files.</p>
   * @public
   */
  FailedFilesDirectory: string | undefined;

  /**
   * <p>Specifies a location to store MDN files.</p>
   * @public
   */
  MdnFilesDirectory: string | undefined;

  /**
   * <p>Specifies a location to store the payload for AS2 message files.</p>
   * @public
   */
  PayloadFilesDirectory: string | undefined;

  /**
   * <p>Specifies a location to store AS2 status messages.</p>
   * @public
   */
  StatusFilesDirectory: string | undefined;

  /**
   * <p>Specifies a location to store temporary AS2 message files.</p>
   * @public
   */
  TemporaryFilesDirectory: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EnforceMessageSigningType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EnforceMessageSigningType = (typeof EnforceMessageSigningType)[keyof typeof EnforceMessageSigningType];

/**
 * @public
 * @enum
 */
export const PreserveFilenameType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PreserveFilenameType = (typeof PreserveFilenameType)[keyof typeof PreserveFilenameType];

/**
 * @public
 * @enum
 */
export const AgreementStatusType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AgreementStatusType = (typeof AgreementStatusType)[keyof typeof AgreementStatusType];

/**
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to
 *       search for and group a resource for various purposes. You can apply tags to servers, users,
 *       and roles. A tag key can take more than one value. For example, to group servers for
 *       accounting purposes, you might create a tag called <code>Group</code> and assign the values
 *         <code>Research</code> and <code>Accounting</code> to that group.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The name assigned to the tag that you create.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Contains one or more values that you assigned to the key name you create.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAgreementRequest {
  /**
   * <p>A name or short description to identify the agreement. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server
   *       that the agreement uses.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   * @public
   */
  LocalProfileId: string | undefined;

  /**
   * <p>A unique identifier for the partner profile used in the agreement.</p>
   * @public
   */
  PartnerProfileId: string | undefined;

  /**
   * <p>The landing directory (folder) for files transferred by using the AS2 protocol.</p>
   *          <p>A <code>BaseDirectory</code> example is
   *       <code>/<i>amzn-s3-demo-bucket</i>/home/mydirectory</code>.</p>
   * @public
   */
  BaseDirectory?: string | undefined;

  /**
   * <p>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role,
   *       provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.</p>
   *          <p>
   *             <b>For AS2 connectors</b>
   *          </p>
   *          <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *       <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *       <code>StartFileTransfer</code>.</p>
   *          <p>If you are using Basic authentication for your AS2 connector, the access role requires the
   *       <code>secretsmanager:GetSecretValue</code> permission for the secret. If the secret is encrypted using
   *       a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also
   *       needs the <code>kms:Decrypt</code> permission for that key.</p>
   *          <p>
   *             <b>For SFTP connectors</b>
   *          </p>
   *          <p>Make sure that the access role provides
   *       read and write access to the parent directory of the file location
   *       that's used in the <code>StartFileTransfer</code> request.
   *       Additionally,  make sure that the role provides
   *       <code>secretsmanager:GetSecretValue</code> permission to Secrets Manager.</p>
   * @public
   */
  AccessRole: string | undefined;

  /**
   * <p>The status of the agreement. The agreement can be either <code>ACTIVE</code> or
   *         <code>INACTIVE</code>.</p>
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for agreements.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   *     Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload
   *     filename when saving it.
   *  </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: the filename provided by your trading parter is preserved when the file is saved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> (default value): when Transfer Family  saves the file, the filename is adjusted, as
   *       described in <a href="https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2">File names and locations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreserveFilename?: PreserveFilenameType | undefined;

  /**
   * <p>
   *      Determines whether or not unsigned messages from your trading partners will be accepted.
   *   </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: Transfer Family rejects unsigned messages from your trading partner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> (default value): Transfer Family accepts unsigned messages from your trading partner.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EnforceMessageSigning?: EnforceMessageSigningType | undefined;

  /**
   * <p>A <code>CustomDirectoriesType</code> structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.</p>
   *          <ul>
   *             <li>
   *                <p>Failed files</p>
   *             </li>
   *             <li>
   *                <p>MDN files</p>
   *             </li>
   *             <li>
   *                <p>Payload files</p>
   *             </li>
   *             <li>
   *                <p>Status files</p>
   *             </li>
   *             <li>
   *                <p>Temporary files</p>
   *             </li>
   *          </ul>
   * @public
   */
  CustomDirectories?: CustomDirectoriesType | undefined;
}

/**
 * @public
 */
export interface CreateAgreementResponse {
  /**
   * <p>The unique identifier for the agreement. Use this ID for deleting, or updating an
   *       agreement, as well as in any other API calls that require that you specify the agreement
   *       ID.</p>
   * @public
   */
  AgreementId: string | undefined;
}

/**
 * <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception is thrown when the client submits a malformed request.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  Resource: string | undefined;
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.Resource = opts.Resource;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  Resource: string | undefined;
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.Resource = opts.Resource;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  RetryAfterSeconds?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * @public
 */
export interface DeleteAgreementRequest {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   * @public
   */
  AgreementId: string | undefined;

  /**
   * <p>The server identifier associated with the agreement that you are deleting.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementRequest {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   * @public
   */
  AgreementId: string | undefined;

  /**
   * <p>The server identifier that's associated with the agreement.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * <p>Describes the properties of an agreement.</p>
 * @public
 */
export interface DescribedAgreement {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the agreement.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   * @public
   */
  AgreementId?: string | undefined;

  /**
   * <p>The name or short description that's used to identify the agreement.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the agreement, either <code>ACTIVE</code> or
   *       <code>INACTIVE</code>.</p>
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This identifier indicates the
   *       specific server that the agreement uses.</p>
   * @public
   */
  ServerId?: string | undefined;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * <p>A unique identifier for the partner profile used in the agreement.</p>
   * @public
   */
  PartnerProfileId?: string | undefined;

  /**
   * <p>The landing directory (folder) for files that are transferred by using the AS2
   *       protocol.</p>
   * @public
   */
  BaseDirectory?: string | undefined;

  /**
   * <p>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role,
   *       provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.</p>
   *          <p>
   *             <b>For AS2 connectors</b>
   *          </p>
   *          <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *       <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *       <code>StartFileTransfer</code>.</p>
   *          <p>If you are using Basic authentication for your AS2 connector, the access role requires the
   *       <code>secretsmanager:GetSecretValue</code> permission for the secret. If the secret is encrypted using
   *       a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also
   *       needs the <code>kms:Decrypt</code> permission for that key.</p>
   *          <p>
   *             <b>For SFTP connectors</b>
   *          </p>
   *          <p>Make sure that the access role provides
   *       read and write access to the parent directory of the file location
   *       that's used in the <code>StartFileTransfer</code> request.
   *       Additionally,  make sure that the role provides
   *       <code>secretsmanager:GetSecretValue</code> permission to Secrets Manager.</p>
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for agreements.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   *     Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload
   *     filename when saving it.
   *  </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: the filename provided by your trading parter is preserved when the file is saved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> (default value): when Transfer Family  saves the file, the filename is adjusted, as
   *       described in <a href="https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2">File names and locations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreserveFilename?: PreserveFilenameType | undefined;

  /**
   * <p>
   *      Determines whether or not unsigned messages from your trading partners will be accepted.
   *   </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: Transfer Family rejects unsigned messages from your trading partner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> (default value): Transfer Family accepts unsigned messages from your trading partner.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EnforceMessageSigning?: EnforceMessageSigningType | undefined;

  /**
   * <p>A <code>CustomDirectoriesType</code> structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.</p>
   *          <ul>
   *             <li>
   *                <p>Failed files</p>
   *             </li>
   *             <li>
   *                <p>MDN files</p>
   *             </li>
   *             <li>
   *                <p>Payload files</p>
   *             </li>
   *             <li>
   *                <p>Status files</p>
   *             </li>
   *             <li>
   *                <p>Temporary files</p>
   *             </li>
   *          </ul>
   * @public
   */
  CustomDirectories?: CustomDirectoriesType | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementResponse {
  /**
   * <p>The details for the specified agreement, returned as a <code>DescribedAgreement</code>
   *       object.</p>
   * @public
   */
  Agreement: DescribedAgreement | undefined;
}

/**
 * <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListAgreementsRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you can get additional results from the <code>ListAgreements</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       agreements.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The identifier of the server for which you want a list of agreements.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * <p>Describes the properties of an agreement.</p>
 * @public
 */
export interface ListedAgreement {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified agreement.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   * @public
   */
  AgreementId?: string | undefined;

  /**
   * <p>The current description for the agreement. You can change it by calling the
   *         <code>UpdateAgreement</code> operation and providing a new description. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The agreement can be either <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * <p>The unique identifier for the agreement.</p>
   * @public
   */
  ServerId?: string | undefined;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * <p>A unique identifier for the partner profile.</p>
   * @public
   */
  PartnerProfileId?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementsResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListAgreements</code> again and receive
   *       additional results, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns an array, where each item contains the details of an agreement.</p>
   * @public
   */
  Agreements: ListedAgreement[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgreementRequest {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   * @public
   */
  AgreementId: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>To replace the existing description, provide a short description for the agreement. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>You can update the status for the agreement, either activating an inactive agreement or
   *       the reverse.</p>
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   *          <p>To change the local profile identifier, provide a new value
   *       here.</p>
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * <p>A unique identifier for the partner profile.
   *       To change the partner profile identifier, provide a new value here.</p>
   * @public
   */
  PartnerProfileId?: string | undefined;

  /**
   * <p>To change the landing directory (folder) for files that are transferred, provide the
   *       bucket folder that you want to use; for example,
   *       <code>/<i>amzn-s3-demo-bucket</i>/<i>home</i>/<i>mydirectory</i>
   *             </code>.</p>
   * @public
   */
  BaseDirectory?: string | undefined;

  /**
   * <p>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role,
   *       provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.</p>
   *          <p>
   *             <b>For AS2 connectors</b>
   *          </p>
   *          <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *       <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *       <code>StartFileTransfer</code>.</p>
   *          <p>If you are using Basic authentication for your AS2 connector, the access role requires the
   *       <code>secretsmanager:GetSecretValue</code> permission for the secret. If the secret is encrypted using
   *       a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also
   *       needs the <code>kms:Decrypt</code> permission for that key.</p>
   *          <p>
   *             <b>For SFTP connectors</b>
   *          </p>
   *          <p>Make sure that the access role provides
   *       read and write access to the parent directory of the file location
   *       that's used in the <code>StartFileTransfer</code> request.
   *       Additionally,  make sure that the role provides
   *       <code>secretsmanager:GetSecretValue</code> permission to Secrets Manager.</p>
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * <p>
   *     Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload
   *     filename when saving it.
   *  </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: the filename provided by your trading parter is preserved when the file is saved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> (default value): when Transfer Family  saves the file, the filename is adjusted, as
   *       described in <a href="https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2">File names and locations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreserveFilename?: PreserveFilenameType | undefined;

  /**
   * <p>
   *      Determines whether or not unsigned messages from your trading partners will be accepted.
   *   </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: Transfer Family rejects unsigned messages from your trading partner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> (default value): Transfer Family accepts unsigned messages from your trading partner.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EnforceMessageSigning?: EnforceMessageSigningType | undefined;

  /**
   * <p>A <code>CustomDirectoriesType</code> structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.</p>
   *          <ul>
   *             <li>
   *                <p>Failed files</p>
   *             </li>
   *             <li>
   *                <p>MDN files</p>
   *             </li>
   *             <li>
   *                <p>Payload files</p>
   *             </li>
   *             <li>
   *                <p>Status files</p>
   *             </li>
   *             <li>
   *                <p>Temporary files</p>
   *             </li>
   *          </ul>
   * @public
   */
  CustomDirectories?: CustomDirectoriesType | undefined;
}

/**
 * @public
 */
export interface UpdateAgreementResponse {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   * @public
   */
  AgreementId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CompressionEnum = {
  DISABLED: "DISABLED",
  ZLIB: "ZLIB",
} as const;

/**
 * @public
 */
export type CompressionEnum = (typeof CompressionEnum)[keyof typeof CompressionEnum];

/**
 * @public
 * @enum
 */
export const EncryptionAlg = {
  AES128_CBC: "AES128_CBC",
  AES192_CBC: "AES192_CBC",
  AES256_CBC: "AES256_CBC",
  DES_EDE3_CBC: "DES_EDE3_CBC",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type EncryptionAlg = (typeof EncryptionAlg)[keyof typeof EncryptionAlg];

/**
 * @public
 * @enum
 */
export const MdnResponse = {
  NONE: "NONE",
  SYNC: "SYNC",
} as const;

/**
 * @public
 */
export type MdnResponse = (typeof MdnResponse)[keyof typeof MdnResponse];

/**
 * @public
 * @enum
 */
export const MdnSigningAlg = {
  DEFAULT: "DEFAULT",
  NONE: "NONE",
  SHA1: "SHA1",
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;

/**
 * @public
 */
export type MdnSigningAlg = (typeof MdnSigningAlg)[keyof typeof MdnSigningAlg];

/**
 * @public
 * @enum
 */
export const PreserveContentType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PreserveContentType = (typeof PreserveContentType)[keyof typeof PreserveContentType];

/**
 * @public
 * @enum
 */
export const SigningAlg = {
  NONE: "NONE",
  SHA1: "SHA1",
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;

/**
 * @public
 */
export type SigningAlg = (typeof SigningAlg)[keyof typeof SigningAlg];

/**
 * <p>Contains the details for an AS2 connector object. The connector object is used for AS2 outbound
 *       processes, to connect the Transfer Family customer with the trading partner.</p>
 * @public
 */
export interface As2ConnectorConfig {
  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * <p>A unique identifier for the partner profile for the connector.</p>
   * @public
   */
  PartnerProfileId?: string | undefined;

  /**
   * <p>Used as the <code>Subject</code> HTTP header attribute in AS2 messages that are being sent with the connector.</p>
   * @public
   */
  MessageSubject?: string | undefined;

  /**
   * <p>Specifies whether the AS2 file is compressed.</p>
   * @public
   */
  Compression?: CompressionEnum | undefined;

  /**
   * <p>The algorithm that is used to encrypt the file.</p>
   *          <p>Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>Do not use the <code>DES_EDE3_CBC</code> algorithm unless you must support a legacy client that requires it, as it is a weak encryption algorithm.</p>
   *             </li>
   *             <li>
   *                <p>You can only specify <code>NONE</code> if the URL for your connector uses HTTPS. Using HTTPS ensures that
   *           no traffic is sent in clear text.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionAlgorithm?: EncryptionAlg | undefined;

  /**
   * <p>The algorithm that is used to sign the AS2 messages sent with the connector.</p>
   * @public
   */
  SigningAlgorithm?: SigningAlg | undefined;

  /**
   * <p>The signing algorithm for the MDN response.</p>
   *          <note>
   *             <p>If set to DEFAULT (or not set at all), the value for <code>SigningAlgorithm</code> is used.</p>
   *          </note>
   * @public
   */
  MdnSigningAlgorithm?: MdnSigningAlg | undefined;

  /**
   * <p>Used  for outbound requests (from an Transfer Family connector to a partner AS2 server) to determine whether
   *       the partner response for transfers is synchronous or asynchronous. Specify either of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SYNC</code>: The system expects a synchronous MDN response, confirming that the file was transferred successfully (or not).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Specifies that no MDN response is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MdnResponse?: MdnResponse | undefined;

  /**
   * <p>Provides Basic authentication support to the AS2 Connectors API. To use Basic authentication,
   *       you must provide the name or Amazon Resource Name (ARN) of a secret in Secrets Manager.</p>
   *          <p>The default value for this parameter is <code>null</code>, which indicates that Basic authentication is not enabled for the connector.</p>
   *          <p>If the connector should use Basic authentication, the secret needs to be in the following format:</p>
   *          <p>
   *             <code>\{
   *       "Username": "user-name",
   *       "Password": "user-password"
   *       \}</code>
   *          </p>
   *          <p>Replace <code>user-name</code> and <code>user-password</code> with the credentials for the actual user that is being authenticated.</p>
   *          <p>Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>You are storing these credentials in Secrets Manager, <i>not passing them directly</i> into this API.</p>
   *             </li>
   *             <li>
   *                <p>If you are using the API, SDKs, or CloudFormation to configure your connector, then you must create the secret before you can enable Basic authentication.
   *           However, if you are using the Amazon Web Services management console, you can have the system create the secret for you.</p>
   *             </li>
   *          </ul>
   *          <p>If you have previously enabled Basic authentication for a connector, you can disable it by using the <code>UpdateConnector</code> API call. For example, if you are using the CLI, you can run the following command to remove Basic authentication:</p>
   *          <p>
   *             <code>update-connector --connector-id my-connector-id --as2-config 'BasicAuthSecretId=""'</code>
   *          </p>
   * @public
   */
  BasicAuthSecretId?: string | undefined;

  /**
   * <p>Allows you to use the Amazon S3 <code>Content-Type</code> that is associated with objects in S3 instead of
   *           having the content type mapped based on the file extension. This parameter is enabled by default when you create an AS2 connector
   *           from the console, but disabled by default when you create an AS2 connector by calling the API directly.</p>
   * @public
   */
  PreserveContentType?: PreserveContentType | undefined;
}

/**
 * @public
 * @enum
 */
export const As2Transport = {
  HTTP: "HTTP",
} as const;

/**
 * @public
 */
export type As2Transport = (typeof As2Transport)[keyof typeof As2Transport];

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * <p>The identifier of the certificate object that you are deleting.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateStatusType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ROTATION: "PENDING_ROTATION",
} as const;

/**
 * @public
 */
export type CertificateStatusType = (typeof CertificateStatusType)[keyof typeof CertificateStatusType];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  CERTIFICATE: "CERTIFICATE",
  CERTIFICATE_WITH_PRIVATE_KEY: "CERTIFICATE_WITH_PRIVATE_KEY",
} as const;

/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * @enum
 */
export const CertificateUsageType = {
  ENCRYPTION: "ENCRYPTION",
  SIGNING: "SIGNING",
  TLS: "TLS",
} as const;

/**
 * @public
 */
export type CertificateUsageType = (typeof CertificateUsageType)[keyof typeof CertificateUsageType];

/**
 * <p>Describes the properties of a certificate.</p>
 * @public
 */
export interface DescribedCertificate {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the certificate.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * <p>Specifies how this certificate is used. It can be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SIGNING</code>: For signing AS2 messages</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTION</code>: For encrypting AS2 messages</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TLS</code>: For securing AS2 communications sent over HTTPS</p>
   *             </li>
   *          </ul>
   * @public
   */
  Usage?: CertificateUsageType | undefined;

  /**
   * <p>A certificate's status can be either <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   *          <p>You can set <code>ActiveDate</code> and <code>InactiveDate</code> in the
   *         <code>UpdateCertificate</code> call. If you set values for these parameters, those values
   *       are used to determine whether the certificate has a status of <code>ACTIVE</code> or
   *         <code>INACTIVE</code>.</p>
   *          <p>If you don't set values for <code>ActiveDate</code> and <code>InactiveDate</code>, we use
   *       the <code>NotBefore</code> and <code>NotAfter</code> date as specified on the X509 certificate
   *       to determine when a certificate is active and when it is inactive.</p>
   * @public
   */
  Status?: CertificateStatusType | undefined;

  /**
   * <p>The file name for the certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The list of certificates that make up the chain for the certificate.</p>
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes active. If you do not specify a value, <code>ActiveDate</code> takes the same value as
   *        <code>NotBeforeDate</code>, which is specified by the CA.
   *      </p>
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive. If you do not specify a value, <code>InactiveDate</code> takes the same value as
   *        <code>NotAfterDate</code>, which is specified by the CA.</p>
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * <p>The serial number for the certificate.</p>
   * @public
   */
  Serial?: string | undefined;

  /**
   * <p>The earliest date that the certificate is valid.</p>
   * @public
   */
  NotBeforeDate?: Date | undefined;

  /**
   * <p>The final date that the certificate is
   *       valid.</p>
   * @public
   */
  NotAfterDate?: Date | undefined;

  /**
   * <p>If a private key has been specified for the certificate, its type is <code>CERTIFICATE_WITH_PRIVATE_KEY</code>. If there is no private key, the type is <code>CERTIFICATE</code>.</p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>The name or description that's used to identity the certificate. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for certificates.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * <p>The details for the specified certificate, returned as an object.</p>
   * @public
   */
  Certificate: DescribedCertificate | undefined;
}

/**
 * @public
 */
export interface ImportCertificateRequest {
  /**
   * <p>Specifies how this certificate is used. It can be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SIGNING</code>: For signing AS2 messages</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTION</code>: For encrypting AS2 messages</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TLS</code>: For securing AS2 communications sent over HTTPS</p>
   *             </li>
   *          </ul>
   * @public
   */
  Usage: CertificateUsageType | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>For the CLI, provide a file path for a certificate in URI format. For example, <code>--certificate file://encryption-cert.pem</code>.
   *         Alternatively, you can provide the raw content.</p>
   *             </li>
   *             <li>
   *                <p>For the SDK, specify the raw content of a certificate file. For example, <code>--certificate "`cat encryption-cert.pem`"</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You can provide both the certificate and its chain in this parameter, without needing to
   *         use the <code>CertificateChain</code> parameter. If you use this parameter for both the
   *         certificate and its chain, do not use the <code>CertificateChain</code> parameter.</p>
   *          </note>
   * @public
   */
  Certificate: string | undefined;

  /**
   * <p>An optional list of certificates that make up the chain for the certificate that's being
   *       imported.</p>
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>For the CLI, provide a file path for a private key in URI format. For example,
   *             <code>--private-key file://encryption-key.pem</code>. Alternatively, you can provide the
   *           raw content of the private key file.</p>
   *             </li>
   *             <li>
   *                <p>For the SDK, specify the raw content of a private key file. For example, <code>--private-key "`cat encryption-key.pem`"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes active. If you do not specify a value, <code>ActiveDate</code> takes the same value as
   *        <code>NotBeforeDate</code>, which is specified by the CA.
   *      </p>
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive. If you do not specify a value, <code>InactiveDate</code> takes the same value as
   *        <code>NotAfterDate</code>, which is specified by the CA.</p>
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * <p>A short description that helps identify the certificate. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for certificates.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you can get additional results from the <code>ListCertificates</code> call, a
   *       <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       certificates.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the properties of a certificate.</p>
 * @public
 */
export interface ListedCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified certificate.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * <p>Specifies how this certificate is used. It can be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SIGNING</code>: For signing AS2 messages</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTION</code>: For encrypting AS2 messages</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TLS</code>: For securing AS2 communications sent over HTTPS</p>
   *             </li>
   *          </ul>
   * @public
   */
  Usage?: CertificateUsageType | undefined;

  /**
   * <p>The certificate can be either <code>ACTIVE</code>, <code>PENDING_ROTATION</code>, or
   *         <code>INACTIVE</code>. <code>PENDING_ROTATION</code> means that this certificate will
   *       replace the current certificate when it expires.</p>
   * @public
   */
  Status?: CertificateStatusType | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes active. If you do not specify a value, <code>ActiveDate</code> takes the same value as
   *        <code>NotBeforeDate</code>, which is specified by the CA.
   *      </p>
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive. If you do not specify a value, <code>InactiveDate</code> takes the same value as
   *        <code>NotAfterDate</code>, which is specified by the CA.</p>
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * <p>The type for the certificate. If a private key has been specified for the certificate, its
   *       type is <code>CERTIFICATE_WITH_PRIVATE_KEY</code>. If there is no private key, the type is
   *         <code>CERTIFICATE</code>.</p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>The name or short description that's used to identify the certificate.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * <p>Returns the next token, which you can use to list the next certificate.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns an array of the certificates that are specified in the
   *         <code>ListCertificates</code> call.</p>
   * @public
   */
  Certificates: ListedCertificate[] | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateRequest {
  /**
   * <p>The identifier of the certificate object that you are updating.</p>
   * @public
   */
  CertificateId: string | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes active. If you do not specify a value, <code>ActiveDate</code> takes the same value as
   *        <code>NotBeforeDate</code>, which is specified by the CA.
   *      </p>
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive. If you do not specify a value, <code>InactiveDate</code> takes the same value as
   *        <code>NotAfterDate</code>, which is specified by the CA.</p>
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * <p>A short description to help identify the certificate.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateResponse {
  /**
   * <p>Returns the identifier of the certificate object that you are updating.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer
 *       protocol-enabled server that has VPC as the endpoint type and the server's
 *         <code>VpcEndpointID</code> is not in the available state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const TransferTableStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;

/**
 * @public
 */
export type TransferTableStatus = (typeof TransferTableStatus)[keyof typeof TransferTableStatus];

/**
 * <p>A structure that contains the details for files transferred using an SFTP connector, during a single transfer.</p>
 * @public
 */
export interface ConnectorFileTransferResult {
  /**
   * <p>The filename and path to where the file was sent to or retrieved from.</p>
   * @public
   */
  FilePath: string | undefined;

  /**
   * <p>The current status for the transfer.</p>
   * @public
   */
  StatusCode: TransferTableStatus | undefined;

  /**
   * <p>For transfers that fail, this parameter contains a code indicating the reason. For example, <code>RETRIEVE_FILE_NOT_FOUND</code>
   *          </p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>For transfers that fail, this parameter describes the reason for the failure.</p>
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * <p>Contains the details for an SFTP connector object. The connector object is used for transferring files to and from a
 *       partner's SFTP server.</p>
 *          <note>
 *             <p>Because the <code>SftpConnectorConfig</code> data type is used for both creating and updating SFTP connectors, its parameters,
 *         <code>TrustedHostKeys</code> and <code>UserSecretId</code> are marked as not required. This is a bit misleading, as they are not required when
 *       you are updating an existing SFTP connector, but <i>are required</i> when you are creating a new SFTP connector.</p>
 *          </note>
 * @public
 */
export interface SftpConnectorConfig {
  /**
   * <p>The identifier for the secret (in Amazon Web Services Secrets Manager) that contains the SFTP user's private key, password, or both. The identifier must be the Amazon Resource Name (ARN) of the secret.</p>
   * @public
   */
  UserSecretId?: string | undefined;

  /**
   * <p>The public portion of the host key, or keys, that are used to identify the external server to which you are connecting.
   *       You can use the <code>ssh-keyscan</code> command against the SFTP server to retrieve the necessary key.</p>
   *          <p>The three standard SSH public key format elements are <code>&lt;key type&gt;</code>,
   *         <code>&lt;body base64&gt;</code>, and an optional <code>&lt;comment&gt;</code>, with spaces
   *       between each element. Specify only the  <code>&lt;key type&gt;</code> and <code>&lt;body
   *         base64&gt;</code>: do not enter the <code>&lt;comment&gt;</code> portion of the key.</p>
   *          <p>For the trusted host key, Transfer Family accepts RSA and ECDSA keys.</p>
   *          <ul>
   *             <li>
   *                <p>For RSA keys, the <code>&lt;key type&gt;</code> string is <code>ssh-rsa</code>.</p>
   *             </li>
   *             <li>
   *                <p>For ECDSA keys, the <code>&lt;key type&gt;</code> string is either
   *             <code>ecdsa-sha2-nistp256</code>, <code>ecdsa-sha2-nistp384</code>, or
   *             <code>ecdsa-sha2-nistp521</code>, depending on the size of the key you generated.</p>
   *             </li>
   *          </ul>
   *          <p>Run this command to retrieve the SFTP server host key, where your SFTP server name is <code>ftp.host.com</code>.</p>
   *          <p>
   *             <code>ssh-keyscan ftp.host.com</code>
   *          </p>
   *          <p>This prints the public host key to standard output.</p>
   *          <p>
   *             <code>ftp.host.com ssh-rsa AAAAB3Nza...&lt;long-string-for-public-key</code>
   *          </p>
   *          <p>Copy and paste this string into the <code>TrustedHostKeys</code> field for the <code>create-connector</code> command or into the <b>Trusted host keys</b> field in the console.</p>
   * @public
   */
  TrustedHostKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * <p>The URL of the partner's AS2 or SFTP endpoint.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>A structure that contains the parameters for an AS2 connector object.</p>
   * @public
   */
  As2Config?: As2ConnectorConfig | undefined;

  /**
   * <p>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role,
   *       provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.</p>
   *          <p>
   *             <b>For AS2 connectors</b>
   *          </p>
   *          <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *       <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *       <code>StartFileTransfer</code>.</p>
   *          <p>If you are using Basic authentication for your AS2 connector, the access role requires the
   *       <code>secretsmanager:GetSecretValue</code> permission for the secret. If the secret is encrypted using
   *       a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also
   *       needs the <code>kms:Decrypt</code> permission for that key.</p>
   *          <p>
   *             <b>For SFTP connectors</b>
   *          </p>
   *          <p>Make sure that the access role provides
   *       read and write access to the parent directory of the file location
   *       that's used in the <code>StartFileTransfer</code> request.
   *       Additionally,  make sure that the role provides
   *       <code>secretsmanager:GetSecretValue</code> permission to Secrets Manager.</p>
   * @public
   */
  AccessRole: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn
   *       on CloudWatch logging for Amazon S3 events. When set, you can view connector
   *       activity in your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A structure that contains the parameters for an SFTP connector object.</p>
   * @public
   */
  SftpConfig?: SftpConnectorConfig | undefined;

  /**
   * <p>Specifies the name of the security policy for the connector.</p>
   * @public
   */
  SecurityPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * <p>The unique identifier for the connector, returned after the API call succeeds.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * <p>Describes the parameters for the connector, as identified by the
 *       <code>ConnectorId</code>.</p>
 * @public
 */
export interface DescribedConnector {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * <p>The URL of the partner's AS2 or SFTP endpoint.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>A structure that contains the parameters for an AS2 connector object.</p>
   * @public
   */
  As2Config?: As2ConnectorConfig | undefined;

  /**
   * <p>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role,
   *       provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.</p>
   *          <p>
   *             <b>For AS2 connectors</b>
   *          </p>
   *          <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *       <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *       <code>StartFileTransfer</code>.</p>
   *          <p>If you are using Basic authentication for your AS2 connector, the access role requires the
   *       <code>secretsmanager:GetSecretValue</code> permission for the secret. If the secret is encrypted using
   *       a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also
   *       needs the <code>kms:Decrypt</code> permission for that key.</p>
   *          <p>
   *             <b>For SFTP connectors</b>
   *          </p>
   *          <p>Make sure that the access role provides
   *       read and write access to the parent directory of the file location
   *       that's used in the <code>StartFileTransfer</code> request.
   *       Additionally,  make sure that the role provides
   *       <code>secretsmanager:GetSecretValue</code> permission to Secrets Manager.</p>
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn
   *       on CloudWatch logging for Amazon S3 events. When set, you can view connector
   *       activity in your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for connectors.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A structure that contains the parameters for an SFTP connector object.</p>
   * @public
   */
  SftpConfig?: SftpConnectorConfig | undefined;

  /**
   * <p>The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector.</p>
   * @public
   */
  ServiceManagedEgressIpAddresses?: string[] | undefined;

  /**
   * <p>The text name of the security policy for the specified connector.</p>
   * @public
   */
  SecurityPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * <p>The structure that contains the details of the connector.</p>
   * @public
   */
  Connector: DescribedConnector | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you can get additional results from the <code>ListConnectors</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       connectors.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Returns details of the connector that is specified.</p>
 * @public
 */
export interface ListedConnector {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * <p>The URL of the partner's AS2 or SFTP endpoint.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListConnectors</code> again and receive
   *       additional results, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns an array, where each item contains the details of a connector.</p>
   * @public
   */
  Connectors: ListedConnector[] | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The URL of the partner's AS2 or SFTP endpoint.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>A structure that contains the parameters for an AS2 connector object.</p>
   * @public
   */
  As2Config?: As2ConnectorConfig | undefined;

  /**
   * <p>Connectors are used to send files using either the AS2 or SFTP protocol. For the access role,
   *       provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.</p>
   *          <p>
   *             <b>For AS2 connectors</b>
   *          </p>
   *          <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *       <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *       <code>StartFileTransfer</code>.</p>
   *          <p>If you are using Basic authentication for your AS2 connector, the access role requires the
   *       <code>secretsmanager:GetSecretValue</code> permission for the secret. If the secret is encrypted using
   *       a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also
   *       needs the <code>kms:Decrypt</code> permission for that key.</p>
   *          <p>
   *             <b>For SFTP connectors</b>
   *          </p>
   *          <p>Make sure that the access role provides
   *       read and write access to the parent directory of the file location
   *       that's used in the <code>StartFileTransfer</code> request.
   *       Additionally,  make sure that the role provides
   *       <code>secretsmanager:GetSecretValue</code> permission to Secrets Manager.</p>
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn
   *       on CloudWatch logging for Amazon S3 events. When set, you can view connector
   *       activity in your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>A structure that contains the parameters for an SFTP connector object.</p>
   * @public
   */
  SftpConfig?: SftpConnectorConfig | undefined;

  /**
   * <p>Specifies the name of the security policy for the connector.</p>
   * @public
   */
  SecurityPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * <p>Returns the identifier of the connector object that you are updating.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * <p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems
 *       (Amazon EFS) for storage.</p>
 *          <p>
 *     </p>
 * @public
 */
export interface EfsFileLocation {
  /**
   * <p>The identifier of the file system, assigned by Amazon EFS.</p>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>The pathname for the folder being used by a workflow.</p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * <p>Specifies the customer input Amazon S3 file location. If it is used inside <code>copyStepDetails.DestinationFileLocation</code>, it should be the S3 copy destination.</p>
 *          <p>
 *       You need to provide the bucket and key.
 *       The key can represent either a path or a file.
 *       This is determined by whether or not you end the key value with the forward slash (/) character.
 *       If the final character is "/", then your file is copied to the folder, and its name does not change.
 *       If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten.
 *     </p>
 *          <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder.
 *       If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>:
 *       each upload overwrites the previous version of the <i>bob</i> file.</p>
 * @public
 */
export interface S3InputFileLocation {
  /**
   * <p>Specifies the S3 bucket for the customer input file.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>Specifies the location for the file that's being processed.</p>
 * @public
 */
export interface InputFileLocation {
  /**
   * <p>Specifies the details for the Amazon S3 file that's being copied or decrypted.</p>
   * @public
   */
  S3FileLocation?: S3InputFileLocation | undefined;

  /**
   * <p>Specifies the details for the Amazon Elastic File System (Amazon EFS) file that's being
   *       decrypted.</p>
   * @public
   */
  EfsFileLocation?: EfsFileLocation | undefined;
}

/**
 * @public
 * @enum
 */
export const OverwriteExisting = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type OverwriteExisting = (typeof OverwriteExisting)[keyof typeof OverwriteExisting];

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 * @public
 */
export interface CopyStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the location for the file being copied. Use <code>$\{Transfer:UserName\}</code> or
   *         <code>$\{Transfer:UploadDate\}</code> in this field to parametrize the destination prefix by
   *       username or uploaded date.</p>
   *          <ul>
   *             <li>
   *                <p>Set the value of <code>DestinationFileLocation</code> to
   *             <code>$\{Transfer:UserName\}</code> to copy uploaded files to an Amazon S3 bucket
   *           that is prefixed with the name of the Transfer Family user that uploaded the
   *           file.</p>
   *             </li>
   *             <li>
   *                <p>Set the value of <code>DestinationFileLocation</code> to <code>$\{Transfer:UploadDate\}</code> to copy uploaded files to
   *           an Amazon S3 bucket that is prefixed with the date of the upload.</p>
   *                <note>
   *                   <p>The system resolves <code>UploadDate</code> to a date format of <i>YYYY-MM-DD</i>, based on the date the file
   *             is uploaded in UTC.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  DestinationFileLocation?: InputFileLocation | undefined;

  /**
   * <p>A flag that indicates whether to overwrite an existing file of the same name.
   *       The default is <code>FALSE</code>.</p>
   *          <p>If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>OverwriteExisting</code> is <code>TRUE</code>, the existing file is replaced with the file being processed.</p>
   *             </li>
   *             <li>
   *                <p>If <code>OverwriteExisting</code> is <code>FALSE</code>, nothing happens, and the workflow processing stops.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OverwriteExisting?: OverwriteExisting | undefined;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>To use the previous file as the input, enter <code>$\{previous.file\}</code>.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>To use the originally uploaded file location as input for this step, enter <code>$\{original.file\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MapType = {
  DIRECTORY: "DIRECTORY",
  FILE: "FILE",
} as const;

/**
 * @public
 */
export type MapType = (typeof MapType)[keyof typeof MapType];

/**
 * <p>Represents an object that contains entries and targets for
 *         <code>HomeDirectoryMappings</code>.</p>
 *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
 *          <p>
 *             <code>[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]</code>
 *          </p>
 * @public
 */
export interface HomeDirectoryMapEntry {
  /**
   * <p>Represents an entry for <code>HomeDirectoryMappings</code>.</p>
   * @public
   */
  Entry: string | undefined;

  /**
   * <p>Represents the map target that is used in a <code>HomeDirectoryMapEntry</code>.</p>
   * @public
   */
  Target: string | undefined;

  /**
   * <p>Specifies the type of mapping. Set the type to <code>FILE</code> if you want the mapping to point to a file, or <code>DIRECTORY</code> for the directory to point to a directory.</p>
   *          <note>
   *             <p>By default, home directory mappings have a <code>Type</code> of <code>DIRECTORY</code> when you create a Transfer Family server. You would need to explicitly
   *         set <code>Type</code> to <code>FILE</code> if you want a mapping to have a file
   *         target.</p>
   *          </note>
   * @public
   */
  Type?: MapType | undefined;
}

/**
 * @public
 * @enum
 */
export const HomeDirectoryType = {
  LOGICAL: "LOGICAL",
  PATH: "PATH",
} as const;

/**
 * @public
 */
export type HomeDirectoryType = (typeof HomeDirectoryType)[keyof typeof HomeDirectoryType];

/**
 * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
 *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
 *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
 *       files and directories in your file system determine the level of access your users get when
 *       transferring files into and out of your Amazon EFS file systems.</p>
 * @public
 */
export interface PosixProfile {
  /**
   * <p>The POSIX user ID used for all EFS operations by this user.</p>
   * @public
   */
  Uid: number | undefined;

  /**
   * <p>The POSIX group ID used for all EFS operations by this user.</p>
   * @public
   */
  Gid: number | undefined;

  /**
   * <p>The secondary POSIX group IDs used for all EFS operations by this user.</p>
   * @public
   */
  SecondaryGids?: number[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM)
   *       role provides access to paths in <code>Target</code>. This value
   *       can be set only when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down your
   *       user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>$\{Transfer:UserName\}</code>,
   *      <code>$\{Transfer:HomeDirectory\}</code>, and <code>$\{Transfer:HomeBucket\}</code>.</p>
   *          <note>
   *             <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p>
   *             <p>For session policies, Transfer Family stores the policy as a JSON blob, instead
   *         of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass
   *         it in the <code>Policy</code> argument.</p>
   *             <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html">Example
   *           session policy</a>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Security Token Service API
   *           Reference</i>.</p>
   *          </note>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter \{samAccountName -like "<i>YourGroupName</i>*"\} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessResponse {
  /**
   * <p>The identifier of the server that the user is attached to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The external identifier of the group whose users have access to your Amazon S3 or Amazon
   *       EFS resources over the enabled protocols using Transfer Family.</p>
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProfileType = {
  LOCAL: "LOCAL",
  PARTNER: "PARTNER",
} as const;

/**
 * @public
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * <p>The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the
   *     <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages
   *       sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the
   *       AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.</p>
   * @public
   */
  As2Id: string | undefined;

  /**
   * <p>Determines the type of profile to create:</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>LOCAL</code> to create a local profile. A local profile represents the AS2-enabled Transfer Family server organization or party.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>PARTNER</code> to create a partner profile. A partner profile represents a remote organization, external to Transfer Family.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProfileType: ProfileType | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateIds?: string[] | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for AS2 profiles.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * <p>The unique identifier for the AS2 profile, returned after the API call succeeds.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Domain = {
  EFS: "EFS",
  S3: "S3",
} as const;

/**
 * @public
 */
export type Domain = (typeof Domain)[keyof typeof Domain];

/**
 * <p>The virtual private cloud (VPC) endpoint settings that are configured for your file
 *       transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server
 *       and resources only within your VPC. To control incoming internet traffic, invoke the
 *         <code>UpdateServer</code> API and attach an Elastic IP address to your server's
 *       endpoint.</p>
 *          <note>
 *             <p> After May 19, 2021, you won't be able to create a server using
 *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account if your account hasn't already
 *       done so before May 19, 2021. If you have already created servers with
 *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account on or before May 19, 2021,
 *         you will not be affected. After this date, use
 *         <code>EndpointType</code>=<code>VPC</code>.</p>
 *             <p>For more information, see
 *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
 *             <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With
 *         this endpoint type, you have the option to directly associate up to three Elastic IPv4
 *         addresses (BYO IP included) with your server's endpoint and use VPC security groups to
 *         restrict traffic by the client's public IP address. This is not possible with
 *           <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p>
 *          </note>
 * @public
 */
export interface EndpointDetails {
  /**
   * <p>A list of address allocation IDs that are required to attach an Elastic IP address to your
   *       server's endpoint.</p>
   *          <p>An address allocation ID corresponds to the allocation ID of an Elastic IP address. This
   *       value can be retrieved from the <code>allocationId</code> field from the Amazon EC2
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Address.html">Address</a>
   *       data type. One way to retrieve this value is by calling the EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html">DescribeAddresses</a> API.</p>
   *          <p>This parameter is optional. Set this parameter if you want to make your VPC endpoint
   *       public-facing. For details, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#create-internet-facing-endpoint">Create an internet-facing endpoint for your server</a>.</p>
   *          <note>
   *             <p>This property can only be set as follows:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>EndpointType</code> must be set to
   *             <code>VPC</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>The Transfer Family server must be offline.</p>
   *                </li>
   *                <li>
   *                   <p>You cannot set this parameter for Transfer Family servers that use the FTP protocol.</p>
   *                </li>
   *                <li>
   *                   <p>The server must already have <code>SubnetIds</code> populated (<code>SubnetIds</code> and <code>AddressAllocationIds</code> cannot be updated simultaneously).</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AddressAllocationIds</code> can't contain duplicates, and must be equal in length to <code>SubnetIds</code>. For example,
   *           if you have three subnet IDs, you must also specify three address allocation IDs.</p>
   *                </li>
   *                <li>
   *                   <p>Call the <code>UpdateServer</code> API to set or change this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  AddressAllocationIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs that are required to host your server endpoint in your VPC.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *          </note>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The identifier of the VPC endpoint.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *           <code>VPC_ENDPOINT</code>.</p>
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *          </note>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The VPC identifier of the VPC in which a server's endpoint will be hosted.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *          </note>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of security groups IDs that are available to attach to your server's
   *       endpoint.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *             <p>You can edit the <code>SecurityGroupIds</code> property in the <a href="https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html">UpdateServer</a> API only if you are changing the <code>EndpointType</code> from
   *           <code>PUBLIC</code> or <code>VPC_ENDPOINT</code> to <code>VPC</code>. To change security
   *         groups associated with your server's VPC endpoint after creation, use the Amazon EC2
   *           <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html">ModifyVpcEndpoint</a> API.</p>
   *          </note>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
  VPC_ENDPOINT: "VPC_ENDPOINT",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const SftpAuthenticationMethods = {
  PASSWORD: "PASSWORD",
  PUBLIC_KEY: "PUBLIC_KEY",
  PUBLIC_KEY_AND_PASSWORD: "PUBLIC_KEY_AND_PASSWORD",
  PUBLIC_KEY_OR_PASSWORD: "PUBLIC_KEY_OR_PASSWORD",
} as const;

/**
 * @public
 */
export type SftpAuthenticationMethods = (typeof SftpAuthenticationMethods)[keyof typeof SftpAuthenticationMethods];

/**
 * <p>Returns information related to the type of user authentication that is in use for a file
 *       transfer protocol-enabled server's users. A server can have only one method of
 *       authentication.</p>
 * @public
 */
export interface IdentityProviderDetails {
  /**
   * <p>Provides the location of the service endpoint used to authenticate users.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>This parameter is only applicable if your <code>IdentityProviderType</code> is <code>API_GATEWAY</code>. Provides the type of <code>InvocationRole</code> used to authenticate the user
   *       account.</p>
   * @public
   */
  InvocationRole?: string | undefined;

  /**
   * <p>The identifier of the Directory Service directory that you want to use as your identity provider.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The ARN for a Lambda function to use for the Identity provider.</p>
   * @public
   */
  Function?: string | undefined;

  /**
   * <p>For SFTP-enabled servers, and for custom identity providers <i>only</i>, you
   *       can specify whether to authenticate using a password, SSH key pair, or both.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code> - users must provide their password to connect.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC_KEY</code> - users must provide their private key to connect.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC_KEY_OR_PASSWORD</code> - users can authenticate with either their password or their key. This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC_KEY_AND_PASSWORD</code> - users must provide both their private key and their password to connect.
   *           The server checks the key first, and then if the key is valid, the system prompts for a password.
   *           If the private key provided does not match the public key that is stored, authentication fails.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SftpAuthenticationMethods?: SftpAuthenticationMethods | undefined;
}

/**
 * @public
 * @enum
 */
export const IdentityProviderType = {
  API_GATEWAY: "API_GATEWAY",
  AWS_DIRECTORY_SERVICE: "AWS_DIRECTORY_SERVICE",
  AWS_LAMBDA: "AWS_LAMBDA",
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;

/**
 * @public
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

/**
 * @public
 * @enum
 */
export const SetStatOption = {
  DEFAULT: "DEFAULT",
  ENABLE_NO_OP: "ENABLE_NO_OP",
} as const;

/**
 * @public
 */
export type SetStatOption = (typeof SetStatOption)[keyof typeof SetStatOption];

/**
 * @public
 * @enum
 */
export const TlsSessionResumptionMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENFORCED: "ENFORCED",
} as const;

/**
 * @public
 */
export type TlsSessionResumptionMode = (typeof TlsSessionResumptionMode)[keyof typeof TlsSessionResumptionMode];

/**
 * <p>
 *       The protocol settings that are configured for your server.
 *     </p>
 * @public
 */
export interface ProtocolDetails {
  /**
   * <p>
   *       Indicates passive mode, for FTP and FTPS protocols.
   *       Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer.
   *       For example:
   *     </p>
   *          <p>
   *             <code>aws transfer update-server --protocol-details PassiveIp=0.0.0.0</code>
   *          </p>
   *          <p>Replace <code>0.0.0.0</code> in the example above with the actual IP address you want to use.</p>
   *          <note>
   *             <p>
   *         If you change the <code>PassiveIp</code> value, you must stop and then restart your Transfer Family server for the change to take effect. For details on using passive mode (PASV) in a NAT environment, see <a href="http://aws.amazon.com/blogs/storage/configuring-your-ftps-server-behind-a-firewall-or-nat-with-aws-transfer-family/">Configuring your FTPS server behind a firewall or NAT with Transfer Family</a>.
   *       </p>
   *          </note>
   *          <p>
   *             <i>Special values</i>
   *          </p>
   *          <p>The <code>AUTO</code> and <code>0.0.0.0</code> are special values for the <code>PassiveIp</code> parameter. The value <code>PassiveIp=AUTO</code>
   *       is assigned by default to FTP and FTPS type servers. In this case, the server automatically responds with one of the endpoint IPs within the PASV response.
   *       <code>PassiveIp=0.0.0.0</code> has a more unique application for its usage. For example, if you have a High Availability (HA) Network Load Balancer (NLB) environment,
   *       where you have 3 subnets, you can only specify a single IP address using the <code>PassiveIp</code> parameter. This reduces the effectiveness of having High Availability.
   *       In this case, you can specify <code>PassiveIp=0.0.0.0</code>. This tells the client to use the same IP address as the Control connection and utilize all AZs for their
   *       connections. Note, however, that not all FTP clients support the <code>PassiveIp=0.0.0.0</code> response. FileZilla and WinSCP do support it. If you are using other
   *       clients, check to see if your client supports the <code>PassiveIp=0.0.0.0</code> response.</p>
   * @public
   */
  PassiveIp?: string | undefined;

  /**
   * <p>A property used with Transfer Family servers that use the FTPS protocol. TLS Session Resumption provides a mechanism to resume or share a negotiated secret
   *       key between the control and data connection for an FTPS session. <code>TlsSessionResumptionMode</code> determines whether or not the server resumes recent,
   *       negotiated sessions through a unique session ID. This property is available during <code>CreateServer</code> and <code>UpdateServer</code> calls.
   *       If a <code>TlsSessionResumptionMode</code> value is not specified during <code>CreateServer</code>, it is set to <code>ENFORCED</code> by default.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>: the server does not process TLS session resumption client requests and creates a new TLS session for each request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: the server processes and accepts clients that are performing TLS session resumption.
   *             The server doesn't reject client data connections that do not perform the TLS session resumption client processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENFORCED</code>: the server processes and accepts clients that are performing TLS session resumption.
   *             The server rejects client data connections that do not perform the TLS session resumption client processing.
   *             Before you set the value to <code>ENFORCED</code>, test your clients.</p>
   *                <note>
   *                   <p>Not all FTPS clients perform TLS session resumption. So, if you choose to enforce
   *               TLS session resumption, you prevent any connections from FTPS clients that don't perform
   *               the protocol negotiation. To determine whether or not you can use the
   *               <code>ENFORCED</code> value, you need to test your clients.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  TlsSessionResumptionMode?: TlsSessionResumptionMode | undefined;

  /**
   * <p>Use the <code>SetStatOption</code> to ignore the error that is generated when the client attempts to use <code>SETSTAT</code> on a file you are uploading to an S3 bucket.</p>
   *          <p>Some SFTP file transfer clients can attempt to change the attributes of remote files, including timestamp and permissions, using commands, such as <code>SETSTAT</code> when uploading the file.
   *         However, these commands are not compatible with object storage systems, such as Amazon S3. Due to this incompatibility, file uploads from these clients can result in errors even when
   *         the file is otherwise successfully uploaded.</p>
   *          <p>Set the value to <code>ENABLE_NO_OP</code> to have the Transfer Family server ignore the <code>SETSTAT</code> command, and upload files without needing to make any changes to your SFTP client.
   *         While the <code>SetStatOption</code>
   *             <code>ENABLE_NO_OP</code> setting ignores the error, it does generate a log entry in Amazon CloudWatch Logs, so you can determine when the client is making a <code>SETSTAT</code> call.</p>
   *          <note>
   *             <p>If you want to preserve the original timestamp for your file, and modify other file attributes using <code>SETSTAT</code>, you can use Amazon EFS as backend storage with Transfer Family.</p>
   *          </note>
   * @public
   */
  SetStatOption?: SetStatOption | undefined;

  /**
   * <p>Indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p>
   * @public
   */
  As2Transports?: As2Transport[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  AS2: "AS2",
  FTP: "FTP",
  FTPS: "FTPS",
  SFTP: "SFTP",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const DirectoryListingOptimization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DirectoryListingOptimization =
  (typeof DirectoryListingOptimization)[keyof typeof DirectoryListingOptimization];

/**
 * <p>The Amazon S3 storage options that are configured for your server.</p>
 * @public
 */
export interface S3StorageOptions {
  /**
   * <p>Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.</p>
   *          <p>By default, home directory mappings have a <code>TYPE</code> of <code>DIRECTORY</code>. If you enable this option, you would then need to explicitly set the <code>HomeDirectoryMapEntry</code>
   *             <code>Type</code> to <code>FILE</code> if you want a mapping to have a file target.</p>
   * @public
   */
  DirectoryListingOptimization?: DirectoryListingOptimization | undefined;
}

/**
 * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
 *          <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a
 *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects
 *     while the file is still being uploaded.</p>
 * @public
 */
export interface WorkflowDetail {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can
   *       assume, so that all workflow steps can operate on the required resources</p>
   * @public
   */
  ExecutionRole: string | undefined;
}

/**
 * <p>Container for the <code>WorkflowDetail</code> data type.
 *       It is used by actions that trigger a workflow to begin execution.</p>
 * @public
 */
export interface WorkflowDetails {
  /**
   * <p>A trigger that starts a workflow: the workflow begins to execute after a file is uploaded.</p>
   *          <p>To remove an associated workflow from a server, you can provide an empty <code>OnUpload</code> object, as in the following example.</p>
   *          <p>
   *             <code>aws transfer update-server --server-id s-01234567890abcdef --workflow-details '\{"OnUpload":[]\}'</code>
   *          </p>
   *          <note>
   *             <p>
   *                <code>OnUpload</code> can contain a maximum of one <code>WorkflowDetail</code> object.</p>
   *          </note>
   * @public
   */
  OnUpload?: WorkflowDetail[] | undefined;

  /**
   * <p>A trigger that starts a workflow if a file is only partially uploaded. You can attach a workflow to a server
   *   that executes whenever there is a partial upload.</p>
   *          <p>A <i>partial upload</i> occurs when a file is open when the session disconnects.</p>
   *          <note>
   *             <p>
   *                <code>OnPartialUpload</code> can contain a maximum of one <code>WorkflowDetail</code> object.</p>
   *          </note>
   * @public
   */
  OnPartialUpload?: WorkflowDetail[] | undefined;
}

/**
 * @public
 */
export interface CreateServerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate. Required
   *       when <code>Protocols</code> is set to <code>FTPS</code>.</p>
   *          <p>To request a new public certificate, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate</a>
   *       in the <i>Certificate Manager User Guide</i>.</p>
   *          <p>To import an existing certificate into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into ACM</a>
   *       in the <i>Certificate Manager User Guide</i>.</p>
   *          <p>To request a private certificate to use FTPS through private IP addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html">Request a
   *         private certificate</a> in the <i>Certificate Manager User
   *       Guide</i>.</p>
   *          <p>Certificates with the following cryptographic algorithms and key sizes are
   *       supported:</p>
   *          <ul>
   *             <li>
   *                <p>2048-bit RSA (RSA_2048)</p>
   *             </li>
   *             <li>
   *                <p>4096-bit RSA (RSA_4096)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 256 bit (EC_prime256v1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 384 bit (EC_secp384r1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 521 bit (EC_secp521r1)</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP
   *         address specified and information about the issuer.</p>
   *          </note>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The domain of the storage system that is used for file transfers. There are two domains
   *       available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The
   *       default value is S3.</p>
   *          <note>
   *             <p>After the server is created, the domain cannot be changed.</p>
   *          </note>
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make your endpoint accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   * @public
   */
  EndpointDetails?: EndpointDetails | undefined;

  /**
   * <p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC)
   *       or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and
   *       resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p>
   *          <note>
   *             <p> After May 19, 2021, you won't be able to create a server using
   *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account if your account hasn't already
   *       done so before May 19, 2021. If you have already created servers with
   *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account on or before May 19, 2021,
   *         you will not be affected. After this date, use
   *         <code>EndpointType</code>=<code>VPC</code>.</p>
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *             <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With
   *         this endpoint type, you have the option to directly associate up to three Elastic IPv4
   *         addresses (BYO IP included) with your server's endpoint and use VPC security groups to
   *         restrict traffic by the client's public IP address. This is not possible with
   *           <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p>
   *          </note>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want
   *      to rotate keys, or have a set of active keys that use different algorithms.</p>
   *          <p>Use the following command to generate an RSA 2048 bit key with no passphrase:</p>
   *          <p>
   *             <code>ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key</code>.</p>
   *          <p>Use a minimum value of 2048 for the <code>-b</code> option. You can create a stronger key by using 3072 or 4096.</p>
   *          <p>Use the following command to generate an ECDSA 256 bit key with no passphrase:</p>
   *          <p>
   *             <code>ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key</code>.</p>
   *          <p>Valid values for the <code>-b</code> option for ECDSA are 256, 384, and 521.</p>
   *          <p>Use the following command to generate an ED25519 key with no passphrase:</p>
   *          <p>
   *             <code>ssh-keygen -t ed25519 -N "" -f my-new-server-key</code>.</p>
   *          <p>For all of these commands, you can replace <i>my-new-server-key</i> with a string of your choice.</p>
   *          <important>
   *             <p>If you aren't planning to migrate existing users from an existing SFTP-enabled
   *         server to a new server, don't update the host key. Accidentally changing a
   *         server's host key can be disruptive.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Manage host keys for your SFTP-enabled server</a> in the <i>Transfer Family User Guide</i>.</p>
   * @public
   */
  HostKey?: string | undefined;

  /**
   * <p>Required when <code>IdentityProviderType</code> is set to
   *         <code>AWS_DIRECTORY_SERVICE</code>, <code>Amazon Web Services_LAMBDA</code> or
   *         <code>API_GATEWAY</code>. Accepts an array containing all of the information required to use
   *       a directory in <code>AWS_DIRECTORY_SERVICE</code> or invoke a customer-supplied authentication
   *       API, including the API Gateway URL. Cannot be specified when <code>IdentityProviderType</code>
   *       is set to <code>SERVICE_MANAGED</code>.</p>
   * @public
   */
  IdentityProviderDetails?: IdentityProviderDetails | undefined;

  /**
   * <p>The mode of authentication for a server. The default value is
   *         <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within
   *       the Transfer Family service.</p>
   *          <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to
   *       Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your
   *       on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to
   *       provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The
   *       <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call
   *       for authentication by using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider.
   *       If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter
   *       for the <code>IdentityProviderDetails</code> data type.</p>
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p>
   *          <note>
   *             <p>The SFTP protocol does not support post-authentication display banners.</p>
   *          </note>
   * @public
   */
  PostAuthenticationLoginBanner?: string | undefined;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates.
   *     For example, the following banner displays details about using the system:</p>
   *          <p>
   *             <code>This system is for the use of authorized users only. Individuals using this computer system without authority,
   *     or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by
   *     system personnel.</code>
   *          </p>
   * @public
   */
  PreAuthenticationLoginBanner?: string | undefined;

  /**
   * <p>Specifies the file transfer protocol or protocols over which your file transfer protocol
   *       client can connect to your server's endpoint. The available protocols are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over
   *           SSH</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS
   *           encryption</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AS2</code> (Applicability Statement 2): used for transporting structured business-to-business data</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you select <code>FTPS</code>, you must choose a certificate stored in Certificate Manager (ACM)
   *             which is used to identify your server when clients connect to it over
   *             FTPS.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the
   *             <code>EndpointType</code> must be <code>VPC</code> and the
   *             <code>IdentityProviderType</code> must be either <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *             can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set any of the supported identity types:
   *             <code>SERVICE_MANAGED</code>, <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>AS2</code>, then the
   *               <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>The protocol settings that are configured for your server.</p>
   *          <ul>
   *             <li>
   *                <p>
   *           To indicate passive mode (for FTP and FTPS protocols), use the <code>PassiveIp</code> parameter.
   *           Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   *         </p>
   *             </li>
   *             <li>
   *                <p>To ignore the error that is generated when the client attempts to use the <code>SETSTAT</code> command on a file that you are
   *         uploading to an Amazon S3 bucket, use the <code>SetStatOption</code> parameter. To have the Transfer Family server ignore the
   *         <code>SETSTAT</code> command and upload files without needing to make any changes to your SFTP client, set the value to
   *         <code>ENABLE_NO_OP</code>. If you set the <code>SetStatOption</code> parameter to <code>ENABLE_NO_OP</code>, Transfer Family
   *         generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a <code>SETSTAT</code>
   *         call.</p>
   *             </li>
   *             <li>
   *                <p>To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the
   *         <code>TlsSessionResumptionMode</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>As2Transports</code> indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtocolDetails?: ProtocolDetails | undefined;

  /**
   * <p>Specifies the name of the security policy for the server.</p>
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for servers.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
   *          <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a
   *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects
   *     while the file is still being uploaded.</p>
   * @public
   */
  WorkflowDetails?: WorkflowDetails | undefined;

  /**
   * <p>Specifies the log groups to which your server logs are sent.</p>
   *          <p>To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:</p>
   *          <p>
   *             <code>arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:*</code>
   *          </p>
   *          <p>For example, <code>arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*</code>
   *          </p>
   *          <p>If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty
   *         value for this parameter in an <code>update-server</code> call. For example:</p>
   *          <p>
   *             <code>update-server --server-id s-1234567890abcdef0 --structured-log-destinations</code>
   *          </p>
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;

  /**
   * <p>Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.</p>
   *          <p>By default, home directory mappings have a <code>TYPE</code> of <code>DIRECTORY</code>. If you enable this option, you would then need to explicitly set the <code>HomeDirectoryMapEntry</code>
   *             <code>Type</code> to <code>FILE</code> if you want a mapping to have a file target.</p>
   * @public
   */
  S3StorageOptions?: S3StorageOptions | undefined;
}

/**
 * @public
 */
export interface CreateServerResponse {
  /**
   * <p>The service-assigned identifier of the server that is created.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM)
   *       role provides access to paths in <code>Target</code>. This value
   *       can be set only when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/directory1", "Target":
   *         "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock your user down
   *       to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the value the user
   *       should see for their home directory when they log in.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>$\{Transfer:UserName\}</code>,
   *      <code>$\{Transfer:HomeDirectory\}</code>, and <code>$\{Transfer:HomeBucket\}</code>.</p>
   *          <note>
   *             <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p>
   *             <p>For session policies, Transfer Family stores the policy as a JSON blob, instead
   *         of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass
   *         it in the <code>Policy</code> argument.</p>
   *             <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html">Example session
   *         policy</a>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services
   *           Security Token Service API Reference</i>.</p>
   *          </note>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in Amazon EFS determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server
   *       that you added your user to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The public portion of the Secure Shell (SSH) key used to authenticate the user to the
   *       server.</p>
   *          <p>The three standard SSH public key format elements are <code>&lt;key type&gt;</code>,
   *         <code>&lt;body base64&gt;</code>, and  an optional <code>&lt;comment&gt;</code>, with spaces
   *       between each element.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   *          <ul>
   *             <li>
   *                <p>For RSA keys, the key type  is <code>ssh-rsa</code>.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 keys, the key type is <code>ssh-ed25519</code>.</p>
   *             </li>
   *             <li>
   *                <p>For ECDSA keys, the key type is either <code>ecdsa-sha2-nistp256</code>,
   *             <code>ecdsa-sha2-nistp384</code>, or <code>ecdsa-sha2-nistp521</code>, depending on the
   *           size of the key you generated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SshPublicKeyBody?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for users. Tags are metadata attached
   *       to users for any purpose.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A unique string that identifies a user and is associated with a <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters
   *       long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen
   *       '-', period '.', and at sign '@'. The user name can't start
   *       with a hyphen, period, or at sign.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The identifier of the server that the user is attached to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a Transfer Family user.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * <p>A structure that describes the values to use for the IAM Identity Center settings when you create or update a web app.</p>
 * @public
 */
export interface IdentityCenterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The IAM role in IAM Identity Center used for the web app.</p>
   * @public
   */
  Role?: string | undefined;
}

/**
 * <p>A union that contains the <code>IdentityCenterConfig</code> object.</p>
 * @public
 */
export type WebAppIdentityProviderDetails =
  | WebAppIdentityProviderDetails.IdentityCenterConfigMember
  | WebAppIdentityProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace WebAppIdentityProviderDetails {
  /**
   * <p>A structure that describes the values to use for the IAM Identity Center settings when you create a web app.</p>
   * @public
   */
  export interface IdentityCenterConfigMember {
    IdentityCenterConfig: IdentityCenterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IdentityCenterConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    IdentityCenterConfig: (value: IdentityCenterConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: WebAppIdentityProviderDetails, visitor: Visitor<T>): T => {
    if (value.IdentityCenterConfig !== undefined) return visitor.IdentityCenterConfig(value.IdentityCenterConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const WebAppEndpointPolicy = {
  FIPS: "FIPS",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type WebAppEndpointPolicy = (typeof WebAppEndpointPolicy)[keyof typeof WebAppEndpointPolicy];

/**
 * <p>Contains an integer value that represents the value for number of concurrent connections or the user sessions on your web app.</p>
 * @public
 */
export type WebAppUnits = WebAppUnits.ProvisionedMember | WebAppUnits.$UnknownMember;

/**
 * @public
 */
export namespace WebAppUnits {
  /**
   * <p>An integer that represents the number of units for your desired number of concurrent connections, or the number of user sessions on your web app at the same time.</p>
   *          <p>Each increment allows an additional 250 concurrent sessions: a value of <code>1</code> sets the number of concurrent sessions to 250; <code>2</code> sets a value of 500, and so on. </p>
   * @public
   */
  export interface ProvisionedMember {
    Provisioned: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Provisioned?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Provisioned: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: WebAppUnits, visitor: Visitor<T>): T => {
    if (value.Provisioned !== undefined) return visitor.Provisioned(value.Provisioned);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateWebAppRequest {
  /**
   * <p>You can provide a structure that contains the details for the identity provider to use with your web app.</p>
   *          <p>For more details about this parameter, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/webapp-identity-center.html">Configure your identity provider for Transfer Family web apps</a>.</p>
   * @public
   */
  IdentityProviderDetails: WebAppIdentityProviderDetails | undefined;

  /**
   * <p>The <code>AccessEndpoint</code> is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.</p>
   *          <p>Before you enter a custom URL for this parameter, follow the steps described in
   *       <a href="https://docs.aws.amazon.com/transfer/latest/userguide/webapp-customize.html">Update your access endpoint with a custom URL</a>.</p>
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * <p>A union that contains the value for number of concurrent connections or the user sessions on your web app.</p>
   * @public
   */
  WebAppUnits?: WebAppUnits | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for web apps.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   *       Setting for the type of endpoint policy for the web app. The default value is <code>STANDARD</code>.
   *     </p>
   *          <p>If you are creating the web app in an Amazon Web Services GovCloud (US) Region, you can set this parameter to <code>FIPS</code>.</p>
   * @public
   */
  WebAppEndpointPolicy?: WebAppEndpointPolicy | undefined;
}

/**
 * @public
 */
export interface CreateWebAppResponse {
  /**
   * <p>Returns a unique identifier for the web app.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 * @public
 */
export interface CustomStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN for the Lambda function that is being called.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>Timeout, in seconds, for the step.</p>
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>To use the previous file as the input, enter <code>$\{previous.file\}</code>.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>To use the originally uploaded file location as input for this step, enter <code>$\{original.file\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  PGP: "PGP",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 * @public
 */
export interface DecryptStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of encryption used. Currently, this value must be <code>PGP</code>.</p>
   * @public
   */
  Type: EncryptionType | undefined;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>To use the previous file as the input, enter <code>$\{previous.file\}</code>.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>To use the originally uploaded file location as input for this step, enter <code>$\{original.file\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceFileLocation?: string | undefined;

  /**
   * <p>A flag that indicates whether to overwrite an existing file of the same name.
   *       The default is <code>FALSE</code>.</p>
   *          <p>If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>OverwriteExisting</code> is <code>TRUE</code>, the existing file is replaced with the file being processed.</p>
   *             </li>
   *             <li>
   *                <p>If <code>OverwriteExisting</code> is <code>FALSE</code>, nothing happens, and the workflow processing stops.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OverwriteExisting?: OverwriteExisting | undefined;

  /**
   * <p>Specifies the location for the file being decrypted. Use <code>$\{Transfer:UserName\}</code> or
   *       <code>$\{Transfer:UploadDate\}</code> in this field to parametrize the destination prefix by
   *       username or uploaded date.</p>
   *          <ul>
   *             <li>
   *                <p>Set the value of <code>DestinationFileLocation</code> to
   *           <code>$\{Transfer:UserName\}</code> to decrypt uploaded files to an Amazon S3 bucket
   *           that is prefixed with the name of the Transfer Family user that uploaded the
   *           file.</p>
   *             </li>
   *             <li>
   *                <p>Set the value of <code>DestinationFileLocation</code> to <code>$\{Transfer:UploadDate\}</code> to decrypt uploaded files to
   *           an Amazon S3 bucket that is prefixed with the date of the upload.</p>
   *                <note>
   *                   <p>The system resolves <code>UploadDate</code> to a date format of <i>YYYY-MM-DD</i>, based on the date the file
   *             is uploaded in UTC.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  DestinationFileLocation: InputFileLocation | undefined;
}

/**
 * <p>The name of the step, used to identify the delete step.</p>
 * @public
 */
export interface DeleteStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>To use the previous file as the input, enter <code>$\{previous.file\}</code>.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>To use the originally uploaded file location as input for this step, enter <code>$\{original.file\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * <p>Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.</p>
 * @public
 */
export interface S3Tag {
  /**
   * <p>The name assigned to the tag that you create.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value that corresponds to the key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 *          <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
 * @public
 */
export interface TagStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Array that contains from 1 to 10 key/value pairs.</p>
   * @public
   */
  Tags?: S3Tag[] | undefined;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>To use the previous file as the input, enter <code>$\{previous.file\}</code>.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>To use the originally uploaded file location as input for this step, enter <code>$\{original.file\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowStepType = {
  COPY: "COPY",
  CUSTOM: "CUSTOM",
  DECRYPT: "DECRYPT",
  DELETE: "DELETE",
  TAG: "TAG",
} as const;

/**
 * @public
 */
export type WorkflowStepType = (typeof WorkflowStepType)[keyof typeof WorkflowStepType];

/**
 * <p>The basic building block of a workflow.</p>
 * @public
 */
export interface WorkflowStep {
  /**
   * <p>
   *         Currently, the following step types are supported.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>COPY</code>
   *                   </b> - Copy the file to another location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CUSTOM</code>
   *                   </b> - Perform a custom step with an Lambda function target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DECRYPT</code>
   *                   </b> - Decrypt a file that was encrypted before it was uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DELETE</code>
   *                   </b> - Delete the file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TAG</code>
   *                   </b> - Add a tag to the file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: WorkflowStepType | undefined;

  /**
   * <p>Details for a step that performs a file copy.</p>
   *          <p>
   *         Consists of the following values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>A description</p>
   *             </li>
   *             <li>
   *                <p>An Amazon S3 location for the destination of the file copy.</p>
   *             </li>
   *             <li>
   *                <p>A flag that indicates whether to overwrite an existing file of the same name. The default is
   *             <code>FALSE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CopyStepDetails?: CopyStepDetails | undefined;

  /**
   * <p>Details for a step that invokes an Lambda function.</p>
   *          <p>Consists of the Lambda function's name, target, and timeout (in seconds). </p>
   * @public
   */
  CustomStepDetails?: CustomStepDetails | undefined;

  /**
   * <p>Details for a step that deletes the file.</p>
   * @public
   */
  DeleteStepDetails?: DeleteStepDetails | undefined;

  /**
   * <p>Details for a step that creates one or more tags.</p>
   *          <p>You specify one or more tags. Each tag contains a key-value pair.</p>
   * @public
   */
  TagStepDetails?: TagStepDetails | undefined;

  /**
   * <p>Details for a step that decrypts an encrypted file.</p>
   *          <p>Consists of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>A descriptive name</p>
   *             </li>
   *             <li>
   *                <p>An Amazon S3 or Amazon Elastic File System (Amazon EFS) location for the source file to
   *           decrypt.</p>
   *             </li>
   *             <li>
   *                <p>An S3 or Amazon EFS location for the destination of the file decryption.</p>
   *             </li>
   *             <li>
   *                <p>A flag that indicates whether to overwrite an existing file of the same name. The default is
   *             <code>FALSE</code>.</p>
   *             </li>
   *             <li>
   *                <p>The type of encryption that's used. Currently, only PGP encryption is supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DecryptStepDetails?: DecryptStepDetails | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * <p>A textual description for the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the details for the steps that are in the specified workflow.</p>
   *          <p>
   *       The <code>TYPE</code> specifies which of the following actions is being taken for this step.
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>COPY</code>
   *                   </b> - Copy the file to another location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CUSTOM</code>
   *                   </b> - Perform a custom step with an Lambda function target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DECRYPT</code>
   *                   </b> - Decrypt a file that was encrypted before it was uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DELETE</code>
   *                   </b> - Delete the file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TAG</code>
   *                   </b> - Add a tag to the file.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *         Currently, copying and tagging are supported only on S3.
   *       </p>
   *          </note>
   *          <p> For file location, you specify either the Amazon S3 bucket and key, or the Amazon EFS file system ID
   *       and path. </p>
   * @public
   */
  Steps: WorkflowStep[] | undefined;

  /**
   * <p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p>
   *          <note>
   *             <p>For custom steps, the Lambda function needs to send <code>FAILURE</code> to the call
   *         back API to kick off the exception steps. Additionally, if the Lambda does not send
   *           <code>SUCCESS</code> before it times out, the exception steps are executed.</p>
   *          </note>
   * @public
   */
  OnExceptionSteps?: WorkflowStep[] | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for workflows. Tags are metadata attached
   *       to workflows for any purpose.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomStepStatus = {
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type CustomStepStatus = (typeof CustomStepStatus)[keyof typeof CustomStepStatus];

/**
 * @public
 */
export interface DeleteAccessRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter \{samAccountName -like "<i>YourGroupName</i>*"\} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you are deleting.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The identifier of the host key that you are deleting.</p>
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * <p>The identifier of the profile that you are deleting.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerRequest {
  /**
   * <p>A unique system-assigned identifier for a server instance.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSshPublicKeyRequest {
  /**
   * <p>A system-assigned unique identifier for a file transfer protocol-enabled server instance
   *       that has the user assigned to it.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier used to reference your user's specific SSH key.</p>
   * @public
   */
  SshPublicKeyId: string | undefined;

  /**
   * <p>A unique string that identifies a user whose public key is being deleted.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>A system-assigned unique identifier for a server instance that has the user assigned to
   *       it.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user that is being deleted from a server.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebAppRequest {
  /**
   * <p>Provide the unique identifier for the web app that you are deleting.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebAppCustomizationRequest {
  /**
   * <p>Provide the unique identifier for the web app that contains the customizations that you are deleting.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this access assigned.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter \{samAccountName -like "<i>YourGroupName</i>*"\} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * <p>Describes the properties of the access that was specified.</p>
 * @public
 */
export interface DescribedAccess {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM)
   *       role provides access to paths in <code>Target</code>. This value
   *       can be set only when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down the
   *       associated access to the designated home directory ("<code>chroot</code>"). To do this, you
   *       can set <code>Entry</code> to '/' and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>$\{Transfer:UserName\}</code>,
   *      <code>$\{Transfer:HomeDirectory\}</code>, and <code>$\{Transfer:HomeBucket\}</code>.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter \{samAccountName -like "<i>YourGroupName</i>*"\} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   * @public
   */
  ExternalId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessResponse {
  /**
   * <p>A system-assigned unique identifier for a server that has this access assigned.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The external identifier of the server that the access is attached to.</p>
   * @public
   */
  Access: DescribedAccess | undefined;
}

/**
 * <p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage.</p>
 * @public
 */
export interface S3FileLocation {
  /**
   * <p>Specifies the S3 bucket that contains the file being used.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Specifies the file version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata.</p>
   * @public
   */
  Etag?: string | undefined;
}

/**
 * <p>Specifies the Amazon S3 or EFS file details to be used in the step.</p>
 * @public
 */
export interface FileLocation {
  /**
   * <p>Specifies the S3 details for the file being used, such as bucket, ETag, and so
   *       forth.</p>
   * @public
   */
  S3FileLocation?: S3FileLocation | undefined;

  /**
   * <p>Specifies the Amazon EFS identifier and the path for the file being used.</p>
   * @public
   */
  EfsFileLocation?: EfsFileLocation | undefined;
}

/**
 * <p>Consists of the logging role and the log group name.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>The name of the CloudWatch logging group for the Transfer Family server to which this workflow belongs.</p>
   * @public
   */
  LogGroupName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionErrorType = {
  ALREADY_EXISTS: "ALREADY_EXISTS",
  BAD_REQUEST: "BAD_REQUEST",
  CUSTOM_STEP_FAILED: "CUSTOM_STEP_FAILED",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
  PERMISSION_DENIED: "PERMISSION_DENIED",
  THROTTLED: "THROTTLED",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type ExecutionErrorType = (typeof ExecutionErrorType)[keyof typeof ExecutionErrorType];

/**
 * <p>Specifies the error message and type, for an error that occurs during the execution of the workflow.</p>
 * @public
 */
export interface ExecutionError {
  /**
   * <p>Specifies the error type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALREADY_EXISTS</code>: occurs for a copy step, if the overwrite option is not selected and a file with the same name already exists in the target location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BAD_REQUEST</code>: a general bad request: for example, a step that attempts to
   *           tag an EFS file returns <code>BAD_REQUEST</code>, as only S3 files can be tagged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_STEP_FAILED</code>: occurs when the custom step provided a callback that indicates failure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVER_ERROR</code>: a catch-all error that can occur for a variety of
   *           reasons.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_FOUND</code>: occurs when a requested entity, for example a source file for
   *           a copy step, does not exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PERMISSION_DENIED</code>: occurs if your policy does not contain the correct
   *           permissions to complete one or more of the steps in the workflow.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code>: occurs when the execution times out.</p>
   *                <note>
   *                   <p> You can set the <code>TimeoutSeconds</code> for a custom step, anywhere from 1 second to 1800 seconds (30 minutes). </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLED</code>: occurs if you exceed the new execution refill rate of one
   *           workflow per second.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: ExecutionErrorType | undefined;

  /**
   * <p>Specifies the descriptive message that corresponds to the <code>ErrorType</code>.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>Specifies the following details for the step: error (if any), outputs (if any), and the step type.</p>
 * @public
 */
export interface ExecutionStepResult {
  /**
   * <p>One of the available step types.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>COPY</code>
   *                   </b> - Copy the file to another location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CUSTOM</code>
   *                   </b> - Perform a custom step with an Lambda function target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DECRYPT</code>
   *                   </b> - Decrypt a file that was encrypted before it was uploaded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DELETE</code>
   *                   </b> - Delete the file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TAG</code>
   *                   </b> - Add a tag to the file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StepType?: WorkflowStepType | undefined;

  /**
   * <p>The values for the key/value pair applied as a tag to the file. Only applicable if the step type is <code>TAG</code>.</p>
   * @public
   */
  Outputs?: string | undefined;

  /**
   * <p>Specifies the details for an error, if it occurred during execution of the specified
   *       workflow step.</p>
   * @public
   */
  Error?: ExecutionError | undefined;
}

/**
 * <p>Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.</p>
 * @public
 */
export interface ExecutionResults {
  /**
   * <p>Specifies the details for the steps that are in the specified workflow.</p>
   * @public
   */
  Steps?: ExecutionStepResult[] | undefined;

  /**
   * <p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p>
   * @public
   */
  OnExceptionSteps?: ExecutionStepResult[] | undefined;
}

/**
 * <p>Specifies the user name, server ID, and session ID for a workflow.</p>
 * @public
 */
export interface UserDetails {
  /**
   * <p>A unique string that identifies a Transfer Family user associated with a server.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The system-assigned unique identifier for a Transfer server instance. </p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The system-assigned unique identifier for a session that corresponds to the workflow.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * <p>A container object for the session details that are associated with a workflow.</p>
 * @public
 */
export interface ServiceMetadata {
  /**
   * <p>The Server ID (<code>ServerId</code>), Session ID (<code>SessionId</code>) and user (<code>UserName</code>) make up the <code>UserDetails</code>.</p>
   * @public
   */
  UserDetails: UserDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  EXCEPTION: "EXCEPTION",
  HANDLING_EXCEPTION: "HANDLING_EXCEPTION",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * <p>The details for an execution object.</p>
 * @public
 */
export interface DescribedExecution {
  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>A structure that describes the Amazon S3 or EFS file location.
   *       This is the file location when the execution begins: if the file is being copied,
   *     this is the initial (as opposed to destination) file location.</p>
   * @public
   */
  InitialFileLocation?: FileLocation | undefined;

  /**
   * <p>A container object for the session details that are associated with a workflow.</p>
   * @public
   */
  ServiceMetadata?: ServiceMetadata | undefined;

  /**
   * <p>The IAM role associated with the execution.</p>
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * <p>The IAM logging role associated with the execution.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.
   *       </p>
   * @public
   */
  Status?: ExecutionStatus | undefined;

  /**
   * <p>A structure that describes the execution results. This includes a list of the steps along with the details of each step,
   *     error type and message (if any), and the <code>OnExceptionSteps</code> structure.</p>
   * @public
   */
  Results?: ExecutionResults | undefined;
}

/**
 * <p>The details for a server host key.</p>
 * @public
 */
export interface DescribedHostKey {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the host key.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the host key.</p>
   * @public
   */
  HostKeyId?: string | undefined;

  /**
   * <p>The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.</p>
   * @public
   */
  HostKeyFingerprint?: string | undefined;

  /**
   * <p>The text description for this host key.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The encryption algorithm that is used for the host key. The <code>Type</code> parameter is specified by using one of the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ssh-rsa</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ssh-ed25519</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ecdsa-sha2-nistp256</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ecdsa-sha2-nistp384</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ecdsa-sha2-nistp521</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date on which the host key was added to the server.</p>
   * @public
   */
  DateImported?: Date | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for host keys.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A structure that contains the details of the IAM Identity Center used for your web app. Returned during a call to <code>DescribeWebApp</code>.</p>
 * @public
 */
export interface DescribedIdentityCenterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center application: this value is set automatically when you create your web app.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The IAM role in IAM Identity Center used for the web app.</p>
   * @public
   */
  Role?: string | undefined;
}

/**
 * <p>The details for a local or partner AS2 profile. </p>
 * @public
 */
export interface DescribedProfile {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the profile.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the local or partner AS2 profile.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles.
   *    If not supplied in the request, the command lists all types of profiles.</p>
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * <p>The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the
   *     <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages
   *       sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the
   *       AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.</p>
   * @public
   */
  As2Id?: string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateIds?: string[] | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for profiles.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SecurityPolicyProtocol = {
  FTPS: "FTPS",
  SFTP: "SFTP",
} as const;

/**
 * @public
 */
export type SecurityPolicyProtocol = (typeof SecurityPolicyProtocol)[keyof typeof SecurityPolicyProtocol];

/**
 * @public
 * @enum
 */
export const SecurityPolicyResourceType = {
  CONNECTOR: "CONNECTOR",
  SERVER: "SERVER",
} as const;

/**
 * @public
 */
export type SecurityPolicyResourceType = (typeof SecurityPolicyResourceType)[keyof typeof SecurityPolicyResourceType];

/**
 * <p>Describes the properties of a security policy that you specify. For more information
 *       about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies for servers</a> or <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies-connectors.html">Working with security
 *           policies for SFTP connectors</a>.</p>
 * @public
 */
export interface DescribedSecurityPolicy {
  /**
   * <p>Specifies whether this policy enables Federal Information Processing Standards (FIPS).
   *       This parameter applies to both server and connector security policies.</p>
   * @public
   */
  Fips?: boolean | undefined;

  /**
   * <p>The text name of the specified security policy.</p>
   * @public
   */
  SecurityPolicyName: string | undefined;

  /**
   * <p>Lists the enabled Secure Shell (SSH) cipher encryption algorithms in the security policy
   *       that is attached to the server or connector. This parameter applies to both server and
   *       connector security policies.</p>
   * @public
   */
  SshCiphers?: string[] | undefined;

  /**
   * <p>Lists the enabled SSH key exchange (KEX) encryption algorithms in the security policy that
   *       is attached to the server or connector. This parameter applies to both server and connector
   *       security policies.</p>
   * @public
   */
  SshKexs?: string[] | undefined;

  /**
   * <p>Lists the enabled SSH message authentication code (MAC) encryption algorithms in the
   *       security policy that is attached to the server or connector. This parameter applies to both
   *       server and connector security policies.</p>
   * @public
   */
  SshMacs?: string[] | undefined;

  /**
   * <p>Lists the enabled Transport Layer Security (TLS) cipher encryption algorithms in the
   *       security policy that is attached to the server.</p>
   *          <note>
   *             <p>This parameter only applies to security policies for servers.</p>
   *          </note>
   * @public
   */
  TlsCiphers?: string[] | undefined;

  /**
   * <p>Lists the host key algorithms for the security policy.</p>
   *          <note>
   *             <p>This parameter only applies to security policies for connectors.</p>
   *          </note>
   * @public
   */
  SshHostKeyAlgorithms?: string[] | undefined;

  /**
   * <p>The resource type to which the security policy applies, either server or connector.</p>
   * @public
   */
  Type?: SecurityPolicyResourceType | undefined;

  /**
   * <p>Lists the file transfer protocols that the security policy applies to.</p>
   * @public
   */
  Protocols?: SecurityPolicyProtocol[] | undefined;
}

/**
 * @public
 * @enum
 */
export const State = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * <p>Describes the properties of a file transfer protocol-enabled server that was
 *       specified.</p>
 * @public
 */
export interface DescribedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the server.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the ARN of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when
   *         <code>Protocols</code> is set to <code>FTPS</code>.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The protocol settings that are configured for your server.</p>
   *          <ul>
   *             <li>
   *                <p>
   *           To indicate passive mode (for FTP and FTPS protocols), use the <code>PassiveIp</code> parameter.
   *           Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   *         </p>
   *             </li>
   *             <li>
   *                <p>To ignore the error that is generated when the client attempts to use the <code>SETSTAT</code> command on a file that you are
   *         uploading to an Amazon S3 bucket, use the <code>SetStatOption</code> parameter. To have the Transfer Family server ignore the
   *         <code>SETSTAT</code> command and upload files without needing to make any changes to your SFTP client, set the value to
   *         <code>ENABLE_NO_OP</code>. If you set the <code>SetStatOption</code> parameter to <code>ENABLE_NO_OP</code>, Transfer Family
   *         generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a <code>SETSTAT</code>
   *         call.</p>
   *             </li>
   *             <li>
   *                <p>To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the
   *         <code>TlsSessionResumptionMode</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>As2Transports</code> indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtocolDetails?: ProtocolDetails | undefined;

  /**
   * <p>Specifies the domain of the storage system that is used for file transfers. There are two domains
   *       available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The
   *       default value is S3.</p>
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make your endpoint accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   * @public
   */
  EndpointDetails?: EndpointDetails | undefined;

  /**
   * <p>Defines the type of endpoint that your server is connected to. If your server is connected
   *       to a VPC endpoint, your server isn't accessible over the public internet.</p>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value
   *       is equivalent to the output of the <code>ssh-keygen -l -f my-new-server-key</code>
   *       command.</p>
   * @public
   */
  HostKeyFingerprint?: string | undefined;

  /**
   * <p>Specifies information to call a customer-supplied authentication API. This field is not
   *       populated when the <code>IdentityProviderType</code> of a server is
   *       <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code>.</p>
   * @public
   */
  IdentityProviderDetails?: IdentityProviderDetails | undefined;

  /**
   * <p>The mode of authentication for a server. The default value is
   *         <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within
   *       the Transfer Family service.</p>
   *          <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to
   *       Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your
   *       on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to
   *       provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The
   *       <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call
   *       for authentication by using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider.
   *       If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter
   *       for the <code>IdentityProviderDetails</code> data type.</p>
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p>
   *          <note>
   *             <p>The SFTP protocol does not support post-authentication display banners.</p>
   *          </note>
   * @public
   */
  PostAuthenticationLoginBanner?: string | undefined;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates.
   *     For example, the following banner displays details about using the system:</p>
   *          <p>
   *             <code>This system is for the use of authorized users only. Individuals using this computer system without authority,
   *     or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by
   *     system personnel.</code>
   *          </p>
   * @public
   */
  PreAuthenticationLoginBanner?: string | undefined;

  /**
   * <p>Specifies the file transfer protocol or protocols over which your file transfer protocol
   *       client can connect to your server's endpoint. The available protocols are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over
   *           SSH</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS
   *           encryption</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AS2</code> (Applicability Statement 2): used for transporting structured business-to-business data</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you select <code>FTPS</code>, you must choose a certificate stored in Certificate Manager (ACM)
   *             which is used to identify your server when clients connect to it over
   *             FTPS.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the
   *             <code>EndpointType</code> must be <code>VPC</code> and the
   *             <code>IdentityProviderType</code> must be either <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *             can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set any of the supported identity types:
   *             <code>SERVICE_MANAGED</code>, <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>AS2</code>, then the
   *               <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>Specifies the name of the security policy for the server.</p>
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * <p>Specifies the unique system-assigned identifier for a server that you instantiate.</p>
   * @public
   */
  ServerId?: string | undefined;

  /**
   * <p>The condition of the server that was described. A value of
   *         <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A
   *         <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file
   *       transfer operations.</p>
   *          <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is
   *       in an intermediate state, either not fully able to respond, or not fully offline. The values
   *       of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error
   *       condition.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>Specifies the key-value pairs that you can use to search for and group servers that were
   *       assigned to the server that was described.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the number of users that are assigned to a server you specified with the
   *         <code>ServerId</code>.</p>
   * @public
   */
  UserCount?: number | undefined;

  /**
   * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
   *          <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a
   *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects
   *     while the file is still being uploaded.</p>
   * @public
   */
  WorkflowDetails?: WorkflowDetails | undefined;

  /**
   * <p>Specifies the log groups to which your server logs are sent.</p>
   *          <p>To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:</p>
   *          <p>
   *             <code>arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:*</code>
   *          </p>
   *          <p>For example, <code>arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*</code>
   *          </p>
   *          <p>If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty
   *         value for this parameter in an <code>update-server</code> call. For example:</p>
   *          <p>
   *             <code>update-server --server-id s-1234567890abcdef0 --structured-log-destinations</code>
   *          </p>
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;

  /**
   * <p>Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.</p>
   *          <p>By default, home directory mappings have a <code>TYPE</code> of <code>DIRECTORY</code>. If you enable this option, you would then need to explicitly set the <code>HomeDirectoryMapEntry</code>
   *             <code>Type</code> to <code>FILE</code> if you want a mapping to have a file target.</p>
   * @public
   */
  S3StorageOptions?: S3StorageOptions | undefined;

  /**
   * <p>The list of egress IP addresses of this server. These IP addresses are only relevant
   *     for servers that use the AS2 protocol. They are used for sending asynchronous MDNs.</p>
   *          <p>These IP addresses are assigned automatically when you create an AS2 server. Additionally,
   *     if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well.</p>
   * @public
   */
  As2ServiceManagedEgressIpAddresses?: string[] | undefined;
}

/**
 * <p>Provides information about the public Secure Shell (SSH) key that is associated with a Transfer Family
 *       user for the specific file transfer protocol-enabled server (as identified by
 *         <code>ServerId</code>). The information returned includes the date the key was imported, the
 *       public key contents, and the public key ID. A user can store more than one SSH public key
 *       associated with their user name on a specific server.</p>
 * @public
 */
export interface SshPublicKey {
  /**
   * <p>Specifies the date that the public key was added to the Transfer Family user.</p>
   * @public
   */
  DateImported: Date | undefined;

  /**
   * <p>Specifies the content of the SSH public key as specified by the
   *       <code>PublicKeyId</code>.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   * @public
   */
  SshPublicKeyBody: string | undefined;

  /**
   * <p>Specifies the <code>SshPublicKeyId</code> parameter contains the identifier of the public
   *       key.</p>
   * @public
   */
  SshPublicKeyId: string | undefined;
}

/**
 * <p>Describes the properties of a user that was specified.</p>
 * @public
 */
export interface DescribedUser {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the user that was requested to be
   *       described.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM)
   *       role provides access to paths in <code>Target</code>. This value
   *       can be set only when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>In most cases, you can use this value instead of the session policy to lock your user
   *       down to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to '/' and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>$\{Transfer:UserName\}</code>,
   *      <code>$\{Transfer:HomeDirectory\}</code>, and <code>$\{Transfer:HomeBucket\}</code>.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon Elastic File System (Amazon EFS) file systems. The POSIX
   *       permissions that are set on files and directories in your file system determine the level of
   *       access your users get when transferring files into and out of your Amazon EFS file
   *       systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Specifies the public key portion of the Secure Shell (SSH) keys stored for the described
   *       user.</p>
   *          <note>
   *             <p>To delete the public key body, set its value to zero keys, as shown here:</p>
   *             <p>
   *                <code>SshPublicKeys: []</code>
   *             </p>
   *          </note>
   * @public
   */
  SshPublicKeys?: SshPublicKey[] | undefined;

  /**
   * <p>Specifies the key-value pairs for the user requested. Tag can be used to search for and
   *       group users for a variety of purposes.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the name of the user that was requested to be described. User names are used for
   *       authentication purposes. This is the string that will be used by your user when they log in to
   *       your server.</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * <p>Returns a structure that contains the identity provider details for your web app.</p>
 * @public
 */
export type DescribedWebAppIdentityProviderDetails =
  | DescribedWebAppIdentityProviderDetails.IdentityCenterConfigMember
  | DescribedWebAppIdentityProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace DescribedWebAppIdentityProviderDetails {
  /**
   * <p>Returns a structure for your identity provider details. This structure contains the instance ARN and role being used for the web app.</p>
   * @public
   */
  export interface IdentityCenterConfigMember {
    IdentityCenterConfig: DescribedIdentityCenterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IdentityCenterConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    IdentityCenterConfig: (value: DescribedIdentityCenterConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DescribedWebAppIdentityProviderDetails, visitor: Visitor<T>): T => {
    if (value.IdentityCenterConfig !== undefined) return visitor.IdentityCenterConfig(value.IdentityCenterConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A structure that describes the parameters for the web app, as identified by the <code>WebAppId</code>.</p>
 * @public
 */
export interface DescribedWebApp {
  /**
   * <p>The Amazon Resource Name (ARN) of the web app.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the web app.</p>
   * @public
   */
  WebAppId: string | undefined;

  /**
   * <p>A structure that contains the details for the identity provider used by the web app.</p>
   * @public
   */
  DescribedIdentityProviderDetails?: DescribedWebAppIdentityProviderDetails | undefined;

  /**
   * <p>The <code>AccessEndpoint</code> is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.</p>
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * <p>The <code>WebAppEndpoint</code> is the unique URL for your Transfer Family web app. This is the value that you use when you configure <b>Origins</b> on CloudFront.</p>
   * @public
   */
  WebAppEndpoint?: string | undefined;

  /**
   * <p>A union that contains the value for number of concurrent connections or the user sessions on your web app.</p>
   * @public
   */
  WebAppUnits?: WebAppUnits | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for web apps. Tags are metadata attached to web apps for any purpose.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   *       Setting for the type of endpoint policy for the web app. The default value is <code>STANDARD</code>.
   *     </p>
   *          <p>If your web app was created in an Amazon Web Services GovCloud (US) Region, the value of this parameter can be <code>FIPS</code>, which indicates the web app endpoint is FIPS-compliant.</p>
   * @public
   */
  WebAppEndpointPolicy?: WebAppEndpointPolicy | undefined;
}

/**
 * <p>A structure that contains the customization fields for the web app. You can provide a title, logo, and icon to customize the appearance of your web app.</p>
 * @public
 */
export interface DescribedWebAppCustomization {
  /**
   * <p>Returns the Amazon Resource Name (ARN) for the web app.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Returns the unique identifier for your web app.</p>
   * @public
   */
  WebAppId: string | undefined;

  /**
   * <p>Returns the page title that you defined for your web app.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Returns a logo file data string (in base64 encoding).</p>
   * @public
   */
  LogoFile?: Uint8Array | undefined;

  /**
   * <p>Returns an icon file data string (in base64 encoding).</p>
   * @public
   */
  FaviconFile?: Uint8Array | undefined;
}

/**
 * <p>Describes the properties of the specified workflow</p>
 * @public
 */
export interface DescribedWorkflow {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the workflow.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the text description for the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the details for the steps that are in the specified workflow.</p>
   * @public
   */
  Steps?: WorkflowStep[] | undefined;

  /**
   * <p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p>
   * @public
   */
  OnExceptionSteps?: WorkflowStep[] | undefined;

  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionRequest {
  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionResponse {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>The structure that contains the details of the workflow' execution.</p>
   * @public
   */
  Execution: DescribedExecution | undefined;
}

/**
 * @public
 */
export interface DescribeHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you want described.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The identifier of the host key that you want described.</p>
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostKeyResponse {
  /**
   * <p>Returns the details for the specified host key.</p>
   * @public
   */
  HostKey: DescribedHostKey | undefined;
}

/**
 * @public
 */
export interface DescribeProfileRequest {
  /**
   * <p>The identifier of the profile that you want described.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DescribeProfileResponse {
  /**
   * <p>The details of the specified profile, returned as an object.</p>
   * @public
   */
  Profile: DescribedProfile | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityPolicyRequest {
  /**
   * <p>Specify the text name of the security policy for which you want the details.</p>
   * @public
   */
  SecurityPolicyName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityPolicyResponse {
  /**
   * <p>An array containing the properties of the security policy.</p>
   * @public
   */
  SecurityPolicy: DescribedSecurityPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeServerResponse {
  /**
   * <p>An array containing the properties of a server with the <code>ServerID</code> you
   *       specified.</p>
   * @public
   */
  Server: DescribedServer | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The name of the user assigned to one or more servers. User names are part of the sign-in
   *       credentials to use the Transfer Family service and perform file transfer tasks.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>An array containing the properties of the Transfer Family user for the <code>ServerID</code> value
   *       that you specified.</p>
   * @public
   */
  User: DescribedUser | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppRequest {
  /**
   * <p>Provide the unique identifier for the web app.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppResponse {
  /**
   * <p>Returns a structure that contains the details of the web app.</p>
   * @public
   */
  WebApp: DescribedWebApp | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppCustomizationRequest {
  /**
   * <p>Provide the unique identifier for the web app.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppCustomizationResponse {
  /**
   * <p>Returns a structure that contains the details of the web app customizations.</p>
   * @public
   */
  WebAppCustomization: DescribedWebAppCustomization | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowRequest {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowResponse {
  /**
   * <p>The structure that contains the details of the workflow.</p>
   * @public
   */
  Workflow: DescribedWorkflow | undefined;
}

/**
 * @public
 */
export interface ImportHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you are importing.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The private key portion of an SSH key pair.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   * @public
   */
  HostKeyBody: string | undefined;

  /**
   * <p>The text description that identifies this host key.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to group and search for host keys.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportHostKeyResponse {
  /**
   * <p>Returns the server identifier that contains the imported key.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the host key identifier for the imported key.</p>
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface ImportSshPublicKeyRequest {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The public key portion of an SSH key pair.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   * @public
   */
  SshPublicKeyBody: string | undefined;

  /**
   * <p>The name of the Transfer Family user that is assigned to one or more servers.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * <p>Identifies the user, the server they belong to, and the identifier of the SSH public key
 *       associated with that user. A user can have more than one key on each server that they are
 *       associated with.</p>
 * @public
 */
export interface ImportSshPublicKeyResponse {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The name given to a public key by the system that was imported.</p>
   * @public
   */
  SshPublicKeyId: string | undefined;

  /**
   * <p>A user name assigned to the <code>ServerID</code> value that you specified.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface ListAccessesRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you can get additional results from the <code>ListAccesses</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       accesses.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * <p>Lists the properties for one or more specified associated accesses.</p>
 * @public
 */
export interface ListedAccess {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter \{samAccountName -like "<i>YourGroupName</i>*"\} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   * @public
   */
  ExternalId?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessesResponse {
  /**
   * <p>When you can get additional results from the <code>ListAccesses</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       accesses.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the accesses and their properties for the <code>ServerId</code> value that you
   *       specify.</p>
   * @public
   */
  Accesses: ListedAccess[] | undefined;
}

/**
 * <p>Returns properties of the execution that is specified.</p>
 * @public
 */
export interface ListedExecution {
  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>A structure that describes the Amazon S3 or EFS file location.
   *       This is the file location when the execution begins: if the file is being copied,
   *       this is the initial (as opposed to destination) file location.</p>
   * @public
   */
  InitialFileLocation?: FileLocation | undefined;

  /**
   * <p>A container object for the session details that are associated with a workflow.</p>
   * @public
   */
  ServiceMetadata?: ServiceMetadata | undefined;

  /**
   * <p>The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.</p>
   * @public
   */
  Status?: ExecutionStatus | undefined;
}

/**
 * <p>Returns properties of the host key that's specified.</p>
 * @public
 */
export interface ListedHostKey {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the host key.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the host key.</p>
   * @public
   */
  HostKeyId?: string | undefined;

  /**
   * <p>The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.</p>
   * @public
   */
  Fingerprint?: string | undefined;

  /**
   * <p>The current description for the host key. You can change it by calling the <code>UpdateHostKey</code> operation and providing a new description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The encryption algorithm that is used for the host key. The <code>Type</code> parameter is specified by using one of the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ssh-rsa</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ssh-ed25519</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ecdsa-sha2-nistp256</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ecdsa-sha2-nistp384</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ecdsa-sha2-nistp521</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date on which the host key was added to the server.</p>
   * @public
   */
  DateImported?: Date | undefined;
}

/**
 * <p>Returns the properties of the profile that was specified.</p>
 * @public
 */
export interface ListedProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier for the local or partner AS2 profile.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the
   *     <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages
   *       sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the
   *       AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.</p>
   * @public
   */
  As2Id?: string | undefined;

  /**
   * <p>Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles.
   *    If not supplied in the request, the command lists all types of profiles.</p>
   * @public
   */
  ProfileType?: ProfileType | undefined;
}

/**
 * <p>Returns properties of a file transfer protocol-enabled server that was specified.</p>
 * @public
 */
export interface ListedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for a server to be listed.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the domain of the storage system that is used for file transfers. There are two domains
   *       available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The
   *       default value is S3.</p>
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * <p>The mode of authentication for a server. The default value is
   *         <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within
   *       the Transfer Family service.</p>
   *          <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to
   *       Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your
   *       on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to
   *       provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The
   *       <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call
   *       for authentication by using the <code>IdentityProviderDetails</code> parameter.</p>
   *          <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider.
   *       If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter
   *       for the <code>IdentityProviderDetails</code> data type.</p>
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;

  /**
   * <p>Specifies the type of VPC endpoint that your server is connected to. If your server is
   *       connected to a VPC endpoint, your server isn't accessible over the public internet.</p>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>Specifies the unique system assigned identifier for the servers that were listed.</p>
   * @public
   */
  ServerId?: string | undefined;

  /**
   * <p>The condition of the server that was described. A value of
   *         <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A
   *         <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file
   *       transfer operations.</p>
   *          <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is
   *       in an intermediate state, either not fully able to respond, or not fully offline. The values
   *       of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error
   *       condition.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>Specifies the number of users that are assigned to a server you specified with the
   *         <code>ServerId</code>.</p>
   * @public
   */
  UserCount?: number | undefined;
}

/**
 * <p>Returns properties of the user that you specify.</p>
 * @public
 */
export interface ListedUser {
  /**
   * <p>Provides the unique Amazon Resource Name (ARN) for the user that you want to learn
   *       about.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   *          <note>
   *             <p>The IAM role that controls your users' access to your Amazon S3 bucket for servers with <code>Domain=S3</code>, or your EFS file system for servers with <code>Domain=EFS</code>.
   *         </p>
   *             <p>The policies attached to this role determine the level of access you want to provide your users when
   *         transferring files into and out of your S3 buckets or EFS file systems.</p>
   *          </note>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Specifies the number of SSH public keys stored for the user you specified.</p>
   * @public
   */
  SshPublicKeyCount?: number | undefined;

  /**
   * <p>Specifies the name of the user whose ARN was specified. User names are used for
   *       authentication purposes.</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * <p> a structure that contains details for the web app.</p>
 * @public
 */
export interface ListedWebApp {
  /**
   * <p>The Amazon Resource Name (ARN) for the web app.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the web app.</p>
   * @public
   */
  WebAppId: string | undefined;

  /**
   * <p>The <code>AccessEndpoint</code> is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.</p>
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * <p>The <code>WebAppEndpoint</code> is the unique URL for your Transfer Family web app. This is the value that you use when you configure <b>Origins</b> on CloudFront.</p>
   * @public
   */
  WebAppEndpoint?: string | undefined;
}

/**
 * <p>Contains the identifier, text description, and Amazon Resource Name (ARN) for the
 *       workflow.</p>
 * @public
 */
export interface ListedWorkflow {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>Specifies the text description for the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the workflow.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             <code>ListExecutions</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional executions.</p>
   *          <p>
   *       This is useful for pagination, for instance.
   *       If you have 100 executions for a workflow, you might only want to list first 10. If so, call the API by specifying the <code>max-results</code>:
   *     </p>
   *          <p>
   *             <code>aws transfer list-executions --max-results 10</code>
   *          </p>
   *          <p>
   *       This returns details for the first 10 executions, as well as the pointer (<code>NextToken</code>) to the eleventh execution.
   *       You can now call the API again, supplying the <code>NextToken</code> value you received:
   *     </p>
   *          <p>
   *             <code>aws transfer list-executions --max-results 10 --next-token $somePointerReturnedFromPreviousListResult</code>
   *          </p>
   *          <p>
   *       This call returns the next 10 executions, the 11th through the 20th. You can then repeat the call until the details
   *       for all 100 executions have been returned.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * <p>
   *             <code>ListExecutions</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional executions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>Returns the details for each execution, in a <code>ListedExecution</code> array.</p>
   * @public
   */
  Executions: ListedExecution[] | undefined;
}

/**
 * @public
 */
export interface ListFileTransferResultsRequest {
  /**
   * <p>A unique identifier for a connector. This value should match the value supplied to the corresponding <code>StartFileTransfer</code> call.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>A unique identifier for a file transfer. This value should match the value supplied to the corresponding <code>StartFileTransfer</code> call.</p>
   * @public
   */
  TransferId: string | undefined;

  /**
   * <p>If there are more file details than returned in this call, use this value for a subsequent call to <code>ListFileTransferResults</code> to retrieve them.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of files to return in a single page. Note that currently you can specify a maximum of 10 file paths in a single
   *       <a href="https://docs.aws.amazon.com/transfer/latest/APIReference/API_StartFileTransfer.html">StartFileTransfer</a> operation. Thus, the maximum
   *       number of file transfer results that can be returned in a single page is 10.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFileTransferResultsResponse {
  /**
   * <p>Returns the details for the files transferred in the transfer identified by the <code>TransferId</code> and <code>ConnectorId</code> specified.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FilePath</code>: the filename and path to where the file was sent to or retrieved from.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StatusCode</code>: current status for the transfer. The status returned is one of the following values:<code>QUEUED</code>,
   *           <code>IN_PROGRESS</code>, <code>COMPLETED</code>, or <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FailureCode</code>: for transfers that fail, this parameter contains a code indicating the reason. For example, <code>RETRIEVE_FILE_NOT_FOUND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FailureMessage</code>: for transfers that fail, this parameter describes the reason for the failure.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FileTransferResults: ConnectorFileTransferResult[] | undefined;

  /**
   * <p>Returns a token that you can use to call <code>ListFileTransferResults</code> again and receive
   *       additional results, if there are any (against the same <code>TransferId</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHostKeysRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When there are additional results that were not returned, a <code>NextToken</code>
   *       parameter is returned. You can use that value for a subsequent call to
   *       <code>ListHostKeys</code> to continue listing results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The identifier of the server that contains the host keys that you want to view.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface ListHostKeysResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListHostKeys</code> again and receive
   *       additional results, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns the server identifier that contains the listed host keys.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>Returns an array, where each item contains the details of a host key.</p>
   * @public
   */
  HostKeys: ListedHostKey[] | undefined;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When there are additional results that were not returned, a <code>NextToken</code>
   *       parameter is returned. You can use that value for a subsequent call to
   *         <code>ListProfiles</code> to continue listing results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles.
   *    If not supplied in the request, the command lists all types of profiles.</p>
   * @public
   */
  ProfileType?: ProfileType | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListProfiles</code> again and receive
   *       additional results, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns an array, where each item contains the details of a profile.</p>
   * @public
   */
  Profiles: ListedProfile[] | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesRequest {
  /**
   * <p>Specifies the number of security policies to return as a response to the
   *         <code>ListSecurityPolicies</code> query.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When additional results are obtained from the <code>ListSecurityPolicies</code> command, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass the
   *         <code>NextToken</code> parameter in a subsequent command to continue listing additional
   *       security policies.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesResponse {
  /**
   * <p>When you can get additional results from the <code>ListSecurityPolicies</code> operation,
   *       a <code>NextToken</code> parameter is returned in the output. In a following command, you can
   *       pass in the <code>NextToken</code> parameter to continue listing security policies.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of security policies that were listed.</p>
   * @public
   */
  SecurityPolicyNames: string[] | undefined;
}

/**
 * @public
 */
export interface ListServersRequest {
  /**
   * <p>Specifies the number of servers to return as a response to the <code>ListServers</code>
   *       query.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When additional results are obtained from the <code>ListServers</code> command, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass the
   *         <code>NextToken</code> parameter in a subsequent command to continue listing additional
   *       servers.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServersResponse {
  /**
   * <p>When you can get additional results from the <code>ListServers</code> operation, a
   *         <code>NextToken</code> parameter is returned in the output. In a following command, you can
   *       pass in the <code>NextToken</code> parameter to continue listing additional servers.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of servers that were listed.</p>
   * @public
   */
  Servers: ListedServer[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an
   *       identifier for a specific Amazon Web Services resource, such as a server, user, or role.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the number of tags to return as a response to the
   *         <code>ListTagsForResource</code> request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you request additional results from the <code>ListTagsForResource</code> operation, a
   *         <code>NextToken</code> parameter is returned in the input. You can then pass in a subsequent
   *       command to the <code>NextToken</code> parameter to continue listing additional tags.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The ARN you specified to list the tags of.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>When you can get additional results from the <code>ListTagsForResource</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       tags.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Key-value pairs that are assigned to a resource, usually for the purpose of grouping and
   *       searching for items. Tags are metadata that you define.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>Specifies the number of users to return as a response to the <code>ListUsers</code>
   *       request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If there are additional results from the <code>ListUsers</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass
   *       the <code>NextToken</code> to a subsequent <code>ListUsers</code> command, to continue listing additional
   *       users.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       users.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server that the users are assigned to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the Transfer Family users and their properties for the <code>ServerId</code> value that
   *       you specify.</p>
   * @public
   */
  Users: ListedUser[] | undefined;
}

/**
 * @public
 */
export interface ListWebAppsRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional web apps.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWebAppsResponse {
  /**
   * <p>Provide this value for the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional web apps.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns, for each listed web app, a structure that contains details for the web app.</p>
   * @public
   */
  WebApps: ListedWebApp[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             <code>ListWorkflows</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional workflows.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>
   *             <code>ListWorkflows</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional workflows.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns the <code>Arn</code>, <code>WorkflowId</code>, and <code>Description</code> for each workflow.</p>
   * @public
   */
  Workflows: ListedWorkflow[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>The identifier of the profile object that you are updating.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   * @public
   */
  CertificateIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * <p>Returns the identifier for the profile that's being updated.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepStateRequest {
  /**
   * <p>A unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * <p>Used to distinguish between multiple callbacks for multiple Lambda steps within the same execution.</p>
   * @public
   */
  Token: string | undefined;

  /**
   * <p>Indicates whether the specified step succeeded or failed.</p>
   * @public
   */
  Status: CustomStepStatus | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepStateResponse {}

/**
 * @public
 */
export interface UpdateServerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required
   *       when <code>Protocols</code> is set to <code>FTPS</code>.</p>
   *          <p>To request a new public certificate, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate</a>
   *       in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p>
   *          <p>To import an existing certificate into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into ACM</a>
   *       in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p>
   *          <p>To request a private certificate to use FTPS through private IP addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html">Request a
   *         private certificate</a> in the <i> Amazon Web ServicesCertificate Manager User
   *       Guide</i>.</p>
   *          <p>Certificates with the following cryptographic algorithms and key sizes are
   *       supported:</p>
   *          <ul>
   *             <li>
   *                <p>2048-bit RSA (RSA_2048)</p>
   *             </li>
   *             <li>
   *                <p>4096-bit RSA (RSA_4096)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 256 bit (EC_prime256v1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 384 bit (EC_secp384r1)</p>
   *             </li>
   *             <li>
   *                <p>Elliptic Prime Curve 521 bit (EC_secp521r1)</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP
   *         address specified and information about the issuer.</p>
   *          </note>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The protocol settings that are configured for your server.</p>
   *          <ul>
   *             <li>
   *                <p>
   *           To indicate passive mode (for FTP and FTPS protocols), use the <code>PassiveIp</code> parameter.
   *           Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   *         </p>
   *             </li>
   *             <li>
   *                <p>To ignore the error that is generated when the client attempts to use the <code>SETSTAT</code> command on a file that you are
   *         uploading to an Amazon S3 bucket, use the <code>SetStatOption</code> parameter. To have the Transfer Family server ignore the
   *         <code>SETSTAT</code> command and upload files without needing to make any changes to your SFTP client, set the value to
   *         <code>ENABLE_NO_OP</code>. If you set the <code>SetStatOption</code> parameter to <code>ENABLE_NO_OP</code>, Transfer Family
   *         generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a <code>SETSTAT</code>
   *         call.</p>
   *             </li>
   *             <li>
   *                <p>To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the
   *         <code>TlsSessionResumptionMode</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>As2Transports</code> indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtocolDetails?: ProtocolDetails | undefined;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make your endpoint accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   * @public
   */
  EndpointDetails?: EndpointDetails | undefined;

  /**
   * <p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC)
   *       or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and
   *       resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p>
   *          <note>
   *             <p> After May 19, 2021, you won't be able to create a server using
   *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account if your account hasn't already
   *       done so before May 19, 2021. If you have already created servers with
   *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account on or before May 19, 2021,
   *         you will not be affected. After this date, use
   *         <code>EndpointType</code>=<code>VPC</code>.</p>
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *             <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With
   *         this endpoint type, you have the option to directly associate up to three Elastic IPv4
   *         addresses (BYO IP included) with your server's endpoint and use VPC security groups to
   *         restrict traffic by the client's public IP address. This is not possible with
   *           <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p>
   *          </note>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want
   *      to rotate keys, or have a set of active keys that use different algorithms.</p>
   *          <p>Use the following command to generate an RSA 2048 bit key with no passphrase:</p>
   *          <p>
   *             <code>ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key</code>.</p>
   *          <p>Use a minimum value of 2048 for the <code>-b</code> option. You can create a stronger key by using 3072 or 4096.</p>
   *          <p>Use the following command to generate an ECDSA 256 bit key with no passphrase:</p>
   *          <p>
   *             <code>ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key</code>.</p>
   *          <p>Valid values for the <code>-b</code> option for ECDSA are 256, 384, and 521.</p>
   *          <p>Use the following command to generate an ED25519 key with no passphrase:</p>
   *          <p>
   *             <code>ssh-keygen -t ed25519 -N "" -f my-new-server-key</code>.</p>
   *          <p>For all of these commands, you can replace <i>my-new-server-key</i> with a string of your choice.</p>
   *          <important>
   *             <p>If you aren't planning to migrate existing users from an existing SFTP-enabled
   *         server to a new server, don't update the host key. Accidentally changing a
   *         server's host key can be disruptive.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Manage host keys for your SFTP-enabled server</a> in the <i>Transfer Family User Guide</i>.</p>
   * @public
   */
  HostKey?: string | undefined;

  /**
   * <p>An array containing all of the information required to call a customer's
   *       authentication API method.</p>
   * @public
   */
  IdentityProviderDetails?: IdentityProviderDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p>
   *          <note>
   *             <p>The SFTP protocol does not support post-authentication display banners.</p>
   *          </note>
   * @public
   */
  PostAuthenticationLoginBanner?: string | undefined;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates.
   *     For example, the following banner displays details about using the system:</p>
   *          <p>
   *             <code>This system is for the use of authorized users only. Individuals using this computer system without authority,
   *     or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by
   *     system personnel.</code>
   *          </p>
   * @public
   */
  PreAuthenticationLoginBanner?: string | undefined;

  /**
   * <p>Specifies the file transfer protocol or protocols over which your file transfer protocol
   *       client can connect to your server's endpoint. The available protocols are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over
   *           SSH</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS
   *           encryption</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AS2</code> (Applicability Statement 2): used for transporting structured business-to-business data</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you select <code>FTPS</code>, you must choose a certificate stored in Certificate Manager (ACM)
   *             which is used to identify your server when clients connect to it over
   *             FTPS.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the
   *             <code>EndpointType</code> must be <code>VPC</code> and the
   *             <code>IdentityProviderType</code> must be either <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *             can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set any of the supported identity types:
   *             <code>SERVICE_MANAGED</code>, <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>AS2</code>, then the
   *               <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>Specifies the name of the security policy for the server.</p>
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance that the Transfer Family user is
   *       assigned to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
   *          <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a
   *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects
   *     while the file is still being uploaded.</p>
   *          <p>To remove an associated workflow from a server, you can provide an empty <code>OnUpload</code> object, as in the following example.</p>
   *          <p>
   *             <code>aws transfer update-server --server-id s-01234567890abcdef --workflow-details '\{"OnUpload":[]\}'</code>
   *          </p>
   * @public
   */
  WorkflowDetails?: WorkflowDetails | undefined;

  /**
   * <p>Specifies the log groups to which your server logs are sent.</p>
   *          <p>To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:</p>
   *          <p>
   *             <code>arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:*</code>
   *          </p>
   *          <p>For example, <code>arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*</code>
   *          </p>
   *          <p>If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty
   *         value for this parameter in an <code>update-server</code> call. For example:</p>
   *          <p>
   *             <code>update-server --server-id s-1234567890abcdef0 --structured-log-destinations</code>
   *          </p>
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;

  /**
   * <p>Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.</p>
   *          <p>By default, home directory mappings have a <code>TYPE</code> of <code>DIRECTORY</code>. If you enable this option, you would then need to explicitly set the <code>HomeDirectoryMapEntry</code>
   *             <code>Type</code> to <code>FILE</code> if you want a mapping to have a file target.</p>
   * @public
   */
  S3StorageOptions?: S3StorageOptions | undefined;
}

/**
 * @public
 */
export interface UpdateServerResponse {
  /**
   * <p>A system-assigned unique identifier for a server that the Transfer Family user is assigned
   *       to.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface StartDirectoryListingRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>Specifies the directory on the remote SFTP server for which you want to list its contents.</p>
   * @public
   */
  RemoteDirectoryPath: string | undefined;

  /**
   * <p>An optional parameter where you can specify the maximum number of file/directory names to
   *       retrieve. The default value is 1,000.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Specifies the path (bucket and prefix) in Amazon S3 storage to store the results of the directory listing.</p>
   * @public
   */
  OutputDirectoryPath: string | undefined;
}

/**
 * @public
 */
export interface StartDirectoryListingResponse {
  /**
   * <p>Returns a unique identifier for the directory listing call.</p>
   * @public
   */
  ListingId: string | undefined;

  /**
   * <p>Returns the file name where the results are stored. This is a combination of the connector ID and the listing ID: <code>&lt;connector-id&gt;-&lt;listing-id&gt;.json</code>.</p>
   * @public
   */
  OutputFileName: string | undefined;
}

/**
 * @public
 */
export interface StartFileTransferRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>One or more source paths for the Amazon S3 storage. Each string represents a source
   *       file path for one outbound file transfer. For example,
   *       <code>
   *                <i>amzn-s3-demo-bucket</i>/<i>myfile.txt</i>
   *             </code>.</p>
   *          <note>
   *             <p>Replace <code>
   *                   <i>amzn-s3-demo-bucket</i>
   *                </code> with one of your actual buckets.</p>
   *          </note>
   * @public
   */
  SendFilePaths?: string[] | undefined;

  /**
   * <p>One or more source paths for the partner's SFTP server. Each string represents a source file path for one inbound file transfer.</p>
   * @public
   */
  RetrieveFilePaths?: string[] | undefined;

  /**
   * <p>For an inbound transfer, the <code>LocaDirectoryPath</code> specifies the destination for one or more files
   *       that are transferred from the partner's SFTP server.</p>
   * @public
   */
  LocalDirectoryPath?: string | undefined;

  /**
   * <p>For an outbound transfer, the <code>RemoteDirectoryPath</code> specifies the destination
   *       for one or more files that are transferred to the partner's SFTP server. If you don't specify
   *       a <code>RemoteDirectoryPath</code>, the destination for transferred files is the SFTP user's
   *       home directory.</p>
   * @public
   */
  RemoteDirectoryPath?: string | undefined;
}

/**
 * @public
 */
export interface StartFileTransferResponse {
  /**
   * <p>Returns the unique identifier for the file transfer.</p>
   * @public
   */
  TransferId: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteDeleteRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The absolute path of the file or directory to delete. You can only specify one path per call to this operation.</p>
   * @public
   */
  DeletePath: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteDeleteResponse {
  /**
   * <p>Returns a unique identifier for the delete operation.</p>
   * @public
   */
  DeleteId: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteMoveRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The absolute path of the file or directory to move or rename. You can only specify one path per call to this operation.</p>
   * @public
   */
  SourcePath: string | undefined;

  /**
   * <p>The absolute path for the target of the move/rename operation.</p>
   * @public
   */
  TargetPath: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteMoveResponse {
  /**
   * <p>Returns a unique identifier for the move/rename operation.</p>
   * @public
   */
  MoveId: string | undefined;
}

/**
 * @public
 */
export interface StartServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server that you start.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface StopServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server that you stopped.</p>
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a server, user, or
   *       role.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Key-value pairs assigned to ARNs that you can use to group and search for resources by
   *       type. You can attach this metadata to resources (servers, users, workflows, and so on) for any purpose.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TestConnectionRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface TestConnectionResponse {
  /**
   * <p>Returns the identifier of the connector object that you are testing.</p>
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * <p>Returns <code>OK</code> for successful test, or <code>ERROR</code> if the test fails.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Returns <code>Connection succeeded</code> if the test is successful. Or, returns a descriptive error message
   *     if the test fails. The following list provides troubleshooting details, depending on the error message that you receive.</p>
   *          <ul>
   *             <li>
   *                <p>Verify that your secret name aligns with the one in
   *           Transfer Role permissions.</p>
   *             </li>
   *             <li>
   *                <p>Verify the server URL in the connector
   *           configuration , and verify that the login credentials work successfully outside of the connector.</p>
   *             </li>
   *             <li>
   *                <p>Verify that the secret exists and is formatted correctly.</p>
   *             </li>
   *             <li>
   *                <p>Verify that the trusted host key in the connector
   *           configuration matches the <code>ssh-keyscan</code> output.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface TestIdentityProviderRequest {
  /**
   * <p>A system-assigned identifier for a specific server. That server's user authentication
   *       method is tested with a user name and password.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The type of file transfer protocol to be tested.</p>
   *          <p>The available protocols are:</p>
   *          <ul>
   *             <li>
   *                <p>Secure Shell (SSH) File Transfer Protocol (SFTP)</p>
   *             </li>
   *             <li>
   *                <p>File Transfer Protocol Secure (FTPS)</p>
   *             </li>
   *             <li>
   *                <p>File Transfer Protocol (FTP)</p>
   *             </li>
   *             <li>
   *                <p>Applicability Statement 2 (AS2)</p>
   *             </li>
   *          </ul>
   * @public
   */
  ServerProtocol?: Protocol | undefined;

  /**
   * <p>The source IP address of the account to be tested.</p>
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * <p>The name of the account to be tested.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The password of the account to be tested.</p>
   * @public
   */
  UserPassword?: string | undefined;
}

/**
 * @public
 */
export interface TestIdentityProviderResponse {
  /**
   * <p>The response that is returned from your API Gateway or your Lambda function.</p>
   * @public
   */
  Response?: string | undefined;

  /**
   * <p>The HTTP status code that is the response from your API Gateway or your Lambda function.</p>
   * @public
   */
  StatusCode: number | undefined;

  /**
   * <p>A message that indicates whether the test was successful or not.</p>
   *          <note>
   *             <p>If an empty string is returned, the most likely cause is that the authentication failed due to an incorrect username or password.</p>
   *          </note>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The endpoint of the service used to authenticate a user.</p>
   * @public
   */
  Url: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is
   *       an identifier for a specific Amazon Web Services resource, such as a server, user, or role.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>TagKeys are key-value pairs assigned to ARNs that can be used to group and search for
   *       resources by type. This metadata can be attached to resources for any purpose.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM)
   *       role provides access to paths in <code>Target</code>. This value
   *       can be set only when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down your
   *         user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>$\{Transfer:UserName\}</code>,
   *      <code>$\{Transfer:HomeDirectory\}</code>, and <code>$\{Transfer:HomeBucket\}</code>.</p>
   *          <note>
   *             <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p>
   *             <p>For session policies, Transfer Family stores the policy as a JSON blob, instead
   *         of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass
   *         it in the <code>Policy</code> argument.</p>
   *             <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html">Example
   *         session policy</a>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web ServicesSecurity Token Service API
   *           Reference</i>.</p>
   *          </note>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter \{samAccountName -like "<i>YourGroupName</i>*"\} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessResponse {
  /**
   * <p>The identifier of the server that the user is attached to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The external identifier of the group whose users have access to your Amazon S3 or Amazon
   *       EFS resources over the enabled protocols using Amazon Web ServicesTransfer Family.</p>
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface UpdateHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you are updating.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The identifier of the host key that you are updating.</p>
   * @public
   */
  HostKeyId: string | undefined;

  /**
   * <p>An updated description for the host key.</p>
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateHostKeyResponse {
  /**
   * <p>Returns the server identifier for the server that contains the updated host key.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the host key identifier for the updated host key.</p>
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   *          <note>
   *             <p>The <code>HomeDirectory</code> parameter is only used if <code>HomeDirectoryType</code> is set to <code>PATH</code>.</p>
   *          </note>
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer
   *     protocol clients. If you set it to <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   *          <note>
   *             <p>If <code>HomeDirectoryType</code> is <code>LOGICAL</code>, you must provide mappings,
   *             using the <code>HomeDirectoryMappings</code> parameter. If, on the other hand,
   *                <code>HomeDirectoryType</code> is <code>PATH</code>, you provide an absolute path
   *             using the <code>HomeDirectory</code> parameter. You cannot have both
   *                <code>HomeDirectory</code> and <code>HomeDirectoryMappings</code> in your
   *             template.</p>
   *          </note>
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * <p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should
   *       be visible to your user and how you want to make them visible. You must specify the
   *         <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path
   *       is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you
   *       only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM)
   *       role provides access to paths in <code>Target</code>. This value
   *       can be set only when <code>HomeDirectoryType</code> is set to
   *       <i>LOGICAL</i>.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down your
   *       user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to '/' and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]</code>
   *          </p>
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>$\{Transfer:UserName\}</code>,
   *      <code>$\{Transfer:HomeDirectory\}</code>, and <code>$\{Transfer:HomeBucket\}</code>.</p>
   *          <note>
   *             <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p>
   *             <p>For session policies, Transfer Family stores the policy as a JSON blob, instead
   *         of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass
   *         it in the <code>Policy</code> argument.</p>
   *             <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy">Creating a session
   *           policy</a>.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services
   *           Security Token Service API Reference</i>.</p>
   *          </note>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon Elastic File Systems (Amazon EFS). The POSIX permissions
   *       that are set on files and directories in your file system determines the level of access your
   *       users get when transferring files into and out of your Amazon EFS file systems.</p>
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a Transfer Family server instance that the user is
   *       assigned to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user and is associated with a server as specified by the
   *         <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters
   *       long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen
   *       '-', period '.', and at sign '@'. The user name can't start
   *       with a hyphen, period, or at sign.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * <p>
 *             <code>UpdateUserResponse</code> returns the user name and identifier for the request to
 *       update a user's properties.</p>
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>A system-assigned unique identifier for a Transfer Family server instance that the account is
   *       assigned to.</p>
   * @public
   */
  ServerId: string | undefined;

  /**
   * <p>The unique identifier for a user that is assigned to a server instance that was specified
   *       in the request.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface UpdateWebAppCustomizationRequest {
  /**
   * <p>Provide the identifier of the web app that you are updating.</p>
   * @public
   */
  WebAppId: string | undefined;

  /**
   * <p>Provide an updated title.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Specify logo file data string (in base64 encoding).</p>
   * @public
   */
  LogoFile?: Uint8Array | undefined;

  /**
   * <p>Specify an icon file data string (in base64 encoding).</p>
   * @public
   */
  FaviconFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateWebAppCustomizationResponse {
  /**
   * <p>Returns the unique identifier for the web app being updated.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * <p>A structure that describes the values to use for the IAM Identity Center settings when you update a web app.</p>
 * @public
 */
export interface UpdateWebAppIdentityCenterConfig {
  /**
   * <p>The IAM role used to access IAM Identity Center.</p>
   * @public
   */
  Role?: string | undefined;
}

/**
 * <p>A union that contains the <code>UpdateWebAppIdentityCenterConfig</code> object.</p>
 * @public
 */
export type UpdateWebAppIdentityProviderDetails =
  | UpdateWebAppIdentityProviderDetails.IdentityCenterConfigMember
  | UpdateWebAppIdentityProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace UpdateWebAppIdentityProviderDetails {
  /**
   * <p>A structure that describes the values to use for the IAM Identity Center settings when you update a web app.</p>
   * @public
   */
  export interface IdentityCenterConfigMember {
    IdentityCenterConfig: UpdateWebAppIdentityCenterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IdentityCenterConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    IdentityCenterConfig: (value: UpdateWebAppIdentityCenterConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateWebAppIdentityProviderDetails, visitor: Visitor<T>): T => {
    if (value.IdentityCenterConfig !== undefined) return visitor.IdentityCenterConfig(value.IdentityCenterConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateWebAppRequest {
  /**
   * <p>Provide the identifier of the web app that you are updating.</p>
   * @public
   */
  WebAppId: string | undefined;

  /**
   * <p>Provide updated identity provider values in a <code>WebAppIdentityProviderDetails</code> object.</p>
   * @public
   */
  IdentityProviderDetails?: UpdateWebAppIdentityProviderDetails | undefined;

  /**
   * <p>The <code>AccessEndpoint</code> is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.</p>
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * <p>A union that contains the value for number of concurrent connections or the user sessions on your web app.</p>
   * @public
   */
  WebAppUnits?: WebAppUnits | undefined;
}

/**
 * @public
 */
export interface UpdateWebAppResponse {
  /**
   * <p>Returns the unique identifier for the web app being updated.</p>
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @internal
 */
export const DescribedCertificateFilterSensitiveLog = (obj: DescribedCertificate): any => ({
  ...obj,
  ...(obj.Certificate && { Certificate: SENSITIVE_STRING }),
  ...(obj.CertificateChain && { CertificateChain: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeCertificateResponseFilterSensitiveLog = (obj: DescribeCertificateResponse): any => ({
  ...obj,
  ...(obj.Certificate && { Certificate: DescribedCertificateFilterSensitiveLog(obj.Certificate) }),
});

/**
 * @internal
 */
export const ImportCertificateRequestFilterSensitiveLog = (obj: ImportCertificateRequest): any => ({
  ...obj,
  ...(obj.Certificate && { Certificate: SENSITIVE_STRING }),
  ...(obj.CertificateChain && { CertificateChain: SENSITIVE_STRING }),
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServerRequestFilterSensitiveLog = (obj: CreateServerRequest): any => ({
  ...obj,
  ...(obj.HostKey && { HostKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribedWebAppCustomizationFilterSensitiveLog = (obj: DescribedWebAppCustomization): any => ({
  ...obj,
  ...(obj.LogoFile && { LogoFile: SENSITIVE_STRING }),
  ...(obj.FaviconFile && { FaviconFile: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeWebAppCustomizationResponseFilterSensitiveLog = (
  obj: DescribeWebAppCustomizationResponse
): any => ({
  ...obj,
  ...(obj.WebAppCustomization && {
    WebAppCustomization: DescribedWebAppCustomizationFilterSensitiveLog(obj.WebAppCustomization),
  }),
});

/**
 * @internal
 */
export const ImportHostKeyRequestFilterSensitiveLog = (obj: ImportHostKeyRequest): any => ({
  ...obj,
  ...(obj.HostKeyBody && { HostKeyBody: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateServerRequestFilterSensitiveLog = (obj: UpdateServerRequest): any => ({
  ...obj,
  ...(obj.HostKey && { HostKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TestIdentityProviderRequestFilterSensitiveLog = (obj: TestIdentityProviderRequest): any => ({
  ...obj,
  ...(obj.UserPassword && { UserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateWebAppCustomizationRequestFilterSensitiveLog = (obj: UpdateWebAppCustomizationRequest): any => ({
  ...obj,
  ...(obj.LogoFile && { LogoFile: SENSITIVE_STRING }),
  ...(obj.FaviconFile && { FaviconFile: SENSITIVE_STRING }),
});
