// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { StorageGatewayServiceException as __BaseException } from "./StorageGatewayServiceException";

/**
 * @public
 * <p>A key-value pair that helps you manage, filter, and search for your resource. Allowed
 *          characters: letters, white space, and numbers, representable in UTF-8, and the following
 *          characters: + - = . _ : /.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Tag key. The key can't start with aws:.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Value of the tag key.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 */
export interface ActivateGatewayInput {
  /**
   * @public
   * <p>Your gateway activation key. You can obtain the activation key by sending an HTTP GET
   *          request with redirects enabled to the gateway IP address (port 80). The redirect URL
   *          returned in the response provides you the activation key for your gateway in the query
   *          string parameter <code>activationKey</code>. It may also include other activation-related
   *          parameters, however, these are merely defaults -- the arguments you pass to the
   *             <code>ActivateGateway</code> API call determine the actual configuration of your
   *          gateway.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html">Getting activation
   *             key</a> in the <i>Storage Gateway User Guide</i>.</p>
   */
  ActivationKey: string | undefined;

  /**
   * @public
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName: string | undefined;

  /**
   * @public
   * <p>A value that indicates the time zone you want to set for the gateway. The time zone is
   *          of the format "GMT-hr:mm" or "GMT+hr:mm". For example, GMT-4:00 indicates the time is 4
   *          hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is
   *          used, for example, for scheduling snapshots and your gateway's maintenance
   *          schedule.</p>
   */
  GatewayTimezone: string | undefined;

  /**
   * @public
   * <p>A value that indicates the Amazon Web Services Region where you want to store your data.
   *          The gateway Amazon Web Services Region specified must be the same Amazon Web Services Region
   *          as the Amazon Web Services Region in your <code>Host</code> header in the request. For more
   *          information about available Amazon Web Services Regions and endpoints for Storage Gateway, see <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">
   *             Storage Gateway endpoints and quotas</a> in the <i>Amazon Web Services
   *             General Reference</i>.</p>
   *
   *          <p>Valid Values: See <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">
   *             Storage Gateway endpoints and quotas</a> in the <i>Amazon Web Services
   *             General Reference</i>.
   *
   *       </p>
   */
  GatewayRegion: string | undefined;

  /**
   * @public
   * <p>A value that defines the type of gateway to activate. The type specified is critical to
   *          all later functions of the gateway and cannot be changed after activation. The default
   *          value is <code>CACHED</code>.</p>
   *
   *          <p>Valid Values: <code>STORED</code> | <code>CACHED</code> | <code>VTL</code> |
   *             <code>VTL_SNOW</code> | <code>FILE_S3</code> | <code>FILE_FSX_SMB</code>
   *          </p>
   */
  GatewayType?: string;

  /**
   * @public
   * <p>The value that indicates the type of tape drive to use for tape gateway. This field is
   *          optional.</p>
   *
   *          <p>Valid Values: <code>IBM-ULT3580-TD5</code>
   *          </p>
   */
  TapeDriveType?: string;

  /**
   * @public
   * <p>The value that indicates the type of medium changer to use for tape gateway. This field
   *          is optional.</p>
   *
   *          <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> |
   *             <code>IBM-03584L32-0402</code>
   *          </p>
   */
  MediumChangerType?: string;

  /**
   * @public
   * <p>A list of up to 50 tags that you can assign to the gateway. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers that can be
   *             represented in UTF-8 format, and the following special characters: + - = . _ : / @. The
   *             maximum length of a tag's key is 128 characters, and the maximum length for a
   *             tag's value is 256 characters.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It
 *          is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as
 *          well as resource-based authorization.</p>
 *
 *          <note>
 *             <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the
 *             gateway name rather than the gateway ID. Changing the name of the gateway has no effect
 *             on the gateway ARN.</p>
 *          </note>
 */
export interface ActivateGatewayOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export type ErrorCode =
  | "ActivationKeyExpired"
  | "ActivationKeyInvalid"
  | "ActivationKeyNotFound"
  | "AuthenticationFailure"
  | "BandwidthThrottleScheduleNotFound"
  | "Blocked"
  | "CannotExportSnapshot"
  | "ChapCredentialNotFound"
  | "DiskAlreadyAllocated"
  | "DiskDoesNotExist"
  | "DiskSizeGreaterThanVolumeMaxSize"
  | "DiskSizeLessThanVolumeSize"
  | "DiskSizeNotGigAligned"
  | "DuplicateCertificateInfo"
  | "DuplicateSchedule"
  | "EndpointNotFound"
  | "GatewayInternalError"
  | "GatewayNotConnected"
  | "GatewayNotFound"
  | "GatewayProxyNetworkConnectionBusy"
  | "IAMNotSupported"
  | "InitiatorInvalid"
  | "InitiatorNotFound"
  | "InternalError"
  | "InvalidEndpoint"
  | "InvalidGateway"
  | "InvalidParameters"
  | "InvalidSchedule"
  | "JoinDomainInProgress"
  | "LocalStorageLimitExceeded"
  | "LunAlreadyAllocated "
  | "LunInvalid"
  | "MaximumContentLengthExceeded"
  | "MaximumTapeCartridgeCountExceeded"
  | "MaximumVolumeCountExceeded"
  | "NetworkConfigurationChanged"
  | "NoDisksAvailable"
  | "NotImplemented"
  | "NotSupported"
  | "OperationAborted"
  | "OutdatedGateway"
  | "ParametersNotImplemented"
  | "RegionInvalid"
  | "RequestTimeout"
  | "ServiceUnavailable"
  | "SnapshotDeleted"
  | "SnapshotIdInvalid"
  | "SnapshotInProgress"
  | "SnapshotNotFound"
  | "SnapshotScheduleNotFound"
  | "StagingAreaFull"
  | "StorageFailure"
  | "TapeCartridgeNotFound"
  | "TargetAlreadyExists"
  | "TargetInvalid"
  | "TargetNotFound"
  | "UnauthorizedOperation"
  | "VolumeAlreadyExists"
  | "VolumeIdInvalid"
  | "VolumeInUse"
  | "VolumeNotFound"
  | "VolumeNotReady";

/**
 * @public
 * <p>Provides additional information about an error that was returned by the service. See the
 *             <code>errorCode</code> and <code>errorDetails</code> members for more information about
 *          the error.</p>
 */
export interface StorageGatewayError {
  /**
   * @public
   * <p>Additional information about the error.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * @public
   * <p>Human-readable text that provides detail about the error that occurred.</p>
   */
  errorDetails?: Record<string, string>;
}

/**
 * @public
 * <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   */
  error?: StorageGatewayError;

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
 * @public
 * <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 */
export class InvalidGatewayRequestException extends __BaseException {
  readonly name: "InvalidGatewayRequestException" = "InvalidGatewayRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A <a>StorageGatewayError</a> that provides more detail about the cause of the
   *          error.</p>
   */
  error?: StorageGatewayError;

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
 */
export type ActiveDirectoryStatus =
  | "ACCESS_DENIED"
  | "DETACHED"
  | "JOINED"
  | "JOINING"
  | "NETWORK_ERROR"
  | "TIMEOUT"
  | "UNKNOWN_ERROR";

/**
 * @public
 */
export interface AddCacheInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddCacheOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>AddTagsToResourceInput</p>
 */
export interface AddTagsToResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The key-value pair that represents the tag you want to add to the resource. The value
   *          can be an empty string.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p>AddTagsToResourceOutput</p>
 */
export interface AddTagsToResourceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  ResourceARN?: string;
}

/**
 * @public
 */
export interface AddUploadBufferInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddUploadBufferOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddWorkingStorageInput$DiskIds</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface AddWorkingStorageInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working
 *          storage was configured.</p>
 */
export interface AddWorkingStorageOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface AssignTapePoolInput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the
   *          tape pool.</p>
   */
  TapeARN: string | undefined;

  /**
   * @public
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>Set permissions to bypass governance retention. If the lock type of the archived tape is
   *             <code>Governance</code>, the tape's archived age is not older than
   *             <code>RetentionLockInDays</code>, and the user does not already have
   *             <code>BypassGovernanceRetention</code>, setting this to TRUE enables the user to bypass
   *          the retention lock. This parameter is set to true by default for calls from the
   *          console.</p>
   *
   *          <p>Valid values: <code>TRUE</code> | <code>FALSE</code>
   *          </p>
   */
  BypassGovernanceRetention?: boolean;
}

/**
 * @public
 */
export interface AssignTapePoolOutput {
  /**
   * @public
   * <p>The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape
   *          pool.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 * <p>The refresh cache information for the file share or FSx file systems.</p>
 */
export interface CacheAttributes {
  /**
   * @public
   * <p>Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of
   *          time since the last refresh after which access to the directory would cause the file
   *          gateway to first refresh that directory's contents from the Amazon S3 bucket
   *          or Amazon FSx file system. The TTL duration is in seconds.</p>
   *
   *          <p>Valid Values:0, 300 to 2,592,000 seconds (5 minutes to 30 days)</p>
   */
  CacheStaleTimeoutInSeconds?: number;
}

/**
 * @public
 * <p>Specifies network configuration information for the gateway associated with the Amazon FSx file system.</p>
 */
export interface EndpointNetworkConfiguration {
  /**
   * @public
   * <p>A list of gateway IP addresses on which the associated Amazon FSx file system is
   *          available.</p>
   *          <note>
   *             <p>If multiple file systems are associated with this gateway, this field is
   *             required.</p>
   *          </note>
   */
  IpAddresses?: string[];
}

/**
 * @public
 */
export interface AssociateFileSystemInput {
  /**
   * @public
   * <p>The user name of the user credential that has permission to access the root share D$ of
   *          the Amazon FSx file system. The user account must belong to the Amazon FSx
   *          delegated admin user group.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The password of the user credential.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>A unique string value that you supply that is used by the FSx File Gateway to ensure
   *          idempotent file system association creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with
   *          the FSx File Gateway.</p>
   */
  LocationARN: string | undefined;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to the file system association. Each tag is
   *          a key-value pair.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * @public
   * <p>The refresh cache information for the file share or FSx file systems.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>Specifies the network configuration information for the gateway associated with the
   *             Amazon FSx file system.</p>
   *          <note>
   *             <p>If multiple file systems are associated with this gateway, this parameter's
   *                <code>IpAddresses</code> field is required.</p>
   *          </note>
   */
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
}

/**
 * @public
 */
export interface AssociateFileSystemOutput {
  /**
   * @public
   * <p>The ARN of the newly created file system association.</p>
   */
  FileSystemAssociationARN?: string;
}

/**
 * @public
 * <p>AttachVolumeInput</p>
 */
export interface AttachVolumeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway that you want to attach the volume
   *          to.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   */
  TargetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.</p>
   */
  VolumeARN: string | undefined;

  /**
   * @public
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *
   *          <p>Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>The unique device ID or other distinguishing data that identifies the local disk used to
   *          create the volume. This value is only required when you are attaching a stored
   *          volume.</p>
   */
  DiskId?: string;
}

/**
 * @public
 * <p>AttachVolumeOutput</p>
 */
export interface AttachVolumeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume that was attached to the gateway.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for
   *          the initiator that was used to connect to the target.</p>
   */
  TargetARN?: string;
}

/**
 * @public
 * <p>An automatic tape creation policy consists of automatic tape creation rules where each
 *          rule defines when and how to create new tapes. For more information about automatic tape
 *          creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.</p>
 */
