// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { TransferServiceException as __BaseException } from "./TransferServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export enum AgreementStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum CompressionEnum {
  DISABLED = "DISABLED",
  ZLIB = "ZLIB",
}

export enum EncryptionAlg {
  AES128_CBC = "AES128_CBC",
  AES192_CBC = "AES192_CBC",
  AES256_CBC = "AES256_CBC",
  NONE = "NONE",
}

export enum MdnResponse {
  NONE = "NONE",
  SYNC = "SYNC",
}

export enum MdnSigningAlg {
  DEFAULT = "DEFAULT",
  NONE = "NONE",
  SHA1 = "SHA1",
  SHA256 = "SHA256",
  SHA384 = "SHA384",
  SHA512 = "SHA512",
}

export enum SigningAlg {
  NONE = "NONE",
  SHA1 = "SHA1",
  SHA256 = "SHA256",
  SHA384 = "SHA384",
  SHA512 = "SHA512",
}

/**
 * <p>Contains the details for a connector object. The connector object is used for AS2 outbound
 *       processes, to connect the Transfer Family customer with the trading partner.</p>
 */
export interface As2ConnectorConfig {
  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   */
  LocalProfileId?: string;

  /**
   * <p>A unique identifier for the partner profile for the connector.</p>
   */
  PartnerProfileId?: string;

  /**
   * <p>Used as the <code>Subject</code> HTTP header attribute in AS2 messages that are being sent with the connector.</p>
   */
  MessageSubject?: string;

  /**
   * <p>Specifies whether the AS2 file is compressed.</p>
   */
  Compression?: CompressionEnum | string;

  /**
   * <p>The algorithm that is used to encrypt the file.</p>
   */
  EncryptionAlgorithm?: EncryptionAlg | string;

  /**
   * <p>The algorithm that is used to sign the AS2 messages sent with the connector.</p>
   */
  SigningAlgorithm?: SigningAlg | string;

  /**
   * <p>The signing algorithm for the MDN response.</p>
   *          <note>
   *             <p>If set to DEFAULT (or not set at all), the value for <code>SigningAlogorithm</code> is used.</p>
   *          </note>
   */
  MdnSigningAlgorithm?: MdnSigningAlg | string;

  /**
   * <p>Used  for outbound requests (from an Transfer Family server to a partner AS2 server) to determine whether
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
   */
  MdnResponse?: MdnResponse | string;
}

export enum As2Transport {
  HTTP = "HTTP",
}

export enum CertificateStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ROTATION = "PENDING_ROTATION",
}

export enum CertificateType {
  CERTIFICATE = "CERTIFICATE",
  CERTIFICATE_WITH_PRIVATE_KEY = "CERTIFICATE_WITH_PRIVATE_KEY",
}

export enum CertificateUsageType {
  ENCRYPTION = "ENCRYPTION",
  SIGNING = "SIGNING",
}

/**
 * <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer
 *       protocol-enabled server that has VPC as the endpoint type and the server's
 *         <code>VpcEndpointID</code> is not in the available state.</p>
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
 * <p>Reserved for future use.</p>
 *          <p>
 *     </p>
 */
export interface EfsFileLocation {
  /**
   * <p>The identifier of the file system, assigned by Amazon EFS.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The pathname for the folder being used by a workflow.</p>
   */
  Path?: string;
}

/**
 * <p>Specifies the customer input S3 file location. If it is used inside <code>copyStepDetails.DestinationFileLocation</code>, it should be the S3 copy destination.</p>
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
 */
export interface S3InputFileLocation {
  /**
   * <p>Specifies the S3 bucket for the customer input file.</p>
   */
  Bucket?: string;

  /**
   * <p>The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.</p>
   */
  Key?: string;
}

/**
 * <p>Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.</p>
 */
export interface InputFileLocation {
  /**
   * <p>Specifies the details for the S3 file being copied.</p>
   */
  S3FileLocation?: S3InputFileLocation;

  /**
   * <p>Reserved for future use.</p>
   */
  EfsFileLocation?: EfsFileLocation;
}

export enum OverwriteExisting {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 */
export interface CopyStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the location for the file being copied. Only applicable for Copy type workflow
   *       steps. Use <code>${Transfer:username}</code> in this field to parametrize the destination
   *       prefix by username.</p>
   */
  DestinationFileLocation?: InputFileLocation;

  /**
   * <p>A flag that indicates whether or not to overwrite an existing file of the same name.
   *       The default is <code>FALSE</code>.</p>
   */
  OverwriteExisting?: OverwriteExisting | string;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>Enter <code>${previous.file}</code> to use the previous file as the input.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>Enter <code>${original.file}</code> to use the originally-uploaded file location as input for this step.</p>
   *             </li>
   *          </ul>
   */
  SourceFileLocation?: string;
}

/**
 * <p>Represents an object that contains entries and targets for
 *         <code>HomeDirectoryMappings</code>.</p>
 *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
 *          <p>
 *             <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
 *          </p>
 */
export interface HomeDirectoryMapEntry {
  /**
   * <p>Represents an entry for <code>HomeDirectoryMappings</code>.</p>
   */
  Entry: string | undefined;

  /**
   * <p>Represents the map target that is used in a <code>HomeDirectorymapEntry</code>.</p>
   */
  Target: string | undefined;
}

export enum HomeDirectoryType {
  LOGICAL = "LOGICAL",
  PATH = "PATH",
}

/**
 * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
 *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
 *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
 *       files and directories in your file system determine the level of access your users get when
 *       transferring files into and out of your Amazon EFS file systems.</p>
 */
export interface PosixProfile {
  /**
   * <p>The POSIX user ID used for all EFS operations by this user.</p>
   */
  Uid: number | undefined;

  /**
   * <p>The POSIX group ID used for all EFS operations by this user.</p>
   */
  Gid: number | undefined;

  /**
   * <p>The secondary POSIX group IDs used for all EFS operations by this user.</p>
   */
  SecondaryGids?: number[];
}

export interface CreateAccessRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

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
   *             <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down your
   *       user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
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
   */
  Policy?: string;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export interface CreateAccessResponse {
  /**
   * <p>The identifier of the server that the user is attached to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The external identifier of the group whose users have access to your Amazon S3 or Amazon
   *       EFS resources over the enabled protocols using Transfer Family.</p>
   */
  ExternalId: string | undefined;
}

/**
 * <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
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
 * <p>The requested resource does not exist.</p>
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
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to
 *       search for and group a resource for various purposes. You can apply tags to servers, users,
 *       and roles. A tag key can take more than one value. For example, to group servers for
 *       accounting purposes, you might create a tag called <code>Group</code> and assign the values
 *         <code>Research</code> and <code>Accounting</code> to that group.</p>
 */
export interface Tag {
  /**
   * <p>The name assigned to the tag that you create.</p>
   */
  Key: string | undefined;

  /**
   * <p>Contains one or more values that you assigned to the key name you create.</p>
   */
  Value: string | undefined;
}

export interface CreateAgreementRequest {
  /**
   * <p>A name or short description to identify the agreement. </p>
   */
  Description?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server
   *       that the agreement uses.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   */
  LocalProfileId: string | undefined;

  /**
   * <p>A unique identifier for the partner profile used in the agreement.</p>
   */
  PartnerProfileId: string | undefined;

  /**
   * <p>The landing directory (folder) for files transferred by using the AS2 protocol.</p>
   *          <p>A <code>BaseDirectory</code> example is
   *           <i>DOC-EXAMPLE-BUCKET</i>/<i>home</i>/<i>mydirectory</i>.</p>
   */
  BaseDirectory: string | undefined;

  /**
   * <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *         <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *         <code>StartFileTransfer</code>.</p>
   */
  AccessRole: string | undefined;

  /**
   * <p>The status of the agreement. The agreement can be either <code>ACTIVE</code> or
   *         <code>INACTIVE</code>.</p>
   */
  Status?: AgreementStatusType | string;

  /**
   * <p>Key-value pairs that can be used to group and search for agreements.</p>
   */
  Tags?: Tag[];
}

export interface CreateAgreementResponse {
  /**
   * <p>The unique identifier for the agreement. Use this ID for deleting, or updating an
   *       agreement, as well as in any other API calls that require that you specify the agreement
   *       ID.</p>
   */
  AgreementId: string | undefined;
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  RetryAfterSeconds?: string;
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

export interface CreateConnectorRequest {
  /**
   * <p>The URL of the partner's AS2 endpoint.</p>
   */
  Url: string | undefined;

  /**
   * <p>A structure that contains the parameters for a connector object.</p>
   */
  As2Config: As2ConnectorConfig | undefined;

  /**
   * <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *         <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *         <code>StartFileTransfer</code>.</p>
   */
  AccessRole: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn
   *       on CloudWatch logging for Amazon S3 events. When set, you can view connector
   *       activity in your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.</p>
   */
  Tags?: Tag[];
}

export interface CreateConnectorResponse {
  /**
   * <p>The unique identifier for the connector, returned after the API call succeeds.</p>
   */
  ConnectorId: string | undefined;
}

export enum ProfileType {
  LOCAL = "LOCAL",
  PARTNER = "PARTNER",
}

export interface CreateProfileRequest {
  /**
   * <p>The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the
   *     <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages
   *       sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the
   *       AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.</p>
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
   */
  ProfileType: ProfileType | string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateIds?: string[];

  /**
   * <p>Key-value pairs that can be used to group and search for AS2 profiles.</p>
   */
  Tags?: Tag[];
}

export interface CreateProfileResponse {
  /**
   * <p>The unique identifier for the AS2 profile, returned after the API call succeeds.</p>
   */
  ProfileId: string | undefined;
}

export enum Domain {
  EFS = "EFS",
  S3 = "S3",
}

/**
 * <p>The virtual private cloud (VPC) endpoint settings that are configured for your file
 *       transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server
 *       and resources only within your VPC. To control incoming internet traffic, invoke the
 *         <code>UpdateServer</code> API and attach an Elastic IP address to your server's
 *       endpoint.</p>
 *          <note>
 *             <p> After May 19, 2021, you won't be able to create a server using
 *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already
 *       done so before May 19, 2021. If you have already created servers with
 *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021,
 *         you will not be affected. After this date, use
 *         <code>EndpointType</code>=<code>VPC</code>.</p>
 *             <p>For more information, see
 *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
 *          </note>
 */
export interface EndpointDetails {
  /**
   * <p>A list of address allocation IDs that are required to attach an Elastic IP address to your
   *       server's endpoint.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC</code>
   *         and it is only valid in the <code>UpdateServer</code> API.</p>
   *          </note>
   */
  AddressAllocationIds?: string[];

