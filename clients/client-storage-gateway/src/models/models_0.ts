// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { StorageGatewayServiceException as __BaseException } from "./StorageGatewayServiceException";

/**
 * <p>A key-value pair that helps you manage, filter, and search for your resource. Allowed
 *          characters: letters, white space, and numbers, representable in UTF-8, and the following
 *          characters: + - = . _ : /.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Tag key. The key can't start with aws:.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$ActivationKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$GatewayName</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$GatewayRegion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$GatewayTimezone</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$GatewayType</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$MediumChangerType</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$TapeDriveType</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ActivateGatewayInput {
  /**
   * <p>Your gateway activation key. You can obtain the activation key by sending an HTTP GET
   *          request with redirects enabled to the gateway IP address (port 80). The redirect URL
   *          returned in the response provides you the activation key for your gateway in the query
   *          string parameter <code>activationKey</code>. It may also include other activation-related
   *          parameters, however, these are merely defaults -- the arguments you pass to the
   *             <code>ActivateGateway</code> API call determine the actual configuration of your
   *          gateway.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html">Getting activation
   *             key</a> in the <i>Storage Gateway User Guide</i>.</p>
   * @public
   */
  ActivationKey: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   * @public
   */
  GatewayName: string | undefined;

  /**
   * <p>A value that indicates the time zone you want to set for the gateway. The time zone is
   *          of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, GMT indicates Greenwich Mean
   *          Time without any offset. GMT-4:00 indicates the time is 4 hours behind GMT. GMT+2:00
   *          indicates the time is 2 hours ahead of GMT. The time zone is used, for example, for
   *          scheduling snapshots and your gateway's maintenance schedule.</p>
   * @public
   */
  GatewayTimezone: string | undefined;

  /**
   * <p>A value that indicates the Amazon Web Services Region where you want to store your data.
   *          The gateway Amazon Web Services Region specified must be the same Amazon Web Services Region
   *          as the Amazon Web Services Region in your <code>Host</code> header in the request. For more
   *          information about available Amazon Web Services Regions and endpoints for Storage Gateway, see <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">
   *             Storage Gateway endpoints and quotas</a> in the <i>Amazon Web Services
   *             General Reference</i>.</p>
   *          <p>Valid Values: See <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">
   *             Storage Gateway endpoints and quotas</a> in the <i>Amazon Web Services
   *             General Reference</i>.
   *
   *       </p>
   * @public
   */
  GatewayRegion: string | undefined;

  /**
   * <p>A value that defines the type of gateway to activate. The type specified is critical to
   *          all later functions of the gateway and cannot be changed after activation. The default
   *          value is <code>CACHED</code>.</p>
   *          <important>
   *             <p>Amazon FSx File Gateway is no longer available to new customers. Existing
   *             customers of FSx File Gateway can continue to use the service normally. For
   *             capabilities similar to FSx File Gateway, visit <a href="https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/">this blog post</a>.</p>
   *          </important>
   *          <p>Valid Values: <code>STORED</code> | <code>CACHED</code> | <code>VTL</code>
   *          | <code>FILE_S3</code> |
   *          <code>FILE_FSX_SMB</code>
   *          </p>
   * @public
   */
  GatewayType?: string | undefined;

  /**
   * <p>The value that indicates the type of tape drive to use for tape gateway. This field is
   *          optional.</p>
   *          <p>Valid Values: <code>IBM-ULT3580-TD5</code>
   *          </p>
   * @public
   */
  TapeDriveType?: string | undefined;

  /**
   * <p>The value that indicates the type of medium changer to use for tape gateway. This field
   *          is optional.</p>
   *          <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> |
   *             <code>IBM-03584L32-0402</code>
   *          </p>
   * @public
   */
  MediumChangerType?: string | undefined;

  /**
   * <p>A list of up to 50 tags that you can assign to the gateway. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers that can be
   *             represented in UTF-8 format, and the following special characters: + - = . _ : / @. The
   *             maximum length of a tag's key is 128 characters, and the maximum length for a
   *             tag's value is 256 characters.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It
 *          is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as
 *          well as resource-based authorization.</p>
 *          <note>
 *             <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the
 *             gateway name rather than the gateway ID. Changing the name of the gateway has no effect
 *             on the gateway ARN.</p>
 *          </note>
 * @public
 */
export interface ActivateGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ActivationKeyExpired: "ActivationKeyExpired",
  ActivationKeyInvalid: "ActivationKeyInvalid",
  ActivationKeyNotFound: "ActivationKeyNotFound",
  AuthenticationFailure: "AuthenticationFailure",
  BandwidthThrottleScheduleNotFound: "BandwidthThrottleScheduleNotFound",
  Blocked: "Blocked",
  CannotExportSnapshot: "CannotExportSnapshot",
  ChapCredentialNotFound: "ChapCredentialNotFound",
  DiskAlreadyAllocated: "DiskAlreadyAllocated",
  DiskDoesNotExist: "DiskDoesNotExist",
  DiskSizeGreaterThanVolumeMaxSize: "DiskSizeGreaterThanVolumeMaxSize",
  DiskSizeLessThanVolumeSize: "DiskSizeLessThanVolumeSize",
  DiskSizeNotGigAligned: "DiskSizeNotGigAligned",
  DuplicateCertificateInfo: "DuplicateCertificateInfo",
  DuplicateSchedule: "DuplicateSchedule",
  EndpointNotFound: "EndpointNotFound",
  GatewayInternalError: "GatewayInternalError",
  GatewayNotConnected: "GatewayNotConnected",
  GatewayNotFound: "GatewayNotFound",
  GatewayProxyNetworkConnectionBusy: "GatewayProxyNetworkConnectionBusy",
  IAMNotSupported: "IAMNotSupported",
  InitiatorInvalid: "InitiatorInvalid",
  InitiatorNotFound: "InitiatorNotFound",
  InternalError: "InternalError",
  InvalidEndpoint: "InvalidEndpoint",
  InvalidGateway: "InvalidGateway",
  InvalidParameters: "InvalidParameters",
  InvalidSchedule: "InvalidSchedule",
  JoinDomainInProgress: "JoinDomainInProgress",
  LocalStorageLimitExceeded: "LocalStorageLimitExceeded",
  LunAlreadyAllocated_: "LunAlreadyAllocated ",
  LunInvalid: "LunInvalid",
  MaximumContentLengthExceeded: "MaximumContentLengthExceeded",
  MaximumTapeCartridgeCountExceeded: "MaximumTapeCartridgeCountExceeded",
  MaximumVolumeCountExceeded: "MaximumVolumeCountExceeded",
  NetworkConfigurationChanged: "NetworkConfigurationChanged",
  NoDisksAvailable: "NoDisksAvailable",
  NotImplemented: "NotImplemented",
  NotSupported: "NotSupported",
  OperationAborted: "OperationAborted",
  OutdatedGateway: "OutdatedGateway",
  ParametersNotImplemented: "ParametersNotImplemented",
  RegionInvalid: "RegionInvalid",
  RequestTimeout: "RequestTimeout",
  ServiceUnavailable: "ServiceUnavailable",
  SnapshotDeleted: "SnapshotDeleted",
  SnapshotIdInvalid: "SnapshotIdInvalid",
  SnapshotInProgress: "SnapshotInProgress",
  SnapshotNotFound: "SnapshotNotFound",
  SnapshotScheduleNotFound: "SnapshotScheduleNotFound",
  StagingAreaFull: "StagingAreaFull",
  StorageFailure: "StorageFailure",
  TapeCartridgeNotFound: "TapeCartridgeNotFound",
  TargetAlreadyExists: "TargetAlreadyExists",
  TargetInvalid: "TargetInvalid",
  TargetNotFound: "TargetNotFound",
  UnauthorizedOperation: "UnauthorizedOperation",
  VolumeAlreadyExists: "VolumeAlreadyExists",
  VolumeIdInvalid: "VolumeIdInvalid",
  VolumeInUse: "VolumeInUse",
  VolumeNotFound: "VolumeNotFound",
  VolumeNotReady: "VolumeNotReady",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>Provides additional information about an error that was returned by the service. See the
 *             <code>errorCode</code> and <code>errorDetails</code> members for more information about
 *          the error.</p>
 * @public
 */
export interface StorageGatewayError {
  /**
   * <p>Additional information about the error.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * <p>Human-readable text that provides detail about the error that occurred.</p>
   * @public
   */
  errorDetails?: Record<string, string> | undefined;
}

/**
 * <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   * @public
   */
  error?: StorageGatewayError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.error = opts.error;
  }
}

/**
 * <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 * @public
 */