export interface AutomaticTapeCreationRule {
  /**
   * @public
   * <p>A prefix that you append to the barcode of the virtual tape that you are creating. This
   *          prefix makes the barcode unique.</p>
   *
   *          <note>
   *             <p>The prefix must be 1-4 characters in length and must be one of the uppercase letters
   *             from A to Z.</p>
   *          </note>
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * @public
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the Amazon S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into
   *          the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the
   *          pool.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   */
  TapeSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The minimum number of available virtual tapes that the gateway maintains at all times.
   *          If the number of tapes on the gateway goes below this value, the gateway creates as many
   *          new tapes as are needed to have <code>MinimumNumTapes</code> on the gateway. For more
   *          information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.</p>
   */
  MinimumNumTapes: number | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to indicate that tapes are to be archived as
   *          write-once-read-many (WORM). Set to <code>false</code> when WORM is not enabled for
   *          tapes.</p>
   */
  Worm?: boolean;
}

/**
 * @public
 * <p>Information about the gateway's automatic tape creation policies, including the
 *          automatic tape creation rules and the gateway that is using the policies.</p>
 */
export interface AutomaticTapeCreationPolicyInfo {
  /**
   * @public
   * <p>An automatic tape creation policy consists of a list of automatic tape creation rules.
   *          This returns the rules that determine when and how to automatically create new
   *          tapes.</p>
   */
  AutomaticTapeCreationRules?: AutomaticTapeCreationRule[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export type AvailabilityMonitorTestStatus = "COMPLETE" | "FAILED" | "PENDING";

/**
 * @public
 * <p> Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit
 *          schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit
 *          interval defines a period of time on one or more days of the week, during which bandwidth
 *          rate limits are specified for uploading, downloading, or both. </p>
 */
export interface BandwidthRateLimitInterval {
  /**
   * @public
   * <p> The hour of the day to start the bandwidth rate limit interval. </p>
   */
  StartHourOfDay: number | undefined;

  /**
   * @public
   * <p> The minute of the hour to start the bandwidth rate limit interval. The interval begins
   *          at the start of that minute. To begin an interval exactly at the start of the hour, use the
   *          value <code>0</code>. </p>
   */
  StartMinuteOfHour: number | undefined;

  /**
   * @public
   * <p> The hour of the day to end the bandwidth rate limit interval. </p>
   */
  EndHourOfDay: number | undefined;

  /**
   * @public
   * <p> The minute of the hour to end the bandwidth rate limit interval. </p>
   *
   *          <important>
   *             <p> The bandwidth rate limit interval ends at the end of the minute. To end an interval
   *             at the end of an hour, use the value <code>59</code>. </p>
   *          </important>
   */
  EndMinuteOfHour: number | undefined;

  /**
   * @public
   * <p> The days of the week component of the bandwidth rate limit interval, represented as
   *          ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday. </p>
   */
  DaysOfWeek: number[] | undefined;

  /**
   * @public
   * <p> The average upload rate limit component of the bandwidth rate limit interval, in bits
   *          per second. This field does not appear in the response if the upload rate limit is not set.
   *       </p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * @public
   * <p> The average download rate limit component of the bandwidth rate limit interval, in bits
   *          per second. This field does not appear in the response if the download rate limit is not
   *          set. </p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;
}

/**
 * @public
 * <p>Lists iSCSI information about a volume.</p>
 */
export interface VolumeiSCSIAttributes {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  TargetARN?: string;

  /**
   * @public
   * <p>The network interface identifier.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The port used to communicate with iSCSI targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * @public
   * <p>The logical disk number.</p>
   */
  LunNumber?: number;

  /**
   * @public
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;
}

/**
 * @public
 * <p>Describes an iSCSI cached volume.</p>
 */
export interface CachediSCSIVolume {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The unique identifier of the volume, e.g., vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>One of the VolumeType enumeration values that describes the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeStatus?: string;

  /**
   * @public
   * <p>A value that indicates whether a storage volume is attached to or detached from a
   *          gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving
   *             your volumes to a different gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * @public
   * <p>The size, in bytes, of the volume capacity.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * @public
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the cached volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * @public
   * <p>If the cached volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g., snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * @public
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *          attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;

  /**
   * @public
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   *          timestamp.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The size of the data stored on the volume in bytes. This value is calculated based on
   *          the number of blocks that are touched, instead of the actual amount of data written. This
   *          value can be useful for sequential write patterns but less accurate for random write
   *          patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the
   *          volume, which is the value that is used to calculate your bill.</p>
   *
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *
   *             <p>If you use a delete tool that overwrites the data on your volume with random data,
   *             your usage will not be reduced. This is because the random data is not compressible. If
   *             you want to reduce the amount of billed storage on your volume, we recommend overwriting
   *             your files with zeros to compress the data to a negligible amount of actual
   *             storage.</p>
   *          </note>
   */
  VolumeUsedInBytes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   */
  TargetName?: string;
}

/**
 * @public
 * <p>CancelArchivalInput</p>
 */
export interface CancelArchivalInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving
   *          for.</p>
   */
  TapeARN: string | undefined;
}

/**
 * @public
 * <p>CancelArchivalOutput</p>
 */
export interface CancelArchivalOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which archiving was
   *          canceled.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 * <p>CancelRetrievalInput</p>
 */
export interface CancelRetrievalInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval
   *          for.</p>
   */
  TapeARN: string | undefined;
}

/**
 * @public
 * <p>CancelRetrievalOutput</p>
 */
export interface CancelRetrievalOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which retrieval was
   *          canceled.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 */
export type CaseSensitivity = "CaseSensitive" | "ClientSpecified";

/**
 * @public
 * <p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports
 *          authentication between your gateway and iSCSI initiators.</p>
 */
export interface ChapInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  TargetARN?: string;

  /**
   * @public
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   */
  SecretToAuthenticateInitiator?: string;

  /**
   * @public
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;

  /**
   * @public
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g., Windows client).</p>
   */
  SecretToAuthenticateTarget?: string;
}

/**
 * @public
 */
export interface CreateCachediSCSIVolumeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot;
   *          otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   */
  TargetName: string | undefined;

  /**
   * @public
   * <p>The ARN for an existing volume. Specifying this ARN makes the new volume into an exact
   *          copy of the specified existing volume's latest recovery point. The
   *             <code>VolumeSizeInBytes</code> value for this new volume must be equal to or larger than
   *          the size of the existing volume, in bytes.</p>
   */
  SourceVolumeARN?: string;

  /**
   * @public
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *
   *          <p>Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>A list of up to 50 tags that you can assign to a cached volume. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers that you can
   *             represent in UTF-8 format, and the following special characters: + - = . _ : / @. The
   *             maximum length of a tag's key is 128 characters, and the maximum length for a
   *             tag's value is 256 characters.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateCachediSCSIVolumeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   *          initiators can use to connect to the target.</p>
   */
  TargetARN?: string;
}

/**
 * @public
 * <p>Describes Network File System (NFS) file share default values. Files and folders stored
 *          as Amazon S3 objects in S3 buckets don't, by default, have Unix file
 *          permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3
 *          objects that represent files and folders are assigned these default Unix permissions. This
 *          operation is only supported for S3 File Gateways.</p>
 */
export interface NFSFileShareDefaults {
  /**
   * @public
   * <p>The Unix file mode in the form "nnnn". For example, <code>0666</code> represents the
   *          default file mode inside the file share. The default value is <code>0666</code>.</p>
   */
  FileMode?: string;

  /**
   * @public
   * <p>The Unix directory mode in the form "nnnn". For example, <code>0666</code> represents
   *          the default access mode for all directories inside the file share. The default value is
   *             <code>0777</code>.</p>
   */
  DirectoryMode?: string;

  /**
   * @public
   * <p>The default group ID for the file share (unless the files have another group ID
   *          specified). The default value is <code>nfsnobody</code>.</p>
   */
  GroupId?: number;

  /**
   * @public
   * <p>The default owner ID for files in the file share (unless the files have another owner ID
   *          specified). The default value is <code>nfsnobody</code>.</p>
   */
  OwnerId?: number;
}

/**
 * @public
 */
export type ObjectACL =
  | "authenticated-read"
  | "aws-exec-read"
  | "bucket-owner-full-control"
  | "bucket-owner-read"
  | "private"
  | "public-read"
  | "public-read-write";

/**
 * @public
 * <p>CreateNFSFileShareInput</p>
 */
export interface CreateNFSFileShareInput {
  /**
   * @public
   * <p>A unique string value that you supply that is used by S3 File Gateway to ensure
   *          idempotent file share creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>File share default values. Optional.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file
   *          share.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it
   *          accesses the underlying storage.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::my-bucket/prefix/</code>
   *             </p>
   *
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   */
  LocationARN: string | undefined;

  /**
   * @public
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * @public
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * @public
   * <p>The list of clients that are allowed to access the S3 File Gateway. The list must
   *          contain either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
   * @public
   * <p>A value that maps a user to anonymous user.</p>
   *
   *          <p>Valid values are the following:</p>
   *
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
   */
  Squash?: string;

  /**
   * @public
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * @public
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a
   *          key-value pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * @public
   * <p>Specifies refresh cache information for the file share.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *          </note>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   */
  NotificationPolicy?: string;

  /**
   * @public
   * <p>Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  VPCEndpointDNSName?: string;

  /**
   * @public
   * <p>Specifies the Region of the S3 bucket where the NFS file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  BucketRegion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   */
  AuditDestinationARN?: string;
}

/**
 * @public
 * <p>CreateNFSFileShareOutput</p>
 */
export interface CreateNFSFileShareOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created file share.</p>
   */
  FileShareARN?: string;
}

/**
 * @public
 * <p>CreateSMBFileShareInput</p>
 */
export interface CreateSMBFileShareInput {
  /**
   * @public
   * <p>A unique string value that you supply that is used by S3 File Gateway to ensure
   *          idempotent file share creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>The ARN of the S3 File Gateway on which you want to create a file share.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it
   *          accesses the underlying storage.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::my-bucket/prefix/</code>
   *             </p>
   *
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   */
  LocationARN: string | undefined;

  /**
   * @public
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * @public
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * @public
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * @public
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file
   *          share. Set it to <code>false</code> to map file and directory permissions to the POSIX
   *          permissions.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to
   *             control access to an SMB file share</a> in the <i>Storage Gateway User
   *             Guide</i>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  SMBACLEnabled?: boolean;

  /**
   * @public
   * <p>The files and folders on this share will only be visible to users with read
   *          access.</p>
   */
  AccessBasedEnumeration?: boolean;

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that will be granted administrator
   *          privileges on the file share. These users can do all file operations as the super-user.
   *          Acceptable formats include: <code>DOMAIN\User1</code>, <code>user1</code>,
   *             <code>@group1</code>, and <code>@DOMAIN\group1</code>.</p>
   *
   *          <important>
   *             <p>Use this option very carefully, because any user in this list can do anything they
   *             like on the file share, regardless of file permissions.</p>
   *          </important>
   */
  AdminUserList?: string[];

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *             <a href=""></a> share. A group must be prefixed with the @ character. Acceptable formats
   *          include: <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * @public
   * <p>The authentication method that users use to access the file share. The default is
   *             <code>ActiveDirectory</code>.</p>
   *
   *          <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code>
   *          </p>
   */
  Authentication?: string;

  /**
   * @public
   * <p>The case of an object name in an Amazon S3 bucket. For
   *             <code>ClientSpecified</code>, the client determines the case sensitivity. For
   *             <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default
   *          value is <code>ClientSpecified</code>.</p>
   */
  CaseSensitivity?: CaseSensitivity | string;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a
   *          key-value pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * @public
   * <p>Specifies refresh cache information for the file share.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *          </note>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   */
  NotificationPolicy?: string;