  /**
   * <p>A list of subnet IDs that are required to host your server endpoint in your VPC.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *          </note>
   */
  SubnetIds?: string[];

  /**
   * <p>The identifier of the VPC endpoint.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *           <code>VPC_ENDPOINT</code>.</p>
   *             <p>For more information, see
   *         https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p>
   *          </note>
   */
  VpcEndpointId?: string;

  /**
   * <p>The VPC identifier of the VPC in which a server's endpoint will be hosted.</p>
   *          <note>
   *             <p>This property can only be set when <code>EndpointType</code> is set to
   *         <code>VPC</code>.</p>
   *          </note>
   */
  VpcId?: string;

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
   */
  SecurityGroupIds?: string[];
}

export enum EndpointType {
  PUBLIC = "PUBLIC",
  VPC = "VPC",
  VPC_ENDPOINT = "VPC_ENDPOINT",
}

/**
 * <p>Returns information related to the type of user authentication that is in use for a file
 *       transfer protocol-enabled server's users. A server can have only one method of
 *       authentication.</p>
 */
export interface IdentityProviderDetails {
  /**
   * <p>Provides the location of the service endpoint used to authenticate users.</p>
   */
  Url?: string;

  /**
   * <p>Provides the type of <code>InvocationRole</code> used to authenticate the user
   *       account.</p>
   */
  InvocationRole?: string;

  /**
   * <p>The identifier of the Directory Service directory that you want to stop sharing.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The ARN for a lambda function to use for the Identity provider.</p>
   */
  Function?: string;
}

export enum IdentityProviderType {
  API_GATEWAY = "API_GATEWAY",
  AWS_DIRECTORY_SERVICE = "AWS_DIRECTORY_SERVICE",
  AWS_LAMBDA = "AWS_LAMBDA",
  SERVICE_MANAGED = "SERVICE_MANAGED",
}

export enum SetStatOption {
  DEFAULT = "DEFAULT",
  ENABLE_NO_OP = "ENABLE_NO_OP",
}

export enum TlsSessionResumptionMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ENFORCED = "ENFORCED",
}

/**
 * <p>
 *       The protocol settings that are configured for your server.
 *     </p>
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
   */
  PassiveIp?: string;

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
   */
  TlsSessionResumptionMode?: TlsSessionResumptionMode | string;

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
   */
  SetStatOption?: SetStatOption | string;

  /**
   * <p>Indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p>
   */
  As2Transports?: (As2Transport | string)[];
}

export enum Protocol {
  AS2 = "AS2",
  FTP = "FTP",
  FTPS = "FTPS",
  SFTP = "SFTP",
}

/**
 * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
 *          <p>In additon to a workflow to execute when a file is uploaded completely, <code>WorkflowDeatails</code> can also contain a
 *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when
 *     the session disconnects.</p>
 */
export interface WorkflowDetail {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;

  /**
   * <p>Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can
   *       assume, so that all workflow steps can operate on the required resources</p>
   */
  ExecutionRole: string | undefined;
}

/**
 * <p>Container for the <code>WorkflowDetail</code> data type.
 *       It is used by actions that trigger a workflow to begin execution.</p>
 */
export interface WorkflowDetails {
  /**
   * <p>A trigger that starts a workflow: the workflow begins to execute after a file is uploaded.</p>
   *          <p>To remove an associated workflow from a server, you can provide an empty <code>OnUpload</code> object, as in the following example.</p>
   *          <p>
   *             <code>aws transfer update-server --server-id s-01234567890abcdef --workflow-details '{"OnUpload":[]}'</code>
   *          </p>
   */
  OnUpload?: WorkflowDetail[];

  /**
   * <p>A trigger that starts a workflow if a file is only partially uploaded. You can attach a workflow to a server
   *   that executes whenever there is a partial upload.</p>
   *          <p>A <i>partial upload</i> occurs when a file is open when the session disconnects.</p>
   */
  OnPartialUpload?: WorkflowDetail[];
}

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
   */
  Certificate?: string;

  /**
   * <p>The domain of the storage system that is used for file transfers. There are two domains
   *       available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The
   *       default value is S3.</p>
   *          <note>
   *             <p>After the server is created, the domain cannot be changed.</p>
   *          </note>
   */
  Domain?: Domain | string;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make your endpoint accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   */
  EndpointDetails?: EndpointDetails;

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
   */
  EndpointType?: EndpointType | string;

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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Update host keys for your SFTP-enabled server</a> in the <i>Transfer Family User Guide</i>.</p>
   */
  HostKey?: string;

  /**
   * <p>Required when <code>IdentityProviderType</code> is set to
   *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>. Accepts an array containing
   *       all of the information required to use a directory in <code>AWS_DIRECTORY_SERVICE</code> or
   *       invoke a customer-supplied authentication API, including the API Gateway URL. Not required
   *       when <code>IdentityProviderType</code> is set to <code>SERVICE_MANAGED</code>.</p>
   */
  IdentityProviderDetails?: IdentityProviderDetails;

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
   *       or the <code>IdentityProviderDetails</code> data type.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p>
   *          <note>
   *             <p>The SFTP protocol does not support post-authentication display banners.</p>
   *          </note>
   */
  PostAuthenticationLoginBanner?: string;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates.
   *     For example, the following banner displays details about using the system:</p>
   *          <p>
   *             <code>This system is for the use of authorized users only. Individuals using this computer system without authority,
   *     or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by
   *     system personnel.</code>
   *          </p>
   */
  PreAuthenticationLoginBanner?: string;

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
   *             <code>IdentityProviderType</code> must be <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *             can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set to
   *             <code>SERVICE_MANAGED</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>AS2</code>, then the
   *               <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Protocols?: (Protocol | string)[];

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
   */
  ProtocolDetails?: ProtocolDetails;

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for servers.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
   *          <p>In additon to a workflow to execute when a file is uploaded completely, <code>WorkflowDeatails</code> can also contain a
   *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when
   *     the session disconnects.</p>
   */
  WorkflowDetails?: WorkflowDetails;
}

export interface CreateServerResponse {
  /**
   * <p>The service-assigned identifier of the server that is created.</p>
   */
  ServerId: string | undefined;
}

export interface CreateUserRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

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
   *             <code>[ { "Entry": "/directory1", "Target":
   *         "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock your user
   *       down to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
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
   */
  Policy?: string;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in Amazon EFS determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server
   *       that you added your user to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The public portion of the Secure Shell (SSH) key used to authenticate the user to the
   *       server.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   */
  SshPublicKeyBody?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for users. Tags are metadata attached
   *       to users for any purpose.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A unique string that identifies a user and is associated with a <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters
   *       long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen
   *       '-', period '.', and at sign '@'. The user name can't start
   *       with a hyphen, period, or at sign.</p>
   */
  UserName: string | undefined;
}

export interface CreateUserResponse {
  /**
   * <p>The identifier of the server that the user is attached to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user account associated with a server.</p>
   */
  UserName: string | undefined;
}

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 */
export interface CustomStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   */
  Name?: string;

  /**
   * <p>The ARN for the lambda function that is being called.</p>
   */
  Target?: string;

  /**
   * <p>Timeout, in seconds, for the step.</p>
   */
  TimeoutSeconds?: number;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>Enter <code>${previous.file}</code> to use the previous file as the input.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>Enter <code>${original.file}</code> to use the originally-uploaded file location as input for this step.</p>
   *             </li>
   *          </ul>
   */
  SourceFileLocation?: string;
}

export enum EncryptionType {
  PGP = "PGP",
}

export interface DecryptStepDetails {
  Name?: string;
  Type: EncryptionType | string | undefined;
  SourceFileLocation?: string;
  OverwriteExisting?: OverwriteExisting | string;
  /**
   * <p>Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.</p>
   */
  DestinationFileLocation: InputFileLocation | undefined;
}

/**
 * <p>The name of the step, used to identify the delete step.</p>
 */
export interface DeleteStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   */
  Name?: string;

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>Enter <code>${previous.file}</code> to use the previous file as the input.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>Enter <code>${original.file}</code> to use the originally-uploaded file location as input for this step.</p>
   *             </li>
   *          </ul>
   */
  SourceFileLocation?: string;
}

/**
 * <p>Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.</p>
 */
export interface S3Tag {
  /**
   * <p>The name assigned to the tag that you create.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value that corresponds to the key.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Each step type has its own <code>StepDetails</code> structure.</p>
 *          <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
 */
export interface TagStepDetails {
  /**
   * <p>The name of the step, used as an identifier.</p>
   */
  Name?: string;

  /**
   * <p>Array that contains from 1 to 10 key/value pairs.</p>
   */
  Tags?: S3Tag[];

  /**
   * <p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file
   *     for the workflow.</p>
   *          <ul>
   *             <li>
   *                <p>Enter <code>${previous.file}</code> to use the previous file as the input.
   *           In this case, this workflow step uses the output file from the previous workflow step as input.
   *           This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>Enter <code>${original.file}</code> to use the originally-uploaded file location as input for this step.</p>
   *             </li>
   *          </ul>
   */
  SourceFileLocation?: string;
}

export enum WorkflowStepType {
  COPY = "COPY",
  CUSTOM = "CUSTOM",
  DECRYPT = "DECRYPT",
  DELETE = "DELETE",
  TAG = "TAG",
}

/**
 * <p>The basic building block of a workflow.</p>
 */
export interface WorkflowStep {
  /**
   * <p>
   *         Currently, the following step types are supported.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>COPY</i>: Copy the file to another location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CUSTOM</i>: Perform a custom step with an Lambda function target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DELETE</i>: Delete the file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TAG</i>: Add a tag to the file.</p>
   *             </li>
   *          </ul>
   */
  Type?: WorkflowStepType | string;

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
   *                <p>An S3 location for the destination of the file copy.</p>
   *             </li>
   *             <li>
   *                <p>A flag that indicates whether or not to overwrite an existing file of the same name.
   *         The default is <code>FALSE</code>.</p>
   *             </li>
   *          </ul>
   */
  CopyStepDetails?: CopyStepDetails;