export class InvalidGatewayRequestException extends __BaseException {
  readonly name: "InvalidGatewayRequestException" = "InvalidGatewayRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>A <a>StorageGatewayError</a> that provides more detail about the cause of the
   *          error.</p>
   * @public
   */
  error?: StorageGatewayError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGatewayRequestException, __BaseException>) {
    super({
      name: "InvalidGatewayRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGatewayRequestException.prototype);
    this.error = opts.error;
  }
}

/**
 * @public
 * @enum
 */
export const ActiveDirectoryStatus = {
  ACCESS_DENIED: "ACCESS_DENIED",
  DETACHED: "DETACHED",
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
  JOINED: "JOINED",
  JOINING: "JOINING",
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT: "TIMEOUT",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

/**
 * @public
 */
export type ActiveDirectoryStatus = (typeof ActiveDirectoryStatus)[keyof typeof ActiveDirectoryStatus];

/**
 * @public
 */
export interface AddCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   * @public
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>AddTagsToResourceInput</p>
 * @public
 */
export interface AddTagsToResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key-value pair that represents the tag you want to add to the resource. The value
   *          can be an empty string.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>AddTagsToResourceOutput</p>
 * @public
 */
export interface AddTagsToResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface AddUploadBufferInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   * @public
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddUploadBufferOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddWorkingStorageInput$DiskIds</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AddWorkingStorageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   * @public
   */
  DiskIds: string[] | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working
 *          storage was configured.</p>
 * @public
 */
export interface AddWorkingStorageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface AssignTapePoolInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the
   *          tape pool.</p>
   * @public
   */
  TapeARN: string | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>Set permissions to bypass governance retention. If the lock type of the archived tape is
   *             <code>Governance</code>, the tape's archived age is not older than
   *             <code>RetentionLockInDays</code>, and the user does not already have
   *             <code>BypassGovernanceRetention</code>, setting this to TRUE enables the user to bypass
   *          the retention lock. This parameter is set to true by default for calls from the
   *          console.</p>
   *          <p>Valid values: <code>TRUE</code> | <code>FALSE</code>
   *          </p>
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;
}

/**
 * @public
 */
export interface AssignTapePoolOutput {
  /**
   * <p>The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape
   *          pool.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * <p>The refresh cache information for the file share or FSx file systems.</p>
 * @public
 */
export interface CacheAttributes {
  /**
   * <p>Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of
   *          time since the last refresh after which access to the directory would cause the file
   *          gateway to first refresh that directory's contents from the Amazon S3 bucket
   *          or Amazon FSx file system. The TTL duration is in seconds.</p>
   *          <p>Valid Values:0, 300 to 2,592,000 seconds (5 minutes to 30 days)</p>
   * @public
   */
  CacheStaleTimeoutInSeconds?: number | undefined;
}

/**
 * <p>Specifies network configuration information for the gateway associated with the Amazon FSx file system.</p>
 * @public
 */
export interface EndpointNetworkConfiguration {
  /**
   * <p>A list of gateway IP addresses on which the associated Amazon FSx file system is
   *          available.</p>
   *          <note>
   *             <p>If multiple file systems are associated with this gateway, this field is
   *             required.</p>
   *          </note>
   * @public
   */
  IpAddresses?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateFileSystemInput {
  /**
   * <p>The user name of the user credential that has permission to access the root share D$ of
   *          the Amazon FSx file system. The user account must belong to the Amazon FSx
   *          delegated admin user group.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The password of the user credential.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>A unique string value that you supply that is used by the FSx File Gateway to ensure
   *          idempotent file system association creation.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with
   *          the FSx File Gateway.</p>
   * @public
   */
  LocationARN: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to the file system association. Each tag is
   *          a key-value pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * <p>The refresh cache information for the file share or FSx file systems.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>Specifies the network configuration information for the gateway associated with the
   *             Amazon FSx file system.</p>
   *          <note>
   *             <p>If multiple file systems are associated with this gateway, this parameter's
   *                <code>IpAddresses</code> field is required.</p>
   *          </note>
   * @public
   */
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociateFileSystemOutput {
  /**
   * <p>The ARN of the newly created file system association.</p>
   * @public
   */
  FileSystemAssociationARN?: string | undefined;
}

/**
 * <p>AttachVolumeInput</p>
 * @public
 */
export interface AttachVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that you want to attach the volume
   *          to.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   * @public
   */
  TargetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.</p>
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4
   *          and IPv6 addresses. Use <a>DescribeGatewayInformation</a> to get a list of the
   *          network interfaces available on a gateway.</p>
   *          <p>Valid Values: A valid IP address.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The unique device ID or other distinguishing data that identifies the local disk used to
   *          create the volume. This value is only required when you are attaching a stored
   *          volume.</p>
   * @public
   */
  DiskId?: string | undefined;
}

/**
 * <p>AttachVolumeOutput</p>
 * @public
 */
export interface AttachVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was attached to the gateway.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for
   *          the initiator that was used to connect to the target.</p>
   * @public
   */
  TargetARN?: string | undefined;
}

/**
 * <p>An automatic tape creation policy consists of automatic tape creation rules where each
 *          rule defines when and how to create new tapes. For more information about automatic tape
 *          creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.</p>
 * @public
 */
export interface AutomaticTapeCreationRule {
  /**
   * <p>A prefix that you append to the barcode of the virtual tape that you are creating. This
   *          prefix makes the barcode unique.</p>
   *          <note>
   *             <p>The prefix must be 1-4 characters in length and must be one of the uppercase letters
   *             from A to Z.</p>
   *          </note>
   * @public
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the Amazon S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into
   *          the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the
   *          pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   * @public
   */
  TapeSizeInBytes: number | undefined;

  /**
   * <p>The minimum number of available virtual tapes that the gateway maintains at all times.
   *          If the number of tapes on the gateway goes below this value, the gateway creates as many
   *          new tapes as are needed to have <code>MinimumNumTapes</code> on the gateway. For more
   *          information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.</p>
   * @public
   */
  MinimumNumTapes: number | undefined;

  /**
   * <p>Set to <code>true</code> to indicate that tapes are to be archived as
   *          write-once-read-many (WORM). Set to <code>false</code> when WORM is not enabled for
   *          tapes.</p>
   * @public
   */
  Worm?: boolean | undefined;
}

/**
 * <p>Information about the gateway's automatic tape creation policies, including the
 *          automatic tape creation rules and the gateway that is using the policies.</p>
 * @public
 */
export interface AutomaticTapeCreationPolicyInfo {
  /**
   * <p>An automatic tape creation policy consists of a list of automatic tape creation rules.
   *          This returns the rules that determine when and how to automatically create new
   *          tapes.</p>
   * @public
   */
  AutomaticTapeCreationRules?: AutomaticTapeCreationRule[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomaticUpdatePolicy = {
  ALL_VERSIONS: "ALL_VERSIONS",
  EMERGENCY_VERSIONS_ONLY: "EMERGENCY_VERSIONS_ONLY",
} as const;

/**
 * @public
 */
export type AutomaticUpdatePolicy = (typeof AutomaticUpdatePolicy)[keyof typeof AutomaticUpdatePolicy];

/**
 * @public
 * @enum
 */
export const AvailabilityMonitorTestStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type AvailabilityMonitorTestStatus =
  (typeof AvailabilityMonitorTestStatus)[keyof typeof AvailabilityMonitorTestStatus];

/**
 * <p>Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule
 *          consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval
 *          defines a period of time on one or more days of the week, during which bandwidth rate
 *          limits are specified for uploading, downloading, or both.</p>
 *          <note>
 *             <p>FSx File Gateway does not support this feature.</p>
 *          </note>
 * @public
 */
export interface BandwidthRateLimitInterval {
  /**
   * <p> The hour of the day to start the bandwidth rate limit interval. </p>
   * @public
   */
  StartHourOfDay: number | undefined;

  /**
   * <p> The minute of the hour to start the bandwidth rate limit interval. The interval begins
   *          at the start of that minute. To begin an interval exactly at the start of the hour, use the
   *          value <code>0</code>. </p>
   * @public
   */
  StartMinuteOfHour: number | undefined;

  /**
   * <p> The hour of the day to end the bandwidth rate limit interval. </p>
   * @public
   */
  EndHourOfDay: number | undefined;

  /**
   * <p> The minute of the hour to end the bandwidth rate limit interval. </p>
   *          <important>
   *             <p> The bandwidth rate limit interval ends at the end of the minute. To end an interval
   *             at the end of an hour, use the value <code>59</code>. </p>
   *          </important>
   * @public
   */
  EndMinuteOfHour: number | undefined;

  /**
   * <p> The days of the week component of the bandwidth rate limit interval, represented as
   *          ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday. </p>
   * @public
   */
  DaysOfWeek: number[] | undefined;

  /**
   * <p> The average upload rate limit component of the bandwidth rate limit interval, in bits
   *          per second. This field does not appear in the response if the upload rate limit is not set. </p>
   *          <note>
   *             <p>For Tape Gateway and Volume Gateway, the minimum value is <code>51200</code>.</p>
   *             <p>This field is required for S3 File Gateway, and the minimum value is
   *                <code>104857600</code>.</p>
   *          </note>
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * <p> The average download rate limit component of the bandwidth rate limit interval, in bits
   *          per second. This field does not appear in the response if the download rate limit is not
   *          set. </p>
   *          <note>
   *             <p>S3 File Gateway does not support this feature.</p>
   *          </note>
   * @public
   */
  AverageDownloadRateLimitInBitsPerSec?: number | undefined;
}

/**
 * <p>Lists iSCSI information about a volume.</p>
 * @public
 */
export interface VolumeiSCSIAttributes {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * <p>The network interface identifier.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The port used to communicate with iSCSI targets.</p>
   * @public
   */
  NetworkInterfacePort?: number | undefined;

  /**
   * <p>The logical disk number.</p>
   * @public
   */
  LunNumber?: number | undefined;

  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   * @public
   */
  ChapEnabled?: boolean | undefined;
}

/**
 * <p>Describes an iSCSI cached volume.</p>
 * @public
 */
export interface CachediSCSIVolume {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The unique identifier of the volume, e.g., vol-AE4B946D.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>One of the VolumeType enumeration values that describes the type of the volume.</p>
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   * @public
   */
  VolumeStatus?: string | undefined;

  /**
   * <p>A value that indicates whether a storage volume is attached to or detached from a
   *          gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving
   *             your volumes to a different gateway</a>.</p>
   * @public
   */
  VolumeAttachmentStatus?: string | undefined;

  /**
   * <p>The size, in bytes, of the volume capacity.</p>
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the cached volume is not restoring or bootstrapping.</p>
   * @public
   */
  VolumeProgress?: number | undefined;

  /**
   * <p>If the cached volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g., snap-78e22663. Otherwise, this field is not included.</p>
   * @public
   */
  SourceSnapshotId?: string | undefined;

  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *          attributes for one stored volume.</p>
   * @public
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes | undefined;

  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   *          timestamp.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The size of the data stored on the volume in bytes. This value is calculated based on
   *          the number of blocks that are touched, instead of the actual amount of data written. This
   *          value can be useful for sequential write patterns but less accurate for random write
   *          patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the
   *          volume, which is the value that is used to calculate your bill.</p>
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *             <p>If you use a delete tool that overwrites the data on your volume with random data,
   *             your usage will not be reduced. This is because the random data is not compressible. If
   *             you want to reduce the amount of billed storage on your volume, we recommend overwriting
   *             your files with zeros to compress the data to a negligible amount of actual
   *             storage.</p>
   *          </note>
   * @public
   */
  VolumeUsedInBytes?: number | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   * @public
   */
  TargetName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheReportFilterName = {
  UploadFailureReason: "UploadFailureReason",
  UploadState: "UploadState",
} as const;

/**
 * @public
 */
export type CacheReportFilterName = (typeof CacheReportFilterName)[keyof typeof CacheReportFilterName];

/**
 * <p>A list of filter parameters and associated values that determine which files are
 *          included or excluded from a cache report created by a <code>StartCacheReport</code>
 *          request. Multiple instances of the same filter parameter are combined with an OR operation,
 *          while different parameters are combined with an AND operation.</p>
 * @public
 */
export interface CacheReportFilter {
  /**
   * <p>The parameter name for a filter that determines which files are included or excluded
   *          from a cache report.</p>
   *          <p>
   *             <b>Valid Names:</b>
   *          </p>
   *          <p>UploadFailureReason | UploadState</p>
   * @public
   */
  Name: CacheReportFilterName | undefined;

  /**
   * <p>The parameter value for a filter that determines which files are included or excluded
   *          from a cache report.</p>
   *          <p>
   *             <b>Valid <code>UploadFailureReason</code> Values:</b>
   *          </p>
   *          <p>
   *             <code>InaccessibleStorageClass</code> | <code>InvalidObjectState</code> |
   *             <code>ObjectMissing</code> | <code>S3AccessDenied</code>
   *          </p>
   *          <p>
   *             <b>Valid <code>UploadState</code> Values:</b>
   *          </p>
   *          <p>
   *             <code>FailingUpload</code>
   *          </p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheReportStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type CacheReportStatus = (typeof CacheReportStatus)[keyof typeof CacheReportStatus];

/**
 * <p>Contains all informational fields associated with a cache report. Includes name, ARN,
 *          tags, status, progress, filters, start time, and end time.</p>
 * @public
 */
export interface CacheReportInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report you want to describe.</p>
   * @public
   */
  CacheReportARN?: string | undefined;

  /**
   * <p>The status of the specified cache report.</p>
   * @public
   */
  CacheReportStatus?: CacheReportStatus | undefined;

  /**
   * <p>The percentage of the report generation process that has been completed at time of
   *          inquiry.</p>
   * @public
   */
  ReportCompletionPercent?: number | undefined;

  /**
   * <p>The time at which the gateway stopped generating the cache report.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying
   *          storage.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * <p>The ARN of the Amazon S3 bucket location where the cache report is saved.</p>
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * <p>The time at which the gateway started generating the cache report.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The list of filters and parameters that determine which files are included in the
   *          report.</p>
   * @public
   */
  InclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * <p>The list of filters and parameters that determine which files are excluded from the
   *          report.</p>
   * @public
   */
  ExclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * <p>The file name of the completed cache report object stored in Amazon S3.</p>
   * @public
   */
  ReportName?: string | undefined;

  /**
   * <p>The list of key/value tags associated with the report.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>CancelArchivalInput</p>
 * @public
 */
export interface CancelArchivalInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving
   *          for.</p>
   * @public
   */
  TapeARN: string | undefined;
}

/**
 * <p>CancelArchivalOutput</p>
 * @public
 */
export interface CancelArchivalOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which archiving was
   *          canceled.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 */
export interface CancelCacheReportInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report you want to cancel.</p>
   * @public
   */
  CacheReportARN: string | undefined;
}

/**
 * @public
 */
export interface CancelCacheReportOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report you want to cancel.</p>
   * @public
   */
  CacheReportARN?: string | undefined;
}

/**
 * <p>CancelRetrievalInput</p>
 * @public
 */
export interface CancelRetrievalInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval
   *          for.</p>
   * @public
   */
  TapeARN: string | undefined;
}

/**
 * <p>CancelRetrievalOutput</p>
 * @public
 */
export interface CancelRetrievalOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which retrieval was
   *          canceled.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CaseSensitivity = {
  CaseSensitive: "CaseSensitive",
  ClientSpecified: "ClientSpecified",
} as const;

/**
 * @public
 */
export type CaseSensitivity = (typeof CaseSensitivity)[keyof typeof CaseSensitivity];

/**
 * <p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports
 *          authentication between your gateway and iSCSI initiators.</p>
 * @public
 */
export interface ChapInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume.</p>
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   * @public
   */
  SecretToAuthenticateInitiator?: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   * @public
   */
  InitiatorName?: string | undefined;

  /**
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g., Windows client).</p>
   * @public
   */
  SecretToAuthenticateTarget?: string | undefined;
}

/**
 * @public
 */
export interface CreateCachediSCSIVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   * @public
   */
  VolumeSizeInBytes: number | undefined;

  /**
   * <p>The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot;
   *          otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   * @public
   */
  TargetName: string | undefined;

  /**
   * <p>The ARN for an existing volume. Specifying this ARN makes the new volume into an exact
   *          copy of the specified existing volume's latest recovery point. The
   *             <code>VolumeSizeInBytes</code> value for this new volume must be equal to or larger than
   *          the size of the existing volume, in bytes.</p>
   * @public
   */
  SourceVolumeARN?: string | undefined;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4
   *          and IPv6 addresses. Use <a>DescribeGatewayInformation</a> to get a list of the
   *          network interfaces available on a gateway.</p>
   *          <p>Valid Values: A valid IP address.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>A list of up to 50 tags that you can assign to a cached volume. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers that you can
   *             represent in UTF-8 format, and the following special characters: + - = . _ : / @. The
   *             maximum length of a tag's key is 128 characters, and the maximum length for a
   *             tag's value is 256 characters.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCachediSCSIVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   *          initiators can use to connect to the target.</p>
   * @public
   */
  TargetARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  DsseKms: "DsseKms",
  SseKms: "SseKms",
  SseS3: "SseS3",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>Describes Network File System (NFS) file share default values. Files and folders stored
 *          as Amazon S3 objects in S3 buckets don't, by default, have Unix file
 *          permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3
 *          objects that represent files and folders are assigned these default Unix permissions. This
 *          operation is only supported for S3 File Gateways.</p>
 * @public
 */
export interface NFSFileShareDefaults {
  /**
   * <p>The Unix file mode in the form "nnnn". For example, <code>0666</code> represents the
   *          default file mode inside the file share. The default value is <code>0666</code>.</p>
   * @public
   */
  FileMode?: string | undefined;

  /**
   * <p>The Unix directory mode in the form "nnnn". For example, <code>0666</code> represents
   *          the default access mode for all directories inside the file share. The default value is
   *             <code>0777</code>.</p>
   * @public
   */
  DirectoryMode?: string | undefined;

  /**
   * <p>The default group ID for the file share (unless the files have another group ID
   *          specified). The default value is <code>nfsnobody</code>.</p>
   * @public
   */
  GroupId?: number | undefined;

  /**
   * <p>The default owner ID for files in the file share (unless the files have another owner ID
   *          specified). The default value is <code>nfsnobody</code>.</p>
   * @public
   */
  OwnerId?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ObjectACL = {
  authenticated_read: "authenticated-read",
  aws_exec_read: "aws-exec-read",
  bucket_owner_full_control: "bucket-owner-full-control",
  bucket_owner_read: "bucket-owner-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;

/**
 * @public
 */
export type ObjectACL = (typeof ObjectACL)[keyof typeof ObjectACL];

/**
 * <p>CreateNFSFileShareInput</p>
 * @public
 */
export interface CreateNFSFileShareInput {
  /**
   * <p>A unique string value that you supply that is used by S3 File Gateway to ensure
   *          idempotent file share creation.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>File share default values. Optional.</p>
   * @public
   */
  NFSFileShareDefaults?: NFSFileShareDefaults | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file
   *          share.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>A value that specifies the type of server-side encryption that the file share will use
   *          for the data that it stores in Amazon S3.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>Optional. Set to <code>true</code> to use Amazon S3 server-side encryption with
   *          your own KMS key (SSE-KMS), or <code>false</code> to use a key managed by
   *             Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the
   *             <code>EncryptionType</code> parameter instead.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it
   *          accesses the underlying storage.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::amzn-s3-demo-bucket/prefix/</code>
   *             </p>
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   * @public
   */
  LocationARN: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * <p>The list of clients that are allowed to access the S3 File Gateway. The list must
   *          contain either valid IPv4/IPv6 addresses or valid CIDR blocks.</p>
   * @public
   */
  ClientList?: string[] | undefined;

  /**
   * <p>A value that maps a user to anonymous user.</p>
   *          <p>Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RootSquash</code>: Only root is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoSquash</code>: No one is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllSquash</code>: Everyone is mapped to anonymous user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Squash?: string | undefined;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a
   *          key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the file share. Optional.</p>
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *             <p>A valid NFS file share name can only contain the following characters:
   *                <code>a</code>-<code>z</code>, <code>A</code>-<code>Z</code>,
   *                <code>0</code>-<code>9</code>, <code>-</code>, <code>.</code>, and
   *             <code>_</code>.</p>
   *          </note>
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * <p>Specifies refresh cache information for the file share.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *             <p>This setting is not meant to specify an exact time at which the notification will be
   *             sent. In some cases, the gateway might require more than the specified delay time to
   *             generate and send notifications.</p>
   *          </note>
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * <p>Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * <p>Specifies the Region of the S3 bucket where the NFS file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;
}

/**
 * <p>CreateNFSFileShareOutput</p>
 * @public
 */
export interface CreateNFSFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * <p>CreateSMBFileShareInput</p>
 * @public
 */
export interface CreateSMBFileShareInput {
  /**
   * <p>A unique string value that you supply that is used by S3 File Gateway to ensure
   *          idempotent file share creation.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>The ARN of the S3 File Gateway on which you want to create a file share.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>A value that specifies the type of server-side encryption that the file share will use
   *          for the data that it stores in Amazon S3.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>Optional. Set to <code>true</code> to use Amazon S3 server-side encryption with
   *          your own KMS key (SSE-KMS), or <code>false</code> to use a key managed by
   *             Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the
   *             <code>EncryptionType</code> parameter instead.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it
   *          accesses the underlying storage.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::amzn-s3-demo-bucket/prefix/</code>
   *             </p>
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   * @public
   */
  LocationARN: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file
   *          share. Set it to <code>false</code> to map file and directory permissions to the POSIX
   *          permissions.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/smb-acl.html">Using Windows ACLs to limit SMB file share
   *             access</a> in the <i>Amazon S3 File Gateway User
   *          Guide</i>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  SMBACLEnabled?: boolean | undefined;

  /**
   * <p>The files and folders on this share will only be visible to users with read
   *          access.</p>
   * @public
   */
  AccessBasedEnumeration?: boolean | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that will be granted administrator
   *          privileges on the file share. These users can do all file operations as the super-user.
   *          Acceptable formats include: <code>DOMAIN\User1</code>, <code>user1</code>,
   *             <code>@group1</code>, and <code>@DOMAIN\group1</code>.</p>
   *          <important>
   *             <p>Use this option very carefully, because any user in this list can do anything they
   *             like on the file share, regardless of file permissions.</p>
   *          </important>
   * @public
   */
  AdminUserList?: string[] | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *             <a href=""></a> share. A group must be prefixed with the @ character. Acceptable formats
   *          include: <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  ValidUserList?: string[] | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  InvalidUserList?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * <p>The authentication method that users use to access the file share. The default is
   *             <code>ActiveDirectory</code>.</p>
   *          <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code>
   *          </p>
   * @public
   */
  Authentication?: string | undefined;

  /**
   * <p>The case of an object name in an Amazon S3 bucket. For
   *             <code>ClientSpecified</code>, the client determines the case sensitivity. For
   *             <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default
   *          value is <code>ClientSpecified</code>.</p>
   * @public
   */
  CaseSensitivity?: CaseSensitivity | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a
   *          key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the file share. Optional.</p>
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *             <p>A valid SMB file share name cannot contain the following characters:
   *                <code>[</code>,<code>]</code>,<code>#</code>,<code>;</code>,<code><</code>,<code>></code>,<code>:</code>,<code>"</code>,<code>\</code>,<code>/</code>,<code>|</code>,<code>?</code>,<code>*</code>,<code>+</code>,
   *             or ASCII control characters <code>1-31</code>.</p>
   *          </note>
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * <p>Specifies refresh cache information for the file share.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *             <p>This setting is not meant to specify an exact time at which the notification will be
   *             sent. In some cases, the gateway might require more than the specified delay time to
   *             generate and send notifications.</p>
   *          </note>
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * <p>Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * <p>Specifies the Region of the S3 bucket where the SMB file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * <p>Specifies whether opportunistic locking is enabled for the SMB file share.</p>
   *          <note>
   *             <p>Enabling opportunistic locking on case-sensitive shares is not recommended for
   *             workloads that involve access to files with the same name in different case.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  OplocksEnabled?: boolean | undefined;
}

/**
 * <p>CreateSMBFileShareOutput</p>
 * @public
 */
export interface CreateSMBFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateSnapshotInput$SnapshotDescription</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSnapshotInput$VolumeARN</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CreateSnapshotInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field.</p>
   * @public
   */
  SnapshotDescription: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface CreateSnapshotOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The snapshot ID that is used to refer to the snapshot in future operations such as
   *          describing snapshots (Amazon Elastic Compute Cloud API <code>DescribeSnapshots</code>) or
   *          creating a volume from a snapshot (<a>CreateStorediSCSIVolume</a>).</p>
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * <p>An internal server error has occurred because the service is unavailable. For more
 *          information, see the error and message fields.</p>
 * @public
 */
export class ServiceUnavailableError extends __BaseException {
  readonly name: "ServiceUnavailableError" = "ServiceUnavailableError";
  readonly $fault: "server" = "server";
  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   * @public
   */
  error?: StorageGatewayError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableError, __BaseException>) {
    super({
      name: "ServiceUnavailableError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    this.error = opts.error;
  }
}

/**
 * @public
 */
export interface CreateSnapshotFromVolumeRecoveryPointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field.</p>
   * @public
   */
  SnapshotDescription: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The time the volume was created from the recovery point.</p>
   * @public
   */
  VolumeRecoveryPointTime?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStorediSCSIVolumeInput$DiskId</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateStorediSCSIVolumeInput$SnapshotId</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateStorediSCSIVolumeInput$TargetName</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CreateStorediSCSIVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The unique identifier for the gateway local disk that is configured as a stored volume.
   *          Use <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html">ListLocalDisks</a> to
   *          list disk IDs for a gateway.</p>
   * @public
   */
  DiskId: string | undefined;

  /**
   * <p>The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot;
   *          otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>Set to <code>true</code> if you want to preserve the data on the local disk. Otherwise,
   *          set to <code>false</code> to create an empty volume.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  PreserveExistingData: boolean | undefined;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   * @public
   */
  TargetName: string | undefined;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4
   *          and IPv6 addresses. Use <a>DescribeGatewayInformation</a> to get a list of the
   *          network interfaces available on a gateway.</p>
   *          <p>Valid Values: A valid IP address.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface CreateStorediSCSIVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   *          initiators can use to connect to the target.</p>
   * @public
   */
  TargetARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetentionLockType = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type RetentionLockType = (typeof RetentionLockType)[keyof typeof RetentionLockType];

/**
 * @public
 * @enum
 */
export const TapeStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
} as const;

/**
 * @public
 */
export type TapeStorageClass = (typeof TapeStorageClass)[keyof typeof TapeStorageClass];

/**
 * @public
 */
export interface CreateTapePoolInput {
  /**
   * <p>The name of the new custom tape pool.</p>
   * @public
   */
  PoolName: string | undefined;

  /**
   * <p>The storage class that is associated with the new custom pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  StorageClass: TapeStorageClass | undefined;

  /**
   * <p>Tape retention lock can be configured in two modes. When configured in governance mode,
   *             Amazon Web Services accounts with specific IAM permissions are authorized to remove the
   *          tape retention lock from archived virtual tapes. When configured in compliance mode, the
   *          tape retention lock cannot be removed by any user, including the root Amazon Web Services account.</p>
   * @public
   */
  RetentionLockType?: RetentionLockType | undefined;

  /**
   * <p>Tape retention lock time is set in days. Tape retention lock can be enabled for up to
   *          100 years (36,500 days).</p>
   * @public
   */
  RetentionLockTimeInDays?: number | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTapePoolOutput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the
   *             <a>ListTapePools</a> operation to return a list of tape pools for your
   *          account and Amazon Web Services Region.</p>
   * @public
   */
  PoolARN?: string | undefined;
}

/**
 * <p>CreateTapesInput</p>
 * @public
 */
export interface CreateTapesInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tapes with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tapes that you want to create.</p>
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p>
   *          </note>
   * @public
   */
  TapeSizeInBytes: number | undefined;

  /**
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   *          <note>
   *             <p>Using the same <code>ClientToken</code> prevents creating the tape multiple
   *             times.</p>
   *          </note>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>The number of virtual tapes that you want to create.</p>
   * @public
   */
  NumTapesToCreate: number | undefined;

  /**
   * <p>A prefix that you append to the barcode of the virtual tape you are creating. This
   *          prefix makes the barcode unique.</p>
   *          <note>
   *             <p>The prefix must be 1-4 characters in length and must be one of the uppercase letters
   *             from A to Z.</p>
   *          </note>
   * @public
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>Set to <code>TRUE</code> if the tape you are creating is to be configured as a
   *          write-once-read-many (WORM) tape.</p>
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>CreateTapeOutput</p>
 * @public
 */
export interface CreateTapesOutput {
  /**
   * <p>A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that
   *          were created.</p>
   * @public
   */
  TapeARNs?: string[] | undefined;
}

/**
 * <p>CreateTapeWithBarcodeInput</p>
 * @public
 */
export interface CreateTapeWithBarcodeInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tape with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tape that you want to create.</p>
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p>
   *          </note>
   * @public
   */
  TapeSizeInBytes: number | undefined;

  /**
   * <p>The barcode that you want to assign to the tape.</p>
   *          <note>
   *             <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been
   *             deleted.</p>
   *          </note>
   * @public
   */
  TapeBarcode: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>Set to <code>TRUE</code> if the tape you are creating is to be configured as a
   *          write-once-read-many (WORM) tape.</p>
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each
   *          tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>CreateTapeOutput</p>
 * @public
 */
export interface CreateTapeWithBarcodeOutput {
  /**
   * <p>A unique Amazon Resource Name (ARN) that represents the virtual tape that was
   *          created.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomaticTapeCreationPolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomaticTapeCreationPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteBandwidthRateLimitInput$BandwidthType</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DeleteBandwidthRateLimitInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>One of the BandwidthType values that indicates the gateway bandwidth rate limit to
   *          delete.</p>
   *          <p>Valid Values: <code>UPLOAD</code> | <code>DOWNLOAD</code> | <code>ALL</code>
   *          </p>
   * @public
   */
  BandwidthType: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth
 *          rate information was deleted.</p>
 * @public
 */
export interface DeleteBandwidthRateLimitOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCacheReportInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report you want to delete.</p>
   * @public
   */
  CacheReportARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteCacheReportOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report you want to delete.</p>
   * @public
   */
  CacheReportARN?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteChapCredentialsInput$InitiatorName</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteChapCredentialsInput$TargetARN</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DeleteChapCredentialsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   * @public
   */
  TargetARN: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   * @public
   */
  InitiatorName: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface DeleteChapCredentialsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   * @public
   */
  InitiatorName?: string | undefined;
}

/**
 * <p>DeleteFileShareInput</p>
 * @public
 */
export interface DeleteFileShareInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share to be deleted.</p>
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * <p>If this value is set to <code>true</code>, the operation deletes a file share
   *          immediately and aborts all data uploads to Amazon Web Services. Otherwise, the file share is
   *          not deleted until all data is uploaded to Amazon Web Services. This process aborts the data
   *          upload process, and the file share enters the <code>FORCE_DELETING</code> status.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * <p>DeleteFileShareOutput</p>
 * @public
 */
export interface DeleteFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * <p>A JSON object containing the ID of the gateway to delete.</p>
 * @public
 */
export interface DeleteGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A JSON object containing the ID of the deleted gateway.</p>
 * @public
 */
export interface DeleteGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleInput {
  /**
   * <p>The volume which snapshot schedule to delete.</p>
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleOutput {
  /**
   * <p>The volume which snapshot schedule was deleted.</p>
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * <p>DeleteTapeInput</p>
 * @public
 */
export interface DeleteTapeInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is
   *          associated with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete.</p>
   * @public
   */
  TapeARN: string | undefined;

  /**
   * <p>Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with
   *          tape retention lock. Only archived tapes with tape retention lock set to
   *             <code>governance</code> can be deleted. Archived tapes with tape retention lock set to
   *             <code>compliance</code> can't be deleted.</p>
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;
}

/**
 * <p>DeleteTapeOutput</p>
 * @public
 */
export interface DeleteTapeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted virtual tape.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * <p>DeleteTapeArchiveInput</p>
 * @public
 */
export interface DeleteTapeArchiveInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf
   *          (VTS).</p>
   * @public
   */
  TapeARN: string | undefined;

  /**
   * <p>Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with
   *          tape retention lock. Only archived tapes with tape retention lock set to
   *             <code>governance</code> can be deleted. Archived tapes with tape retention lock set to
   *             <code>compliance</code> can't be deleted.</p>
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;
}

/**
 * <p>DeleteTapeArchiveOutput</p>
 * @public
 */
export interface DeleteTapeArchiveOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual
   *          tape shelf (VTS).</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTapePoolInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom tape pool to delete.</p>
   * @public
   */
  PoolARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTapePoolOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom tape pool being deleted.</p>
   * @public
   */
  PoolARN?: string | undefined;
}

/**
 * <p>A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to
 *          delete.</p>
 * @public
 */
export interface DeleteVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was
 *          deleted.</p>
 * @public
 */
export interface DeleteVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same
   *          ARN you provided in the request.</p>
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityMonitorTestInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityMonitorTestOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The status of the high availability monitoring test. If a test hasn't been
   *          performed, the value of this field is null.</p>
   * @public
   */
  Status?: AvailabilityMonitorTestStatus | undefined;

  /**
   * <p>The time the high availability monitoring test was started. If a test hasn't been
   *          performed, the value of this field is null.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 * @public
 */
export interface DescribeBandwidthRateLimitInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface DescribeBandwidthRateLimitOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The average upload bandwidth rate limit in bits per second. This field does not appear
   *          in the response if the upload rate limit is not set.</p>
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * <p>The average download bandwidth rate limit in bits per second. This field does not appear
   *          in the response if the download rate limit is not set.</p>
   * @public
   */
  AverageDownloadRateLimitInBitsPerSec?: number | undefined;
}

/**
 * @public
 */
export interface DescribeBandwidthRateLimitScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeBandwidthRateLimitScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p> An array that contains the bandwidth rate limit intervals for a tape or volume gateway. </p>
   * @public
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface DescribeCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   * @public
   */
  DiskIds?: string[] | undefined;

  /**
   * <p>The amount of cache in bytes allocated to a gateway.</p>
   * @public
   */
  CacheAllocatedInBytes?: number | undefined;

  /**
   * <p>Percent use of the gateway's cache storage. This metric applies only to the
   *          gateway-cached volume setup. The sample is taken at the end of the reporting period.</p>
   * @public
   */
  CacheUsedPercentage?: number | undefined;

  /**
   * <p>The file share's contribution to the overall percentage of the gateway's cache
   *          that has not been persisted to Amazon Web Services. The sample is taken at the end of the
   *          reporting period.</p>
   * @public
   */
  CacheDirtyPercentage?: number | undefined;

  /**
   * <p>Percent of application read operations from the file shares that are served from cache.
   *          The sample is taken at the end of the reporting period.</p>
   * @public
   */
  CacheHitPercentage?: number | undefined;

  /**
   * <p>Percent of application read operations from the file shares that are not served from
   *          cache. The sample is taken at the end of the reporting period.</p>
   * @public
   */
  CacheMissPercentage?: number | undefined;
}

/**
 * @public
 */
export interface DescribeCachediSCSIVolumesInput {
  /**
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          cached volume. All of the specified cached volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   * @public
   */
  VolumeARNs: string[] | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface DescribeCachediSCSIVolumesOutput {
  /**
   * <p>An array of objects where each object contains metadata about one cached volume.</p>
   * @public
   */
  CachediSCSIVolumes?: CachediSCSIVolume[] | undefined;
}

/**
 * @public
 */
export interface DescribeCacheReportInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report you want to describe.</p>
   * @public
   */
  CacheReportARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeCacheReportOutput {
  /**
   * <p>Contains all informational fields associated with a cache report. Includes name, ARN,
   *          tags, status, progress, filters, start time, and end time.</p>
   * @public
   */
  CacheReportInfo?: CacheReportInfo | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume
 *          target.</p>
 * @public
 */
export interface DescribeChapCredentialsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   * @public
   */
  TargetARN: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface DescribeChapCredentialsOutput {
  /**
   * <p>An array of <a>ChapInfo</a> objects that represent CHAP credentials. Each
   *          object in the array contains CHAP credential information for one target-initiator pair. If
   *          no CHAP credentials are set, an empty array is returned. CHAP credential information is
   *          provided in a JSON object with the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>InitiatorName</b>: The iSCSI initiator that connects to
   *                the target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SecretToAuthenticateInitiator</b>: The secret key that
   *                the initiator (for example, the Windows client) must provide to participate in mutual
   *                CHAP with the target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SecretToAuthenticateTarget</b>: The secret key that the
   *                target must provide to participate in mutual CHAP with the initiator (e.g. Windows
   *                client).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TargetARN</b>: The Amazon Resource Name (ARN) of the
   *                storage volume.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ChapCredentials?: ChapInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemAssociationsInput {
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file system association to be
   *          described.</p>
   * @public
   */
  FileSystemAssociationARNList: string[] | undefined;
}

/**
 * <p>Detailed information on file system association status.</p>
 * @public
 */
export interface FileSystemAssociationStatusDetail {
  /**
   * <p>The error code for a given file system association status.</p>
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * <p>Describes the object returned by <code>DescribeFileSystemAssociations</code> that
 *          describes a created file system association.</p>
 * @public
 */
export interface FileSystemAssociationInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the file system association.</p>
   * @public
   */
  FileSystemAssociationARN?: string | undefined;

  /**
   * <p>The ARN of the backend Amazon FSx file system used for storing file data. For
   *          information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_FileSystem.html">FileSystem</a> in the
   *                <i>Amazon FSx API Reference</i>.</p>
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * <p>The status of the file system association. Valid Values: <code>AVAILABLE</code> |
   *             <code>CREATING</code> | <code>DELETING</code> | <code>FORCE_DELETING</code> |
   *             <code>UPDATING</code> | <code>ERROR</code>
   *          </p>
   * @public
   */
  FileSystemAssociationStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The refresh cache information for the file share or FSx file systems.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>Specifies network configuration information for the gateway associated with the Amazon FSx file system.</p>
   *          <note>
   *             <p>If multiple file systems are associated with this gateway, this parameter's
   *                <code>IpAddresses</code> field is required.</p>
   *          </note>
   * @public
   */
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration | undefined;

  /**
   * <p>An array containing the FileSystemAssociationStatusDetail data type, which provides
   *          detailed information on file system association status.</p>
   * @public
   */
  FileSystemAssociationStatusDetails?: FileSystemAssociationStatusDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemAssociationsOutput {
  /**
   * <p>An array containing the <code>FileSystemAssociationInfo</code> data type of each file
   *          system association to be described.
   *          </p>
   * @public
   */
  FileSystemAssociationInfoList?: FileSystemAssociationInfo[] | undefined;
}

/**
 * <p>A JSON object containing the ID of the gateway.</p>
 * @public
 */
export interface DescribeGatewayInformationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GatewayCapacity = {
  Large: "Large",
  Medium: "Medium",
  Small: "Small",
} as const;

/**
 * @public
 */
export type GatewayCapacity = (typeof GatewayCapacity)[keyof typeof GatewayCapacity];

/**
 * <p>Describes a gateway's network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the interface.</p>
   * @public
   */
  Ipv4Address?: string | undefined;

  /**
   * <p>The Media Access Control (MAC) address of the interface.</p>
   *          <note>
   *             <p>This is currently unsupported and will not be returned in output.</p>
   *          </note>
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * <p>The Internet Protocol version 6 (IPv6) address of the interface.</p>
   *          <note>
   *             <p>This element returns IPv6 addresses for all gateway types except FSx File Gateway.</p>
   *          </note>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HostEnvironment = {
  EC2: "EC2",
  HYPER_V: "HYPER-V",
  KVM: "KVM",
  OTHER: "OTHER",
  SNOWBALL: "SNOWBALL",
  VMWARE: "VMWARE",
} as const;

/**
 * @public
 */
export type HostEnvironment = (typeof HostEnvironment)[keyof typeof HostEnvironment];

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface DescribeGatewayInformationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   * @public
   */
  GatewayName?: string | undefined;

  /**
   * <p>A value that indicates the time zone configured for the gateway.</p>
   * @public
   */
  GatewayTimezone?: string | undefined;

  /**
   * <p>A value that indicates the operating state of the gateway.</p>
   * @public
   */
  GatewayState?: string | undefined;

  /**
   * <p>A <a>NetworkInterface</a> array that contains descriptions of the gateway
   *          network interfaces.</p>
   * @public
   */
  GatewayNetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The type of the gateway.</p>
   *          <important>
   *             <p>Amazon FSx File Gateway is no longer available to new customers. Existing
   *             customers of FSx File Gateway can continue to use the service normally. For
   *             capabilities similar to FSx File Gateway, visit <a href="https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/">this blog post</a>.</p>
   *          </important>
   * @public
   */
  GatewayType?: string | undefined;

  /**
   * <p>The date on which an update to the gateway is available. This date is in the time zone
   *          of the gateway. If the gateway is not available for an update this field is not returned in
   *          the response.</p>
   * @public
   */
  NextUpdateAvailabilityDate?: string | undefined;

  /**
   * <p>The date on which the last software update was applied to the gateway. If the gateway
   *          has never been updated, this field does not return a value in the response. This only only
   *          exist and returns once it have been chosen and set by the SGW service, based on the OS
   *          version of the gateway VM</p>
   * @public
   */
  LastSoftwareUpdate?: string | undefined;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the Amazon EC2 instance is located.</p>
   * @public
   */
  Ec2InstanceRegion?: string | undefined;

  /**
   * <p>A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each
   *          tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all
   *          tags using the <code>ListTagsForResource</code> API operation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The configuration settings for the virtual private cloud (VPC) endpoint for your
   *          gateway.</p>
   * @public
   */
  VPCEndpoint?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to
   *          monitor events in the gateway. This field only only exist and returns once it have been
   *          chosen and set by the SGW service, based on the OS version of the gateway VM</p>
   * @public
   */
  CloudWatchLogGroupARN?: string | undefined;

  /**
   * <p>The type of hardware or software platform on which the gateway is running.</p>
   *          <note>
   *             <p>Tape Gateway is no longer available on Snow Family devices.</p>
   *          </note>
   * @public
   */
  HostEnvironment?: HostEnvironment | undefined;

  /**
   * <p>The type of endpoint for your gateway.</p>
   *          <p>Valid Values: <code>STANDARD</code> | <code>FIPS</code>
   *          </p>
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * <p>Date after which this gateway will not receive software updates for new features.</p>
   * @public
   */
  SoftwareUpdatesEndDate?: string | undefined;

  /**
   * <p>Date after which this gateway will not receive software updates for new features and bug
   *          fixes.</p>
   * @public
   */
  DeprecationDate?: string | undefined;

  /**
   * <p>Specifies the size of the gateway's metadata cache.</p>
   * @public
   */
  GatewayCapacity?: GatewayCapacity | undefined;

  /**
   * <p>A list of the metadata cache sizes that the gateway can support based on its current
   *          hardware specifications.</p>
   * @public
   */
  SupportedGatewayCapacities?: GatewayCapacity[] | undefined;

  /**
   * <p>A unique identifier for the specific instance of the host platform running the gateway.
   *          This value is only available for certain host environments, and its format depends on the
   *          host environment type.</p>
   * @public
   */
  HostEnvironmentId?: string | undefined;

  /**
   * <p>The version number of the software running on the gateway appliance.</p>
   * @public
   */
  SoftwareVersion?: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 * @public
 */
export interface DescribeMaintenanceStartTimeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A set of variables indicating the software update preferences for the gateway.</p>
 * @public
 */
export interface SoftwareUpdatePreferences {
  /**
   * <p>Indicates the automatic update policy for a gateway.</p>
   *          <p>
   *             <code>ALL_VERSIONS</code> - Enables regular gateway maintenance updates.</p>
   *          <p>
   *             <code>EMERGENCY_VERSIONS_ONLY</code> - Disables regular gateway maintenance updates. The
   *          gateway will still receive emergency version updates on rare occasions if necessary to
   *          remedy highly critical security or durability issues. You will be notified before an
   *          emergency version update is applied. These updates are applied during your gateway's
   *          scheduled maintenance window.</p>
   * @public
   */
  AutomaticUpdatePolicy?: AutomaticUpdatePolicy | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceStartTimeOutput$SoftwareUpdatePreferences</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMaintenanceStartTimeOutput$Timezone</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DescribeMaintenanceStartTimeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *          where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time
   *          zone of the gateway.</p>
   * @public
   */
  HourOfDay?: number | undefined;

  /**
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (0 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   * @public
   */
  MinuteOfHour?: number | undefined;

  /**
   * <p>An ordinal number between 0 and 6 that represents the day of the week, where 0
   *          represents Sunday and 6 represents Saturday. The day of week is in the time zone of the
   *          gateway.</p>
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal
   *          number from 1 to 28, where 1 represents the first day of the month. It is not possible to
   *          set the maintenance schedule to start on days 29 through 31.</p>
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * <p>A value that indicates the time zone that is set for the gateway. The start time and day
   *          of week specified should be in the time zone of the gateway.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>A set of variables indicating the software update preferences for the gateway.</p>
   *          <p>Includes <code>AutomaticUpdatePolicy</code> parameter with the following inputs:</p>
   *          <p>
   *             <code>ALL_VERSIONS</code> - Enables regular gateway maintenance updates.</p>
   *          <p>
   *             <code>EMERGENCY_VERSIONS_ONLY</code> - Disables regular gateway maintenance updates. The
   *          gateway will still receive emergency version updates on rare occasions if necessary to
   *          remedy highly critical security or durability issues. You will be notified before an
   *          emergency version update is applied. These updates are applied during your gateway's
   *          scheduled maintenance window.</p>
   * @public
   */
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences | undefined;
}

/**
 * <p>DescribeNFSFileSharesInput</p>
 * @public
 */
export interface DescribeNFSFileSharesInput {
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described.</p>
   * @public
   */
  FileShareARNList: string[] | undefined;
}

/**
 * <p>The Unix file permissions and ownership information assigned, by default, to native S3
 *          objects when an S3 File Gateway discovers them in S3 buckets. This operation is only
 *          supported in S3 File Gateways.</p>
 * @public
 */
export interface NFSFileShareInfo {
  /**
   * <p>Describes Network File System (NFS) file share default values. Files and folders stored
   *          as Amazon S3 objects in S3 buckets don't, by default, have Unix file
   *          permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3
   *          objects that represent files and folders are assigned these default Unix permissions. This
   *          operation is only supported for S3 File Gateways.</p>
   * @public
   */
  NFSFileShareDefaults?: NFSFileShareDefaults | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * <p>The ID of the file share.</p>
   * @public
   */
  FileShareId?: string | undefined;

  /**
   * <p>The status of the file share.</p>
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   * @public
   */
  FileShareStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>A value that specifies the type of server-side encryption that the file share will use
   *          for the data that it stores in Amazon S3.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>Optional. Set to <code>true</code> to use Amazon S3 server-side encryption with
   *          your own KMS key (SSE-KMS), or <code>false</code> to use a key managed by
   *             Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the
   *             <code>EncryptionType</code> parameter instead.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The file share path used by the NFS client to identify the mount point.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying
   *          storage.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::amzn-s3-demo-bucket/prefix/</code>
   *             </p>
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that an S3 File Gateway puts objects into. The default value is
   *          <code>private</code>.</p>
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * <p>The list of clients that are allowed to access the S3 File Gateway. The list must
   *          contain either valid IPv4/IPv6 addresses or valid CIDR blocks.</p>
   * @public
   */
  ClientList?: string[] | undefined;

  /**
   * <p>The user mapped to anonymous user. Valid options are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RootSquash</code>: Only root is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoSquash</code>: No one is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllSquash</code>: Everyone is mapped to anonymous user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Squash?: string | undefined;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the file share. Optional.</p>
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * <p>Refresh cache information for the file share.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *             <p>This setting is not meant to specify an exact time at which the notification will be
   *             sent. In some cases, the gateway might require more than the specified delay time to
   *             generate and send notifications.</p>
   *          </note>
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * <p>Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * <p>Specifies the Region of the S3 bucket where the NFS file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;
}

/**
 * <p>DescribeNFSFileSharesOutput</p>
 * @public
 */
export interface DescribeNFSFileSharesOutput {
  /**
   * <p>An array containing a description for each requested file share.</p>
   * @public
   */
  NFSFileShareInfoList?: NFSFileShareInfo[] | undefined;
}

/**
 * <p>DescribeSMBFileSharesInput</p>
 * @public
 */
export interface DescribeSMBFileSharesInput {
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described.</p>
   * @public
   */
  FileShareARNList: string[] | undefined;
}

/**
 * <p>The Windows file permissions and ownership information assigned, by default, to native
 *          S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only
 *          supported for S3 File Gateways.</p>
 * @public
 */
export interface SMBFileShareInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * <p>The ID of the file share.</p>
   * @public
   */
  FileShareId?: string | undefined;

  /**
   * <p>The status of the file share.</p>
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   * @public
   */
  FileShareStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>A value that specifies the type of server-side encryption that the file share will use
   *          for the data that it stores in Amazon S3.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>Optional. Set to <code>true</code> to use Amazon S3 server-side encryption with
   *          your own KMS key (SSE-KMS), or <code>false</code> to use a key managed by
   *             Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the
   *             <code>EncryptionType</code> parameter instead.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The file share path used by the SMB client to identify the mount point.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying
   *          storage.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::amzn-s3-demo-bucket/prefix/</code>
   *             </p>
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that an S3 File Gateway puts objects into. The default value is
   *          <code>private</code>.</p>
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>If this value is set to <code>true</code>, it indicates that access control list (ACL)
   *          is enabled on the SMB file share. If it is set to <code>false</code>, it indicates that
   *          file and directory permissions are mapped to the POSIX permission.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/smb-acl.html">Using Windows ACLs to limit SMB file share
   *             access</a> in the <i>Amazon S3 File Gateway User
   *          Guide</i>.</p>
   * @public
   */
  SMBACLEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether <code>AccessBasedEnumeration</code> is enabled.</p>
   * @public
   */
  AccessBasedEnumeration?: boolean | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  AdminUserList?: string[] | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  ValidUserList?: string[] | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  InvalidUserList?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * <p>The authentication method of the file share. The default is
   *          <code>ActiveDirectory</code>.</p>
   *          <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code>
   *          </p>
   * @public
   */
  Authentication?: string | undefined;

  /**
   * <p>The case of an object name in an Amazon S3 bucket. For
   *             <code>ClientSpecified</code>, the client determines the case sensitivity. For
   *             <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default
   *          value is <code>ClientSpecified</code>.</p>
   * @public
   */
  CaseSensitivity?: CaseSensitivity | undefined;

  /**
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the file share. Optional.</p>
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * <p>Refresh cache information for the file share.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *             <p>This setting is not meant to specify an exact time at which the notification will be
   *             sent. In some cases, the gateway might require more than the specified delay time to
   *             generate and send notifications.</p>
   *          </note>
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * <p>Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * <p>Specifies the Region of the S3 bucket where the SMB file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * <p>Specifies whether opportunistic locking is enabled for the SMB file share.</p>
   *          <note>
   *             <p>Enabling opportunistic locking on case-sensitive shares is not recommended for
   *             workloads that involve access to files with the same name in different case.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  OplocksEnabled?: boolean | undefined;
}

/**
 * <p>DescribeSMBFileSharesOutput</p>
 * @public
 */
export interface DescribeSMBFileSharesOutput {
  /**
   * <p>An array containing a description for each requested file share.</p>
   * @public
   */
  SMBFileShareInfoList?: SMBFileShareInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeSMBSettingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A list of Active Directory users and groups that have special permissions for SMB file
 *          shares on the gateway.</p>
 * @public
 */
export interface SMBLocalGroups {
  /**
   * <p>A list of Active Directory users and groups that have local Gateway Admin permissions.
   *          Acceptable formats include: <code>DOMAIN\User1</code>, <code>user1</code>,
   *             <code>DOMAIN\group1</code>, and <code>group1</code>.</p>
   *          <p>Gateway Admins can use the Shared Folders Microsoft Management Console snap-in to
   *          force-close files that are open and locked.</p>
   * @public
   */
  GatewayAdmins?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SMBSecurityStrategy = {
  ClientSpecified: "ClientSpecified",
  MandatoryEncryption: "MandatoryEncryption",
  MandatoryEncryptionNoAes128: "MandatoryEncryptionNoAes128",
  MandatorySigning: "MandatorySigning",
} as const;

/**
 * @public
 */
export type SMBSecurityStrategy = (typeof SMBSecurityStrategy)[keyof typeof SMBSecurityStrategy];

/**
 * @public
 */
export interface DescribeSMBSettingsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The name of the domain that the gateway is joined to.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Indicates the status of a gateway that is a member of the Active Directory
   *          domain.</p>
   *          <note>
   *             <p>This field is only used as part of a <code>JoinDomain</code> request. It is not
   *             affected by Active Directory connectivity changes that occur after the
   *                <code>JoinDomain</code> request succeeds.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code>: Indicates that the <code>JoinDomain</code> operation
   *                failed due to an authentication error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETACHED</code>: Indicates that gateway is not joined to a domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JOINED</code>: Indicates that the gateway has successfully joined a
   *                domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JOINING</code>: Indicates that a <code>JoinDomain</code> operation is in
   *                progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_ERROR</code>: Indicates that <code>JoinDomain</code> operation
   *                failed due to a network or connectivity error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code>: Indicates that the <code>JoinDomain</code> operation failed
   *                because the operation didn't complete within the allotted time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN_ERROR</code>: Indicates that the <code>JoinDomain</code> operation
   *                failed due to another type of error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | undefined;

  /**
   * <p>This value is <code>true</code> if a password for the guest user <code>smbguest</code>
   *          is set, otherwise <code>false</code>. Only supported for S3 File Gateways.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  SMBGuestPasswordSet?: boolean | undefined;

  /**
   * <p>The type of security strategy that was specified for file gateway.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ClientSpecified</code>: If you choose this option, requests are established
   *                based on what is negotiated by the client. This option is recommended when you want
   *                to maximize compatibility across different clients in your environment. Supported
   *                only for S3 File Gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MandatorySigning</code>: If you choose this option, File Gateway only allows
   *                connections from SMBv2 or SMBv3 clients that have signing turned on. This option
   *                works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MandatoryEncryption</code>: If you choose this option, File Gateway only
   *                allows connections from SMBv3 clients that have encryption turned on. Both 256-bit
   *                and 128-bit algorithms are allowed. This option is recommended for environments that
   *                handle sensitive data. It works with SMB clients on Microsoft Windows 8, Windows
   *                Server 2012, or later.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MandatoryEncryptionNoAes128</code>: If you choose this option, File Gateway
   *                only allows connections from SMBv3 clients that use 256-bit AES encryption
   *                algorithms. 128-bit algorithms are not allowed. This option is recommended for
   *                environments that handle sensitive data. It works with SMB clients on Microsoft
   *                Windows 8, Windows Server 2012, or later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SMBSecurityStrategy?: SMBSecurityStrategy | undefined;

  /**
   * <p>The shares on this gateway appear when listing shares. Only supported for S3 File
   *          Gateways. </p>
   * @public
   */
  FileSharesVisible?: boolean | undefined;

  /**
   * <p>A list of Active Directory users and groups that have special permissions for SMB file
   *          shares on the gateway.</p>
   * @public
   */
  SMBLocalGroups?: SMBLocalGroups | undefined;
}

/**
 * <p>A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a>
 *          of the volume.</p>
 * @public
 */
export interface DescribeSnapshotScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was specified in the request.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   * @public
   */
  StartAt?: number | undefined;

  /**
   * <p>The number of hours between snapshots.</p>
   * @public
   */
  RecurrenceInHours?: number | undefined;

  /**
   * <p>The snapshot description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A value that indicates the time zone of the gateway.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.</p>
 * @public
 */
export interface DescribeStorediSCSIVolumesInput {
  /**
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          stored volume. All of the specified stored volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   * @public
   */
  VolumeARNs: string[] | undefined;
}

/**
 * <p>Describes an iSCSI stored volume.</p>
 * @public
 */
export interface StorediSCSIVolume {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The unique identifier of the volume, e.g., vol-AE4B946D.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   * @public
   */
  VolumeStatus?: string | undefined;

  /**
   * <p>A value that indicates whether a storage volume is attached to, detached from, or is in
   *          the process of detaching from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving
   *             your volumes to a different gateway</a>.</p>
   * @public
   */
  VolumeAttachmentStatus?: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the stored volume is not restoring or bootstrapping.</p>
   * @public
   */
  VolumeProgress?: number | undefined;

  /**
   * <p>The ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p>
   * @public
   */
  VolumeDiskId?: string | undefined;

  /**
   * <p>If the stored volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g. snap-78e22663. Otherwise, this field is not included.</p>
   * @public
   */
  SourceSnapshotId?: string | undefined;

  /**
   * <p>Indicates if when the stored volume was created, existing data on the underlying local
   *          disk was preserved.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  PreservedExistingData?: boolean | undefined;

  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *          attributes for one stored volume.</p>
   * @public
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes | undefined;

  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   *          timestamp.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The size of the data stored on the volume in bytes. This value is calculated based on
   *          the number of blocks that are touched, instead of the actual amount of data written. This
   *          value can be useful for sequential write patterns but less accurate for random write
   *          patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the
   *          volume, which is the value that is used to calculate your bill.</p>
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   * @public
   */
  VolumeUsedInBytes?: number | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   * @public
   */
  TargetName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStorediSCSIVolumesOutput {
  /**
   * <p>Describes a single unit of output from <a>DescribeStorediSCSIVolumes</a>. The
   *          following fields are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ChapEnabled</code>: Indicates whether mutual CHAP is enabled for the iSCSI
   *                target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LunNumber</code>: The logical disk number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetworkInterfaceId</code>: The network interface ID of the stored volume that
   *                initiator use to map the stored volume as an iSCSI target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetworkInterfacePort</code>: The port used to communicate with iSCSI
   *                targets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PreservedExistingData</code>: Indicates when the stored volume was created,
   *                existing data on the underlying local disk was preserved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceSnapshotId</code>: If the stored volume was created from a snapshot, this
   *                field contains the snapshot ID used, e.g. <code>snap-1122aabb</code>. Otherwise, this
   *                field is not included.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StorediSCSIVolumes</code>: An array of StorediSCSIVolume objects where each
   *                object contains metadata about one stored volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TargetARN</code>: The Amazon Resource Name (ARN) of the volume target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeARN</code>: The Amazon Resource Name (ARN) of the stored volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeDiskId</code>: The disk ID of the local disk that was specified in the
   *                   <a>CreateStorediSCSIVolume</a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeId</code>: The unique identifier of the storage volume, e.g.
   *                   <code>vol-1122AABB</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeiSCSIAttributes</code>: An <a>VolumeiSCSIAttributes</a> object
   *                that represents a collection of iSCSI attributes for one stored volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeProgress</code>: Represents the percentage complete if the volume is
   *                restoring or bootstrapping that represents the percent of data transferred. This
   *                field does not appear in the response if the stored volume is not restoring or
   *                bootstrapping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeSizeInBytes</code>: The size of the volume in bytes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeStatus</code>: One of the <code>VolumeStatus</code> values that indicates
   *                the state of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeType</code>: One of the enumeration values describing the type of the
   *                volume. Currently, only <code>STORED</code> volumes are supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorediSCSIVolumes?: StorediSCSIVolume[] | undefined;
}

/**
 * <p>DescribeTapeArchivesInput</p>
 * @public
 */
export interface DescribeTapeArchivesInput {
  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe.</p>
   * @public
   */
  TapeARNs?: string[] | undefined;

  /**
   * <p>An opaque string that indicates the position at which to begin describing virtual
   *          tapes.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>
 * @public
 */
export interface TapeArchive {
  /**
   * <p>The Amazon Resource Name (ARN) of an archived virtual tape.</p>
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * <p>The barcode that identifies the archived virtual tape.</p>
   * @public
   */
  TapeBarcode?: string | undefined;

  /**
   * <p>The date the virtual tape was created.</p>
   * @public
   */
  TapeCreatedDate?: Date | undefined;

  /**
   * <p>The size, in bytes, of the archived virtual tape.</p>
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * <p>The time that the archiving of the virtual tape was completed.</p>
   *          <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being
   *          retrieved to.</p>
   *          <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>
   * @public
   */
  RetrievedTo?: string | undefined;

  /**
   * <p>The current state of the archived virtual tape.</p>
   * @public
   */
  TapeStatus?: string | undefined;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   * @public
   */
  TapeUsedInBytes?: number | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The ID of the pool that was used to archive the tape. The tapes in this pool are
   *          archived in the S3 storage class that is associated with the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>Set to <code>true</code> if the archived tape is stored as write-once-read-many
   *          (WORM).</p>
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * <p>If the archived tape is subject to tape retention lock, the date that the archived tape
   *          started being retained.</p>
   * @public
   */
  RetentionStartDate?: Date | undefined;

  /**
   * <p>The time that the tape entered the custom tape pool.</p>
   *          <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   * @public
   */
  PoolEntryDate?: Date | undefined;
}

/**
 * <p>DescribeTapeArchivesOutput</p>
 * @public
 */
export interface DescribeTapeArchivesOutput {
  /**
   * <p>An array of virtual tape objects in the virtual tape shelf (VTS). The description
   *          includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned
   *          includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the
   *          tapes, progress of the description, and tape barcode.</p>
   * @public
   */
  TapeArchives?: TapeArchive[] | undefined;

  /**
   * <p>An opaque string that indicates the position at which the virtual tapes that were
   *          fetched for description ended. Use this marker in your next request to fetch the next set
   *          of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to
   *          describe, this field does not appear in the response.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>DescribeTapeRecoveryPointsInput</p>
 * @public
 */
export interface DescribeTapeRecoveryPointsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>An opaque string that indicates the position at which to begin describing the virtual
   *          tape recovery points.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the number of virtual tape recovery points that are described be limited
   *          to the specified number.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Describes a recovery point.</p>
 * @public
 */
export interface TapeRecoveryPointInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * <p>The time when the point-in-time view of the virtual tape was replicated for later
   *          recovery.</p>
   *          <p>The default timestamp format of the tape recovery point time is in the ISO8601 extended
   *          YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   * @public
   */
  TapeRecoveryPointTime?: Date | undefined;

  /**
   * <p>The size, in bytes, of the virtual tapes to recover.</p>
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * <p>The status of the virtual tapes.</p>
   * @public
   */
  TapeStatus?: string | undefined;
}

/**
 * <p>DescribeTapeRecoveryPointsOutput</p>
 * @public
 */
export interface DescribeTapeRecoveryPointsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>An array of TapeRecoveryPointInfos that are available for the specified gateway.</p>
   * @public
   */
  TapeRecoveryPointInfos?: TapeRecoveryPointInfo[] | undefined;

  /**
   * <p>An opaque string that indicates the position at which the virtual tape recovery points
   *          that were listed for description ended.</p>
   *          <p>Use this marker in your next request to list the next set of virtual tape recovery
   *          points in the list. If there are no more recovery points to describe, this field does not
   *          appear in the response.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>DescribeTapesInput</p>
 * @public
 */
export interface DescribeTapesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe. If this parameter is not specified, Tape gateway returns a
   *          description of all virtual tapes associated with the specified gateway.</p>
   * @public
   */
  TapeARNs?: string[] | undefined;

  /**
   * <p>A marker value, obtained in a previous call to <code>DescribeTapes</code>. This marker
   *          indicates which page of results to retrieve.</p>
   *          <p>If not specified, the first page of results is retrieved.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   *          <note>
   *             <p>Amazon Web Services may impose its own limit, if this field is not set.</p>
   *          </note>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Describes a virtual tape object.</p>
 * @public
 */
export interface Tape {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * <p>The barcode that identifies a specific virtual tape.</p>
   * @public
   */
  TapeBarcode?: string | undefined;

  /**
   * <p>The date the virtual tape was created.</p>
   * @public
   */
  TapeCreatedDate?: Date | undefined;

  /**
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * <p>The current state of the virtual tape.</p>
   * @public
   */
  TapeStatus?: string | undefined;

  /**
   * <p>The virtual tape library (VTL) device that the virtual tape is associated with.</p>
   * @public
   */
  VTLDevice?: string | undefined;

  /**
   * <p>For archiving virtual tapes, indicates how much data remains to be uploaded before
   *          archiving is complete.</p>
   *          <p>Range: 0 (not started) to 100 (complete).</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   * @public
   */
  TapeUsedInBytes?: number | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The ID of the pool that contains tapes that will be archived. The tapes in this pool are
   *          archived in the S3 storage class that is associated with the pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>If the tape is archived as write-once-read-many (WORM), this value is
   *          <code>true</code>.</p>
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * <p>The date that the tape is first archived with tape retention lock enabled.</p>
   * @public
   */
  RetentionStartDate?: Date | undefined;

  /**
   * <p>The date that the tape enters a custom tape pool.</p>
   * @public
   */
  PoolEntryDate?: Date | undefined;
}

/**
 * <p>DescribeTapesOutput</p>
 * @public
 */
export interface DescribeTapesOutput {
  /**
   * <p>An array of virtual tape descriptions.</p>
   * @public
   */
  Tapes?: Tape[] | undefined;

  /**
   * <p>An opaque string that can be used as part of a subsequent <code>DescribeTapes</code>
   *          call to retrieve the next page of results.</p>
   *          <p>If a response does not contain a marker, then there are no more results to be
   *          retrieved.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUploadBufferInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeUploadBufferOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage.
   *          Each local disk ID is specified as a string (minimum length of 1 and maximum length of
   *          300). If no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   * @public
   */
  DiskIds?: string[] | undefined;

  /**
   * <p>The total number of bytes being used in the gateway's upload buffer.</p>
   * @public
   */
  UploadBufferUsedInBytes?: number | undefined;

  /**
   * <p>The total number of bytes allocated in the gateway's as upload buffer.</p>
   * @public
   */
  UploadBufferAllocatedInBytes?: number | undefined;
}

/**
 * <p>DescribeVTLDevicesInput</p>
 * @public
 */
export interface DescribeVTLDevicesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings, where each string represents the Amazon Resource Name (ARN) of a
   *          VTL device.</p>
   *          <note>
   *             <p>All of the specified VTL devices must be from the same gateway. If no VTL devices are
   *             specified, the result will contain all devices on the specified gateway.</p>
   *          </note>
   * @public
   */
  VTLDeviceARNs?: string[] | undefined;

  /**
   * <p>An opaque string that indicates the position at which to begin describing the VTL
   *          devices.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the number of VTL devices described be limited to the specified
   *          number.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Lists iSCSI information about a VTL device.</p>
 * @public
 */
export interface DeviceiSCSIAttributes {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified
   *          name(iqn) of a tape drive or media changer target.</p>
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * <p>The network interface identifier of the VTL device.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The port used to communicate with iSCSI VTL device targets.</p>
   * @public
   */
  NetworkInterfacePort?: number | undefined;

  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   * @public
   */
  ChapEnabled?: boolean | undefined;
}

/**
 * <p>Represents a device object associated with a tape gateway.</p>
 * @public
 */
export interface VTLDevice {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media
   *          changer).</p>
   * @public
   */
  VTLDeviceARN?: string | undefined;

  /**
   * <p>Specifies the type of device that the VTL device emulates.</p>
   * @public
   */
  VTLDeviceType?: string | undefined;

  /**
   * <p>Specifies the vendor of the device that the VTL device object emulates.</p>
   * @public
   */
  VTLDeviceVendor?: string | undefined;

  /**
   * <p>Specifies the model number of device that the VTL device emulates.</p>
   * @public
   */
  VTLDeviceProductIdentifier?: string | undefined;

  /**
   * <p>A list of iSCSI information about a VTL device.</p>
   * @public
   */
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes | undefined;
}

/**
 * <p>DescribeVTLDevicesOutput</p>
 * @public
 */
export interface DescribeVTLDevicesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL
   *          devices.</p>
   * @public
   */
  VTLDevices?: VTLDevice[] | undefined;

  /**
   * <p>An opaque string that indicates the position at which the VTL devices that were fetched
   *          for description ended. Use the marker in your next request to fetch the next set of VTL
   *          devices in the list. If there are no more VTL devices to describe, this field does not
   *          appear in the response.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 * @public
 */
export interface DescribeWorkingStorageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface DescribeWorkingStorageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage.
   *          Each local disk ID is specified as a string (minimum length of 1 and maximum length of
   *          300). If no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   * @public
   */
  DiskIds?: string[] | undefined;

  /**
   * <p>The total working storage in bytes in use by the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   * @public
   */
  WorkingStorageUsedInBytes?: number | undefined;

  /**
   * <p>The total working storage in bytes allocated for the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   * @public
   */
  WorkingStorageAllocatedInBytes?: number | undefined;
}

/**
 * <p>AttachVolumeInput</p>
 * @public
 */
export interface DetachVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume to detach from the gateway.</p>
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * <p>Set to <code>true</code> to forcibly remove the iSCSI connection of the target volume
   *          and detach the volume. The default is <code>false</code>. If this value is set to
   *             <code>false</code>, you must manually disconnect the iSCSI connection from the target
   *          volume.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ForceDetach?: boolean | undefined;
}

/**
 * <p>AttachVolumeOutput</p>
 * @public
 */
export interface DetachVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was detached.</p>
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * <p>DisableGatewayInput</p>
 * @public
 */
export interface DisableGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>DisableGatewayOutput</p>
 * @public
 */
export interface DisableGatewayOutput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the disabled gateway.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFileSystemInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file system association to be deleted.</p>
   * @public
   */
  FileSystemAssociationARN: string | undefined;

  /**
   * <p>If this value is set to true, the operation disassociates an Amazon FSx file
   *          system immediately. It ends all data uploads to the file system, and the file system
   *          association enters the <code>FORCE_DELETING</code> status. If this value is set to false,
   *          the Amazon FSx file system does not disassociate until all data is uploaded.</p>
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateFileSystemOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted file system association.</p>
   * @public
   */
  FileSystemAssociationARN?: string | undefined;
}

/**
 * <p>Represents a gateway's local disk.</p>
 * @public
 */
export interface Disk {
  /**
   * <p>The unique device ID or other distinguishing data that identifies a local disk.</p>
   * @public
   */
  DiskId?: string | undefined;

  /**
   * <p>The path of a local disk in the gateway virtual machine (VM).</p>
   * @public
   */
  DiskPath?: string | undefined;

  /**
   * <p>The device node of a local disk as assigned by the virtualization environment.</p>
   * @public
   */
  DiskNode?: string | undefined;

  /**
   * <p>A value that represents the status of a local disk.</p>
   * @public
   */
  DiskStatus?: string | undefined;

  /**
   * <p>The local disk size in bytes.</p>
   * @public
   */
  DiskSizeInBytes?: number | undefined;

  /**
   * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a
   *          local disk is used.</p>
   *          <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code>
   *          </p>
   * @public
   */
  DiskAllocationType?: string | undefined;

  /**
   * <p>The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in
   *          the response if the local disk is not defined as an iSCSI target. The format of this field
   *          is <i>targetIqn::LUNNumber::region-volumeId</i>.</p>
   * @public
   */
  DiskAllocationResource?: string | undefined;

  /**
   * <p>A list of values that represents attributes of a local disk.</p>
   * @public
   */
  DiskAttributeList?: string[] | undefined;
}

/**
 * @public
 */
export interface EvictFilesFailingUploadInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share for which you want to start the cache
   *          clean operation.</p>
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * <p>Specifies whether cache entries with full or partial file data currently stored on the
   *          gateway will be forcibly removed by the cache clean operation.</p>
   *          <p>Valid arguments:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>False</code> - The cache clean operation skips cache entries failing upload
   *                if they are associated with data currently stored on the gateway. This preserves the
   *                cached data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>True</code> - The cache clean operation removes cache entries failing upload
   *                even if they are associated with data currently stored on the gateway. This deletes
   *                the cached data.</p>
   *                <important>
   *                   <p>If <code>ForceRemove</code> is set to <code>True</code>, the cache clean
   *                   operation will delete file data from the gateway which might otherwise be
   *                   recoverable.</p>
   *                </important>
   *             </li>
   *          </ul>
   * @public
   */
  ForceRemove?: boolean | undefined;
}

/**
 * @public
 */
export interface EvictFilesFailingUploadOutput {
  /**
   * <p>The randomly generated ID of the CloudWatch notification associated with the
   *          cache clean operation. This ID is in UUID format.</p>
   * @public
   */
  NotificationId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FileShareType = {
  NFS: "NFS",
  SMB: "SMB",
} as const;

/**
 * @public
 */
export type FileShareType = (typeof FileShareType)[keyof typeof FileShareType];

/**
 * <p>Describes a file share. Only supported S3 File Gateway.</p>
 * @public
 */
export interface FileShareInfo {
  /**
   * <p>The type of the file share.</p>
   * @public
   */
  FileShareType?: FileShareType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * <p>The ID of the file share.</p>
   * @public
   */
  FileShareId?: string | undefined;

  /**
   * <p>The status of the file share.</p>
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   * @public
   */
  FileShareStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>Gets the summary returned by <code>ListFileSystemAssociation</code>, which is a summary
 *          of a created file system association.</p>
 * @public
 */
export interface FileSystemAssociationSummary {
  /**
   * <p>The ID of the file system association.</p>
   * @public
   */
  FileSystemAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the file system association.</p>
   * @public
   */
  FileSystemAssociationARN?: string | undefined;

  /**
   * <p>The status of the file share. Valid Values: <code>AVAILABLE</code> |
   *             <code>CREATING</code> | <code>DELETING</code> | <code>FORCE_DELETING</code> |
   *             <code>UPDATING</code> | <code>ERROR</code>
   *          </p>
   * @public
   */
  FileSystemAssociationStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>Describes a gateway object.</p>
 * @public
 */
export interface GatewayInfo {
  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The type of the gateway.</p>
   *          <important>
   *             <p>Amazon FSx File Gateway is no longer available to new customers. Existing
   *             customers of FSx File Gateway can continue to use the service normally. For
   *             capabilities similar to FSx File Gateway, visit <a href="https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/">this blog post</a>.</p>
   *          </important>
   * @public
   */
  GatewayType?: string | undefined;

  /**
   * <p>The state of the gateway.</p>
   *          <p>Valid Values: <code>DISABLED</code> | <code>ACTIVE</code>
   *          </p>
   * @public
   */
  GatewayOperationalState?: string | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  GatewayName?: string | undefined;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the Amazon EC2 instance is located.</p>
   * @public
   */
  Ec2InstanceRegion?: string | undefined;

  /**
   * <p>The type of hardware or software platform on which the gateway is running.</p>
   *          <note>
   *             <p>Tape Gateway is no longer available on Snow Family devices.</p>
   *          </note>
   * @public
   */
  HostEnvironment?: HostEnvironment | undefined;

  /**
   * <p>A unique identifier for the specific instance of the host platform running the gateway.
   *          This value is only available for certain host environments, and its format depends on the
   *          host environment type.</p>
   * @public
   */
  HostEnvironmentId?: string | undefined;

  /**
   * <p>Date after which this gateway will not receive software updates for new features and bug
   *          fixes.</p>
   * @public
   */
  DeprecationDate?: string | undefined;

  /**
   * <p>The version number of the software running on the gateway appliance.</p>
   * @public
   */
  SoftwareVersion?: string | undefined;
}

/**
 * <p>JoinDomainInput</p>
 * @public
 */
export interface JoinDomainInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The name of the domain that you want the gateway to join.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The organizational unit (OU) is a container in an Active Directory that can hold users,
   *          groups, computers, and other OUs and this parameter specifies the OU that the gateway will
   *          join within the AD domain.</p>
   * @public
   */
  OrganizationalUnit?: string | undefined;

  /**
   * <p>List of IP addresses, NetBIOS names, or host names of your domain server. If you need to
   *          specify the port number include it after the colon (“:”). For example,
   *             <code>mydc.mydomain.com:389</code>.</p>
   *          <note>
   *             <p>S3 File Gateway supports IPv6 addresses in addition to IPv4 and other existing
   *             formats.</p>
   *             <p>FSx File Gateway does not support IPv6.</p>
   *          </note>
   * @public
   */
  DomainControllers?: string[] | undefined;

  /**
   * <p>Specifies the time in seconds, in which the <code>JoinDomain</code> operation must
   *          complete. The default is 20 seconds.</p>
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * <p>Sets the user name of user who has permission to add the gateway to the Active Directory
   *          domain. The domain user account should be enabled to join computers to the domain. For
   *          example, you can use the domain administrator account or an account with delegated
   *          permissions to join computers to the domain.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Sets the password of the user who has permission to add the gateway to the Active
   *          Directory domain.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>JoinDomainOutput</p>
 * @public
 */
export interface JoinDomainOutput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that joined the domain.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>Indicates the status of the gateway as a member of the Active Directory domain.</p>
   *          <note>
   *             <p>This field is only used as part of a <code>JoinDomain</code> request. It is not
   *             affected by Active Directory connectivity changes that occur after the
   *                <code>JoinDomain</code> request succeeds.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code>: Indicates that the <code>JoinDomain</code> operation
   *                failed due to an authentication error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETACHED</code>: Indicates that gateway is not joined to a domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JOINED</code>: Indicates that the gateway has successfully joined a
   *                domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JOINING</code>: Indicates that a <code>JoinDomain</code> operation is in
   *                progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_PERMISSIONS</code>: Indicates that the <code>JoinDomain</code>
   *                operation failed because the specified user lacks the necessary permissions to join
   *                the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_ERROR</code>: Indicates that <code>JoinDomain</code> operation
   *                failed due to a network or connectivity error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code>: Indicates that the <code>JoinDomain</code> operation failed
   *                because the operation didn't complete within the allotted time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN_ERROR</code>: Indicates that the <code>JoinDomain</code> operation
   *                failed due to another type of error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | undefined;
}

/**
 * @public
 */
export interface ListAutomaticTapeCreationPoliciesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomaticTapeCreationPoliciesOutput {
  /**
   * <p>Gets a listing of information about the gateway's automatic tape creation policies,
   *          including the automatic tape creation rules and the gateway that is using the
   *          policies.</p>
   * @public
   */
  AutomaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[] | undefined;
}

/**
 * @public
 */
export interface ListCacheReportsInput {
  /**
   * <p>Opaque pagination token returned from a previous <code>ListCacheReports</code>
   *          operation. If present, <code>Marker</code> specifies where to continue the list from after
   *          a previous call to <code>ListCacheReports</code>. Optional.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListCacheReportsOutput {
  /**
   * <p>A list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the
   *             <code>DescribeCacheReport</code> action, such as report status, completion progress,
   *          start time, end time, filters, and tags.</p>
   * @public
   */
  CacheReportList?: CacheReportInfo[] | undefined;

  /**
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>ListFileShareInput</p>
 * @public
 */
export interface ListFileSharesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If
   *          this field is not present, all file shares under your account are listed.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The maximum number of file shares to return in the response. The value must be an
   *          integer with a value greater than zero. Optional.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>Opaque pagination token returned from a previous ListFileShares operation. If present,
   *             <code>Marker</code> specifies where to continue the list from after a previous call to
   *          ListFileShares. Optional.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>ListFileShareOutput</p>
 * @public
 */
export interface ListFileSharesOutput {
  /**
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>If a value is present, there are more file shares to return. In a subsequent request,
   *          use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set
   *          of file shares.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>An array of information about the S3 File Gateway's file shares.</p>
   * @public
   */
  FileShareInfoList?: FileShareInfo[] | undefined;
}

/**
 * @public
 */
export interface ListFileSystemAssociationsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The maximum number of file system associations to return in the response. If present,
   *             <code>Limit</code> must be an integer with a value greater than zero. Optional.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>Opaque pagination token returned from a previous <code>ListFileSystemAssociations</code>
   *          operation. If present, <code>Marker</code> specifies where to continue the list from after
   *          a previous call to <code>ListFileSystemAssociations</code>. Optional.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListFileSystemAssociationsOutput {
  /**
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>If a value is present, there are more file system associations to return. In a
   *          subsequent request, use <code>NextMarker</code> as the value for <code>Marker</code> to
   *          retrieve the next set of file system associations.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>An array of information about the Amazon FSx gateway's file system
   *          associations.</p>
   * @public
   */
  FileSystemAssociationSummaryList?: FileSystemAssociationSummary[] | undefined;
}

/**
 * <p>A JSON object containing zero or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListGatewaysInput$Limit</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGatewaysInput$Marker</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ListGatewaysInput {
  /**
   * <p>An opaque string that indicates the position at which to begin the returned list of
   *          gateways.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the list of gateways returned be limited to the specified number of
   *          items.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListGatewaysOutput {
  /**
   * <p>An array of <a>GatewayInfo</a> objects.</p>
   * @public
   */
  Gateways?: GatewayInfo[] | undefined;

  /**
   * <p>Use the marker in your next request to fetch the next set of gateways in the list. If
   *          there are no more gateways to list, this field does not appear in the response.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 * @public
 */
export interface ListLocalDisksInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface ListLocalDisksOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>A JSON object containing the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListLocalDisksOutput$Disks</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Disks?: Disk[] | undefined;
}

/**
 * <p>ListTagsForResourceInput</p>
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the list of
   *          tags.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the list of tags returned be limited to the specified number of
   *          items.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>ListTagsForResourceOutput</p>
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>An opaque string that indicates the position at which to stop returning the list of
   *          tags.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An array that contains the tags for the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTapePoolsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you
   *          don't specify a custom tape pool ARN, the response lists all custom tape pools. </p>
   * @public
   */
  PoolARNs?: string[] | undefined;

  /**
   * <p>A string that indicates the position at which to begin the returned list of tape
   *          pools.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An optional number limit for the tape pools in the list returned by this call.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PoolStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
} as const;

/**
 * @public
 */
export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus];

/**
 * <p>Describes a custom tape pool.</p>
 * @public
 */
export interface PoolInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom tape pool. Use the <a>ListTapePools</a> operation to return a list of custom tape pools for your
   *          account and Amazon Web Services Region.</p>
   * @public
   */
  PoolARN?: string | undefined;

  /**
   * <p>The name of the custom tape pool. <code>PoolName</code> can use all ASCII characters,
   *          except '/' and '\'.</p>
   * @public
   */
  PoolName?: string | undefined;

  /**
   * <p>The storage class that is associated with the custom pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  StorageClass?: TapeStorageClass | undefined;

  /**
   * <p>Tape retention lock type, which can be configured in two modes. When configured in
   *          governance mode, Amazon Web Services accounts with specific IAM permissions are authorized
   *          to remove the tape retention lock from archived virtual tapes. When configured in
   *          compliance mode, the tape retention lock cannot be removed by any user, including the root
   *             Amazon Web Services account.</p>
   * @public
   */
  RetentionLockType?: RetentionLockType | undefined;

  /**
   * <p>Tape retention lock time is set in days. Tape retention lock can be enabled for up to
   *          100 years (36,500 days).</p>
   * @public
   */
  RetentionLockTimeInDays?: number | undefined;

  /**
   * <p>Status of the custom tape pool. Pool can be <code>ACTIVE</code> or
   *          <code>DELETED</code>.</p>
   * @public
   */
  PoolStatus?: PoolStatus | undefined;
}

/**
 * @public
 */
export interface ListTapePoolsOutput {
  /**
   * <p>An array of <code>PoolInfo</code> objects, where each object describes a single custom
   *          tape pool. If there are no custom tape pools, the <code>PoolInfos</code> is an empty array.
   *       </p>
   * @public
   */
  PoolInfos?: PoolInfo[] | undefined;

  /**
   * <p>A string that indicates the position at which to begin the returned list of tape pools.
   *          Use the marker in your next request to continue pagination of tape pools. If there are no
   *          more tape pools to list, this element does not appear in the response body. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A JSON object that contains one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTapesInput$Limit</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTapesInput$Marker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTapesInput$TapeARNs</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ListTapesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't
   *          specify a tape ARN, the response lists all tapes in both your VTL and VTS.</p>
   * @public
   */
  TapeARNs?: string[] | undefined;

  /**
   * <p>A string that indicates the position at which to begin the returned list of
   *          tapes.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An optional number limit for the tapes in the list returned by this call.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Describes a virtual tape.</p>
 * @public
 */
export interface TapeInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of a virtual tape.</p>
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * <p>The barcode that identifies a specific virtual tape.</p>
   * @public
   */
  TapeBarcode?: string | undefined;

  /**
   * <p>The size, in bytes, of a virtual tape.</p>
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * <p>The status of the tape.</p>
   * @public
   */
  TapeStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The date that the tape became subject to tape retention lock.</p>
   * @public
   */
  RetentionStartDate?: Date | undefined;

  /**
   * <p>The date that the tape entered the custom tape pool with tape retention lock
   *          enabled.</p>
   * @public
   */
  PoolEntryDate?: Date | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTapesOutput$Marker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTapesOutput$VolumeInfos</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ListTapesOutput {
  /**
   * <p>An array of <a>TapeInfo</a> objects, where each object describes a single
   *          tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is
   *          an empty array.</p>
   * @public
   */
  TapeInfos?: TapeInfo[] | undefined;

  /**
   * <p>A string that indicates the position at which to begin returning the next list of tapes.
   *          Use the marker in your next request to continue pagination of tapes. If there are no more
   *          tapes to list, this element does not appear in the response body.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>ListVolumeInitiatorsInput</p>
 * @public
 */
export interface ListVolumeInitiatorsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes for the gateway.</p>
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * <p>ListVolumeInitiatorsOutput</p>
 * @public
 */
export interface ListVolumeInitiatorsOutput {
  /**
   * <p>The host names and port numbers of all iSCSI initiators that are connected to the
   *          gateway.</p>
   * @public
   */
  Initiators?: string[] | undefined;
}

/**
 * @public
 */
export interface ListVolumeRecoveryPointsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>Describes a storage volume recovery point object.</p>
 * @public
 */
export interface VolumeRecoveryPointInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * <p>The size of the data stored on the volume in bytes.</p>
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   * @public
   */
  VolumeUsageInBytes?: number | undefined;

  /**
   * <p>The time the recovery point was taken.</p>
   * @public
   */
  VolumeRecoveryPointTime?: string | undefined;
}

/**
 * @public
 */
export interface ListVolumeRecoveryPointsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>An array of <a>VolumeRecoveryPointInfo</a> objects.</p>
   * @public
   */
  VolumeRecoveryPointInfos?: VolumeRecoveryPointInfo[] | undefined;
}

/**
 * <p>A JSON object that contains one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListVolumesInput$Limit</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListVolumesInput$Marker</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ListVolumesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>A string that indicates the position at which to begin the returned list of volumes.
   *          Obtain the marker from the response of a previous List iSCSI Volumes request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specifies that the list of volumes returned be limited to the specified number of
   *          items.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Describes a storage volume object.</p>
 * @public
 */
export interface VolumeInfo {
  /**
   * <p>The Amazon Resource Name (ARN) for the storage volume. For example, the following is a
   *          valid ARN:</p>
   *          <p>
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB</code>
   *          </p>
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * <p>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon
   *          Resource Name (ARN), which you use as input for other operations.</p>
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   * @public
   */
  VolumeAttachmentStatus?: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListVolumesOutput$Marker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListVolumesOutput$VolumeInfos</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ListVolumesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>Use the marker in your next request to continue pagination of iSCSI volumes. If there
   *          are no more volumes to list, this field does not appear in the response body.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An array of <a>VolumeInfo</a> objects, where each object describes an iSCSI
   *          volume. If no volumes are defined for the gateway, then <code>VolumeInfos</code> is an
   *          empty array "[]".</p>
   * @public
   */
  VolumeInfos?: VolumeInfo[] | undefined;
}

/**
 * @public
 */
export interface NotifyWhenUploadedInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN: string | undefined;
}

/**
 * @public
 */
export interface NotifyWhenUploadedOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID
   *          format.</p>
   * @public
   */
  NotificationId?: string | undefined;
}

/**
 * <p>RefreshCacheInput</p>
 * @public
 */
export interface RefreshCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share you want to refresh.</p>
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * <p>A comma-separated list of the paths of folders to refresh in the cache. The default is
   *             [<code>"/"</code>]. The default refreshes objects and folders at the root of the Amazon S3 bucket. If <code>Recursive</code> is set to <code>true</code>, the entire S3
   *          bucket that the file share has access to is refreshed.</p>
   *          <p>Do not include <code>/</code> when specifying folder names. For example, you would
   *          specify <code>samplefolder</code> rather than <code>samplefolder/</code>.</p>
   * @public
   */
  FolderList?: string[] | undefined;

  /**
   * <p>A value that specifies whether to recursively refresh folders in the cache. The refresh
   *          includes folders that were in the cache the last time the gateway listed the folder's
   *          contents. If this value set to <code>true</code>, each folder that is listed in
   *             <code>FolderList</code> is recursively updated. Otherwise, subfolders listed in
   *             <code>FolderList</code> are not refreshed. Only objects that are in folders listed
   *          directly under <code>FolderList</code> are found and used for the update. The default is
   *             <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  Recursive?: boolean | undefined;
}

/**
 * <p>RefreshCacheOutput</p>
 * @public
 */
export interface RefreshCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID
   *          format.</p>
   * @public
   */
  NotificationId?: string | undefined;
}

/**
 * <p>RemoveTagsFromResourceInput</p>
 * @public
 */
export interface RemoveTagsFromResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to remove the tags from.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags you want to remove from the specified resource. A tag is composed
   *          of a key-value pair.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>RemoveTagsFromResourceOutput</p>
 * @public
 */
export interface RemoveTagsFromResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the tags were removed from.</p>
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface ResetCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface ResetCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>RetrieveTapeArchiveInput</p>
 * @public
 */
export interface RetrieveTapeArchiveInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual
   *          tape shelf (VTS).</p>
   * @public
   */
  TapeARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to.
   *          Use the <a>ListGateways</a> operation to return a list of gateways for your
   *          account and Amazon Web Services Region.</p>
   *          <p>You retrieve archived virtual tapes to only one gateway and the gateway must be a tape
   *          gateway.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>RetrieveTapeArchiveOutput</p>
 * @public
 */
export interface RetrieveTapeArchiveOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the retrieved virtual tape.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * <p>RetrieveTapeRecoveryPointInput</p>
 * @public
 */
export interface RetrieveTapeRecoveryPointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the
   *          recovery point.</p>
   * @public
   */
  TapeARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>RetrieveTapeRecoveryPointOutput</p>
 * @public
 */
export interface RetrieveTapeRecoveryPointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was
   *          retrieved.</p>
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * <p>SetLocalConsolePasswordInput</p>
 * @public
 */
export interface SetLocalConsolePasswordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The password you want to set for your VM local console.</p>
   * @public
   */
  LocalConsolePassword: string | undefined;
}

/**
 * @public
 */
export interface SetLocalConsolePasswordOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>SetSMBGuestPasswordInput</p>
 * @public
 */
export interface SetSMBGuestPasswordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated
   *          with.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The password that you want to set for your SMB server.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * @public
 */
export interface SetSMBGuestPasswordOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut
 *          down.</p>
 * @public
 */
export interface ShutdownGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut
 *          down.</p>
 * @public
 */
export interface ShutdownGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface StartAvailabilityMonitorTestInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface StartAvailabilityMonitorTestOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface StartCacheReportInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * <p>The ARN of the IAM role used when saving the cache report to Amazon S3.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The ARN of the Amazon S3 bucket where you want to save the cache report.</p>
   *          <note>
   *             <p>We do not recommend saving the cache report to the same Amazon S3 bucket for
   *             which you are generating the report.</p>
   *             <p>This field does not accept access point ARNs.</p>
   *          </note>
   * @public
   */
  LocationARN: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the Amazon S3 bucket where you want to save the
   *          cache report.</p>
   * @public
   */
  BucketRegion: string | undefined;

  /**
   * <p>The DNS name of the VPC endpoint associated with the Amazon S3 where you want to
   *          save the cache report. Optional.</p>
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * <p>The list of filters and parameters that determine which files are included in the
   *          report. You must specify at least one value for <code>InclusionFilters</code> or
   *             <code>ExclusionFilters</code> in a <code>StartCacheReport</code> request.</p>
   * @public
   */
  InclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * <p>The list of filters and parameters that determine which files are excluded from the
   *          report. You must specify at least one value for <code>InclusionFilters</code> or
   *             <code>ExclusionFilters</code> in a <code>StartCacheReport</code> request.</p>
   * @public
   */
  ExclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * <p>A unique identifier that you use to ensure idempotent report generation if you need to
   *          retry an unsuccessful <code>StartCacheReport</code> request. If you retry a request, use
   *          the same <code>ClientToken</code> you specified in the initial request.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>A list of up to 50 key/value tags that you can assign to the cache report. Using tags
   *          can help you categorize your reports and more easily locate them in search results.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartCacheReportOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the cache report generated by the
   *             <code>StartCacheReport</code> request.</p>
   * @public
   */
  CacheReportARN?: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.</p>
 * @public
 */
export interface StartGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          restarted.</p>
 * @public
 */
export interface StartGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomaticTapeCreationPolicyInput {
  /**
   * <p>An automatic tape creation policy consists of a list of automatic tape creation rules.
   *          The rules determine when and how to automatically create new tapes.</p>
   * @public
   */
  AutomaticTapeCreationRules: AutomaticTapeCreationRule[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomaticTapeCreationPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface UpdateBandwidthRateLimitInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The average upload bandwidth rate limit in bits per second.</p>
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * <p>The average download bandwidth rate limit in bits per second.</p>
   * @public
   */
  AverageDownloadRateLimitInBitsPerSec?: number | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle
 *          information was updated.</p>
 * @public
 */
export interface UpdateBandwidthRateLimitOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBandwidthRateLimitScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p> An array containing bandwidth rate limit schedule intervals for a gateway. When no
   *          bandwidth rate limit intervals have been scheduled, the array is empty. </p>
   * @public
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface UpdateBandwidthRateLimitScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>UpdateChapCredentialsInput$InitiatorName</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChapCredentialsInput$TargetARN</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface UpdateChapCredentialsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return the TargetARN for specified
   *          VolumeARN.</p>
   * @public
   */
  TargetARN: string | undefined;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   * @public
   */
  SecretToAuthenticateInitiator: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   * @public
   */
  InitiatorName: string | undefined;

  /**
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g. Windows client).</p>
   *          <p>Byte constraints: Minimum bytes of 12. Maximum bytes of 16.</p>
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   * @public
   */
  SecretToAuthenticateTarget?: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 * @public
 */
export interface UpdateChapCredentialsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target. This is the same target specified in the
   *          request.</p>
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target. This is the same initiator name
   *          specified in the request.</p>
   * @public
   */
  InitiatorName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFileSystemAssociationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file system association that you want to
   *          update.</p>
   * @public
   */
  FileSystemAssociationARN: string | undefined;

  /**
   * <p>The user name of the user credential that has permission to access the root share D$ of
   *          the Amazon FSx file system. The user account must belong to the Amazon FSx
   *          delegated admin user group.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The password of the user credential.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * <p>The refresh cache information for the file share or FSx file systems.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateFileSystemAssociationOutput {
  /**
   * <p>The ARN of the updated file system association.</p>
   * @public
   */
  FileSystemAssociationARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInformationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   * @public
   */
  GatewayName?: string | undefined;

  /**
   * <p>A value that indicates the time zone of the gateway.</p>
   * @public
   */
  GatewayTimezone?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use
   *          to monitor and log events in the gateway.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">What is Amazon CloudWatch
   *             Logs?</a>
   *          </p>
   * @public
   */
  CloudWatchLogGroupARN?: string | undefined;

  /**
   * <p>Specifies the size of the gateway's metadata cache. This setting impacts gateway
   *          performance and hardware recommendations. For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/performance-multiple-file-shares.html">Performance guidance for gateways with multiple file shares</a>
   *          in the <i>Amazon S3 File Gateway User Guide</i>.</p>
   * @public
   */
  GatewayCapacity?: GatewayCapacity | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          updated.</p>
 * @public
 */
export interface UpdateGatewayInformationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   * @public
   */
  GatewayName?: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.</p>
 * @public
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          updated.</p>
 * @public
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>UpdateMaintenanceStartTimeInput$SoftwareUpdatePreferences</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateMaintenanceStartTimeInput$HourOfDay</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface UpdateMaintenanceStartTimeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *          where <i>hh</i> is the hour (00 to 23). The hour of the day is in the time
   *          zone of the gateway.</p>
   * @public
   */
  HourOfDay?: number | undefined;

  /**
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (00 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   * @public
   */
  MinuteOfHour?: number | undefined;

  /**
   * <p>The day of the week component of the maintenance start time week represented as an
   *          ordinal number from 0 to 6, where 0 represents Sunday and 6 represents Saturday.</p>
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal
   *          number from 1 to 28, where 1 represents the first day of the month. It is not possible to
   *          set the maintenance schedule to start on days 29 through 31.</p>
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * <p>A set of variables indicating the software update preferences for the gateway.</p>
   *          <p>Includes <code>AutomaticUpdatePolicy</code> field with the following inputs:</p>
   *          <p>
   *             <code>ALL_VERSIONS</code> - Enables regular gateway maintenance updates.</p>
   *          <p>
   *             <code>EMERGENCY_VERSIONS_ONLY</code> - Disables regular gateway maintenance updates. The
   *          gateway will still receive emergency version updates on rare occasions if necessary to
   *          remedy highly critical security or durability issues. You will be notified before an
   *          emergency version update is applied. These updates are applied during your gateway's
   *          scheduled maintenance window.</p>
   * @public
   */
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance
 *          start time is updated.</p>
 * @public
 */
export interface UpdateMaintenanceStartTimeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>UpdateNFSFileShareInput</p>
 * @public
 */
export interface UpdateNFSFileShareInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share to be updated.</p>
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * <p>A value that specifies the type of server-side encryption that the file share will use
   *          for the data that it stores in Amazon S3.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>Optional. Set to <code>true</code> to use Amazon S3 server-side encryption with
   *          your own KMS key (SSE-KMS), or <code>false</code> to use a key managed by
   *             Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the
   *             <code>EncryptionType</code> parameter instead.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The default values for the file share. Optional.</p>
   * @public
   */
  NFSFileShareDefaults?: NFSFileShareDefaults | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * <p>The list of clients that are allowed to access the S3 File Gateway. The list must
   *          contain either valid IPv4/IPv6 addresses or valid CIDR blocks.</p>
   * @public
   */
  ClientList?: string[] | undefined;

  /**
   * <p>The user mapped to anonymous user.</p>
   *          <p>Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RootSquash</code>: Only root is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoSquash</code>: No one is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllSquash</code>: Everyone is mapped to anonymous user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Squash?: string | undefined;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>The name of the file share. Optional.</p>
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *             <p>A valid NFS file share name can only contain the following characters:
   *                <code>a</code>-<code>z</code>, <code>A</code>-<code>Z</code>,
   *                <code>0</code>-<code>9</code>, <code>-</code>, <code>.</code>, and
   *             <code>_</code>.</p>
   *          </note>
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * <p>Specifies refresh cache information for the file share.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *             <p>This setting is not meant to specify an exact time at which the notification will be
   *             sent. In some cases, the gateway might require more than the specified delay time to
   *             generate and send notifications.</p>
   *          </note>
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;
}

/**
 * <p>UpdateNFSFileShareOutput</p>
 * @public
 */
export interface UpdateNFSFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * <p>UpdateSMBFileShareInput</p>
 * @public
 */
export interface UpdateSMBFileShareInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the SMB file share that you want to update.</p>
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * <p>A value that specifies the type of server-side encryption that the file share will use
   *          for the data that it stores in Amazon S3.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>Optional. Set to <code>true</code> to use Amazon S3 server-side encryption with
   *          your own KMS key (SSE-KMS), or <code>false</code> to use a key managed by
   *             Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the
   *             <code>EncryptionType</code> parameter instead.</p>
   *          <note>
   *             <p>We recommend using <code>EncryptionType</code> instead of <code>KMSEncrypted</code>
   *             to set the file share encryption method. You do not need to provide values for both
   *             parameters.</p>
   *             <p>If values for both parameters exist in the same request, then the specified
   *             encryption methods must not conflict. For example, if <code>EncryptionType</code> is
   *                <code>SseS3</code>, then <code>KMSEncrypted</code> must be <code>false</code>. If
   *                <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>, then
   *                <code>KMSEncrypted</code> must be <code>true</code>.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used
   *          for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric
   *          CMKs. This value must be set if <code>KMSEncrypted</code> is <code>true</code>, or if
   *             <code>EncryptionType</code> is <code>SseKms</code> or <code>DsseKms</code>.</p>
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set write status to read-only, otherwise set to <code>false</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file
   *          share. Set it to <code>false</code> to map file and directory permissions to the POSIX
   *          permissions.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/smb-acl.html">Using Windows ACLs to limit SMB file share
   *             access</a> in the <i>Amazon S3 File Gateway User
   *          Guide</i>.</p>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  SMBACLEnabled?: boolean | undefined;

  /**
   * <p>The files and folders on this share will only be visible to users with read
   *          access.</p>
   * @public
   */
  AccessBasedEnumeration?: boolean | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  AdminUserList?: string[] | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  ValidUserList?: string[] | undefined;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   * @public
   */
  InvalidUserList?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * <p>The case of an object name in an Amazon S3 bucket. For
   *             <code>ClientSpecified</code>, the client determines the case sensitivity. For
   *             <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default
   *          value is <code>ClientSpecified</code>.</p>
   * @public
   */
  CaseSensitivity?: CaseSensitivity | undefined;

  /**
   * <p>The name of the file share. Optional.</p>
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *             <p>A valid SMB file share name cannot contain the following characters:
   *                <code>[</code>,<code>]</code>,<code>#</code>,<code>;</code>,<code><</code>,<code>></code>,<code>:</code>,<code>"</code>,<code>\</code>,<code>/</code>,<code>|</code>,<code>?</code>,<code>*</code>,<code>+</code>,
   *             or ASCII control characters <code>1-31</code>.</p>
   *          </note>
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * <p>Specifies refresh cache information for the file share.</p>
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *             <p>This setting is not meant to specify an exact time at which the notification will be
   *             sent. In some cases, the gateway might require more than the specified delay time to
   *             generate and send notifications.</p>
   *          </note>
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * <p>Specifies whether opportunistic locking is enabled for the SMB file share.</p>
   *          <note>
   *             <p>Enabling opportunistic locking on case-sensitive shares is not recommended for
   *             workloads that involve access to files with the same name in different case.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  OplocksEnabled?: boolean | undefined;
}

/**
 * <p>UpdateSMBFileShareOutput</p>
 * @public
 */
export interface UpdateSMBFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated SMB file share.</p>
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBFileShareVisibilityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>The shares on this gateway appear when listing shares.</p>
   * @public
   */
  FileSharesVisible: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSMBFileShareVisibilityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBLocalGroupsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>A list of Active Directory users and groups that you want to grant special permissions
   *          for SMB file shares on the gateway.</p>
   * @public
   */
  SMBLocalGroups: SMBLocalGroups | undefined;
}

/**
 * @public
 */
export interface UpdateSMBLocalGroupsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBSecurityStrategyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies the type of security strategy.</p>
   *          <p>
   *             <code>ClientSpecified</code>: If you choose this option, requests are established based
   *          on what is negotiated by the client. This option is recommended when you want to maximize
   *          compatibility across different clients in your environment. Supported only for S3 File
   *          Gateway.</p>
   *          <p>
   *             <code>MandatorySigning</code>: If you choose this option, File Gateway only allows
   *          connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with
   *          SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.</p>
   *          <p>
   *             <code>MandatoryEncryption</code>: If you choose this option, File Gateway only allows
   *          connections from SMBv3 clients that have encryption enabled. This option is recommended for
   *          environments that handle sensitive data. This option works with SMB clients on Microsoft
   *          Windows 8, Windows Server 2012 or newer.</p>
   *          <p>
   *             <code>MandatoryEncryptionNoAes128</code>: If you choose this option, File Gateway only
   *          allows connections from SMBv3 clients that use 256-bit AES encryption algorithms. 128-bit
   *          algorithms are not allowed. This option is recommended for environments that handle
   *          sensitive data. It works with SMB clients on Microsoft Windows 8, Windows Server 2012, or
   *          later.</p>
   * @public
   */
  SMBSecurityStrategy: SMBSecurityStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateSMBSecurityStrategyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * <p>A JSON object containing one or more of the following fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>UpdateSnapshotScheduleInput$Description</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateSnapshotScheduleInput$StartAt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateSnapshotScheduleInput$VolumeARN</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface UpdateSnapshotScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   * @public
   */
  StartAt: number | undefined;

  /**
   * <p>Frequency of snapshots. Specify the number of hours between snapshots.</p>
   * @public
   */
  RecurrenceInHours: number | undefined;

  /**
   * <p>Optional description of the snapshot that overwrites the existing description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the updated storage
 *          volume.</p>
 * @public
 */
export interface UpdateSnapshotScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVTLDeviceTypeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the medium changer you want to select.</p>
   * @public
   */
  VTLDeviceARN: string | undefined;

  /**
   * <p>The type of medium changer you want to select.</p>
   *          <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> |
   *             <code>IBM-03584L32-0402</code>
   *          </p>
   * @public
   */
  DeviceType: string | undefined;
}

/**
 * <p>UpdateVTLDeviceTypeOutput</p>
 * @public
 */
export interface UpdateVTLDeviceTypeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the medium changer you have selected.</p>
   * @public
   */
  VTLDeviceARN?: string | undefined;
}