  /**
   * @public
   * <p>Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  VPCEndpointDNSName?: string;

  /**
   * @public
   * <p>Specifies the Region of the S3 bucket where the SMB file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  BucketRegion?: string;

  /**
   * @public
   * <p>Specifies whether opportunistic locking is enabled for the SMB file share.</p>
   *          <note>
   *             <p>Enabling opportunistic locking on case-sensitive shares is not recommended for
   *             workloads that involve access to files with the same name in different case.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  OplocksEnabled?: boolean;
}

/**
 * @public
 * <p>CreateSMBFileShareOutput</p>
 */
export interface CreateSMBFileShareOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created file share.</p>
   */
  FileShareARN?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 */
export interface CreateSnapshotInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;

  /**
   * @public
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field.</p>
   */
  SnapshotDescription: string | undefined;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface CreateSnapshotOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The snapshot ID that is used to refer to the snapshot in future operations such as
   *          describing snapshots (Amazon Elastic Compute Cloud API <code>DescribeSnapshots</code>) or
   *          creating a volume from a snapshot (<a>CreateStorediSCSIVolume</a>).</p>
   */
  SnapshotId?: string;
}

/**
 * @public
 * <p>An internal server error has occurred because the service is unavailable. For more
 *          information, see the error and message fields.</p>
 */
export class ServiceUnavailableError extends __BaseException {
  readonly name: "ServiceUnavailableError" = "ServiceUnavailableError";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   */
  error?: StorageGatewayError;

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
   * @public
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  VolumeARN: string | undefined;

  /**
   * @public
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field.</p>
   */
  SnapshotDescription: string | undefined;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The time the volume was created from the recovery point.</p>
   */
  VolumeRecoveryPointTime?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 */
export interface CreateStorediSCSIVolumeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the gateway local disk that is configured as a stored volume.
   *          Use <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html">ListLocalDisks</a> to
   *          list disk IDs for a gateway.</p>
   */
  DiskId: string | undefined;

  /**
   * @public
   * <p>The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot;
   *          otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>Set to <code>true</code> if you want to preserve the data on the local disk. Otherwise,
   *          set to <code>false</code> to create an empty volume.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  PreserveExistingData: boolean | undefined;

  /**
   * @public
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   */
  TargetName: string | undefined;

  /**
   * @public
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *
   *          <p>Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface CreateStorediSCSIVolumeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   *          initiators can use to connect to the target.</p>
   */
  TargetARN?: string;
}

/**
 * @public
 */
export type RetentionLockType = "COMPLIANCE" | "GOVERNANCE" | "NONE";

/**
 * @public
 */
export type TapeStorageClass = "DEEP_ARCHIVE" | "GLACIER";

/**
 * @public
 */
export interface CreateTapePoolInput {
  /**
   * @public
   * <p>The name of the new custom tape pool.</p>
   */
  PoolName: string | undefined;

  /**
   * @public
   * <p>The storage class that is associated with the new custom pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  StorageClass: TapeStorageClass | string | undefined;

  /**
   * @public
   * <p>Tape retention lock can be configured in two modes. When configured in governance mode,
   *             Amazon Web Services accounts with specific IAM permissions are authorized to remove the
   *          tape retention lock from archived virtual tapes. When configured in compliance mode, the
   *          tape retention lock cannot be removed by any user, including the root Amazon Web Services account.</p>
   */
  RetentionLockType?: RetentionLockType | string;

  /**
   * @public
   * <p>Tape retention lock time is set in days. Tape retention lock can be enabled for up to
   *          100 years (36,500 days).</p>
   */
  RetentionLockTimeInDays?: number;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTapePoolOutput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the
   *             <a>ListTapePools</a> operation to return a list of tape pools for your
   *          account and Amazon Web Services Region.</p>
   */
  PoolARN?: string;
}

/**
 * @public
 * <p>CreateTapesInput</p>
 */
export interface CreateTapesInput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tapes with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The size, in bytes, of the virtual tapes that you want to create.</p>
   *
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p>
   *          </note>
   */
  TapeSizeInBytes: number | undefined;

  /**
   * @public
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   *
   *          <note>
   *             <p>Using the same <code>ClientToken</code> prevents creating the tape multiple
   *             times.</p>
   *          </note>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>The number of virtual tapes that you want to create.</p>
   */
  NumTapesToCreate: number | undefined;

  /**
   * @public
   * <p>A prefix that you append to the barcode of the virtual tape you are creating. This
   *          prefix makes the barcode unique.</p>
   *
   *          <note>
   *             <p>The prefix must be 1-4 characters in length and must be one of the uppercase letters
   *             from A to Z.</p>
   *          </note>
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>Set to <code>TRUE</code> if the tape you are creating is to be configured as a
   *          write-once-read-many (WORM) tape.</p>
   */
  Worm?: boolean;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapesOutput {
  /**
   * @public
   * <p>A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that
   *          were created.</p>
   */
  TapeARNs?: string[];
}

/**
 * @public
 * <p>CreateTapeWithBarcodeInput</p>
 */
export interface CreateTapeWithBarcodeInput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tape with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The size, in bytes, of the virtual tape that you want to create.</p>
   *
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p>
   *          </note>
   */
  TapeSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The barcode that you want to assign to the tape.</p>
   *
   *          <note>
   *             <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been
   *             deleted.</p>
   *          </note>
   */
  TapeBarcode: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Deep Archive) that corresponds to the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>Set to <code>TRUE</code> if the tape you are creating is to be configured as a
   *          write-once-read-many (WORM) tape.</p>
   */
  Worm?: boolean;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each
   *          tag is a key-value pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapeWithBarcodeOutput {
  /**
   * @public
   * <p>A unique Amazon Resource Name (ARN) that represents the virtual tape that was
   *          created.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 */
export interface DeleteAutomaticTapeCreationPolicyInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomaticTapeCreationPolicyOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteBandwidthRateLimitInput$BandwidthType</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface DeleteBandwidthRateLimitInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>One of the BandwidthType values that indicates the gateway bandwidth rate limit to
   *          delete.</p>
   *
   *          <p>Valid Values: <code>UPLOAD</code> | <code>DOWNLOAD</code> | <code>ALL</code>
   *          </p>
   */
  BandwidthType: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth
 *          rate information was deleted.</p>
 */
export interface DeleteBandwidthRateLimitOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 */
export interface DeleteChapCredentialsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  TargetARN: string | undefined;

  /**
   * @public
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface DeleteChapCredentialsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  TargetARN?: string;

  /**
   * @public
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;
}

/**
 * @public
 * <p>DeleteFileShareInput</p>
 */
export interface DeleteFileShareInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share to be deleted.</p>
   */
  FileShareARN: string | undefined;

  /**
   * @public
   * <p>If this value is set to <code>true</code>, the operation deletes a file share
   *          immediately and aborts all data uploads to Amazon Web Services. Otherwise, the file share is
   *          not deleted until all data is uploaded to Amazon Web Services. This process aborts the data
   *          upload process, and the file share enters the <code>FORCE_DELETING</code> status.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ForceDelete?: boolean;
}

/**
 * @public
 * <p>DeleteFileShareOutput</p>
 */
export interface DeleteFileShareOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted file share.</p>
   */
  FileShareARN?: string;
}

/**
 * @public
 * <p>A JSON object containing the ID of the gateway to delete.</p>
 */
export interface DeleteGatewayInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the ID of the deleted gateway.</p>
 */
export interface DeleteGatewayOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleInput {
  /**
   * @public
   * <p>The volume which snapshot schedule to delete.</p>
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleOutput {
  /**
   * @public
   * <p>The volume which snapshot schedule was deleted.</p>
   */
  VolumeARN?: string;
}

/**
 * @public
 * <p>DeleteTapeInput</p>
 */
export interface DeleteTapeInput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is
   *          associated with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete.</p>
   */
  TapeARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with
   *          tape retention lock. Only archived tapes with tape retention lock set to
   *             <code>governance</code> can be deleted. Archived tapes with tape retention lock set to
   *             <code>compliance</code> can't be deleted.</p>
   */
  BypassGovernanceRetention?: boolean;
}

/**
 * @public
 * <p>DeleteTapeOutput</p>
 */
export interface DeleteTapeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted virtual tape.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 * <p>DeleteTapeArchiveInput</p>
 */
export interface DeleteTapeArchiveInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf
   *          (VTS).</p>
   */
  TapeARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with
   *          tape retention lock. Only archived tapes with tape retention lock set to
   *             <code>governance</code> can be deleted. Archived tapes with tape retention lock set to
   *             <code>compliance</code> can't be deleted.</p>
   */
  BypassGovernanceRetention?: boolean;
}

/**
 * @public
 * <p>DeleteTapeArchiveOutput</p>
 */
export interface DeleteTapeArchiveOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual
   *          tape shelf (VTS).</p>
   */
  TapeARN?: string;
}

/**
 * @public
 */
export interface DeleteTapePoolInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom tape pool to delete.</p>
   */
  PoolARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTapePoolOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom tape pool being deleted.</p>
   */
  PoolARN?: string;
}

/**
 * @public
 * <p>A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to
 *          delete.</p>
 */
export interface DeleteVolumeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was
 *          deleted.</p>
 */
export interface DeleteVolumeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same
   *          ARN you provided in the request.</p>
   */
  VolumeARN?: string;
}

/**
 * @public
 */
export interface DescribeAvailabilityMonitorTestInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityMonitorTestOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The status of the high availability monitoring test. If a test hasn't been
   *          performed, the value of this field is null.</p>
   */
  Status?: AvailabilityMonitorTestStatus | string;

  /**
   * @public
   * <p>The time the high availability monitoring test was started. If a test hasn't been
   *          performed, the value of this field is null.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface DescribeBandwidthRateLimitInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeBandwidthRateLimitOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The average upload bandwidth rate limit in bits per second. This field does not appear
   *          in the response if the upload rate limit is not set.</p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * @public
   * <p>The average download bandwidth rate limit in bits per second. This field does not appear
   *          in the response if the download rate limit is not set.</p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;
}

/**
 * @public
 */
export interface DescribeBandwidthRateLimitScheduleInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeBandwidthRateLimitScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p> An array that contains the bandwidth rate limit intervals for a tape or volume gateway. </p>
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
}

/**
 * @public
 */
export interface DescribeCacheInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeCacheOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds?: string[];

  /**
   * @public
   * <p>The amount of cache in bytes allocated to a gateway.</p>
   */
  CacheAllocatedInBytes?: number;

  /**
   * @public
   * <p>Percent use of the gateway's cache storage. This metric applies only to the
   *          gateway-cached volume setup. The sample is taken at the end of the reporting period.</p>
   */
  CacheUsedPercentage?: number;

  /**
   * @public
   * <p>The file share's contribution to the overall percentage of the gateway's cache
   *          that has not been persisted to Amazon Web Services. The sample is taken at the end of the
   *          reporting period.</p>
   */
  CacheDirtyPercentage?: number;

  /**
   * @public
   * <p>Percent of application read operations from the file shares that are served from cache.
   *          The sample is taken at the end of the reporting period.</p>
   */
  CacheHitPercentage?: number;

  /**
   * @public
   * <p>Percent of application read operations from the file shares that are not served from
   *          cache. The sample is taken at the end of the reporting period.</p>
   */
  CacheMissPercentage?: number;
}

/**
 * @public
 */