  /**
   * <p>Details for a step that invokes a lambda function.</p>
   *          <p>
   *         Consists of the lambda function name, target, and timeout (in seconds).
   *       </p>
   */
  CustomStepDetails?: CustomStepDetails;

  /**
   * <p>Details for a step that deletes the file.</p>
   */
  DeleteStepDetails?: DeleteStepDetails;

  /**
   * <p>Details for a step that creates one or more tags.</p>
   *          <p>You specify one or more tags: each tag contains a key/value pair.</p>
   */
  TagStepDetails?: TagStepDetails;

  DecryptStepDetails?: DecryptStepDetails;
}

export interface CreateWorkflowRequest {
  /**
   * <p>A textual description for the workflow.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the details for the steps that are in the specified workflow.</p>
   *          <p>
   *       The <code>TYPE</code> specifies which of the following actions is being taken for this step.
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>COPY</i>: Copy the file to another location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CUSTOM</i>: Perform a custom step with an Lambda function target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DELETE</i>: Delete the file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TAG</i>: Add a tag to the file.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *         Currently, copying and tagging are supported only on S3.
   *       </p>
   *          </note>
   *          <p> For file location, you specify either the S3 bucket and key, or the EFS file system ID
   *       and path. </p>
   */
  Steps: WorkflowStep[] | undefined;

  /**
   * <p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p>
   *          <note>
   *             <p>For custom steps, the lambda function needs to send <code>FAILURE</code> to the call
   *         back API to kick off the exception steps. Additionally, if the lambda does not send
   *           <code>SUCCESS</code> before it times out, the exception steps are executed.</p>
   *          </note>
   */
  OnExceptionSteps?: WorkflowStep[];

  /**
   * <p>Key-value pairs that can be used to group and search for workflows. Tags are metadata attached
   *       to workflows for any purpose.</p>
   */
  Tags?: Tag[];
}

export interface CreateWorkflowResponse {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;
}

export enum CustomStepStatus {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
}

export interface DeleteAccessRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export interface DeleteAgreementRequest {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   */
  AgreementId: string | undefined;

  /**
   * <p>The server identifier associated with the agreement that you are deleting.</p>
   */
  ServerId: string | undefined;
}

export interface DeleteCertificateRequest {
  /**
   * <p>The identifier of the certificate object that you are deleting.</p>
   */
  CertificateId: string | undefined;
}

export interface DeleteConnectorRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   */
  ConnectorId: string | undefined;
}

export interface DeleteHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you are deleting.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The identifier of the host key that you are deleting.</p>
   */
  HostKeyId: string | undefined;
}

export interface DeleteProfileRequest {
  /**
   * <p>The identifier of the profile that you are deleting.</p>
   */
  ProfileId: string | undefined;
}

export interface DeleteServerRequest {
  /**
   * <p>A unique system-assigned identifier for a server instance.</p>
   */
  ServerId: string | undefined;
}

export interface DeleteSshPublicKeyRequest {
  /**
   * <p>A system-assigned unique identifier for a file transfer protocol-enabled server instance
   *       that has the user assigned to it.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier used to reference your user's specific SSH key.</p>
   */
  SshPublicKeyId: string | undefined;

  /**
   * <p>A unique string that identifies a user whose public key is being deleted.</p>
   */
  UserName: string | undefined;
}

export interface DeleteUserRequest {
  /**
   * <p>A system-assigned unique identifier for a server instance that has the user assigned to
   *       it.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user that is being deleted from a server.</p>
   */
  UserName: string | undefined;
}

export interface DeleteWorkflowRequest {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;
}

export interface DescribeAccessRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this access assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

/**
 * <p>Describes the properties of the access that was specified.</p>
 */
export interface DescribedAccess {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

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
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   */
  Policy?: string;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId?: string;
}

export interface DescribeAccessResponse {
  /**
   * <p>A system-assigned unique identifier for a server that has this access assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The external identifier of the server that the access is attached to.</p>
   */
  Access: DescribedAccess | undefined;
}

export interface DescribeAgreementRequest {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   */
  AgreementId: string | undefined;

  /**
   * <p>The server identifier that's associated with the agreement.</p>
   */
  ServerId: string | undefined;
}

/**
 * <p>Describes the properties of an agreement.</p>
 */
export interface DescribedAgreement {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the agreement.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   */
  AgreementId?: string;

  /**
   * <p>The name or short description that's used to identify the agreement.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the agreement, either <code>ACTIVE</code> or
   *       <code>INACTIVE</code>.</p>
   */
  Status?: AgreementStatusType | string;

  /**
   * <p>A system-assigned unique identifier for a server instance. This identifier indicates the
   *       specific server that the agreement uses.</p>
   */
  ServerId?: string;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   */
  LocalProfileId?: string;

  /**
   * <p>A unique identifier for the partner profile used in the agreement.</p>
   */
  PartnerProfileId?: string;

  /**
   * <p>The landing directory (folder) for files that are transferred by using the AS2
   *       protocol.</p>
   */
  BaseDirectory?: string;

  /**
   * <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *         <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *         <code>StartFileTransfer</code>.</p>
   */
  AccessRole?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for agreements.</p>
   */
  Tags?: Tag[];
}

export interface DescribeAgreementResponse {
  /**
   * <p>The details for the specified agreement, returned as a <code>DescribedAgreement</code>
   *       object.</p>
   */
  Agreement: DescribedAgreement | undefined;
}

export interface DescribeCertificateRequest {
  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateId: string | undefined;
}

/**
 * <p>Describes the properties of a certificate.</p>
 */
export interface DescribedCertificate {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the certificate.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateId?: string;

  /**
   * <p>Specifies whether this certificate is used for signing or encryption.</p>
   */
  Usage?: CertificateUsageType | string;

  /**
   * <p>The certificate can be either <code>ACTIVE</code>, <code>PENDING_ROTATION</code>, or
   *         <code>INACTIVE</code>. <code>PENDING_ROTATION</code> means that this certificate will
   *       replace the current certificate when it expires.</p>
   */
  Status?: CertificateStatusType | string;

  /**
   * <p>The file name for the certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The list of certificates that make up the chain for the certificate.</p>
   */
  CertificateChain?: string;

  /**
   * <p>An optional date that specifies when the certificate becomes active.</p>
   */
  ActiveDate?: Date;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive.</p>
   */
  InactiveDate?: Date;

  /**
   * <p>The serial number for the certificate.</p>
   */
  Serial?: string;

  /**
   * <p>The earliest date that the certificate is valid.</p>
   */
  NotBeforeDate?: Date;

  /**
   * <p>The final date that the certificate is
   *       valid.</p>
   */
  NotAfterDate?: Date;

  /**
   * <p>If a private key has been specified for the certificate, its type is <code>CERTIFICATE_WITH_PRIVATE_KEY</code>. If there is no private key, the type is <code>CERTIFICATE</code>.</p>
   */
  Type?: CertificateType | string;

  /**
   * <p>The name or description that's used to identity the certificate. </p>
   */
  Description?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for certificates.</p>
   */
  Tags?: Tag[];
}

export interface DescribeCertificateResponse {
  /**
   * <p>The details for the specified certificate, returned as an object.</p>
   */
  Certificate: DescribedCertificate | undefined;
}

export interface DescribeConnectorRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   */
  ConnectorId: string | undefined;
}

/**
 * <p>Describes the parameters for the connector, as identified by the
 *       <code>ConnectorId</code>.</p>
 */
export interface DescribedConnector {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the connector.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the connector.</p>
   */
  ConnectorId?: string;

  /**
   * <p>The URL of the partner's AS2 endpoint.</p>
   */
  Url?: string;

  /**
   * <p>A structure that contains the parameters for a connector object.</p>
   */
  As2Config?: As2ConnectorConfig;

  /**
   * <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *         <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *         <code>StartFileTransfer</code>.</p>
   */
  AccessRole?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn
   *       on CloudWatch logging for Amazon S3 events. When set, you can view connector
   *       activity in your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for connectors.</p>
   */
  Tags?: Tag[];
}

export interface DescribeConnectorResponse {
  /**
   * <p>The structure that contains the details of the connector.</p>
   */
  Connector: DescribedConnector | undefined;
}

/**
 * <p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage.</p>
 */
export interface S3FileLocation {
  /**
   * <p>Specifies the S3 bucket that contains the file being used.</p>
   */
  Bucket?: string;

  /**
   * <p>The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.</p>
   */
  Key?: string;

  /**
   * <p>Specifies the file version.</p>
   */
  VersionId?: string;

  /**
   * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata.</p>
   */
  Etag?: string;
}

/**
 * <p>Specifies the Amazon S3 or EFS file details to be used in the step.</p>
 */
export interface FileLocation {
  /**
   * <p>Specifies the S3 details for the file being used, such as bucket, ETag, and so
   *       forth.</p>
   */
  S3FileLocation?: S3FileLocation;

  /**
   * <p>Specifies the Amazon EFS identifier and the path for the file being used.</p>
   */
  EfsFileLocation?: EfsFileLocation;
}

/**
 * <p>Consists of the logging role and the log group name.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>The name of the CloudWatch logging group for the Transfer Family server to which this workflow belongs.</p>
   */
  LogGroupName?: string;
}

export enum ExecutionErrorType {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  BAD_REQUEST = "BAD_REQUEST",
  CUSTOM_STEP_FAILED = "CUSTOM_STEP_FAILED",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  NOT_FOUND = "NOT_FOUND",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  THROTTLED = "THROTTLED",
  TIMEOUT = "TIMEOUT",
}