export interface DescribeCachediSCSIVolumesInput {
  /**
   * @public
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          cached volume. All of the specified cached volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   */
  VolumeARNs: string[] | undefined;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeCachediSCSIVolumesOutput {
  /**
   * @public
   * <p>An array of objects where each object contains metadata about one cached volume.</p>
   */
  CachediSCSIVolumes?: CachediSCSIVolume[];
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume
 *          target.</p>
 */
export interface DescribeChapCredentialsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  TargetARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeChapCredentialsOutput {
  /**
   * @public
   * <p>An array of <a>ChapInfo</a> objects that represent CHAP credentials. Each
   *          object in the array contains CHAP credential information for one target-initiator pair. If
   *          no CHAP credentials are set, an empty array is returned. CHAP credential information is
   *          provided in a JSON object with the following fields:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>InitiatorName</b>: The iSCSI initiator that connects to
   *                the target.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SecretToAuthenticateInitiator</b>: The secret key that
   *                the initiator (for example, the Windows client) must provide to participate in mutual
   *                CHAP with the target.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SecretToAuthenticateTarget</b>: The secret key that the
   *                target must provide to participate in mutual CHAP with the initiator (e.g. Windows
   *                client).</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TargetARN</b>: The Amazon Resource Name (ARN) of the
   *                storage volume.</p>
   *
   *             </li>
   *          </ul>
   */
  ChapCredentials?: ChapInfo[];
}

/**
 * @public
 */
export interface DescribeFileSystemAssociationsInput {
  /**
   * @public
   * <p>An array containing the Amazon Resource Name (ARN) of each file system association to be
   *          described.</p>
   */
  FileSystemAssociationARNList: string[] | undefined;
}

/**
 * @public
 * <p>Detailed information on file system association status.</p>
 */
export interface FileSystemAssociationStatusDetail {
  /**
   * @public
   * <p>The error code for a given file system association status.</p>
   */
  ErrorCode?: string;
}

/**
 * @public
 * <p>Describes the object returned by <code>DescribeFileSystemAssociations</code> that
 *          describes a created file system association.</p>
 */
export interface FileSystemAssociationInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file system association.</p>
   */
  FileSystemAssociationARN?: string;

  /**
   * @public
   * <p>The ARN of the backend Amazon FSx file system used for storing file data. For
   *          information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_FileSystem.html">FileSystem</a> in the
   *                <i>Amazon FSx API Reference</i>.</p>
   */
  LocationARN?: string;

  /**
   * @public
   * <p>The status of the file system association. Valid Values: <code>AVAILABLE</code> |
   *             <code>CREATING</code> | <code>DELETING</code> | <code>FORCE_DELETING</code> |
   *             <code>UPDATING</code> | <code>ERROR</code>
   *          </p>
   */
  FileSystemAssociationStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The refresh cache information for the file share or FSx file systems.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>Specifies network configuration information for the gateway associated with the Amazon FSx file system.</p>
   *          <note>
   *             <p>If multiple file systems are associated with this gateway, this parameter's
   *                <code>IpAddresses</code> field is required.</p>
   *          </note>
   */
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration;

  /**
   * @public
   * <p>An array containing the FileSystemAssociationStatusDetail data type, which provides
   *          detailed information on file system association status.</p>
   */
  FileSystemAssociationStatusDetails?: FileSystemAssociationStatusDetail[];
}

/**
 * @public
 */
export interface DescribeFileSystemAssociationsOutput {
  /**
   * @public
   * <p>An array containing the <code>FileSystemAssociationInfo</code> data type of each file
   *          system association to be described.
   *          </p>
   */
  FileSystemAssociationInfoList?: FileSystemAssociationInfo[];
}

/**
 * @public
 * <p>A JSON object containing the ID of the gateway.</p>
 */
export interface DescribeGatewayInformationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
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
 * @public
 * <p>Describes a gateway's network interface.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The Internet Protocol version 4 (IPv4) address of the interface.</p>
   */
  Ipv4Address?: string;

  /**
   * @public
   * <p>The Media Access Control (MAC) address of the interface.</p>
   *
   *          <note>
   *             <p>This is currently unsupported and will not be returned in output.</p>
   *          </note>
   */
  MacAddress?: string;

  /**
   * @public
   * <p>The Internet Protocol version 6 (IPv6) address of the interface. <i>Currently not
   *             supported</i>.</p>
   */
  Ipv6Address?: string;
}

/**
 * @public
 */
export type HostEnvironment = "EC2" | "HYPER-V" | "KVM" | "OTHER" | "SNOWBALL" | "VMWARE";

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeGatewayInformationOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * @public
   * <p>A value that indicates the time zone configured for the gateway.</p>
   */
  GatewayTimezone?: string;

  /**
   * @public
   * <p>A value that indicates the operating state of the gateway.</p>
   */
  GatewayState?: string;

  /**
   * @public
   * <p>A <a>NetworkInterface</a> array that contains descriptions of the gateway
   *          network interfaces.</p>
   */
  GatewayNetworkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * @public
   * <p>The date on which an update to the gateway is available. This date is in the time zone
   *          of the gateway. If the gateway is not available for an update this field is not returned in
   *          the response.</p>
   */
  NextUpdateAvailabilityDate?: string;

  /**
   * @public
   * <p>The date on which the last software update was applied to the gateway. If the gateway
   *          has never been updated, this field does not return a value in the response. This only only
   *          exist and returns once it have been chosen and set by the SGW service, based on the OS
   *          version of the gateway VM</p>
   */
  LastSoftwareUpdate?: string;

  /**
   * @public
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;

  /**
   * @public
   * <p>A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each
   *          tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all
   *          tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The configuration settings for the virtual private cloud (VPC) endpoint for your
   *          gateway.</p>
   */
  VPCEndpoint?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to
   *          monitor events in the gateway. This field only only exist and returns once it have been
   *          chosen and set by the SGW service, based on the OS version of the gateway VM</p>
   */
  CloudWatchLogGroupARN?: string;

  /**
   * @public
   * <p>The type of hardware or software platform on which the gateway is running.</p>
   */
  HostEnvironment?: HostEnvironment | string;

  /**
   * @public
   * <p>The type of endpoint for your gateway.</p>
   *
   *          <p>Valid Values: <code>STANDARD</code> | <code>FIPS</code>
   *          </p>
   */
  EndpointType?: string;

  /**
   * @public
   * <p>Date after which this gateway will not receive software updates for new features.</p>
   */
  SoftwareUpdatesEndDate?: string;

  /**
   * @public
   * <p>Date after which this gateway will not receive software updates for new features and bug
   *          fixes.</p>
   */
  DeprecationDate?: string;

  /**
   * @public
   * <p>Specifies the size of the gateway's metadata cache.</p>
   */
  GatewayCapacity?: GatewayCapacity | string;

  /**
   * @public
   * <p>A list of the metadata cache sizes that the gateway can support based on its current
   *          hardware specifications.</p>
   */
  SupportedGatewayCapacities?: (GatewayCapacity | string)[];

  /**
   * @public
   * <p>A unique identifier for the specific instance of the host platform running the gateway.
   *          This value is only available for certain host environments, and its format depends on the
   *          host environment type.</p>
   */
  HostEnvironmentId?: string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface DescribeMaintenanceStartTimeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 *
 *          <ul>
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
 */
export interface DescribeMaintenanceStartTimeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *          where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time
   *          zone of the gateway.</p>
   */
  HourOfDay?: number;

  /**
   * @public
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (0 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour?: number;

  /**
   * @public
   * <p>An ordinal number between 0 and 6 that represents the day of the week, where 0
   *          represents Sunday and 6 represents Saturday. The day of week is in the time zone of the
   *          gateway.</p>
   */
  DayOfWeek?: number;

  /**
   * @public
   * <p>The day of the month component of the maintenance start time represented as an ordinal
   *          number from 1 to 28, where 1 represents the first day of the month and 28 represents the
   *          last day of the month.</p>
   */
  DayOfMonth?: number;

  /**
   * @public
   * <p>A value that indicates the time zone that is set for the gateway. The start time and day
   *          of week specified should be in the time zone of the gateway.</p>
   */
  Timezone?: string;
}

/**
 * @public
 * <p>DescribeNFSFileSharesInput</p>
 */
export interface DescribeNFSFileSharesInput {
  /**
   * @public
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described.</p>
   */
  FileShareARNList: string[] | undefined;
}

/**
 * @public
 * <p>The Unix file permissions and ownership information assigned, by default, to native S3
 *          objects when an S3 File Gateway discovers them in S3 buckets. This operation is only
 *          supported in S3 File Gateways.</p>
 */
export interface NFSFileShareInfo {
  /**
   * @public
   * <p>Describes Network File System (NFS) file share default values. Files and folders stored
   *          as Amazon S3 objects in S3 buckets don't, by default, have Unix file
   *          permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3
   *          objects that represent files and folders are assigned these default Unix permissions. This
   *          operation is only supported for S3 File Gateways.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * @public
   * <p>The ID of the file share.</p>
   */
  FileShareId?: string;

  /**
   * @public
   * <p>The status of the file share.</p>
   *
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   */
  FileShareStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The file share path used by the NFS client to identify the mount point.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying
   *          storage.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::my-bucket/prefix/</code>
   *             </p>
   *
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   */
  LocationARN?: string;

  /**
   * @public
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * @public
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that an S3 File Gateway puts objects into. The default value is
   *          <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * @public
   * <p>The list of clients that are allowed to access the S3 File Gateway. The list must
   *          contain either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
   * @public
   * <p>The user mapped to anonymous user. Valid options are the following:</p>
   *
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
   */
  Squash?: string;

  /**
   * @public
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * @public
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p>A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * @public
   * <p>Refresh cache information for the file share.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *          </note>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   */
  NotificationPolicy?: string;

  /**
   * @public
   * <p>Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  VPCEndpointDNSName?: string;

  /**
   * @public
   * <p>Specifies the Region of the S3 bucket where the NFS file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for NFS file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  BucketRegion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   */
  AuditDestinationARN?: string;
}

/**
 * @public
 * <p>DescribeNFSFileSharesOutput</p>
 */
export interface DescribeNFSFileSharesOutput {
  /**
   * @public
   * <p>An array containing a description for each requested file share.</p>
   */
  NFSFileShareInfoList?: NFSFileShareInfo[];
}

/**
 * @public
 * <p>DescribeSMBFileSharesInput</p>
 */
export interface DescribeSMBFileSharesInput {
  /**
   * @public
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described.</p>
   */
  FileShareARNList: string[] | undefined;
}

/**
 * @public
 * <p>The Windows file permissions and ownership information assigned, by default, to native
 *          S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only
 *          supported for S3 File Gateways.</p>
 */