/**
 * <p>Specifies the error message and type, for an error that occurs during the execution of the workflow.</p>
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
   */
  Type: ExecutionErrorType | string | undefined;

  /**
   * <p>Specifies the descriptive message that corresponds to the <code>ErrorType</code>.</p>
   */
  Message: string | undefined;
}

/**
 * <p>Specifies the following details for the step: error (if any), outputs (if any), and the step type.</p>
 */
export interface ExecutionStepResult {
  /**
   * <p>One of the available step types.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>COPY</i>: Copy the file to another location.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CUSTOM</i>: Perform a custom step with an Lambda function target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DELETE</i>: Delete the file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TAG</i>: Add a tag to the file.</p>
   *             </li>
   *          </ul>
   */
  StepType?: WorkflowStepType | string;

  /**
   * <p>The values for the key/value pair applied as a tag to the file. Only applicable if the step type is <code>TAG</code>.</p>
   */
  Outputs?: string;

  /**
   * <p>Specifies the details for an error, if it occurred during execution of the specified
   *       workflow step.</p>
   */
  Error?: ExecutionError;
}

/**
 * <p>Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.</p>
 */
export interface ExecutionResults {
  /**
   * <p>Specifies the details for the steps that are in the specified workflow.</p>
   */
  Steps?: ExecutionStepResult[];

  /**
   * <p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p>
   */
  OnExceptionSteps?: ExecutionStepResult[];
}

/**
 * <p>Specifies the user name, server ID, and session ID for a workflow.</p>
 */
export interface UserDetails {
  /**
   * <p>A unique string that identifies a user account associated with a server.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The system-assigned unique identifier for a Transfer server instance. </p>
   */
  ServerId: string | undefined;

  /**
   * <p>The system-assigned unique identifier for a session that corresponds to the workflow.</p>
   */
  SessionId?: string;
}

/**
 * <p>A container object for the session details that are associated with a workflow.</p>
 */
export interface ServiceMetadata {
  /**
   * <p>The Server ID (<code>ServerId</code>), Session ID (<code>SessionId</code>) and user (<code>UserName</code>) make up the <code>UserDetails</code>.</p>
   */
  UserDetails: UserDetails | undefined;
}

export enum ExecutionStatus {
  COMPLETED = "COMPLETED",
  EXCEPTION = "EXCEPTION",
  HANDLING_EXCEPTION = "HANDLING_EXCEPTION",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The details for an execution object.</p>
 */
export interface DescribedExecution {
  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   */
  ExecutionId?: string;

  /**
   * <p>A structure that describes the Amazon S3 or EFS file location.
   *       This is the file location when the execution begins: if the file is being copied,
   *     this is the initial (as opposed to destination) file location.</p>
   */
  InitialFileLocation?: FileLocation;

  /**
   * <p>A container object for the session details that are associated with a workflow.</p>
   */
  ServiceMetadata?: ServiceMetadata;

  /**
   * <p>The IAM role associated with the execution.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The IAM logging role associated with the execution.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.
   *       </p>
   */
  Status?: ExecutionStatus | string;

  /**
   * <p>A structure that describes the execution results. This includes a list of the steps along with the details of each step,
   *     error type and message (if any), and the <code>OnExceptionSteps</code> structure.</p>
   */
  Results?: ExecutionResults;
}

/**
 * <p>The details for a server host key.</p>
 */
export interface DescribedHostKey {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the host key.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the host key.</p>
   */
  HostKeyId?: string;

  /**
   * <p>The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.</p>
   */
  HostKeyFingerprint?: string;

  /**
   * <p>The text description for this host key.</p>
   */
  Description?: string;

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
   */
  Type?: string;

  /**
   * <p>The date on which the host key was added to the server.</p>
   */
  DateImported?: Date;

  /**
   * <p>Key-value pairs that can be used to group and search for host keys.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The details for a local or partner AS2 profile. </p>
 */
export interface DescribedProfile {
  /**
   * <p>The unique Amazon Resource Name (ARN) for the profile.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the local or partner AS2 profile.</p>
   */
  ProfileId?: string;

  /**
   * <p>Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles.
   *    If not supplied in the request, the command lists all types of profiles.</p>
   */
  ProfileType?: ProfileType | string;

  /**
   * <p>The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the
   *     <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages
   *       sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the
   *       AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.</p>
   */
  As2Id?: string;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateIds?: string[];

  /**
   * <p>Key-value pairs that can be used to group and search for profiles.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Describes the properties of a security policy that was specified. For more information
 *       about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies</a>.</p>
 */
export interface DescribedSecurityPolicy {
  /**
   * <p>Specifies whether this policy enables Federal Information Processing Standards
   *       (FIPS).</p>
   */
  Fips?: boolean;

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName: string | undefined;

  /**
   * <p>Specifies the enabled Secure Shell (SSH) cipher encryption algorithms in the security
   *       policy that is attached to the server.</p>
   */
  SshCiphers?: string[];

  /**
   * <p>Specifies the enabled SSH key exchange (KEX) encryption algorithms in the security policy
   *       that is attached to the server.</p>
   */
  SshKexs?: string[];

  /**
   * <p>Specifies the enabled SSH message authentication code (MAC) encryption algorithms in the
   *       security policy that is attached to the server.</p>
   */
  SshMacs?: string[];

  /**
   * <p>Specifies the enabled Transport Layer Security (TLS) cipher encryption algorithms in the
   *       security policy that is attached to the server.</p>
   */
  TlsCiphers?: string[];
}

export enum State {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  STARTING = "STARTING",
  START_FAILED = "START_FAILED",
  STOPPING = "STOPPING",
  STOP_FAILED = "STOP_FAILED",
}

/**
 * <p>Describes the properties of a file transfer protocol-enabled server that was
 *       specified.</p>
 */
export interface DescribedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the server.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the ARN of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when
   *         <code>Protocols</code> is set to <code>FTPS</code>.</p>
   */
  Certificate?: string;

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
   */
  ProtocolDetails?: ProtocolDetails;

  /**
   * <p>Specifies the domain of the storage system that is used for file transfers.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make your endpoint accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   */
  EndpointDetails?: EndpointDetails;

  /**
   * <p>Defines the type of endpoint that your server is connected to. If your server is connected
   *       to a VPC endpoint, your server isn't accessible over the public internet.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value
   *       is equivalent to the output of the <code>ssh-keygen -l -f my-new-server-key</code>
   *       command.</p>
   */
  HostKeyFingerprint?: string;

  /**
   * <p>Specifies information to call a customer-supplied authentication API. This field is not
   *       populated when the <code>IdentityProviderType</code> of a server is
   *       <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code>.</p>
   */
  IdentityProviderDetails?: IdentityProviderDetails;

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
   *       or the <code>IdentityProviderDetails</code> data type.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p>
   *          <note>
   *             <p>The SFTP protocol does not support post-authentication display banners.</p>
   *          </note>
   */
  PostAuthenticationLoginBanner?: string;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates.
   *     For example, the following banner displays details about using the system:</p>
   *          <p>
   *             <code>This system is for the use of authorized users only. Individuals using this computer system without authority,
   *     or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by
   *     system personnel.</code>
   *          </p>
   */
  PreAuthenticationLoginBanner?: string;

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
   *             <code>IdentityProviderType</code> must be <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *             can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set to
   *             <code>SERVICE_MANAGED</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>AS2</code>, then the
   *               <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Protocols?: (Protocol | string)[];

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName?: string;

  /**
   * <p>Specifies the unique system-assigned identifier for a server that you instantiate.</p>
   */
  ServerId?: string;

  /**
   * <p>The condition of the server that was described. A value of
   *         <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A
   *         <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file
   *       transfer operations.</p>
   *          <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is
   *       in an intermediate state, either not fully able to respond, or not fully offline. The values
   *       of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error
   *       condition.</p>
   */
  State?: State | string;

  /**
   * <p>Specifies the key-value pairs that you can use to search for and group servers that were
   *       assigned to the server that was described.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the number of users that are assigned to a server you specified with the
   *         <code>ServerId</code>.</p>
   */
  UserCount?: number;

  /**
   * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
   *          <p>In additon to a workflow to execute when a file is uploaded completely, <code>WorkflowDeatails</code> can also contain a
   *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when
   *     the session disconnects.</p>
   */
  WorkflowDetails?: WorkflowDetails;
}

/**
 * <p>Provides information about the public Secure Shell (SSH) key that is associated with a
 *       user account for the specific file transfer protocol-enabled server (as identified by
 *         <code>ServerId</code>). The information returned includes the date the key was imported, the
 *       public key contents, and the public key ID. A user can store more than one SSH public key
 *       associated with their user name on a specific server.</p>
 */
export interface SshPublicKey {
  /**
   * <p>Specifies the date that the public key was added to the user account.</p>
   */
  DateImported: Date | undefined;

  /**
   * <p>Specifies the content of the SSH public key as specified by the
   *       <code>PublicKeyId</code>.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   */
  SshPublicKeyBody: string | undefined;

  /**
   * <p>Specifies the <code>SshPublicKeyId</code> parameter contains the identifier of the public
   *       key.</p>
   */
  SshPublicKeyId: string | undefined;
}

/**
 * <p>Describes the properties of a user that was specified.</p>
 */
export interface DescribedUser {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the user that was requested to be
   *       described.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

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
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   */
  Policy?: string;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon Elastic File System (Amazon EFS) file systems. The POSIX
   *       permissions that are set on files and directories in your file system determine the level of
   *       access your users get when transferring files into and out of your Amazon EFS file
   *       systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>Specifies the public key portion of the Secure Shell (SSH) keys stored for the described
   *       user.</p>
   */
  SshPublicKeys?: SshPublicKey[];

  /**
   * <p>Specifies the key-value pairs for the user requested. Tag can be used to search for and
   *       group users for a variety of purposes.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the name of the user that was requested to be described. User names are used for
   *       authentication purposes. This is the string that will be used by your user when they log in to
   *       your server.</p>
   */
  UserName?: string;
}

/**
 * <p>Describes the properties of the specified workflow</p>
 */
export interface DescribedWorkflow {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the workflow.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the text description for the workflow.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the details for the steps that are in the specified workflow.</p>
   */
  Steps?: WorkflowStep[];