export interface SMBFileShareInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * @public
   * <p>The ID of the file share.</p>
   */
  FileShareId?: string;

  /**
   * @public
   * <p>The status of the file share.</p>
   *
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   */
  FileShareStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The file share path used by the SMB client to identify the mount point.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying
   *          storage.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>A custom ARN for the backend storage used for storing data for file shares. It includes
   *          a resource ARN with an optional prefix concatenation. The prefix must end with a forward
   *          slash (/).</p>
   *          <note>
   *             <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias,
   *             as shown in the following examples.</p>
   *
   *             <p>Bucket ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:::my-bucket/prefix/</code>
   *             </p>
   *
   *             <p>Access point ARN:</p>
   *             <p>
   *                <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code>
   *             </p>
   *
   *             <p>If you specify an access point, the bucket policy must be configured to delegate
   *             access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *
   *             <p>Access point alias:</p>
   *             <p>
   *                <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code>
   *             </p>
   *          </note>
   */
  LocationARN?: string;

  /**
   * @public
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * @public
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that an S3 File Gateway puts objects into. The default value is
   *          <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * @public
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * @public
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p>If this value is set to <code>true</code>, it indicates that access control list (ACL)
   *          is enabled on the SMB file share. If it is set to <code>false</code>, it indicates that
   *          file and directory permissions are mapped to the POSIX permission.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to
   *             control access to an SMB file share</a> in the <i>Storage Gateway User
   *             Guide</i>.</p>
   */
  SMBACLEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether <code>AccessBasedEnumeration</code> is enabled.</p>
   */
  AccessBasedEnumeration?: boolean;

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: string[];

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * @public
   * <p>The authentication method of the file share. The default is
   *          <code>ActiveDirectory</code>.</p>
   *
   *          <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code>
   *          </p>
   */
  Authentication?: string;

  /**
   * @public
   * <p>The case of an object name in an Amazon S3 bucket. For
   *             <code>ClientSpecified</code>, the client determines the case sensitivity. For
   *             <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default
   *          value is <code>ClientSpecified</code>.</p>
   */
  CaseSensitivity?: CaseSensitivity | string;

  /**
   * @public
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * @public
   * <p>Refresh cache information for the file share.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *          </note>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   */
  NotificationPolicy?: string;

  /**
   * @public
   * <p>Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to
   *             Amazon S3.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  VPCEndpointDNSName?: string;

  /**
   * @public
   * <p>Specifies the Region of the S3 bucket where the SMB file share stores files.</p>
   *          <note>
   *             <p>This parameter is required for SMB file shares that connect to Amazon S3
   *             through a VPC endpoint, a VPC access point, or an access point alias that points to a
   *             VPC access point.</p>
   *          </note>
   */
  BucketRegion?: string;

  /**
   * @public
   * <p>Specifies whether opportunistic locking is enabled for the SMB file share.</p>
   *          <note>
   *             <p>Enabling opportunistic locking on case-sensitive shares is not recommended for
   *             workloads that involve access to files with the same name in different case.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  OplocksEnabled?: boolean;
}

/**
 * @public
 * <p>DescribeSMBFileSharesOutput</p>
 */
export interface DescribeSMBFileSharesOutput {
  /**
   * @public
   * <p>An array containing a description for each requested file share.</p>
   */
  SMBFileShareInfoList?: SMBFileShareInfo[];
}

/**
 * @public
 */
export interface DescribeSMBSettingsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A list of Active Directory users and groups that have special permissions for SMB file
 *          shares on the gateway.</p>
 */
export interface SMBLocalGroups {
  /**
   * @public
   * <p>A list of Active Directory users and groups that have local Gateway Admin permissions.
   *          Acceptable formats include: <code>DOMAIN\User1</code>, <code>user1</code>,
   *             <code>DOMAIN\group1</code>, and <code>group1</code>.</p>
   *          <p>Gateway Admins can use the Shared Folders Microsoft Management Console snap-in to
   *          force-close files that are open and locked.</p>
   */
  GatewayAdmins?: string[];
}

/**
 * @public
 */
export type SMBSecurityStrategy = "ClientSpecified" | "MandatoryEncryption" | "MandatorySigning";

/**
 * @public
 */
export interface DescribeSMBSettingsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The name of the domain that the gateway is joined to.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Indicates the status of a gateway that is a member of the Active Directory
   *          domain.</p>
   *
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
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | string;

  /**
   * @public
   * <p>This value is <code>true</code> if a password for the guest user <code>smbguest</code>
   *          is set, otherwise <code>false</code>. Only supported for S3 File Gateways.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  SMBGuestPasswordSet?: boolean;

  /**
   * @public
   * <p>The type of security strategy that was specified for file gateway.</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ClientSpecified</code>: If you use this option, requests are established
   *                based on what is negotiated by the client. This option is recommended when you want
   *                to maximize compatibility across different clients in your environment. Only
   *                supported for S3 File Gateways.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MandatorySigning</code>: If you use this option, file gateway only allows
   *                connections from SMBv2 or SMBv3 clients that have signing enabled. This option works
   *                with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MandatoryEncryption</code>: If you use this option, file gateway only allows
   *                connections from SMBv3 clients that have encryption enabled. This option is highly
   *                recommended for environments that handle sensitive data. This option works with SMB
   *                clients on Microsoft Windows 8, Windows Server 2012 or newer.</p>
   *             </li>
   *          </ul>
   */
  SMBSecurityStrategy?: SMBSecurityStrategy | string;

  /**
   * @public
   * <p>The shares on this gateway appear when listing shares. Only supported for S3 File
   *          Gateways. </p>
   */
  FileSharesVisible?: boolean;

  /**
   * @public
   * <p>A list of Active Directory users and groups that have special permissions for SMB file
   *          shares on the gateway.</p>
   */
  SMBLocalGroups?: SMBLocalGroups;
}

/**
 * @public
 * <p>A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a>
 *          of the volume.</p>
 */
export interface DescribeSnapshotScheduleInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume that was specified in the request.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  StartAt?: number;

  /**
   * @public
   * <p>The number of hours between snapshots.</p>
   */
  RecurrenceInHours?: number;

  /**
   * @public
   * <p>The snapshot description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A value that indicates the time zone of the gateway.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.</p>
 */
export interface DescribeStorediSCSIVolumesInput {
  /**
   * @public
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          stored volume. All of the specified stored volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   */
  VolumeARNs: string[] | undefined;
}

/**
 * @public
 * <p>Describes an iSCSI stored volume.</p>
 */
export interface StorediSCSIVolume {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The unique identifier of the volume, e.g., vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeStatus?: string;

  /**
   * @public
   * <p>A value that indicates whether a storage volume is attached to, detached from, or is in
   *          the process of detaching from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving
   *             your volumes to a different gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * @public
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * @public
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the stored volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * @public
   * <p>The ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p>
   */
  VolumeDiskId?: string;

  /**
   * @public
   * <p>If the stored volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g. snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * @public
   * <p>Indicates if when the stored volume was created, existing data on the underlying local
   *          disk was preserved.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  PreservedExistingData?: boolean;

  /**
   * @public
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *          attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;

  /**
   * @public
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   *          timestamp.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The size of the data stored on the volume in bytes. This value is calculated based on
   *          the number of blocks that are touched, instead of the actual amount of data written. This
   *          value can be useful for sequential write patterns but less accurate for random write
   *          patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the
   *          volume, which is the value that is used to calculate your bill.</p>
   *
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   */
  VolumeUsedInBytes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a
   *          suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously
   *          used for this volume as the new target name.</p>
   */
  TargetName?: string;
}

/**
 * @public
 */
export interface DescribeStorediSCSIVolumesOutput {
  /**
   * @public
   * <p>Describes a single unit of output from <a>DescribeStorediSCSIVolumes</a>. The
   *          following fields are returned:</p>
   *
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
   */
  StorediSCSIVolumes?: StorediSCSIVolume[];
}

/**
 * @public
 * <p>DescribeTapeArchivesInput</p>
 */
export interface DescribeTapeArchivesInput {
  /**
   * @public
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe.</p>
   */
  TapeARNs?: string[];

  /**
   * @public
   * <p>An opaque string that indicates the position at which to begin describing virtual
   *          tapes.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>
 */
export interface TapeArchive {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an archived virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * @public
   * <p>The barcode that identifies the archived virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * @public
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date;

  /**
   * @public
   * <p>The size, in bytes, of the archived virtual tape.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * @public
   * <p>The time that the archiving of the virtual tape was completed.</p>
   *
   *          <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   */
  CompletionTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being
   *          retrieved to.</p>
   *
   *          <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>
   */
  RetrievedTo?: string;

  /**
   * @public
   * <p>The current state of the archived virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * @public
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   */
  TapeUsedInBytes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The ID of the pool that was used to archive the tape. The tapes in this pool are
   *          archived in the S3 storage class that is associated with the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>Set to <code>true</code> if the archived tape is stored as write-once-read-many
   *          (WORM).</p>
   */
  Worm?: boolean;

  /**
   * @public
   * <p>If the archived tape is subject to tape retention lock, the date that the archived tape
   *          started being retained.</p>
   */
  RetentionStartDate?: Date;

  /**
   * @public
   * <p>The time that the tape entered the custom tape pool.</p>
   *
   *          <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   */
  PoolEntryDate?: Date;
}

/**
 * @public
 * <p>DescribeTapeArchivesOutput</p>
 */
export interface DescribeTapeArchivesOutput {
  /**
   * @public
   * <p>An array of virtual tape objects in the virtual tape shelf (VTS). The description
   *          includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned
   *          includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the
   *          tapes, progress of the description, and tape barcode.</p>
   */
  TapeArchives?: TapeArchive[];

  /**
   * @public
   * <p>An opaque string that indicates the position at which the virtual tapes that were
   *          fetched for description ended. Use this marker in your next request to fetch the next set
   *          of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to
   *          describe, this field does not appear in the response.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>DescribeTapeRecoveryPointsInput</p>
 */
export interface DescribeTapeRecoveryPointsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>An opaque string that indicates the position at which to begin describing the virtual
   *          tape recovery points.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the number of virtual tape recovery points that are described be limited
   *          to the specified number.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Describes a recovery point.</p>
 */
export interface TapeRecoveryPointInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * @public
   * <p>The time when the point-in-time view of the virtual tape was replicated for later
   *          recovery.</p>
   *
   *          <p>The default timestamp format of the tape recovery point time is in the ISO8601 extended
   *          YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   */
  TapeRecoveryPointTime?: Date;

  /**
   * @public
   * <p>The size, in bytes, of the virtual tapes to recover.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * @public
   * <p>The status of the virtual tapes.</p>
   */
  TapeStatus?: string;
}

/**
 * @public
 * <p>DescribeTapeRecoveryPointsOutput</p>
 */
export interface DescribeTapeRecoveryPointsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>An array of TapeRecoveryPointInfos that are available for the specified gateway.</p>
   */
  TapeRecoveryPointInfos?: TapeRecoveryPointInfo[];

  /**
   * @public
   * <p>An opaque string that indicates the position at which the virtual tape recovery points
   *          that were listed for description ended.</p>
   *
   *          <p>Use this marker in your next request to list the next set of virtual tape recovery
   *          points in the list. If there are no more recovery points to describe, this field does not
   *          appear in the response.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>DescribeTapesInput</p>
 */
export interface DescribeTapesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe. If this parameter is not specified, Tape gateway returns a
   *          description of all virtual tapes associated with the specified gateway.</p>
   */
  TapeARNs?: string[];

  /**
   * @public
   * <p>A marker value, obtained in a previous call to <code>DescribeTapes</code>. This marker
   *          indicates which page of results to retrieve.</p>
   *
   *          <p>If not specified, the first page of results is retrieved.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   *
   *          <note>
   *             <p>Amazon Web Services may impose its own limit, if this field is not set.</p>
   *          </note>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Describes a virtual tape object.</p>
 */
export interface Tape {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * @public
   * <p>The barcode that identifies a specific virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * @public
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date;

  /**
   * @public
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * @public
   * <p>The current state of the virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * @public
   * <p>The virtual tape library (VTL) device that the virtual tape is associated with.</p>
   */
  VTLDevice?: string;

  /**
   * @public
   * <p>For archiving virtual tapes, indicates how much data remains to be uploaded before
   *          archiving is complete.</p>
   *
   *          <p>Range: 0 (not started) to 100 (complete).</p>
   */
  Progress?: number;

  /**
   * @public
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   */
  TapeUsedInBytes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The ID of the pool that contains tapes that will be archived. The tapes in this pool are
   *          archived in the S3 storage class that is associated with the pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>If the tape is archived as write-once-read-many (WORM), this value is
   *          <code>true</code>.</p>
   */
  Worm?: boolean;