  /**
   * <p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p>
   */
  OnExceptionSteps?: WorkflowStep[];

  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.</p>
   */
  Tags?: Tag[];
}

export interface DescribeExecutionRequest {
  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   */
  ExecutionId: string | undefined;

  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;
}

export interface DescribeExecutionResponse {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;

  /**
   * <p>The structure that contains the details of the workflow' execution.</p>
   */
  Execution: DescribedExecution | undefined;
}

export interface DescribeHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you want described.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The identifier of the host key that you want described.</p>
   */
  HostKeyId: string | undefined;
}

export interface DescribeHostKeyResponse {
  /**
   * <p>Returns the details for the specified host key.</p>
   */
  HostKey: DescribedHostKey | undefined;
}

export interface DescribeProfileRequest {
  /**
   * <p>The identifier of the profile that you want described.</p>
   */
  ProfileId: string | undefined;
}

export interface DescribeProfileResponse {
  /**
   * <p>The details of the specified profile, returned as an object.</p>
   */
  Profile: DescribedProfile | undefined;
}

export interface DescribeSecurityPolicyRequest {
  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName: string | undefined;
}

export interface DescribeSecurityPolicyResponse {
  /**
   * <p>An array containing the properties of the security policy.</p>
   */
  SecurityPolicy: DescribedSecurityPolicy | undefined;
}

export interface DescribeServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   */
  ServerId: string | undefined;
}

export interface DescribeServerResponse {
  /**
   * <p>An array containing the properties of a server with the <code>ServerID</code> you
   *       specified.</p>
   */
  Server: DescribedServer | undefined;
}

export interface DescribeUserRequest {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The name of the user assigned to one or more servers. User names are part of the sign-in
   *       credentials to use the Transfer Family service and perform file transfer tasks.</p>
   */
  UserName: string | undefined;
}

export interface DescribeUserResponse {
  /**
   * <p>A system-assigned unique identifier for a server that has this user assigned.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>An array containing the properties of the user account for the <code>ServerID</code> value
   *       that you specified.</p>
   */
  User: DescribedUser | undefined;
}

export interface DescribeWorkflowRequest {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;
}

export interface DescribeWorkflowResponse {
  /**
   * <p>The structure that contains the details of the workflow.</p>
   */
  Workflow: DescribedWorkflow | undefined;
}

export interface ImportCertificateRequest {
  /**
   * <p>Specifies whether this certificate is used for signing or encryption.</p>
   */
  Usage: CertificateUsageType | string | undefined;

  /**
   * <p>The file that contains the certificate to import.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>An optional list of certificates that make up the chain for the certificate that's being
   *       imported.</p>
   */
  CertificateChain?: string;

  /**
   * <p>The file that contains the private key for the certificate that's being imported.</p>
   */
  PrivateKey?: string;

  /**
   * <p>An optional date that specifies when the certificate becomes active.</p>
   */
  ActiveDate?: Date;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive.</p>
   */
  InactiveDate?: Date;

  /**
   * <p>A short description that helps identify the certificate. </p>
   */
  Description?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for certificates.</p>
   */
  Tags?: Tag[];
}

export interface ImportCertificateResponse {
  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateId: string | undefined;
}

export interface ImportHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you are importing.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The public key portion of an SSH key pair.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   */
  HostKeyBody: string | undefined;

  /**
   * <p>The text description that identifies this host key.</p>
   */
  Description?: string;

  /**
   * <p>Key-value pairs that can be used to group and search for host keys.</p>
   */
  Tags?: Tag[];
}

export interface ImportHostKeyResponse {
  /**
   * <p>Returns the server identifier that contains the imported key.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the host key identifier for the imported key.</p>
   */
  HostKeyId: string | undefined;
}

export interface ImportSshPublicKeyRequest {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The public key portion of an SSH key pair.</p>
   *          <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>
   */
  SshPublicKeyBody: string | undefined;

  /**
   * <p>The name of the user account that is assigned to one or more servers.</p>
   */
  UserName: string | undefined;
}

/**
 * <p>Identifies the user, the server they belong to, and the identifier of the SSH public key
 *       associated with that user. A user can have more than one key on each server that they are
 *       associated with.</p>
 */
export interface ImportSshPublicKeyResponse {
  /**
   * <p>A system-assigned unique identifier for a server.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The name given to a public key by the system that was imported.</p>
   */
  SshPublicKeyId: string | undefined;

  /**
   * <p>A user name assigned to the <code>ServerID</code> value that you specified.</p>
   */
  UserName: string | undefined;
}

/**
 * <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
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

export interface ListAccessesRequest {
  /**
   * <p>Specifies the maximum number of access SIDs to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListAccesses</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       accesses.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   */
  ServerId: string | undefined;
}

/**
 * <p>Lists the properties for one or more specified associated accesses.</p>
 */
export interface ListedAccess {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId?: string;
}

export interface ListAccessesResponse {
  /**
   * <p>When you can get additional results from the <code>ListAccesses</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       accesses.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the accesses and their properties for the <code>ServerId</code> value that you
   *       specify.</p>
   */
  Accesses: ListedAccess[] | undefined;
}

export interface ListAgreementsRequest {
  /**
   * <p>The maximum number of agreements to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListAgreements</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       agreements.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the server for which you want a list of agreements.</p>
   */
  ServerId: string | undefined;
}

/**
 * <p>Describes the properties of an agreement.</p>
 */
export interface ListedAgreement {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified agreement.</p>
   */
  Arn?: string;

  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   */
  AgreementId?: string;

  /**
   * <p>The current description for the agreement. You can change it by calling the
   *         <code>UpdateAgreement</code> operation and providing a new description. </p>
   */
  Description?: string;

  /**
   * <p>The agreement can be either <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: AgreementStatusType | string;

  /**
   * <p>The unique identifier for the agreement.</p>
   */
  ServerId?: string;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   */
  LocalProfileId?: string;

  /**
   * <p>A unique identifier for the partner profile.</p>
   */
  PartnerProfileId?: string;
}

export interface ListAgreementsResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListAgreements</code> again and receive
   *       additional results, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns an array, where each item contains the details of an agreement.</p>
   */
  Agreements: ListedAgreement[] | undefined;
}

export interface ListCertificatesRequest {
  /**
   * <p>The maximum number of certificates to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListCertificates</code> call, a
   *       <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       certificates.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the properties of a certificate.</p>
 */
export interface ListedCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified certificate.</p>
   */
  Arn?: string;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateId?: string;

  /**
   * <p>Specifies whether this certificate is used for signing or encryption.</p>
   */
  Usage?: CertificateUsageType | string;

  /**
   * <p>The certificate can be either <code>ACTIVE</code>, <code>PENDING_ROTATION</code>, or
   *         <code>INACTIVE</code>. <code>PENDING_ROTATION</code> means that this certificate will
   *       replace the current certificate when it expires.</p>
   */
  Status?: CertificateStatusType | string;

  /**
   * <p>An optional date that specifies when the certificate becomes active.</p>
   */
  ActiveDate?: Date;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive.</p>
   */
  InactiveDate?: Date;

  /**
   * <p>The type for the certificate. If a private key has been specified for the certificate, its
   *       type is <code>CERTIFICATE_WITH_PRIVATE_KEY</code>. If there is no private key, the type is
   *         <code>CERTIFICATE</code>.</p>
   */
  Type?: CertificateType | string;

  /**
   * <p>The name or short description that's used to identify the certificate.</p>
   */
  Description?: string;
}

export interface ListCertificatesResponse {
  /**
   * <p>Returns the next token, which you can use to list the next certificate.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns an array of the certificates that are specified in the
   *         <code>ListCertificates</code> call.</p>
   */
  Certificates: ListedCertificate[] | undefined;
}

export interface ListConnectorsRequest {
  /**
   * <p>The maximum number of connectors to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListConnectors</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       connectors.</p>
   */
  NextToken?: string;
}

/**
 * <p>Returns details of the connector that is specified.</p>
 */
export interface ListedConnector {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified connector.</p>
   */
  Arn?: string;

  /**
   * <p>The unique identifier for the connector.</p>
   */
  ConnectorId?: string;

  /**
   * <p>The URL of the partner's AS2 endpoint.</p>
   */
  Url?: string;
}

export interface ListConnectorsResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListConnectors</code> again and receive
   *       additional results, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns an array, where each item contains the details of a connector.</p>
   */
  Connectors: ListedConnector[] | undefined;
}

/**
 * <p>Returns properties of the execution that is specified.</p>
 */
export interface ListedExecution {
  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   */
  ExecutionId?: string;

  /**
   * <p>A structure that describes the Amazon S3 or EFS file location.
   *       This is the file location when the execution begins: if the file is being copied,
   *       this is the initial (as opposed to destination) file location.</p>
   */
  InitialFileLocation?: FileLocation;

  /**
   * <p>A container object for the session details that are associated with a workflow.</p>
   */
  ServiceMetadata?: ServiceMetadata;

  /**
   * <p>The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.</p>
   */
  Status?: ExecutionStatus | string;
}

/**
 * <p>Returns properties of the host key that's specified.</p>
 */
export interface ListedHostKey {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the host key.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A unique identifier for the host key.</p>
   */
  HostKeyId?: string;

  /**
   * <p>The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.</p>
   */
  Fingerprint?: string;

  /**
   * <p>The current description for the host key. You can change it by calling the <code>UpdateHostKey</code> operation and providing a new description.</p>
   */
  Description?: string;

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
   */
  Type?: string;

  /**
   * <p>The date on which the host key was added to the server.</p>
   */
  DateImported?: Date;
}

/**
 * <p>Returns the properties of the profile that was specified.</p>
 */
export interface ListedProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified profile.</p>
   */
  Arn?: string;

  /**
   * <p>A unique identifier for the local or partner AS2 profile.</p>
   */
  ProfileId?: string;

  /**
   * <p>The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the
   *     <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages
   *       sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the
   *       AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.</p>
   */
  As2Id?: string;

  /**
   * <p>Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles.
   *    If not supplied in the request, the command lists all types of profiles.</p>
   */
  ProfileType?: ProfileType | string;
}