  /**
   * @public
   * <p>The date that the tape is first archived with tape retention lock enabled.</p>
   */
  RetentionStartDate?: Date;

  /**
   * @public
   * <p>The date that the tape enters a custom tape pool.</p>
   */
  PoolEntryDate?: Date;
}

/**
 * @public
 * <p>DescribeTapesOutput</p>
 */
export interface DescribeTapesOutput {
  /**
   * @public
   * <p>An array of virtual tape descriptions.</p>
   */
  Tapes?: Tape[];

  /**
   * @public
   * <p>An opaque string that can be used as part of a subsequent <code>DescribeTapes</code>
   *          call to retrieve the next page of results.</p>
   *
   *          <p>If a response does not contain a marker, then there are no more results to be
   *          retrieved.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeUploadBufferInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeUploadBufferOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>An array of the gateway's local disk IDs that are configured as working storage.
   *          Each local disk ID is specified as a string (minimum length of 1 and maximum length of
   *          300). If no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   */
  DiskIds?: string[];

  /**
   * @public
   * <p>The total number of bytes being used in the gateway's upload buffer.</p>
   */
  UploadBufferUsedInBytes?: number;

  /**
   * @public
   * <p>The total number of bytes allocated in the gateway's as upload buffer.</p>
   */
  UploadBufferAllocatedInBytes?: number;
}

/**
 * @public
 * <p>DescribeVTLDevicesInput</p>
 */
export interface DescribeVTLDevicesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>An array of strings, where each string represents the Amazon Resource Name (ARN) of a
   *          VTL device.</p>
   *
   *          <note>
   *             <p>All of the specified VTL devices must be from the same gateway. If no VTL devices are
   *             specified, the result will contain all devices on the specified gateway.</p>
   *          </note>
   */
  VTLDeviceARNs?: string[];

  /**
   * @public
   * <p>An opaque string that indicates the position at which to begin describing the VTL
   *          devices.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the number of VTL devices described be limited to the specified
   *          number.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Lists iSCSI information about a VTL device.</p>
 */
export interface DeviceiSCSIAttributes {
  /**
   * @public
   * <p>Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified
   *          name(iqn) of a tape drive or media changer target.</p>
   */
  TargetARN?: string;

  /**
   * @public
   * <p>The network interface identifier of the VTL device.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The port used to communicate with iSCSI VTL device targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * @public
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;
}

/**
 * @public
 * <p>Represents a device object associated with a tape gateway.</p>
 */
export interface VTLDevice {
  /**
   * @public
   * <p>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media
   *          changer).</p>
   */
  VTLDeviceARN?: string;

  /**
   * @public
   * <p>Specifies the type of device that the VTL device emulates.</p>
   */
  VTLDeviceType?: string;

  /**
   * @public
   * <p>Specifies the vendor of the device that the VTL device object emulates.</p>
   */
  VTLDeviceVendor?: string;

  /**
   * @public
   * <p>Specifies the model number of device that the VTL device emulates.</p>
   */
  VTLDeviceProductIdentifier?: string;

  /**
   * @public
   * <p>A list of iSCSI information about a VTL device.</p>
   */
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
}

/**
 * @public
 * <p>DescribeVTLDevicesOutput</p>
 */
export interface DescribeVTLDevicesOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL
   *          devices.</p>
   */
  VTLDevices?: VTLDevice[];

  /**
   * @public
   * <p>An opaque string that indicates the position at which the VTL devices that were fetched
   *          for description ended. Use the marker in your next request to fetch the next set of VTL
   *          devices in the list. If there are no more VTL devices to describe, this field does not
   *          appear in the response.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface DescribeWorkingStorageInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeWorkingStorageOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>An array of the gateway's local disk IDs that are configured as working storage.
   *          Each local disk ID is specified as a string (minimum length of 1 and maximum length of
   *          300). If no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   */
  DiskIds?: string[];

  /**
   * @public
   * <p>The total working storage in bytes in use by the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageUsedInBytes?: number;

  /**
   * @public
   * <p>The total working storage in bytes allocated for the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageAllocatedInBytes?: number;
}

/**
 * @public
 * <p>AttachVolumeInput</p>
 */
export interface DetachVolumeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume to detach from the gateway.</p>
   */
  VolumeARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to forcibly remove the iSCSI connection of the target volume
   *          and detach the volume. The default is <code>false</code>. If this value is set to
   *             <code>false</code>, you must manually disconnect the iSCSI connection from the target
   *          volume.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ForceDetach?: boolean;
}

/**
 * @public
 * <p>AttachVolumeOutput</p>
 */
export interface DetachVolumeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume that was detached.</p>
   */
  VolumeARN?: string;
}

/**
 * @public
 * <p>DisableGatewayInput</p>
 */
export interface DisableGatewayInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>DisableGatewayOutput</p>
 */
export interface DisableGatewayOutput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) of the disabled gateway.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface DisassociateFileSystemInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file system association to be deleted.</p>
   */
  FileSystemAssociationARN: string | undefined;

  /**
   * @public
   * <p>If this value is set to true, the operation disassociates an Amazon FSx file
   *          system immediately. It ends all data uploads to the file system, and the file system
   *          association enters the <code>FORCE_DELETING</code> status. If this value is set to false,
   *          the Amazon FSx file system does not disassociate until all data is uploaded.</p>
   */
  ForceDelete?: boolean;
}

/**
 * @public
 */
export interface DisassociateFileSystemOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted file system association.</p>
   */
  FileSystemAssociationARN?: string;
}

/**
 * @public
 * <p>Represents a gateway's local disk.</p>
 */
export interface Disk {
  /**
   * @public
   * <p>The unique device ID or other distinguishing data that identifies a local disk.</p>
   */
  DiskId?: string;

  /**
   * @public
   * <p>The path of a local disk in the gateway virtual machine (VM).</p>
   */
  DiskPath?: string;

  /**
   * @public
   * <p>The device node of a local disk as assigned by the virtualization environment.</p>
   */
  DiskNode?: string;

  /**
   * @public
   * <p>A value that represents the status of a local disk.</p>
   */
  DiskStatus?: string;

  /**
   * @public
   * <p>The local disk size in bytes.</p>
   */
  DiskSizeInBytes?: number;

  /**
   * @public
   * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a
   *          local disk is used.</p>
   *
   *          <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code>
   *          </p>
   */
  DiskAllocationType?: string;

  /**
   * @public
   * <p>The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in
   *          the response if the local disk is not defined as an iSCSI target. The format of this field
   *          is <i>targetIqn::LUNNumber::region-volumeId</i>.</p>
   */
  DiskAllocationResource?: string;

  /**
   * @public
   * <p>A list of values that represents attributes of a local disk.</p>
   */
  DiskAttributeList?: string[];
}

/**
 * @public
 */
export type FileShareType = "NFS" | "SMB";

/**
 * @public
 * <p>Describes a file share. Only supported S3 File Gateway.</p>
 */
export interface FileShareInfo {
  /**
   * @public
   * <p>The type of the file share.</p>
   */
  FileShareType?: FileShareType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * @public
   * <p>The ID of the file share.</p>
   */
  FileShareId?: string;

  /**
   * @public
   * <p>The status of the file share.</p>
   *
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   */
  FileShareStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>Gets the summary returned by <code>ListFileSystemAssociation</code>, which is a summary
 *          of a created file system association.</p>
 */
export interface FileSystemAssociationSummary {
  /**
   * @public
   * <p>The ID of the file system association.</p>
   */
  FileSystemAssociationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file system association.</p>
   */
  FileSystemAssociationARN?: string;

  /**
   * @public
   * <p>The status of the file share. Valid Values: <code>AVAILABLE</code> |
   *             <code>CREATING</code> | <code>DELETING</code> | <code>FORCE_DELETING</code> |
   *             <code>UPDATING</code> | <code>ERROR</code>
   *          </p>
   */
  FileSystemAssociationStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>Describes a gateway object.</p>
 */
export interface GatewayInfo {
  /**
   * @public
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * @public
   * <p>The state of the gateway.</p>
   *
   *          <p>Valid Values: <code>DISABLED</code> | <code>ACTIVE</code>
   *          </p>
   */
  GatewayOperationalState?: string;

  /**
   * @public
   * <p>The name of the gateway.</p>
   */
  GatewayName?: string;

  /**
   * @public
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;

  /**
   * @public
   * <p>The type of hardware or software platform on which the gateway is running.</p>
   */
  HostEnvironment?: HostEnvironment | string;

  /**
   * @public
   * <p>A unique identifier for the specific instance of the host platform running the gateway.
   *          This value is only available for certain host environments, and its format depends on the
   *          host environment type.</p>
   */
  HostEnvironmentId?: string;
}

/**
 * @public
 * <p>JoinDomainInput</p>
 */
export interface JoinDomainInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The name of the domain that you want the gateway to join.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The organizational unit (OU) is a container in an Active Directory that can hold users,
   *          groups, computers, and other OUs and this parameter specifies the OU that the gateway will
   *          join within the AD domain.</p>
   */
  OrganizationalUnit?: string;

  /**
   * @public
   * <p>List of IPv4 addresses, NetBIOS names, or host names of your domain server. If you need
   *          to specify the port number include it after the colon (“:”). For example,
   *             <code>mydc.mydomain.com:389</code>.</p>
   */
  DomainControllers?: string[];

  /**
   * @public
   * <p>Specifies the time in seconds, in which the <code>JoinDomain</code> operation must
   *          complete. The default is 20 seconds.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * @public
   * <p>Sets the user name of user who has permission to add the gateway to the Active Directory
   *          domain. The domain user account should be enabled to join computers to the domain. For
   *          example, you can use the domain administrator account or an account with delegated
   *          permissions to join computers to the domain.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>Sets the password of the user who has permission to add the gateway to the Active
   *          Directory domain.</p>
   */
  Password: string | undefined;
}

/**
 * @public
 * <p>JoinDomainOutput</p>
 */
export interface JoinDomainOutput {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) of the gateway that joined the domain.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>Indicates the status of the gateway as a member of the Active Directory domain.</p>
   *
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
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | string;
}

/**
 * @public
 */
export interface ListAutomaticTapeCreationPoliciesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface ListAutomaticTapeCreationPoliciesOutput {
  /**
   * @public
   * <p>Gets a listing of information about the gateway's automatic tape creation policies,
   *          including the automatic tape creation rules and the gateway that is using the
   *          policies.</p>
   */
  AutomaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[];
}

/**
 * @public
 * <p>ListFileShareInput</p>
 */
export interface ListFileSharesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If
   *          this field is not present, all file shares under your account are listed.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The maximum number of file shares to return in the response. The value must be an
   *          integer with a value greater than zero. Optional.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>Opaque pagination token returned from a previous ListFileShares operation. If present,
   *             <code>Marker</code> specifies where to continue the list from after a previous call to
   *          ListFileShares. Optional.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>ListFileShareOutput</p>
 */
export interface ListFileSharesOutput {
  /**
   * @public
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>If a value is present, there are more file shares to return. In a subsequent request,
   *          use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set
   *          of file shares.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>An array of information about the S3 File Gateway's file shares.</p>
   */
  FileShareInfoList?: FileShareInfo[];
}

/**
 * @public
 */