/**
 * <p>Returns properties of a file transfer protocol-enabled server that was specified.</p>
 */
export interface ListedServer {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for a server to be listed.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the domain of the storage system that is used for file transfers.</p>
   */
  Domain?: Domain | string;

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
   *       or the <code>IdentityProviderDetails</code> data type.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>Specifies the type of VPC endpoint that your server is connected to. If your server is
   *       connected to a VPC endpoint, your server isn't accessible over the public internet.</p>
   */
  EndpointType?: EndpointType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies the unique system assigned identifier for the servers that were listed.</p>
   */
  ServerId?: string;

  /**
   * <p>The condition of the server that was described. A value of
   *         <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A
   *         <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file
   *       transfer operations.</p>
   *          <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is
   *       in an intermediate state, either not fully able to respond, or not fully offline. The values
   *       of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error
   *       condition.</p>
   */
  State?: State | string;

  /**
   * <p>Specifies the number of users that are assigned to a server you specified with the
   *         <code>ServerId</code>.</p>
   */
  UserCount?: number;
}

/**
 * <p>Returns properties of the user that you specify.</p>
 */
export interface ListedUser {
  /**
   * <p>Provides the unique Amazon Resource Name (ARN) for the user that you want to learn
   *       about.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

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
   */
  Role?: string;

  /**
   * <p>Specifies the number of SSH public keys stored for the user you specified.</p>
   */
  SshPublicKeyCount?: number;

  /**
   * <p>Specifies the name of the user whose ARN was specified. User names are used for
   *       authentication purposes.</p>
   */
  UserName?: string;
}

/**
 * <p>Contains the identifier, text description, and Amazon Resource Name (ARN) for the
 *       workflow.</p>
 */
export interface ListedWorkflow {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId?: string;

  /**
   * <p>Specifies the text description for the workflow.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the workflow.</p>
   */
  Arn?: string;
}

export interface ListExecutionsRequest {
  /**
   * <p>Specifies the maximum number of executions to return.</p>
   */
  MaxResults?: number;

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
   */
  NextToken?: string;

  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;
}

export interface ListExecutionsResponse {
  /**
   * <p>
   *             <code>ListExecutions</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional executions.</p>
   */
  NextToken?: string;

  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;

  /**
   * <p>Returns the details for each execution.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NextToken</b>: returned from a call to several APIs,
   *       you can use pass it to a subsequent command to continue listing additional executions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StartTime</b>: timestamp indicating when the execution began.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Executions</b>: details of the execution, including the execution ID, initial file location,
   *       and Service metadata.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Status</b>: one of the following values:
   *         <code>IN_PROGRESS</code>, <code>COMPLETED</code>, <code>EXCEPTION</code>, <code>HANDLING_EXEPTION</code>.
   *       </p>
   *             </li>
   *          </ul>
   */
  Executions: ListedExecution[] | undefined;
}

export interface ListHostKeysRequest {
  /**
   * <p>The maximum number of host keys to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When there are additional results that were not returned, a <code>NextToken</code>
   *       parameter is returned. You can use that value for a subsequent call to
   *       <code>ListHostKeys</code> to continue listing results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the server that contains the host keys that you want to view.</p>
   */
  ServerId: string | undefined;
}

export interface ListHostKeysResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListHostKeys</code> again and receive
   *       additional results, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the server identifier that contains the listed host keys.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns an array, where each item contains the details of a host key.</p>
   */
  HostKeys: ListedHostKey[] | undefined;
}

export interface ListProfilesRequest {
  /**
   * <p>The maximum number of profiles to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>When there are additional results that were not returned, a <code>NextToken</code>
   *       parameter is returned. You can use that value for a subsequent call to
   *         <code>ListProfiles</code> to continue listing results.</p>
   */
  NextToken?: string;

  /**
   * <p>Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles.
   *    If not supplied in the request, the command lists all types of profiles.</p>
   */
  ProfileType?: ProfileType | string;
}

export interface ListProfilesResponse {
  /**
   * <p>Returns a token that you can use to call <code>ListProfiles</code> again and receive
   *       additional results, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns an array, where each item contains the details of a profile.</p>
   */
  Profiles: ListedProfile[] | undefined;
}

export interface ListSecurityPoliciesRequest {
  /**
   * <p>Specifies the number of security policies to return as a response to the
   *         <code>ListSecurityPolicies</code> query.</p>
   */
  MaxResults?: number;

  /**
   * <p>When additional results are obtained from the <code>ListSecurityPolicies</code> command, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass the
   *         <code>NextToken</code> parameter in a subsequent command to continue listing additional
   *       security policies.</p>
   */
  NextToken?: string;
}

export interface ListSecurityPoliciesResponse {
  /**
   * <p>When you can get additional results from the <code>ListSecurityPolicies</code> operation,
   *       a <code>NextToken</code> parameter is returned in the output. In a following command, you can
   *       pass in the <code>NextToken</code> parameter to continue listing security policies.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of security policies that were listed.</p>
   */
  SecurityPolicyNames: string[] | undefined;
}

export interface ListServersRequest {
  /**
   * <p>Specifies the number of servers to return as a response to the <code>ListServers</code>
   *       query.</p>
   */
  MaxResults?: number;

  /**
   * <p>When additional results are obtained from the <code>ListServers</code> command, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass the
   *         <code>NextToken</code> parameter in a subsequent command to continue listing additional
   *       servers.</p>
   */
  NextToken?: string;
}

export interface ListServersResponse {
  /**
   * <p>When you can get additional results from the <code>ListServers</code> operation, a
   *         <code>NextToken</code> parameter is returned in the output. In a following command, you can
   *       pass in the <code>NextToken</code> parameter to continue listing additional servers.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of servers that were listed.</p>
   */
  Servers: ListedServer[] | undefined;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an
   *       identifier for a specific Amazon Web Services resource, such as a server, user, or role.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Specifies the number of tags to return as a response to the
   *         <code>ListTagsForResource</code> request.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you request additional results from the <code>ListTagsForResource</code> operation, a
   *         <code>NextToken</code> parameter is returned in the input. You can then pass in a subsequent
   *       command to the <code>NextToken</code> parameter to continue listing additional tags.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The ARN you specified to list the tags of.</p>
   */
  Arn?: string;

  /**
   * <p>When you can get additional results from the <code>ListTagsForResource</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       tags.</p>
   */
  NextToken?: string;

  /**
   * <p>Key-value pairs that are assigned to a resource, usually for the purpose of grouping and
   *       searching for items. Tags are metadata that you define.</p>
   */
  Tags?: Tag[];
}

export interface ListUsersRequest {
  /**
   * <p>Specifies the number of users to return as a response to the <code>ListUsers</code>
   *       request.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       users.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that has users assigned to it.</p>
   */
  ServerId: string | undefined;
}

export interface ListUsersResponse {
  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a
   *         <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *       subsequent command to the <code>NextToken</code> parameter to continue listing additional
   *       users.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a server that the users are assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the user accounts and their properties for the <code>ServerId</code> value that
   *       you specify.</p>
   */
  Users: ListedUser[] | undefined;
}

export interface ListWorkflowsRequest {
  /**
   * <p>Specifies the maximum number of workflows to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>
   *             <code>ListWorkflows</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional workflows.</p>
   */
  NextToken?: string;
}

export interface ListWorkflowsResponse {
  /**
   * <p>
   *             <code>ListWorkflows</code> returns the <code>NextToken</code> parameter in the output.
   *       You can then pass the <code>NextToken</code> parameter in a subsequent command to
   *       continue listing additional workflows.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the <code>Arn</code>, <code>WorkflowId</code>, and <code>Description</code> for each workflow.</p>
   */
  Workflows: ListedWorkflow[] | undefined;
}

export interface SendWorkflowStepStateRequest {
  /**
   * <p>A unique identifier for the workflow.</p>
   */
  WorkflowId: string | undefined;

  /**
   * <p>A unique identifier for the execution of a workflow.</p>
   */
  ExecutionId: string | undefined;

  /**
   * <p>Used to distinguish between multiple callbacks for multiple Lambda steps within the same execution.</p>
   */
  Token: string | undefined;

  /**
   * <p>Indicates whether the specified step succeeded or failed.</p>
   */
  Status: CustomStepStatus | string | undefined;
}

export interface SendWorkflowStepStateResponse {}

export interface StartFileTransferRequest {
  /**
   * <p>The unique identifier for the connector. </p>
   */
  ConnectorId: string | undefined;

  /**
   * <p>An array of strings. Each string represents the absolute path for one outbound file transfer. For example,
   *           <code>
   *                <i>DOC-EXAMPLE-BUCKET</i>/<i>myfile.txt</i>
   *             </code>. </p>
   */
  SendFilePaths: string[] | undefined;
}

export interface StartFileTransferResponse {
  /**
   * <p>Returns the unique identifier for this file transfer. </p>
   */
  TransferId: string | undefined;
}

export interface StartServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server that you start.</p>
   */
  ServerId: string | undefined;
}

export interface StopServerRequest {
  /**
   * <p>A system-assigned unique identifier for a server that you stopped.</p>
   */
  ServerId: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a server, user, or
   *       role.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Key-value pairs assigned to ARNs that you can use to group and search for resources by
   *       type. You can attach this metadata to user accounts for any purpose.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TestIdentityProviderRequest {
  /**
   * <p>A system-assigned identifier for a specific server. That server's user authentication
   *       method is tested with a user name and password.</p>
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
   *          </ul>
   */
  ServerProtocol?: Protocol | string;

  /**
   * <p>The source IP address of the user account to be tested.</p>
   */
  SourceIp?: string;

  /**
   * <p>The name of the user account to be tested.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The password of the user account to be tested.</p>
   */
  UserPassword?: string;
}

export interface TestIdentityProviderResponse {
  /**
   * <p>The response that is returned from your API Gateway.</p>
   */
  Response?: string;

  /**
   * <p>The HTTP status code that is the response from your API Gateway.</p>
   */
  StatusCode: number | undefined;

  /**
   * <p>A message that indicates whether the test was successful or not.</p>
   *          <note>
   *             <p>If an empty string is returned, the most likely cause is that the authentication failed due to an incorrect username or password.</p>
   *          </note>
   */
  Message?: string;

  /**
   * <p>The endpoint of the service used to authenticate a user.</p>
   */
  Url: string | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is
   *       an identifier for a specific Amazon Web Services resource, such as a server, user, or role.</p>
   */
  Arn: string | undefined;

  /**
   * <p>TagKeys are key-value pairs assigned to ARNs that can be used to group and search for
   *       resources by type. This metadata can be attached to resources for any purpose.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateAccessRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

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
   *             <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down your
   *         user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to <code>/</code> and set <code>Target</code> to the
   *         <code>HomeDirectory</code> parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
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
   */
  Policy?: string;

  /**
   * <p>The full POSIX identity, including user ID (<code>Uid</code>), group ID
   *       (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon EFS file systems. The POSIX permissions that are set on
   *       files and directories in your file system determine the level of access your users get when
   *       transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique identifier that is required to identify specific groups within your directory.
   *     The users of the group that you associate have access to your Amazon S3 or Amazon EFS
   *     resources over the enabled protocols using Transfer Family. If you know the group name,
   *     you can view the SID values by running the following command using Windows PowerShell.</p>
   *          <p>
   *             <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code>
   *          </p>
   *          <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p>
   *          <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces.
   *     You can also include underscores or any of the following characters: =,.@:/-</p>
   */
  ExternalId: string | undefined;
}

export interface UpdateAccessResponse {
  /**
   * <p>The identifier of the server that the user is attached to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The external identifier of the group whose users have access to your Amazon S3 or Amazon
   *       EFS resources over the enabled protocols using Amazon Web ServicesTransfer Family.</p>
   */
  ExternalId: string | undefined;
}

export interface UpdateAgreementRequest {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   */
  AgreementId: string | undefined;

  /**
   * <p>A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>To replace the existing description, provide a short description for the agreement. </p>
   */
  Description?: string;

  /**
   * <p>You can update the status for the agreement, either activating an inactive agreement or
   *       the reverse.</p>
   */
  Status?: AgreementStatusType | string;

  /**
   * <p>A unique identifier for the AS2 local profile.</p>
   *          <p>To change the local profile identifier, provide a new value
   *       here.</p>
   */
  LocalProfileId?: string;

  /**
   * <p>A unique identifier for the partner profile.
   *       To change the partner profile identifier, provide a new value here.</p>
   */
  PartnerProfileId?: string;

  /**
   * <p>To change the landing directory (folder) for files that are transferred, provide the
   *       bucket folder that you want to use; for example,
   *           <code>/<i>DOC-EXAMPLE-BUCKET</i>/<i>home</i>/<i>mydirectory</i>
   *             </code>.</p>
   */
  BaseDirectory?: string;

  /**
   * <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *         <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *         <code>StartFileTransfer</code>.</p>
   */
  AccessRole?: string;
}

export interface UpdateAgreementResponse {
  /**
   * <p>A unique identifier for the agreement. This identifier is returned when you create an agreement.</p>
   */
  AgreementId: string | undefined;
}

export interface UpdateCertificateRequest {
  /**
   * <p>The identifier of the certificate object that you are updating.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>An optional date that specifies when the certificate becomes active.</p>
   */
  ActiveDate?: Date;

  /**
   * <p>An optional date that specifies when the certificate becomes inactive.</p>
   */
  InactiveDate?: Date;

  /**
   * <p>A short description to help identify the certificate.</p>
   */
  Description?: string;
}

export interface UpdateCertificateResponse {
  /**
   * <p>Returns the identifier of the certificate object that you are updating.</p>
   */
  CertificateId: string | undefined;
}

export interface UpdateConnectorRequest {
  /**
   * <p>The unique identifier for the connector.</p>
   */
  ConnectorId: string | undefined;

  /**
   * <p>The URL of the partner's AS2 endpoint.</p>
   */
  Url?: string;

  /**
   * <p>A structure that contains the parameters for a connector object.</p>
   */
  As2Config?: As2ConnectorConfig;

  /**
   * <p>With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the
   *       file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent
   *       directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent
   *       directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file,
   *       store the MDN when we receive them from the partner, and write a final JSON file containing
   *       relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read
   *       and write access to the parent directory of the file location used in the
   *         <code>StartFileTransfer</code> request. Additionally, you need to provide read and write
   *       access to the parent directory of the files that you intend to send with
   *         <code>StartFileTransfer</code>.</p>
   */
  AccessRole?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn
   *       on CloudWatch logging for Amazon S3 events. When set, you can view connector
   *       activity in your CloudWatch logs.</p>
   */
  LoggingRole?: string;
}

export interface UpdateConnectorResponse {
  /**
   * <p>Returns the identifier of the connector object that you are updating.</p>
   */
  ConnectorId: string | undefined;
}

export interface UpdateHostKeyRequest {
  /**
   * <p>The identifier of the server that contains the host key that you are updating.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The identifier of the host key that you are updating.</p>
   */
  HostKeyId: string | undefined;

  /**
   * <p>An updated description for the host key.</p>
   */
  Description: string | undefined;
}

export interface UpdateHostKeyResponse {
  /**
   * <p>Returns the server identifier for the server that contains the updated host key.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Returns the host key identifier for the updated host key.</p>
   */
  HostKeyId: string | undefined;
}

export interface UpdateProfileRequest {
  /**
   * <p>The identifier of the profile object that you are updating.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</p>
   */
  CertificateIds?: string[];
}

export interface UpdateProfileResponse {
  /**
   * <p>Returns the identifier for the profile that's being updated.</p>
   */
  ProfileId: string | undefined;
}

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
   */
  Certificate?: string;

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
   */
  ProtocolDetails?: ProtocolDetails;

  /**
   * <p>The virtual private cloud (VPC) endpoint settings that are configured for your server.
   *       When you host your endpoint within your VPC, you can make your endpoint accessible only to resources
   *       within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over
   *       the internet. Your VPC's default security groups are automatically assigned to your
   *       endpoint.</p>
   */
  EndpointDetails?: EndpointDetails;

  /**
   * <p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC)
   *       or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and
   *       resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p>
   *          <note>
   *             <p> After May 19, 2021, you won't be able to create a server using
   *           <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already
   *       done so before May 19, 2021. If you have already created servers with
   *       <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021,
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
   */
  EndpointType?: EndpointType | string;

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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Update host keys for your SFTP-enabled server</a> in the <i>Transfer Family User Guide</i>.</p>
   */
  HostKey?: string;

  /**
   * <p>An array containing all of the information required to call a customer's
   *       authentication API method.</p>
   */
  IdentityProviderDetails?: IdentityProviderDetails;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn
   *       on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in
   *       your CloudWatch logs.</p>
   */
  LoggingRole?: string;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p>
   *          <note>
   *             <p>The SFTP protocol does not support post-authentication display banners.</p>
   *          </note>
   */
  PostAuthenticationLoginBanner?: string;

  /**
   * <p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates.
   *     For example, the following banner displays details about using the system:</p>
   *          <p>
   *             <code>This system is for the use of authorized users only. Individuals using this computer system without authority,
   *     or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by
   *     system personnel.</code>
   *          </p>
   */
  PreAuthenticationLoginBanner?: string;

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
   *             <code>IdentityProviderType</code> must be <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>FTP</code>, then
   *           <code>AddressAllocationIds</code> cannot be associated.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code>
   *             can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set to
   *             <code>SERVICE_MANAGED</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If <code>Protocol</code> includes <code>AS2</code>, then the
   *               <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Protocols?: (Protocol | string)[];

  /**
   * <p>Specifies the name of the security policy that is attached to the server.</p>
   */
  SecurityPolicyName?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance that the user account is
   *       assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p>
   *          <p>In additon to a workflow to execute when a file is uploaded completely, <code>WorkflowDeatails</code> can also contain a
   *     workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when
   *     the session disconnects.</p>
   *          <p>To remove an associated workflow from a server, you can provide an empty <code>OnUpload</code> object, as in the following example.</p>
   *          <p>
   *             <code>aws transfer update-server --server-id s-01234567890abcdef --workflow-details '{"OnUpload":[]}'</code>
   *          </p>
   */
  WorkflowDetails?: WorkflowDetails;
}

export interface UpdateServerResponse {
  /**
   * <p>A system-assigned unique identifier for a server that the user account is assigned
   *       to.</p>
   */
  ServerId: string | undefined;
}

export interface UpdateUserRequest {
  /**
   * <p>The landing directory (folder) for a user when they log in to the server using the client.</p>
   *          <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
   *     If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer
   *     protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for
   *     how you want to make Amazon S3 or Amazon EFS paths visible to your users.</p>
   */
  HomeDirectoryType?: HomeDirectoryType | string;

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
   *             <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   *          <p>In most cases, you can use this value instead of the session policy to lock down your
   *       user to the designated home directory ("<code>chroot</code>"). To do this, you can set
   *         <code>Entry</code> to '/' and set <code>Target</code> to the HomeDirectory
   *       parameter value.</p>
   *          <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p>
   *          <p>
   *             <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code>
   *          </p>
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];

  /**
   * <p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's
   *      access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>,
   *      <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
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
   */
  Policy?: string;

  /**
   * <p>Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID
   *         (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls
   *       your users' access to your Amazon Elastic File Systems (Amazon EFS). The POSIX permissions
   *       that are set on files and directories in your file system determines the level of access your
   *       users get when transferring files into and out of your Amazon EFS file systems.</p>
   */
  PosixProfile?: PosixProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3
   *       bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users
   *       when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust
   *       relationship that allows the server to access your resources when servicing your users' transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A system-assigned unique identifier for a server instance that the user account is
   *       assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>A unique string that identifies a user and is associated with a server as specified by the
   *         <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters
   *       long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen
   *       '-', period '.', and at sign '@'. The user name can't start
   *       with a hyphen, period, or at sign.</p>
   */
  UserName: string | undefined;
}