export interface ListFileSystemAssociationsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The maximum number of file system associations to return in the response. If present,
   *             <code>Limit</code> must be an integer with a value greater than zero. Optional.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>Opaque pagination token returned from a previous <code>ListFileSystemAssociations</code>
   *          operation. If present, <code>Marker</code> specifies where to continue the list from after
   *          a previous call to <code>ListFileSystemAssociations</code>. Optional.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListFileSystemAssociationsOutput {
  /**
   * @public
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>If a value is present, there are more file system associations to return. In a
   *          subsequent request, use <code>NextMarker</code> as the value for <code>Marker</code> to
   *          retrieve the next set of file system associations.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>An array of information about the Amazon FSx gateway's file system
   *          associations.</p>
   */
  FileSystemAssociationSummaryList?: FileSystemAssociationSummary[];
}

/**
 * @public
 * <p>A JSON object containing zero or more of the following fields:</p>
 *
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
 */
export interface ListGatewaysInput {
  /**
   * @public
   * <p>An opaque string that indicates the position at which to begin the returned list of
   *          gateways.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the list of gateways returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListGatewaysOutput {
  /**
   * @public
   * <p>An array of <a>GatewayInfo</a> objects.</p>
   */
  Gateways?: GatewayInfo[];

  /**
   * @public
   * <p>Use the marker in your next request to fetch the next set of gateways in the list. If
   *          there are no more gateways to list, this field does not appear in the response.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface ListLocalDisksInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface ListLocalDisksOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>A JSON object containing the following fields:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListLocalDisksOutput$Disks</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  Disks?: Disk[];
}

/**
 * @public
 * <p>ListTagsForResourceInput</p>
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>An opaque string that indicates the position at which to begin returning the list of
   *          tags.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the list of tags returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>ListTagsForResourceOutput</p>
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>An opaque string that indicates the position at which to stop returning the list of
   *          tags.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>An array that contains the tags for the specified resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListTapePoolsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you
   *          don't specify a custom tape pool ARN, the response lists all custom tape pools. </p>
   */
  PoolARNs?: string[];

  /**
   * @public
   * <p>A string that indicates the position at which to begin the returned list of tape
   *          pools.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>An optional number limit for the tape pools in the list returned by this call.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export type PoolStatus = "ACTIVE" | "DELETED";

/**
 * @public
 * <p>Describes a custom tape pool.</p>
 */
export interface PoolInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom tape pool. Use the <a>ListTapePools</a> operation to return a list of custom tape pools for your
   *          account and Amazon Web Services Region.</p>
   */
  PoolARN?: string;

  /**
   * @public
   * <p>The name of the custom tape pool. <code>PoolName</code> can use all ASCII characters,
   *          except '/' and '\'.</p>
   */
  PoolName?: string;

  /**
   * @public
   * <p>The storage class that is associated with the custom pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  StorageClass?: TapeStorageClass | string;

  /**
   * @public
   * <p>Tape retention lock type, which can be configured in two modes. When configured in
   *          governance mode, Amazon Web Services accounts with specific IAM permissions are authorized
   *          to remove the tape retention lock from archived virtual tapes. When configured in
   *          compliance mode, the tape retention lock cannot be removed by any user, including the root
   *             Amazon Web Services account.</p>
   */
  RetentionLockType?: RetentionLockType | string;

  /**
   * @public
   * <p>Tape retention lock time is set in days. Tape retention lock can be enabled for up to
   *          100 years (36,500 days).</p>
   */
  RetentionLockTimeInDays?: number;

  /**
   * @public
   * <p>Status of the custom tape pool. Pool can be <code>ACTIVE</code> or
   *          <code>DELETED</code>.</p>
   */
  PoolStatus?: PoolStatus | string;
}

/**
 * @public
 */
export interface ListTapePoolsOutput {
  /**
   * @public
   * <p>An array of <code>PoolInfo</code> objects, where each object describes a single custom
   *          tape pool. If there are no custom tape pools, the <code>PoolInfos</code> is an empty array.
   *       </p>
   */
  PoolInfos?: PoolInfo[];

  /**
   * @public
   * <p>A string that indicates the position at which to begin the returned list of tape pools.
   *          Use the marker in your next request to continue pagination of tape pools. If there are no
   *          more tape pools to list, this element does not appear in the response body. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>A JSON object that contains one or more of the following fields:</p>
 *
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
 */
export interface ListTapesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't
   *          specify a tape ARN, the response lists all tapes in both your VTL and VTS.</p>
   */
  TapeARNs?: string[];

  /**
   * @public
   * <p>A string that indicates the position at which to begin the returned list of
   *          tapes.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>An optional number limit for the tapes in the list returned by this call.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Describes a virtual tape.</p>
 */
export interface TapeInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * @public
   * <p>The barcode that identifies a specific virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * @public
   * <p>The size, in bytes, of a virtual tape.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * @public
   * <p>The status of the tape.</p>
   */
  TapeStatus?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The date that the tape became subject to tape retention lock.</p>
   */
  RetentionStartDate?: Date;

  /**
   * @public
   * <p>The date that the tape entered the custom tape pool with tape retention lock
   *          enabled.</p>
   */
  PoolEntryDate?: Date;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 *
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
 */
export interface ListTapesOutput {
  /**
   * @public
   * <p>An array of <a>TapeInfo</a> objects, where each object describes a single
   *          tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is
   *          an empty array.</p>
   */
  TapeInfos?: TapeInfo[];

  /**
   * @public
   * <p>A string that indicates the position at which to begin returning the next list of tapes.
   *          Use the marker in your next request to continue pagination of tapes. If there are no more
   *          tapes to list, this element does not appear in the response body.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>ListVolumeInitiatorsInput</p>
 */
export interface ListVolumeInitiatorsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes for the gateway.</p>
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 * <p>ListVolumeInitiatorsOutput</p>
 */
export interface ListVolumeInitiatorsOutput {
  /**
   * @public
   * <p>The host names and port numbers of all iSCSI initiators that are connected to the
   *          gateway.</p>
   */
  Initiators?: string[];
}

/**
 * @public
 */
export interface ListVolumeRecoveryPointsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>Describes a storage volume recovery point object.</p>
 */
export interface VolumeRecoveryPointInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * @public
   * <p>The size of the data stored on the volume in bytes.</p>
   *
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   */
  VolumeUsageInBytes?: number;

  /**
   * @public
   * <p>The time the recovery point was taken.</p>
   */
  VolumeRecoveryPointTime?: string;
}

/**
 * @public
 */
export interface ListVolumeRecoveryPointsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>An array of <a>VolumeRecoveryPointInfo</a> objects.</p>
   */
  VolumeRecoveryPointInfos?: VolumeRecoveryPointInfo[];
}

/**
 * @public
 * <p>A JSON object that contains one or more of the following fields:</p>
 *
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
 */
export interface ListVolumesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>A string that indicates the position at which to begin the returned list of volumes.
   *          Obtain the marker from the response of a previous List iSCSI Volumes request.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Specifies that the list of volumes returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Describes a storage volume object.</p>
 */
export interface VolumeInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the storage volume. For example, the following is a
   *          valid ARN:</p>
   *
   *          <p>
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB</code>
   *          </p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeARN?: string;

  /**
   * @public
   * <p>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon
   *          Resource Name (ARN), which you use as input for other operations.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>The size of the volume in bytes.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * @public
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeAttachmentStatus?: string;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 *
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
 */
export interface ListVolumesOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>Use the marker in your next request to continue pagination of iSCSI volumes. If there
   *          are no more volumes to list, this field does not appear in the response body.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>An array of <a>VolumeInfo</a> objects, where each object describes an iSCSI
   *          volume. If no volumes are defined for the gateway, then <code>VolumeInfos</code> is an
   *          empty array "[]".</p>
   */
  VolumeInfos?: VolumeInfo[];
}

/**
 * @public
 */
export interface NotifyWhenUploadedInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN: string | undefined;
}

/**
 * @public
 */
export interface NotifyWhenUploadedOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * @public
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID
   *          format.</p>
   */
  NotificationId?: string;
}

/**
 * @public
 * <p>RefreshCacheInput</p>
 */
export interface RefreshCacheInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share you want to refresh.</p>
   */
  FileShareARN: string | undefined;

  /**
   * @public
   * <p>A comma-separated list of the paths of folders to refresh in the cache. The default is
   *             [<code>"/"</code>]. The default refreshes objects and folders at the root of the Amazon S3 bucket. If <code>Recursive</code> is set to <code>true</code>, the entire S3
   *          bucket that the file share has access to is refreshed.</p>
   */
  FolderList?: string[];

  /**
   * @public
   * <p>A value that specifies whether to recursively refresh folders in the cache. The refresh
   *          includes folders that were in the cache the last time the gateway listed the folder's
   *          contents. If this value set to <code>true</code>, each folder that is listed in
   *             <code>FolderList</code> is recursively updated. Otherwise, subfolders listed in
   *             <code>FolderList</code> are not refreshed. Only objects that are in folders listed
   *          directly under <code>FolderList</code> are found and used for the update. The default is
   *             <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  Recursive?: boolean;
}

/**
 * @public
 * <p>RefreshCacheOutput</p>
 */
export interface RefreshCacheOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * @public
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID
   *          format.</p>
   */
  NotificationId?: string;
}

/**
 * @public
 * <p>RemoveTagsFromResourceInput</p>
 */
export interface RemoveTagsFromResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource you want to remove the tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The keys of the tags you want to remove from the specified resource. A tag is composed
   *          of a key-value pair.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p>RemoveTagsFromResourceOutput</p>
 */
export interface RemoveTagsFromResourceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that the tags were removed from.</p>
   */
  ResourceARN?: string;
}

/**
 * @public
 */
export interface ResetCacheInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface ResetCacheOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>RetrieveTapeArchiveInput</p>
 */
export interface RetrieveTapeArchiveInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual
   *          tape shelf (VTS).</p>
   */
  TapeARN: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to.
   *          Use the <a>ListGateways</a> operation to return a list of gateways for your
   *          account and Amazon Web Services Region.</p>
   *
   *          <p>You retrieve archived virtual tapes to only one gateway and the gateway must be a tape
   *          gateway.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>RetrieveTapeArchiveOutput</p>
 */
export interface RetrieveTapeArchiveOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the retrieved virtual tape.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 * <p>RetrieveTapeRecoveryPointInput</p>
 */
export interface RetrieveTapeRecoveryPointInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the
   *          recovery point.</p>
   */
  TapeARN: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>RetrieveTapeRecoveryPointOutput</p>
 */
export interface RetrieveTapeRecoveryPointOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was
   *          retrieved.</p>
   */
  TapeARN?: string;
}

/**
 * @public
 * <p>SetLocalConsolePasswordInput</p>
 */
export interface SetLocalConsolePasswordInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The password you want to set for your VM local console.</p>
   */
  LocalConsolePassword: string | undefined;
}

/**
 * @public
 */
export interface SetLocalConsolePasswordOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>SetSMBGuestPasswordInput</p>
 */
export interface SetSMBGuestPasswordInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated
   *          with.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The password that you want to set for your SMB server.</p>
   */
  Password: string | undefined;
}

/**
 * @public
 */
export interface SetSMBGuestPasswordOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut
 *          down.</p>
 */
export interface ShutdownGatewayInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut
 *          down.</p>
 */
export interface ShutdownGatewayOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface StartAvailabilityMonitorTestInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface StartAvailabilityMonitorTestOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.</p>
 */
export interface StartGatewayInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          restarted.</p>
 */
export interface StartGatewayOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface UpdateAutomaticTapeCreationPolicyInput {
  /**
   * @public
   * <p>An automatic tape creation policy consists of a list of automatic tape creation rules.
   *          The rules determine when and how to automatically create new tapes.</p>
   */
  AutomaticTapeCreationRules: AutomaticTapeCreationRule[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomaticTapeCreationPolicyOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 */
export interface UpdateBandwidthRateLimitInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The average upload bandwidth rate limit in bits per second.</p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * @public
   * <p>The average download bandwidth rate limit in bits per second.</p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle
 *          information was updated.</p>
 */
export interface UpdateBandwidthRateLimitOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface UpdateBandwidthRateLimitScheduleInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p> An array containing bandwidth rate limit schedule intervals for a gateway. When no
   *          bandwidth rate limit intervals have been scheduled, the array is empty. </p>
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface UpdateBandwidthRateLimitScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 *
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChapCredentialsInput$TargetARN</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface UpdateChapCredentialsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return the TargetARN for specified
   *          VolumeARN.</p>
   */
  TargetARN: string | undefined;

  /**
   * @public
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   *
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   */
  SecretToAuthenticateInitiator: string | undefined;

  /**
   * @public
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName: string | undefined;

  /**
   * @public
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g. Windows client).</p>
   *
   *          <p>Byte constraints: Minimum bytes of 12. Maximum bytes of 16.</p>
   *
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   */
  SecretToAuthenticateTarget?: string;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 */
export interface UpdateChapCredentialsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target. This is the same target specified in the
   *          request.</p>
   */
  TargetARN?: string;

  /**
   * @public
   * <p>The iSCSI initiator that connects to the target. This is the same initiator name
   *          specified in the request.</p>
   */
  InitiatorName?: string;
}

/**
 * @public
 */
export interface UpdateFileSystemAssociationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file system association that you want to
   *          update.</p>
   */
  FileSystemAssociationARN: string | undefined;

  /**
   * @public
   * <p>The user name of the user credential that has permission to access the root share D$ of
   *          the Amazon FSx file system. The user account must belong to the Amazon FSx
   *          delegated admin user group.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The password of the user credential.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * @public
   * <p>The refresh cache information for the file share or FSx file systems.</p>
   */
  CacheAttributes?: CacheAttributes;
}

/**
 * @public
 */
export interface UpdateFileSystemAssociationOutput {
  /**
   * @public
   * <p>The ARN of the updated file system association.</p>
   */
  FileSystemAssociationARN?: string;
}

/**
 * @public
 */
export interface UpdateGatewayInformationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * @public
   * <p>A value that indicates the time zone of the gateway.</p>
   */
  GatewayTimezone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use
   *          to monitor and log events in the gateway.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">What is Amazon CloudWatch
   *             Logs?</a>
   *          </p>
   */
  CloudWatchLogGroupARN?: string;

  /**
   * @public
   * <p>Specifies the size of the gateway's metadata cache.</p>
   */
  GatewayCapacity?: GatewayCapacity | string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          updated.</p>
 */
export interface UpdateGatewayInformationOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;

  /**
   * @public
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.</p>
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          updated.</p>
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing the following fields:</p>
 *
 *          <ul>
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
 */
export interface UpdateMaintenanceStartTimeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *          where <i>hh</i> is the hour (00 to 23). The hour of the day is in the time
   *          zone of the gateway.</p>
   */
  HourOfDay: number | undefined;

  /**
   * @public
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (00 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour: number | undefined;

  /**
   * @public
   * <p>The day of the week component of the maintenance start time week represented as an
   *          ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.</p>
   */
  DayOfWeek?: number;

  /**
   * @public
   * <p>The day of the month component of the maintenance start time represented as an ordinal
   *          number from 1 to 28, where 1 represents the first day of the month and 28 represents the
   *          last day of the month.</p>
   */
  DayOfMonth?: number;
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance
 *          start time is updated.</p>
 */
export interface UpdateMaintenanceStartTimeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>UpdateNFSFileShareInput</p>
 */
export interface UpdateNFSFileShareInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the file share to be updated.</p>
   */
  FileShareARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The default values for the file share. Optional.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * @public
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * @public
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * @public
   * <p>The list of clients that are allowed to access the S3 File Gateway. The list must
   *          contain either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
   * @public
   * <p>The user mapped to anonymous user.</p>
   *
   *          <p>Valid values are the following:</p>
   *
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
   */
  Squash?: string;

  /**
   * @public
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * @public
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * @public
   * <p>Specifies refresh cache information for the file share.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *          </note>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   */
  NotificationPolicy?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   */
  AuditDestinationARN?: string;
}

/**
 * @public
 * <p>UpdateNFSFileShareOutput</p>
 */
export interface UpdateNFSFileShareOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated file share.</p>
   */
  FileShareARN?: string;
}

/**
 * @public
 * <p>UpdateSMBFileShareInput</p>
 */
export interface UpdateSMBFileShareInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SMB file share that you want to update.</p>
   */
  FileShareARN: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own
   *             KMS key, or <code>false</code> to use a key managed by Amazon S3.
   *          Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This
   *          value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * @public
   * <p>The default storage class for objects put into an Amazon S3 bucket by the S3
   *          File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * @public
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a S3 File Gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * @public
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * @public
   * <p>A value that sets who pays the cost of the request and the cost associated with data
   *          download from the S3 bucket. If this value is set to <code>true</code>, the requester pays
   *          the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays
   *          the cost of storing data.</p>
   *
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file
   *             share, so make sure that the configuration on the file share is the same as the S3
   *             bucket configuration.</p>
   *          </note>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  RequesterPays?: boolean;

  /**
   * @public
   * <p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file
   *          share. Set it to <code>false</code> to map file and directory permissions to the POSIX
   *          permissions.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to
   *             control access to an SMB file share</a> in the <i>Storage Gateway User
   *             Guide</i>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  SMBACLEnabled?: boolean;

  /**
   * @public
   * <p>The files and folders on this share will only be visible to users with read
   *          access.</p>
   */
  AccessBasedEnumeration?: boolean;

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: string[];

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];

  /**
   * @public
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the storage used for audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * @public
   * <p>The case of an object name in an Amazon S3 bucket. For
   *             <code>ClientSpecified</code>, the client determines the case sensitivity. For
   *             <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default
   *          value is <code>ClientSpecified</code>.</p>
   */
  CaseSensitivity?: CaseSensitivity | string;

  /**
   * @public
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>, or if an access point or access point alias is used.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * @public
   * <p>Specifies refresh cache information for the file share.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * @public
   * <p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls
   *          the number of seconds to wait after the last point in time a client wrote to a file before
   *          generating an <code>ObjectUploaded</code> notification. Because clients can make many small
   *          writes to files, it's best to set this parameter for as long as possible to avoid
   *          generating multiple notifications for the same file in a small time period.</p>
   *
   *          <note>
   *             <p>
   *                <code>SettlingTimeInSeconds</code> has no effect on the timing of the object
   *             uploading to Amazon S3, only the timing of the notification.</p>
   *          </note>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> on with
   *             <code>SettlingTimeInSeconds</code> set to 60.</p>
   *
   *          <p>
   *             <code>\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}</code>
   *          </p>
   *
   *          <p>The following example sets <code>NotificationPolicy</code> off.</p>
   *
   *          <p>
   *             <code>\{\}</code>
   *          </p>
   */
  NotificationPolicy?: string;

  /**
   * @public
   * <p>Specifies whether opportunistic locking is enabled for the SMB file share.</p>
   *          <note>
   *             <p>Enabling opportunistic locking on case-sensitive shares is not recommended for
   *             workloads that involve access to files with the same name in different case.</p>
   *          </note>
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  OplocksEnabled?: boolean;
}

/**
 * @public
 * <p>UpdateSMBFileShareOutput</p>
 */
export interface UpdateSMBFileShareOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated SMB file share.</p>
   */
  FileShareARN?: string;
}

/**
 * @public
 */
export interface UpdateSMBFileShareVisibilityInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>The shares on this gateway appear when listing shares.</p>
   */
  FileSharesVisible: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSMBFileShareVisibilityOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface UpdateSMBLocalGroupsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>A list of Active Directory users and groups that you want to grant special permissions
   *          for SMB file shares on the gateway.</p>
   */
  SMBLocalGroups: SMBLocalGroups | undefined;
}

/**
 * @public
 */
export interface UpdateSMBLocalGroupsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 */
export interface UpdateSMBSecurityStrategyInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * @public
   * <p>Specifies the type of security strategy.</p>
   *
   *          <p>ClientSpecified: if you use this option, requests are established based on what is
   *          negotiated by the client. This option is recommended when you want to maximize
   *          compatibility across different clients in your environment. Supported only in S3 File
   *          Gateway.</p>
   *
   *          <p>MandatorySigning: if you use this option, file gateway only allows connections from
   *          SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on
   *          Microsoft Windows Vista, Windows Server 2008 or newer.</p>
   *
   *          <p>MandatoryEncryption: if you use this option, file gateway only allows connections from
   *          SMBv3 clients that have encryption enabled. This option is highly recommended for
   *          environments that handle sensitive data. This option works with SMB clients on Microsoft
   *          Windows 8, Windows Server 2012 or newer.</p>
   */
  SMBSecurityStrategy: SMBSecurityStrategy | string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBSecurityStrategyOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayARN?: string;
}

/**
 * @public
 * <p>A JSON object containing one or more of the following fields:</p>
 *
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
 */
export interface UpdateSnapshotScheduleInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;

  /**
   * @public
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  StartAt: number | undefined;

  /**
   * @public
   * <p>Frequency of snapshots. Specify the number of hours between snapshots.</p>
   */
  RecurrenceInHours: number | undefined;

  /**
   * @public
   * <p>Optional description of the snapshot that overwrites the existing description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value
   *          pair.</p>
   *
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable in
   *             UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length
   *             of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the updated storage
 *          volume.</p>
 */
export interface UpdateSnapshotScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN?: string;
}

/**
 * @public
 */
export interface UpdateVTLDeviceTypeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the medium changer you want to select.</p>
   */
  VTLDeviceARN: string | undefined;

  /**
   * @public
   * <p>The type of medium changer you want to select.</p>
   *
   *          <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> |
   *             <code>IBM-03584L32-0402</code>
   *          </p>
   */
  DeviceType: string | undefined;
}

/**
 * @public
 * <p>UpdateVTLDeviceTypeOutput</p>
 */
export interface UpdateVTLDeviceTypeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the medium changer you have selected.</p>
   */
  VTLDeviceARN?: string;
}

/**
 * @internal
 */
export const AssociateFileSystemInputFilterSensitiveLog = (obj: AssociateFileSystemInput): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChapInfoFilterSensitiveLog = (obj: ChapInfo): any => ({
  ...obj,
  ...(obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: SENSITIVE_STRING }),
  ...(obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeChapCredentialsOutputFilterSensitiveLog = (obj: DescribeChapCredentialsOutput): any => ({
  ...obj,
  ...(obj.ChapCredentials && { ChapCredentials: obj.ChapCredentials.map((item) => ChapInfoFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const JoinDomainInputFilterSensitiveLog = (obj: JoinDomainInput): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetLocalConsolePasswordInputFilterSensitiveLog = (obj: SetLocalConsolePasswordInput): any => ({
  ...obj,
  ...(obj.LocalConsolePassword && { LocalConsolePassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetSMBGuestPasswordInputFilterSensitiveLog = (obj: SetSMBGuestPasswordInput): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChapCredentialsInputFilterSensitiveLog = (obj: UpdateChapCredentialsInput): any => ({
  ...obj,
  ...(obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: SENSITIVE_STRING }),
  ...(obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateFileSystemAssociationInputFilterSensitiveLog = (obj: UpdateFileSystemAssociationInput): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});