/**
 * <p>
 *             <code>UpdateUserResponse</code> returns the user name and identifier for the request to
 *       update a user's properties.</p>
 */
export interface UpdateUserResponse {
  /**
   * <p>A system-assigned unique identifier for a server instance that the user account is
   *       assigned to.</p>
   */
  ServerId: string | undefined;

  /**
   * <p>The unique identifier for a user that is assigned to a server instance that was specified
   *       in the request.</p>
   */
  UserName: string | undefined;
}

/**
 * @internal
 */
export const As2ConnectorConfigFilterSensitiveLog = (obj: As2ConnectorConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EfsFileLocationFilterSensitiveLog = (obj: EfsFileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3InputFileLocationFilterSensitiveLog = (obj: S3InputFileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputFileLocationFilterSensitiveLog = (obj: InputFileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyStepDetailsFilterSensitiveLog = (obj: CopyStepDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HomeDirectoryMapEntryFilterSensitiveLog = (obj: HomeDirectoryMapEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PosixProfileFilterSensitiveLog = (obj: PosixProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessRequestFilterSensitiveLog = (obj: CreateAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessResponseFilterSensitiveLog = (obj: CreateAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAgreementRequestFilterSensitiveLog = (obj: CreateAgreementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAgreementResponseFilterSensitiveLog = (obj: CreateAgreementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorRequestFilterSensitiveLog = (obj: CreateConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorResponseFilterSensitiveLog = (obj: CreateConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProfileRequestFilterSensitiveLog = (obj: CreateProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProfileResponseFilterSensitiveLog = (obj: CreateProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointDetailsFilterSensitiveLog = (obj: EndpointDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityProviderDetailsFilterSensitiveLog = (obj: IdentityProviderDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtocolDetailsFilterSensitiveLog = (obj: ProtocolDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowDetailFilterSensitiveLog = (obj: WorkflowDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowDetailsFilterSensitiveLog = (obj: WorkflowDetails): any => ({
  ...obj,
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
export const CreateServerResponseFilterSensitiveLog = (obj: CreateServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomStepDetailsFilterSensitiveLog = (obj: CustomStepDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecryptStepDetailsFilterSensitiveLog = (obj: DecryptStepDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStepDetailsFilterSensitiveLog = (obj: DeleteStepDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3TagFilterSensitiveLog = (obj: S3Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagStepDetailsFilterSensitiveLog = (obj: TagStepDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowStepFilterSensitiveLog = (obj: WorkflowStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowRequestFilterSensitiveLog = (obj: CreateWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowResponseFilterSensitiveLog = (obj: CreateWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessRequestFilterSensitiveLog = (obj: DeleteAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAgreementRequestFilterSensitiveLog = (obj: DeleteAgreementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCertificateRequestFilterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorRequestFilterSensitiveLog = (obj: DeleteConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHostKeyRequestFilterSensitiveLog = (obj: DeleteHostKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProfileRequestFilterSensitiveLog = (obj: DeleteProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServerRequestFilterSensitiveLog = (obj: DeleteServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSshPublicKeyRequestFilterSensitiveLog = (obj: DeleteSshPublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkflowRequestFilterSensitiveLog = (obj: DeleteWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccessRequestFilterSensitiveLog = (obj: DescribeAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedAccessFilterSensitiveLog = (obj: DescribedAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccessResponseFilterSensitiveLog = (obj: DescribeAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgreementRequestFilterSensitiveLog = (obj: DescribeAgreementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedAgreementFilterSensitiveLog = (obj: DescribedAgreement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgreementResponseFilterSensitiveLog = (obj: DescribeAgreementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCertificateRequestFilterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
  ...obj,
});

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
export const DescribeConnectorRequestFilterSensitiveLog = (obj: DescribeConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedConnectorFilterSensitiveLog = (obj: DescribedConnector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorResponseFilterSensitiveLog = (obj: DescribeConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3FileLocationFilterSensitiveLog = (obj: S3FileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileLocationFilterSensitiveLog = (obj: FileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationFilterSensitiveLog = (obj: LoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionErrorFilterSensitiveLog = (obj: ExecutionError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionStepResultFilterSensitiveLog = (obj: ExecutionStepResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionResultsFilterSensitiveLog = (obj: ExecutionResults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDetailsFilterSensitiveLog = (obj: UserDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceMetadataFilterSensitiveLog = (obj: ServiceMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedExecutionFilterSensitiveLog = (obj: DescribedExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedHostKeyFilterSensitiveLog = (obj: DescribedHostKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedProfileFilterSensitiveLog = (obj: DescribedProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedSecurityPolicyFilterSensitiveLog = (obj: DescribedSecurityPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedServerFilterSensitiveLog = (obj: DescribedServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SshPublicKeyFilterSensitiveLog = (obj: SshPublicKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedUserFilterSensitiveLog = (obj: DescribedUser): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribedWorkflowFilterSensitiveLog = (obj: DescribedWorkflow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExecutionRequestFilterSensitiveLog = (obj: DescribeExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExecutionResponseFilterSensitiveLog = (obj: DescribeExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostKeyRequestFilterSensitiveLog = (obj: DescribeHostKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostKeyResponseFilterSensitiveLog = (obj: DescribeHostKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProfileRequestFilterSensitiveLog = (obj: DescribeProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProfileResponseFilterSensitiveLog = (obj: DescribeProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityPolicyRequestFilterSensitiveLog = (obj: DescribeSecurityPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityPolicyResponseFilterSensitiveLog = (obj: DescribeSecurityPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServerRequestFilterSensitiveLog = (obj: DescribeServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServerResponseFilterSensitiveLog = (obj: DescribeServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserRequestFilterSensitiveLog = (obj: DescribeUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkflowRequestFilterSensitiveLog = (obj: DescribeWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkflowResponseFilterSensitiveLog = (obj: DescribeWorkflowResponse): any => ({
  ...obj,
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
export const ImportCertificateResponseFilterSensitiveLog = (obj: ImportCertificateResponse): any => ({
  ...obj,
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
export const ImportHostKeyResponseFilterSensitiveLog = (obj: ImportHostKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSshPublicKeyRequestFilterSensitiveLog = (obj: ImportSshPublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSshPublicKeyResponseFilterSensitiveLog = (obj: ImportSshPublicKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessesRequestFilterSensitiveLog = (obj: ListAccessesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedAccessFilterSensitiveLog = (obj: ListedAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessesResponseFilterSensitiveLog = (obj: ListAccessesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAgreementsRequestFilterSensitiveLog = (obj: ListAgreementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedAgreementFilterSensitiveLog = (obj: ListedAgreement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAgreementsResponseFilterSensitiveLog = (obj: ListAgreementsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCertificatesRequestFilterSensitiveLog = (obj: ListCertificatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedCertificateFilterSensitiveLog = (obj: ListedCertificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCertificatesResponseFilterSensitiveLog = (obj: ListCertificatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorsRequestFilterSensitiveLog = (obj: ListConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedConnectorFilterSensitiveLog = (obj: ListedConnector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorsResponseFilterSensitiveLog = (obj: ListConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedExecutionFilterSensitiveLog = (obj: ListedExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedHostKeyFilterSensitiveLog = (obj: ListedHostKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedProfileFilterSensitiveLog = (obj: ListedProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedServerFilterSensitiveLog = (obj: ListedServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedUserFilterSensitiveLog = (obj: ListedUser): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedWorkflowFilterSensitiveLog = (obj: ListedWorkflow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutionsRequestFilterSensitiveLog = (obj: ListExecutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutionsResponseFilterSensitiveLog = (obj: ListExecutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHostKeysRequestFilterSensitiveLog = (obj: ListHostKeysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHostKeysResponseFilterSensitiveLog = (obj: ListHostKeysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProfilesRequestFilterSensitiveLog = (obj: ListProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProfilesResponseFilterSensitiveLog = (obj: ListProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityPoliciesRequestFilterSensitiveLog = (obj: ListSecurityPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityPoliciesResponseFilterSensitiveLog = (obj: ListSecurityPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServersRequestFilterSensitiveLog = (obj: ListServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServersResponseFilterSensitiveLog = (obj: ListServersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowsRequestFilterSensitiveLog = (obj: ListWorkflowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowsResponseFilterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendWorkflowStepStateRequestFilterSensitiveLog = (obj: SendWorkflowStepStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendWorkflowStepStateResponseFilterSensitiveLog = (obj: SendWorkflowStepStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFileTransferRequestFilterSensitiveLog = (obj: StartFileTransferRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFileTransferResponseFilterSensitiveLog = (obj: StartFileTransferResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartServerRequestFilterSensitiveLog = (obj: StartServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopServerRequestFilterSensitiveLog = (obj: StopServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
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
export const TestIdentityProviderResponseFilterSensitiveLog = (obj: TestIdentityProviderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccessRequestFilterSensitiveLog = (obj: UpdateAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccessResponseFilterSensitiveLog = (obj: UpdateAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAgreementRequestFilterSensitiveLog = (obj: UpdateAgreementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAgreementResponseFilterSensitiveLog = (obj: UpdateAgreementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCertificateRequestFilterSensitiveLog = (obj: UpdateCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCertificateResponseFilterSensitiveLog = (obj: UpdateCertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorRequestFilterSensitiveLog = (obj: UpdateConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorResponseFilterSensitiveLog = (obj: UpdateConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHostKeyRequestFilterSensitiveLog = (obj: UpdateHostKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHostKeyResponseFilterSensitiveLog = (obj: UpdateHostKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProfileRequestFilterSensitiveLog = (obj: UpdateProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProfileResponseFilterSensitiveLog = (obj: UpdateProfileResponse): any => ({
  ...obj,
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
export const UpdateServerResponseFilterSensitiveLog = (obj: UpdateServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserResponseFilterSensitiveLog = (obj: UpdateUserResponse): any => ({
  ...obj,
});
