import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A key-value pair that helps you manage, filter, and search for your resource. Allowed
 *          characters: letters, white space, and numbers, representable in UTF-8, and the following
 *          characters: + - = . _ : /.</p>
 */
export interface Tag {
  /**
   * <p>Tag key. The key can't start with aws:.</p>
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag key.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
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
   *             key</a> in the <i>AWS Storage Gateway User Guide</i>.</p>
   */
  ActivationKey: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName: string | undefined;

  /**
   * <p>A value that indicates the time zone you want to set for the gateway. The time zone is
   *          of the format "GMT-hr:mm" or "GMT+hr:mm". For example, GMT-4:00 indicates the time is 4
   *          hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is
   *          used, for example, for scheduling snapshots and your gateway's maintenance
   *          schedule.</p>
   */
  GatewayTimezone: string | undefined;

  /**
   * <p>A value that indicates the AWS Region where you want to store your data. The gateway AWS
   *          Region specified must be the same AWS Region as the AWS Region in your <code>Host</code>
   *          header in the request. For more information about available AWS Regions and endpoints for
   *          AWS Storage Gateway, see <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">AWS
   *             Storage Gateway endpoints and quotas</a> in the <i>AWS General
   *             Reference</i>.</p>
   *
   *          <p>Valid Values: See <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">AWS
   *             Storage Gateway endpoints and quotas</a> in the <i>AWS General
   *             Reference</i>.
   *
   *       </p>
   */
  GatewayRegion: string | undefined;

  /**
   * <p>A value that defines the type of gateway to activate. The type specified is critical to
   *          all later functions of the gateway and cannot be changed after activation. The default
   *          value is <code>CACHED</code>.</p>
   *
   *          <p>Valid Values: <code>STORED</code> | <code>CACHED</code> | <code>VTL</code> |
   *             <code>FILE_S3</code>
   *          </p>
   */
  GatewayType?: string;

  /**
   * <p>The value that indicates the type of tape drive to use for tape gateway. This field is
   *          optional.</p>
   *
   *          <p>Valid Values: <code>IBM-ULT3580-TD5</code>
   *          </p>
   */
  TapeDriveType?: string;

  /**
   * <p>The value that indicates the type of medium changer to use for tape gateway. This field
   *          is optional.</p>
   *
   *          <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> |
   *             <code>IBM-03584L32-0402</code>
   *          </p>
   */
  MediumChangerType?: string;

  /**
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

export namespace ActivateGatewayInput {
  export const filterSensitiveLog = (obj: ActivateGatewayInput): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It
 *          is a string made of information such as your account, gateway name, and AWS Region. This
 *          ARN is used to reference the gateway in other API operations as well as resource-based
 *          authorization.</p>
 *
 *          <note>
 *             <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the
 *             gateway name rather than the gateway ID. Changing the name of the gateway has no effect
 *             on the gateway ARN.</p>
 *          </note>
 */
export interface ActivateGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ActivateGatewayOutput {
  export const filterSensitiveLog = (obj: ActivateGatewayOutput): any => ({
    ...obj,
  });
}

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
 * <p>Provides additional information about an error that was returned by the service. See the
 *             <code>errorCode</code> and <code>errorDetails</code> members for more information about
 *          the error.</p>
 */
export interface StorageGatewayError {
  /**
   * <p>Additional information about the error.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>Human-readable text that provides detail about the error that occurred.</p>
   */
  errorDetails?: { [key: string]: string };
}

export namespace StorageGatewayError {
  export const filterSensitiveLog = (obj: StorageGatewayError): any => ({
    ...obj,
  });
}

/**
 * <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;

  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   */
  error?: StorageGatewayError;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 */
export interface InvalidGatewayRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidGatewayRequestException";
  $fault: "client";
  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;

  /**
   * <p>A <a>StorageGatewayError</a> that provides more detail about the cause of the
   *          error.</p>
   */
  error?: StorageGatewayError;
}

export namespace InvalidGatewayRequestException {
  export const filterSensitiveLog = (obj: InvalidGatewayRequestException): any => ({
    ...obj,
  });
}

export type ActiveDirectoryStatus =
  | "ACCESS_DENIED"
  | "DETACHED"
  | "JOINED"
  | "JOINING"
  | "NETWORK_ERROR"
  | "TIMEOUT"
  | "UNKNOWN_ERROR";

export interface AddCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;
}

export namespace AddCacheInput {
  export const filterSensitiveLog = (obj: AddCacheInput): any => ({
    ...obj,
  });
}

export interface AddCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AddCacheOutput {
  export const filterSensitiveLog = (obj: AddCacheOutput): any => ({
    ...obj,
  });
}

/**
 * <p>AddTagsToResourceInput</p>
 */
export interface AddTagsToResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
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

export namespace AddTagsToResourceInput {
  export const filterSensitiveLog = (obj: AddTagsToResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>AddTagsToResourceOutput</p>
 */
export interface AddTagsToResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  ResourceARN?: string;
}

export namespace AddTagsToResourceOutput {
  export const filterSensitiveLog = (obj: AddTagsToResourceOutput): any => ({
    ...obj,
  });
}

export interface AddUploadBufferInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;
}

export namespace AddUploadBufferInput {
  export const filterSensitiveLog = (obj: AddUploadBufferInput): any => ({
    ...obj,
  });
}

export interface AddUploadBufferOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AddUploadBufferOutput {
  export const filterSensitiveLog = (obj: AddUploadBufferOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;
}

export namespace AddWorkingStorageInput {
  export const filterSensitiveLog = (obj: AddWorkingStorageInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working
 *          storage was configured.</p>
 */
export interface AddWorkingStorageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AddWorkingStorageOutput {
  export const filterSensitiveLog = (obj: AddWorkingStorageOutput): any => ({
    ...obj,
  });
}

export interface AssignTapePoolInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the
   *          tape pool.</p>
   */
  TapeARN: string | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId: string | undefined;

  /**
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

export namespace AssignTapePoolInput {
  export const filterSensitiveLog = (obj: AssignTapePoolInput): any => ({
    ...obj,
  });
}

export interface AssignTapePoolOutput {
  /**
   * <p>The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape
   *          pool.</p>
   */
  TapeARN?: string;
}

export namespace AssignTapePoolOutput {
  export const filterSensitiveLog = (obj: AssignTapePoolOutput): any => ({
    ...obj,
  });
}

/**
 * <p>AttachVolumeInput</p>
 */
export interface AttachVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that you want to attach the volume
   *          to.</p>
   */
  GatewayARN: string | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.</p>
   */
  VolumeARN: string | undefined;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *
   *          <p>Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The unique device ID or other distinguishing data that identifies the local disk used to
   *          create the volume. This value is only required when you are attaching a stored
   *          volume.</p>
   */
  DiskId?: string;
}

export namespace AttachVolumeInput {
  export const filterSensitiveLog = (obj: AttachVolumeInput): any => ({
    ...obj,
  });
}

/**
 * <p>AttachVolumeOutput</p>
 */
export interface AttachVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was attached to the gateway.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for
   *          the initiator that was used to connect to the target.</p>
   */
  TargetARN?: string;
}

export namespace AttachVolumeOutput {
  export const filterSensitiveLog = (obj: AttachVolumeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An automatic tape creation policy consists of automatic tape creation rules where each
 *          rule defines when and how to create new tapes. For more information about automatic tape
 *          creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.</p>
 */
export interface AutomaticTapeCreationRule {
  /**
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
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the Amazon S3 storage class that is associated with the pool. When you
   *          use your backup application to eject the tape, the tape is archived directly into the
   *          storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   */
  TapeSizeInBytes: number | undefined;

  /**
   * <p>The minimum number of available virtual tapes that the gateway maintains at all times.
   *          If the number of tapes on the gateway goes below this value, the gateway creates as many
   *          new tapes as are needed to have <code>MinimumNumTapes</code> on the gateway. For more
   *          information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.</p>
   */
  MinimumNumTapes: number | undefined;

  /**
   * <p>Set to <code>true</code> to indicate that tapes are to be archived as
   *          write-once-read-many (WORM). Set to <code>false</code> when WORM is not enabled for
   *          tapes.</p>
   */
  Worm?: boolean;
}

export namespace AutomaticTapeCreationRule {
  export const filterSensitiveLog = (obj: AutomaticTapeCreationRule): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the gateway's automatic tape creation policies, including the
 *          automatic tape creation rules and the gateway that is using the policies.</p>
 */
export interface AutomaticTapeCreationPolicyInfo {
  /**
   * <p>An automatic tape creation policy consists of a list of automatic tape creation rules.
   *          This returns the rules that determine when and how to automatically create new
   *          tapes.</p>
   */
  AutomaticTapeCreationRules?: AutomaticTapeCreationRule[];

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AutomaticTapeCreationPolicyInfo {
  export const filterSensitiveLog = (obj: AutomaticTapeCreationPolicyInfo): any => ({
    ...obj,
  });
}

export type AvailabilityMonitorTestStatus = "COMPLETE" | "FAILED" | "PENDING";

/**
 * <p>
 *          Describes a bandwidth rate limit interval for a gateway. A bandwidth
 *          rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit
 *          interval defines a period of time on one or more days of the week, during which bandwidth rate
 *          limits are specified for uploading, downloading, or both.
 *       </p>
 */
export interface BandwidthRateLimitInterval {
  /**
   * <p>
   *          The hour of the day to start the bandwidth rate limit interval.
   *       </p>
   */
  StartHourOfDay: number | undefined;

  /**
   * <p>
   *          The minute of the hour to start the bandwidth rate limit interval.
   *          The interval begins at the start of that minute. To begin an interval exactly at
   *          the start of the hour, use the value <code>0</code>.
   *       </p>
   */
  StartMinuteOfHour: number | undefined;

  /**
   * <p>
   *          The hour of the day to end the bandwidth rate limit interval.
   *       </p>
   */
  EndHourOfDay: number | undefined;

  /**
   * <p>
   *          The minute of the hour to end the bandwidth rate limit interval.
   *       </p>
   *
   *          <important>
   *             <p>
   *             The bandwidth rate limit interval ends at the end of the minute. To end an interval
   *             at the end of an hour, use the value <code>59</code>.
   *          </p>
   *          </important>
   */
  EndMinuteOfHour: number | undefined;

  /**
   * <p>
   *          The days of the week component of the bandwidth rate limit interval,
   *          represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 Saturday.
   *       </p>
   */
  DaysOfWeek: number[] | undefined;

  /**
   * <p>
   *          The average upload rate limit component of the bandwidth rate limit interval,
   *          in bits per second. This field does not appear in the response if the upload rate limit is not set.
   *       </p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * <p>
   *          The average download rate limit component of the bandwidth rate limit interval,
   *          in bits per second. This field does not appear in the response if the download rate limit is not set.
   *       </p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;
}

export namespace BandwidthRateLimitInterval {
  export const filterSensitiveLog = (obj: BandwidthRateLimitInterval): any => ({
    ...obj,
  });
}

/**
 * <p>Lists refresh cache information.</p>
 */
export interface CacheAttributes {
  /**
   * <p>Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of
   *          time since the last refresh after which access to the directory would cause the file
   *          gateway to first refresh that directory's contents from the Amazon S3 bucket. The TTL
   *          duration is in seconds.</p>
   *
   *          <p>Valid Values: 300 to 2,592,000 seconds (5 minutes to 30 days)</p>
   */
  CacheStaleTimeoutInSeconds?: number;
}

export namespace CacheAttributes {
  export const filterSensitiveLog = (obj: CacheAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Lists iSCSI information about a volume.</p>
 */
export interface VolumeiSCSIAttributes {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The network interface identifier.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The port used to communicate with iSCSI targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * <p>The logical disk number.</p>
   */
  LunNumber?: number;

  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;
}

export namespace VolumeiSCSIAttributes {
  export const filterSensitiveLog = (obj: VolumeiSCSIAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an iSCSI cached volume.</p>
 */
export interface CachediSCSIVolume {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The unique identifier of the volume, e.g., vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * <p>One of the VolumeType enumeration values that describes the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeStatus?: string;

  /**
   * <p>A value that indicates whether a storage volume is attached to or detached from a
   *          gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving
   *             your volumes to a different gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * <p>The size, in bytes, of the volume capacity.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the cached volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * <p>If the cached volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g., snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *          attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;

  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   *          timestamp.</p>
   */
  CreatedDate?: Date;

  /**
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
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
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

export namespace CachediSCSIVolume {
  export const filterSensitiveLog = (obj: CachediSCSIVolume): any => ({
    ...obj,
  });
}

/**
 * <p>CancelArchivalInput</p>
 */
export interface CancelArchivalInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving
   *          for.</p>
   */
  TapeARN: string | undefined;
}

export namespace CancelArchivalInput {
  export const filterSensitiveLog = (obj: CancelArchivalInput): any => ({
    ...obj,
  });
}

/**
 * <p>CancelArchivalOutput</p>
 */
export interface CancelArchivalOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which archiving was
   *          canceled.</p>
   */
  TapeARN?: string;
}

export namespace CancelArchivalOutput {
  export const filterSensitiveLog = (obj: CancelArchivalOutput): any => ({
    ...obj,
  });
}

/**
 * <p>CancelRetrievalInput</p>
 */
export interface CancelRetrievalInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval
   *          for.</p>
   */
  TapeARN: string | undefined;
}

export namespace CancelRetrievalInput {
  export const filterSensitiveLog = (obj: CancelRetrievalInput): any => ({
    ...obj,
  });
}

/**
 * <p>CancelRetrievalOutput</p>
 */
export interface CancelRetrievalOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which retrieval was
   *          canceled.</p>
   */
  TapeARN?: string;
}

export namespace CancelRetrievalOutput {
  export const filterSensitiveLog = (obj: CancelRetrievalOutput): any => ({
    ...obj,
  });
}

export type CaseSensitivity = "CaseSensitive" | "ClientSpecified";

/**
 * <p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports
 *          authentication between your gateway and iSCSI initiators.</p>
 */
export interface ChapInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  TargetARN?: string;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   */
  SecretToAuthenticateInitiator?: string;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;

  /**
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g., Windows client).</p>
   */
  SecretToAuthenticateTarget?: string;
}

export namespace ChapInfo {
  export const filterSensitiveLog = (obj: ChapInfo): any => ({
    ...obj,
    ...(obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: SENSITIVE_STRING }),
    ...(obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: SENSITIVE_STRING }),
  });
}

export interface CreateCachediSCSIVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes: number | undefined;

  /**
   * <p>The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot;
   *          otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   */
  SnapshotId?: string;

  /**
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
   * <p>The ARN for an existing volume. Specifying this ARN makes the new volume into an exact
   *          copy of the specified existing volume's latest recovery point. The
   *             <code>VolumeSizeInBytes</code> value for this new volume must be equal to or larger than
   *          the size of the existing volume, in bytes.</p>
   */
  SourceVolumeARN?: string;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *
   *          <p>Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
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

export namespace CreateCachediSCSIVolumeInput {
  export const filterSensitiveLog = (obj: CreateCachediSCSIVolumeInput): any => ({
    ...obj,
  });
}

export interface CreateCachediSCSIVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   *          initiators can use to connect to the target.</p>
   */
  TargetARN?: string;
}

export namespace CreateCachediSCSIVolumeOutput {
  export const filterSensitiveLog = (obj: CreateCachediSCSIVolumeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes Network File System (NFS) file share default values. Files and folders stored
 *          as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions
 *          assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that
 *          represent files and folders are assigned these default Unix permissions. This operation is
 *          only supported for file gateways.</p>
 */
export interface NFSFileShareDefaults {
  /**
   * <p>The Unix file mode in the form "nnnn". For example, <code>0666</code> represents the
   *          default file mode inside the file share. The default value is <code>0666</code>.</p>
   */
  FileMode?: string;

  /**
   * <p>The Unix directory mode in the form "nnnn". For example, <code>0666</code> represents
   *          the default access mode for all directories inside the file share. The default value is
   *             <code>0777</code>.</p>
   */
  DirectoryMode?: string;

  /**
   * <p>The default group ID for the file share (unless the files have another group ID
   *          specified). The default value is <code>nfsnobody</code>.</p>
   */
  GroupId?: number;

  /**
   * <p>The default owner ID for files in the file share (unless the files have another owner ID
   *          specified). The default value is <code>nfsnobody</code>.</p>
   */
  OwnerId?: number;
}

export namespace NFSFileShareDefaults {
  export const filterSensitiveLog = (obj: NFSFileShareDefaults): any => ({
    ...obj,
  });
}

export type ObjectACL =
  | "authenticated-read"
  | "aws-exec-read"
  | "bucket-owner-full-control"
  | "bucket-owner-read"
  | "private"
  | "public-read"
  | "public-read-write";

/**
 * <p>CreateNFSFileShareInput</p>
 */
export interface CreateNFSFileShareInput {
  /**
   * <p>A unique string value that you supply that is used by file gateway to ensure idempotent
   *          file share creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>File share default values. Optional.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway on which you want to create a file
   *          share.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes
   *          when it accesses the underlying storage.</p>
   */
  Role: string | undefined;

  /**
   * <p>The ARN of the backend storage used for storing file data. A prefix name can be added to
   *          the S3 bucket name. It must end with a "/".</p>
   */
  LocationARN: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway.
   *          The default value is <code>S3_INTELLIGENT_TIERING</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must contain
   *          either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
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
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
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
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * <p>Refresh cache information.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * <p>The notification policy of the file share.</p>
   */
  NotificationPolicy?: string;
}

export namespace CreateNFSFileShareInput {
  export const filterSensitiveLog = (obj: CreateNFSFileShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateNFSFileShareOutput</p>
 */
export interface CreateNFSFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share.</p>
   */
  FileShareARN?: string;
}

export namespace CreateNFSFileShareOutput {
  export const filterSensitiveLog = (obj: CreateNFSFileShareOutput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateSMBFileShareInput</p>
 */
export interface CreateSMBFileShareInput {
  /**
   * <p>A unique string value that you supply that is used by file gateway to ensure idempotent
   *          file share creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The ARN of the file gateway on which you want to create a file share.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes
   *          when it accesses the underlying storage.</p>
   */
  Role: string | undefined;

  /**
   * <p>The ARN of the backend storage used for storing file data. A prefix name can be added to
   *          the S3 bucket name. It must end with a "/".</p>
   */
  LocationARN: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway.
   *          The default value is <code>S3_INTELLIGENT_TIERING</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
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
   * <p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file
   *          share. Set it to <code>false</code> to map file and directory permissions to the POSIX
   *          permissions.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to
   *             control access to an SMB file share</a> in the <i>AWS Storage Gateway User
   *             Guide</i>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>The files and folders on this share will only be visible to users with read
   *          access.</p>
   */
  AccessBasedEnumeration?: boolean;

  /**
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
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *             <a href=""></a> share. A group must be prefixed with the @ character. Acceptable formats
   *          include: <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * <p>The authentication method that users use to access the file share. The default is
   *             <code>ActiveDirectory</code>.</p>
   *
   *          <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code>
   *          </p>
   */
  Authentication?: string;

  /**
   * <p>The case of an object name in an Amazon S3 bucket. For <code>ClientSpecified</code>, the
   *          client determines the case sensitivity. For <code>CaseSensitive</code>, the gateway
   *          determines the case sensitivity. The default value is <code>ClientSpecified</code>.</p>
   */
  CaseSensitivity?: CaseSensitivity | string;

  /**
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
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * <p>Refresh cache information.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * <p>The notification policy of the file share.</p>
   */
  NotificationPolicy?: string;
}

export namespace CreateSMBFileShareInput {
  export const filterSensitiveLog = (obj: CreateSMBFileShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateSMBFileShareOutput</p>
 */
export interface CreateSMBFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share.</p>
   */
  FileShareARN?: string;
}

export namespace CreateSMBFileShareOutput {
  export const filterSensitiveLog = (obj: CreateSMBFileShareOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;

  /**
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the AWS Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field.</p>
   */
  SnapshotDescription: string | undefined;

  /**
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

export namespace CreateSnapshotInput {
  export const filterSensitiveLog = (obj: CreateSnapshotInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface CreateSnapshotOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The snapshot ID that is used to refer to the snapshot in future operations such as
   *          describing snapshots (Amazon Elastic Compute Cloud API <code>DescribeSnapshots</code>) or
   *          creating a volume from a snapshot (<a>CreateStorediSCSIVolume</a>).</p>
   */
  SnapshotId?: string;
}

export namespace CreateSnapshotOutput {
  export const filterSensitiveLog = (obj: CreateSnapshotOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An internal server error has occurred because the service is unavailable. For more
 *          information, see the error and message fields.</p>
 */
export interface ServiceUnavailableError extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableError";
  $fault: "server";
  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;

  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   */
  error?: StorageGatewayError;
}

export namespace ServiceUnavailableError {
  export const filterSensitiveLog = (obj: ServiceUnavailableError): any => ({
    ...obj,
  });
}

export interface CreateSnapshotFromVolumeRecoveryPointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  VolumeARN: string | undefined;

  /**
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the AWS Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field.</p>
   */
  SnapshotDescription: string | undefined;

  /**
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

export namespace CreateSnapshotFromVolumeRecoveryPointInput {
  export const filterSensitiveLog = (obj: CreateSnapshotFromVolumeRecoveryPointInput): any => ({
    ...obj,
  });
}

export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The time the volume was created from the recovery point.</p>
   */
  VolumeRecoveryPointTime?: string;
}

export namespace CreateSnapshotFromVolumeRecoveryPointOutput {
  export const filterSensitiveLog = (obj: CreateSnapshotFromVolumeRecoveryPointOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The unique identifier for the gateway local disk that is configured as a stored volume.
   *          Use <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html">ListLocalDisks</a> to
   *          list disk IDs for a gateway.</p>
   */
  DiskId: string | undefined;

  /**
   * <p>The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new stored
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot;
   *          otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Set to true <code>true</code> if you want to preserve the data on the local disk.
   *          Otherwise, set to <code>false</code> to create an empty volume.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  PreserveExistingData: boolean | undefined;

  /**
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
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *
   *          <p>Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
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

export namespace CreateStorediSCSIVolumeInput {
  export const filterSensitiveLog = (obj: CreateStorediSCSIVolumeInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface CreateStorediSCSIVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   *          initiators can use to connect to the target.</p>
   */
  TargetARN?: string;
}

export namespace CreateStorediSCSIVolumeOutput {
  export const filterSensitiveLog = (obj: CreateStorediSCSIVolumeOutput): any => ({
    ...obj,
  });
}

export type RetentionLockType = "COMPLIANCE" | "GOVERNANCE" | "NONE";

export type TapeStorageClass = "DEEP_ARCHIVE" | "GLACIER";

export interface CreateTapePoolInput {
  /**
   * <p>The name of the new custom tape pool.</p>
   */
  PoolName: string | undefined;

  /**
   * <p>The storage class that is associated with the new custom pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  StorageClass: TapeStorageClass | string | undefined;

  /**
   * <p>Tape retention lock can be configured in two modes. When configured in governance mode,
   *          AWS accounts with specific IAM permissions are authorized to remove the tape retention lock
   *          from archived virtual tapes. When configured in compliance mode, the tape retention lock
   *          cannot be removed by any user, including the root AWS account.</p>
   */
  RetentionLockType?: RetentionLockType | string;

  /**
   * <p>Tape retention lock time is set in days. Tape retention lock can be enabled for up to
   *          100 years (36,500 days).</p>
   */
  RetentionLockTimeInDays?: number;

  /**
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

export namespace CreateTapePoolInput {
  export const filterSensitiveLog = (obj: CreateTapePoolInput): any => ({
    ...obj,
  });
}

export interface CreateTapePoolOutput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the
   *             <a>ListTapePools</a> operation to return a list of tape pools for your
   *          account and AWS Region.</p>
   */
  PoolARN?: string;
}

export namespace CreateTapePoolOutput {
  export const filterSensitiveLog = (obj: CreateTapePoolOutput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateTapesInput</p>
 */
export interface CreateTapesInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tapes with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tapes that you want to create.</p>
   *
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p>
   *          </note>
   */
  TapeSizeInBytes: number | undefined;

  /**
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
   * <p>The number of virtual tapes that you want to create.</p>
   */
  NumTapesToCreate: number | undefined;

  /**
   * <p>A prefix that you append to the barcode of the virtual tape you are creating. This
   *          prefix makes the barcode unique.</p>
   *
   *          <note>
   *             <p>The prefix must be 1 to 4 characters in length and must be one of the uppercase
   *             letters from A to Z.</p>
   *          </note>
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId?: string;

  /**
   * <p>Set to <code>TRUE</code> if the tape you are creating is to be configured as a
   *          write-once-read-many (WORM) tape.</p>
   */
  Worm?: boolean;

  /**
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

export namespace CreateTapesInput {
  export const filterSensitiveLog = (obj: CreateTapesInput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapesOutput {
  /**
   * <p>A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that
   *          were created.</p>
   */
  TapeARNs?: string[];
}

export namespace CreateTapesOutput {
  export const filterSensitiveLog = (obj: CreateTapesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateTapeWithBarcodeInput</p>
 */
export interface CreateTapeWithBarcodeInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tape with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tape that you want to create.</p>
   *
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p>
   *          </note>
   */
  TapeSizeInBytes: number | undefined;

  /**
   * <p>The barcode that you want to assign to the tape.</p>
   *
   *          <note>
   *             <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been
   *             deleted.</p>
   *          </note>
   */
  TapeBarcode: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Deep Archive) that corresponds to the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId?: string;

  /**
   * <p>Set to <code>TRUE</code> if the tape you are creating is to be configured as a
   *          write-once-read-many (WORM) tape.</p>
   */
  Worm?: boolean;

  /**
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

export namespace CreateTapeWithBarcodeInput {
  export const filterSensitiveLog = (obj: CreateTapeWithBarcodeInput): any => ({
    ...obj,
  });
}

/**
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapeWithBarcodeOutput {
  /**
   * <p>A unique Amazon Resource Name (ARN) that represents the virtual tape that was
   *          created.</p>
   */
  TapeARN?: string;
}

export namespace CreateTapeWithBarcodeOutput {
  export const filterSensitiveLog = (obj: CreateTapeWithBarcodeOutput): any => ({
    ...obj,
  });
}

export interface DeleteAutomaticTapeCreationPolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DeleteAutomaticTapeCreationPolicyInput {
  export const filterSensitiveLog = (obj: DeleteAutomaticTapeCreationPolicyInput): any => ({
    ...obj,
  });
}

export interface DeleteAutomaticTapeCreationPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DeleteAutomaticTapeCreationPolicyOutput {
  export const filterSensitiveLog = (obj: DeleteAutomaticTapeCreationPolicyOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>One of the BandwidthType values that indicates the gateway bandwidth rate limit to
   *          delete.</p>
   *
   *          <p>Valid Values: <code>UPLOAD</code> | <code>DOWNLOAD</code> | <code>ALL</code>
   *          </p>
   */
  BandwidthType: string | undefined;
}

export namespace DeleteBandwidthRateLimitInput {
  export const filterSensitiveLog = (obj: DeleteBandwidthRateLimitInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth
 *          rate information was deleted.</p>
 */
export interface DeleteBandwidthRateLimitOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DeleteBandwidthRateLimitOutput {
  export const filterSensitiveLog = (obj: DeleteBandwidthRateLimitOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  TargetARN: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName: string | undefined;
}

export namespace DeleteChapCredentialsInput {
  export const filterSensitiveLog = (obj: DeleteChapCredentialsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DeleteChapCredentialsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;
}

export namespace DeleteChapCredentialsOutput {
  export const filterSensitiveLog = (obj: DeleteChapCredentialsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteFileShareInput</p>
 */
export interface DeleteFileShareInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share to be deleted.</p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>If this value is set to <code>true</code>, the operation deletes a file share
   *          immediately and aborts all data uploads to AWS. Otherwise, the file share is not deleted
   *          until all data is uploaded to AWS. This process aborts the data upload process, and the
   *          file share enters the <code>FORCE_DELETING</code> status.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ForceDelete?: boolean;
}

export namespace DeleteFileShareInput {
  export const filterSensitiveLog = (obj: DeleteFileShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteFileShareOutput</p>
 */
export interface DeleteFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted file share.</p>
   */
  FileShareARN?: string;
}

export namespace DeleteFileShareOutput {
  export const filterSensitiveLog = (obj: DeleteFileShareOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the ID of the gateway to delete.</p>
 */
export interface DeleteGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DeleteGatewayInput {
  export const filterSensitiveLog = (obj: DeleteGatewayInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the ID of the deleted gateway.</p>
 */
export interface DeleteGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DeleteGatewayOutput {
  export const filterSensitiveLog = (obj: DeleteGatewayOutput): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotScheduleInput {
  /**
   * <p>The volume which snapshot schedule to delete.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DeleteSnapshotScheduleInput {
  export const filterSensitiveLog = (obj: DeleteSnapshotScheduleInput): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotScheduleOutput {
  /**
   * <p>The volume which snapshot schedule was deleted.</p>
   */
  VolumeARN?: string;
}

export namespace DeleteSnapshotScheduleOutput {
  export const filterSensitiveLog = (obj: DeleteSnapshotScheduleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteTapeInput</p>
 */
export interface DeleteTapeInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is
   *          associated with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete.</p>
   */
  TapeARN: string | undefined;

  /**
   * <p>Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with
   *          tape retention lock. Only archived tapes with tape retention lock set to
   *             <code>governance</code> can be deleted. Archived tapes with tape retention lock set to
   *             <code>compliance</code> can't be deleted.</p>
   */
  BypassGovernanceRetention?: boolean;
}

export namespace DeleteTapeInput {
  export const filterSensitiveLog = (obj: DeleteTapeInput): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteTapeOutput</p>
 */
export interface DeleteTapeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted virtual tape.</p>
   */
  TapeARN?: string;
}

export namespace DeleteTapeOutput {
  export const filterSensitiveLog = (obj: DeleteTapeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteTapeArchiveInput</p>
 */
export interface DeleteTapeArchiveInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf
   *          (VTS).</p>
   */
  TapeARN: string | undefined;

  /**
   * <p>Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with
   *          tape retention lock. Only archived tapes with tape retention lock set to
   *             <code>governance</code> can be deleted. Archived tapes with tape retention lock set to
   *             <code>compliance</code> can't be deleted.</p>
   */
  BypassGovernanceRetention?: boolean;
}

export namespace DeleteTapeArchiveInput {
  export const filterSensitiveLog = (obj: DeleteTapeArchiveInput): any => ({
    ...obj,
  });
}

/**
 * <p>DeleteTapeArchiveOutput</p>
 */
export interface DeleteTapeArchiveOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual
   *          tape shelf (VTS).</p>
   */
  TapeARN?: string;
}

export namespace DeleteTapeArchiveOutput {
  export const filterSensitiveLog = (obj: DeleteTapeArchiveOutput): any => ({
    ...obj,
  });
}

export interface DeleteTapePoolInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom tape pool to delete.</p>
   */
  PoolARN: string | undefined;
}

export namespace DeleteTapePoolInput {
  export const filterSensitiveLog = (obj: DeleteTapePoolInput): any => ({
    ...obj,
  });
}

export interface DeleteTapePoolOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom tape pool being deleted.</p>
   */
  PoolARN?: string;
}

export namespace DeleteTapePoolOutput {
  export const filterSensitiveLog = (obj: DeleteTapePoolOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to
 *          delete.</p>
 */
export interface DeleteVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DeleteVolumeInput {
  export const filterSensitiveLog = (obj: DeleteVolumeInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was
 *          deleted.</p>
 */
export interface DeleteVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same
   *          ARN you provided in the request.</p>
   */
  VolumeARN?: string;
}

export namespace DeleteVolumeOutput {
  export const filterSensitiveLog = (obj: DeleteVolumeOutput): any => ({
    ...obj,
  });
}

export interface DescribeAvailabilityMonitorTestInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeAvailabilityMonitorTestInput {
  export const filterSensitiveLog = (obj: DescribeAvailabilityMonitorTestInput): any => ({
    ...obj,
  });
}

export interface DescribeAvailabilityMonitorTestOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The status of the High Availability monitoring test. If a test hasn't been
   *          performed, the value of this field is null.</p>
   */
  Status?: AvailabilityMonitorTestStatus | string;

  /**
   * <p>The time the High Availability monitoring test was started. If a test hasn't been
   *          performed, the value of this field is null.</p>
   */
  StartTime?: Date;
}

export namespace DescribeAvailabilityMonitorTestOutput {
  export const filterSensitiveLog = (obj: DescribeAvailabilityMonitorTestOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface DescribeBandwidthRateLimitInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeBandwidthRateLimitInput {
  export const filterSensitiveLog = (obj: DescribeBandwidthRateLimitInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeBandwidthRateLimitOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The average upload bandwidth rate limit in bits per second. This field does not appear
   *          in the response if the upload rate limit is not set.</p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * <p>The average download bandwidth rate limit in bits per second. This field does not appear
   *          in the response if the download rate limit is not set.</p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;
}

export namespace DescribeBandwidthRateLimitOutput {
  export const filterSensitiveLog = (obj: DescribeBandwidthRateLimitOutput): any => ({
    ...obj,
  });
}

export interface DescribeBandwidthRateLimitScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeBandwidthRateLimitScheduleInput {
  export const filterSensitiveLog = (obj: DescribeBandwidthRateLimitScheduleInput): any => ({
    ...obj,
  });
}

export interface DescribeBandwidthRateLimitScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>
   *          An array that contains the bandwidth rate limit intervals for a tape or volume gateway.
   *       </p>
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
}

export namespace DescribeBandwidthRateLimitScheduleOutput {
  export const filterSensitiveLog = (obj: DescribeBandwidthRateLimitScheduleOutput): any => ({
    ...obj,
  });
}

export interface DescribeCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeCacheInput {
  export const filterSensitiveLog = (obj: DescribeCacheInput): any => ({
    ...obj,
  });
}

export interface DescribeCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds?: string[];

  /**
   * <p>The amount of cache in bytes allocated to a gateway.</p>
   */
  CacheAllocatedInBytes?: number;

  /**
   * <p>Percent use of the gateway's cache storage. This metric applies only to the
   *          gateway-cached volume setup. The sample is taken at the end of the reporting period.</p>
   */
  CacheUsedPercentage?: number;

  /**
   * <p>The file share's contribution to the overall percentage of the gateway's cache
   *          that has not been persisted to AWS. The sample is taken at the end of the reporting
   *          period.</p>
   */
  CacheDirtyPercentage?: number;

  /**
   * <p>Percent of application read operations from the file shares that are served from cache.
   *          The sample is taken at the end of the reporting period.</p>
   */
  CacheHitPercentage?: number;

  /**
   * <p>Percent of application read operations from the file shares that are not served from
   *          cache. The sample is taken at the end of the reporting period.</p>
   */
  CacheMissPercentage?: number;
}

export namespace DescribeCacheOutput {
  export const filterSensitiveLog = (obj: DescribeCacheOutput): any => ({
    ...obj,
  });
}

export interface DescribeCachediSCSIVolumesInput {
  /**
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          cached volume. All of the specified cached volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   */
  VolumeARNs: string[] | undefined;
}

export namespace DescribeCachediSCSIVolumesInput {
  export const filterSensitiveLog = (obj: DescribeCachediSCSIVolumesInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeCachediSCSIVolumesOutput {
  /**
   * <p>An array of objects where each object contains metadata about one cached volume.</p>
   */
  CachediSCSIVolumes?: CachediSCSIVolume[];
}

export namespace DescribeCachediSCSIVolumesOutput {
  export const filterSensitiveLog = (obj: DescribeCachediSCSIVolumesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume
 *          target.</p>
 */
export interface DescribeChapCredentialsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  TargetARN: string | undefined;
}

export namespace DescribeChapCredentialsInput {
  export const filterSensitiveLog = (obj: DescribeChapCredentialsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeChapCredentialsOutput {
  /**
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

export namespace DescribeChapCredentialsOutput {
  export const filterSensitiveLog = (obj: DescribeChapCredentialsOutput): any => ({
    ...obj,
    ...(obj.ChapCredentials && {
      ChapCredentials: obj.ChapCredentials.map((item) => ChapInfo.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>A JSON object containing the ID of the gateway.</p>
 */
export interface DescribeGatewayInformationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeGatewayInformationInput {
  export const filterSensitiveLog = (obj: DescribeGatewayInformationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a gateway's network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the interface.</p>
   */
  Ipv4Address?: string;

  /**
   * <p>The Media Access Control (MAC) address of the interface.</p>
   *
   *          <note>
   *             <p>This is currently unsupported and will not be returned in output.</p>
   *          </note>
   */
  MacAddress?: string;

  /**
   * <p>The Internet Protocol version 6 (IPv6) address of the interface. <i>Currently not
   *             supported</i>.</p>
   */
  Ipv6Address?: string;
}

export namespace NetworkInterface {
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

export type HostEnvironment = "EC2" | "HYPER-V" | "KVM" | "OTHER" | "VMWARE";

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeGatewayInformationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   */
  GatewayId?: string;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>A value that indicates the time zone configured for the gateway.</p>
   */
  GatewayTimezone?: string;

  /**
   * <p>A value that indicates the operating state of the gateway.</p>
   */
  GatewayState?: string;

  /**
   * <p>A <a>NetworkInterface</a> array that contains descriptions of the gateway
   *          network interfaces.</p>
   */
  GatewayNetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * <p>The date on which an update to the gateway is available. This date is in the time zone
   *          of the gateway. If the gateway is not available for an update this field is not returned in
   *          the response.</p>
   */
  NextUpdateAvailabilityDate?: string;

  /**
   * <p>The date on which the last software update was applied to the gateway. If the gateway
   *          has never been updated, this field does not return a value in the response.</p>
   */
  LastSoftwareUpdate?: string;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The AWS Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;

  /**
   * <p>A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each
   *          tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all
   *          tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration settings for the virtual private cloud (VPC) endpoint for your
   *          gateway.</p>
   */
  VPCEndpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to
   *          monitor events in the gateway.</p>
   */
  CloudWatchLogGroupARN?: string;

  /**
   * <p>The type of hypervisor environment used by the host.</p>
   */
  HostEnvironment?: HostEnvironment | string;

  /**
   * <p>The type of endpoint for your gateway.</p>
   *
   *          <p>Valid Values: <code>STANDARD</code> | <code>FIPS</code>
   *          </p>
   */
  EndpointType?: string;

  /**
   * <p>Date after which this gateway will not receive software updates for new features.</p>
   */
  SoftwareUpdatesEndDate?: string;

  /**
   * <p>Date after which this gateway will not receive software updates for new features and bug
   *          fixes.</p>
   */
  DeprecationDate?: string;
}

export namespace DescribeGatewayInformationOutput {
  export const filterSensitiveLog = (obj: DescribeGatewayInformationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface DescribeMaintenanceStartTimeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeMaintenanceStartTimeInput {
  export const filterSensitiveLog = (obj: DescribeMaintenanceStartTimeInput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *          where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time
   *          zone of the gateway.</p>
   */
  HourOfDay?: number;

  /**
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (0 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour?: number;

  /**
   * <p>An ordinal number between 0 and 6 that represents the day of the week, where 0
   *          represents Sunday and 6 represents Saturday. The day of week is in the time zone of the
   *          gateway.</p>
   */
  DayOfWeek?: number;

  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal
   *          number from 1 to 28, where 1 represents the first day of the month and 28 represents the
   *          last day of the month.</p>
   */
  DayOfMonth?: number;

  /**
   * <p>A value that indicates the time zone that is set for the gateway. The start time and day
   *          of week specified should be in the time zone of the gateway.</p>
   */
  Timezone?: string;
}

export namespace DescribeMaintenanceStartTimeOutput {
  export const filterSensitiveLog = (obj: DescribeMaintenanceStartTimeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeNFSFileSharesInput</p>
 */
export interface DescribeNFSFileSharesInput {
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described.</p>
   */
  FileShareARNList: string[] | undefined;
}

export namespace DescribeNFSFileSharesInput {
  export const filterSensitiveLog = (obj: DescribeNFSFileSharesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The Unix file permissions and ownership information assigned, by default, to native S3
 *          objects when file gateway discovers them in S3 buckets. This operation is only supported in
 *          file gateways.</p>
 */
export interface NFSFileShareInfo {
  /**
   * <p>Describes Network File System (NFS) file share default values. Files and folders stored
   *          as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions
   *          assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that
   *          represent files and folders are assigned these default Unix permissions. This operation is
   *          only supported for file gateways.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share.</p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share.</p>
   *
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The file share path used by the NFS client to identify the mount point.</p>
   */
  Path?: string;

  /**
   * <p>The ARN of the IAM role that file gateway assumes when it accesses the underlying
   *          storage.</p>
   */
  Role?: string;

  /**
   * <p>The ARN of the backend storage used for storing file data. A prefix name can be added to
   *          the S3 bucket name. It must end with a "/".</p>
   */
  LocationARN?: string;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway.
   *          The default value is <code>S3_INTELLIGENT_TIERING</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must contain
   *          either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
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
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
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
   * <p>A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * <p>Refresh cache information.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * <p>The notification policy of the file share.</p>
   */
  NotificationPolicy?: string;
}

export namespace NFSFileShareInfo {
  export const filterSensitiveLog = (obj: NFSFileShareInfo): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeNFSFileSharesOutput</p>
 */
export interface DescribeNFSFileSharesOutput {
  /**
   * <p>An array containing a description for each requested file share.</p>
   */
  NFSFileShareInfoList?: NFSFileShareInfo[];
}

export namespace DescribeNFSFileSharesOutput {
  export const filterSensitiveLog = (obj: DescribeNFSFileSharesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeSMBFileSharesInput</p>
 */
export interface DescribeSMBFileSharesInput {
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described.</p>
   */
  FileShareARNList: string[] | undefined;
}

export namespace DescribeSMBFileSharesInput {
  export const filterSensitiveLog = (obj: DescribeSMBFileSharesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The Windows file permissions and ownership information assigned, by default, to native
 *          S3 objects when file gateway discovers them in S3 buckets. This operation is only supported
 *          for file gateways.</p>
 */
export interface SMBFileShareInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share.</p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share.</p>
   *
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The file share path used by the SMB client to identify the mount point.</p>
   */
  Path?: string;

  /**
   * <p>The ARN of the IAM role that file gateway assumes when it accesses the underlying
   *          storage.</p>
   */
  Role?: string;

  /**
   * <p>The ARN of the backend storage used for storing file data. A prefix name can be added to
   *          the S3 bucket name. It must end with a "/".</p>
   */
  LocationARN?: string;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway.
   *          The default value is <code>S3_INTELLIGENT_TIERING</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
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
   * <p>If this value is set to <code>true</code>, it indicates that access control list (ACL)
   *          is enabled on the SMB file share. If it is set to <code>false</code>, it indicates that
   *          file and directory permissions are mapped to the POSIX permission.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to
   *             control access to an SMB file share</a> in the <i>AWS Storage Gateway User
   *             Guide</i>.</p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>Indicates whether <code>AccessBasedEnumeration</code> is enabled.</p>
   */
  AccessBasedEnumeration?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: string[];

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * <p>The authentication method of the file share. The default is
   *          <code>ActiveDirectory</code>.</p>
   *
   *          <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code>
   *          </p>
   */
  Authentication?: string;

  /**
   * <p>The case of an object name in an Amazon S3 bucket. For <code>ClientSpecified</code>, the
   *          client determines the case sensitivity. For <code>CaseSensitive</code>, the gateway
   *          determines the case sensitivity. The default value is <code>ClientSpecified</code>.</p>
   */
  CaseSensitivity?: CaseSensitivity | string;

  /**
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * <p>Refresh cache information.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * <p>The notification policy of the file share.</p>
   */
  NotificationPolicy?: string;
}

export namespace SMBFileShareInfo {
  export const filterSensitiveLog = (obj: SMBFileShareInfo): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeSMBFileSharesOutput</p>
 */
export interface DescribeSMBFileSharesOutput {
  /**
   * <p>An array containing a description for each requested file share.</p>
   */
  SMBFileShareInfoList?: SMBFileShareInfo[];
}

export namespace DescribeSMBFileSharesOutput {
  export const filterSensitiveLog = (obj: DescribeSMBFileSharesOutput): any => ({
    ...obj,
  });
}

export interface DescribeSMBSettingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeSMBSettingsInput {
  export const filterSensitiveLog = (obj: DescribeSMBSettingsInput): any => ({
    ...obj,
  });
}

export type SMBSecurityStrategy = "ClientSpecified" | "MandatoryEncryption" | "MandatorySigning";

export interface DescribeSMBSettingsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The name of the domain that the gateway is joined to.</p>
   */
  DomainName?: string;

  /**
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
   * <p>This value is <code>true</code> if a password for the guest user <code>smbguest</code>
   *          is set, otherwise <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  SMBGuestPasswordSet?: boolean;

  /**
   * <p>The type of security strategy that was specified for file gateway.</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ClientSpecified</code>: If you use this option, requests are established
   *                based on what is negotiated by the client. This option is recommended when you want
   *                to maximize compatibility across different clients in your environment.</p>
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
   * <p>The shares on this gateway appear when listing shares.</p>
   */
  FileSharesVisible?: boolean;
}

export namespace DescribeSMBSettingsOutput {
  export const filterSensitiveLog = (obj: DescribeSMBSettingsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a>
 *          of the volume.</p>
 */
export interface DescribeSnapshotScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DescribeSnapshotScheduleInput {
  export const filterSensitiveLog = (obj: DescribeSnapshotScheduleInput): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was specified in the request.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  StartAt?: number;

  /**
   * <p>The number of hours between snapshots.</p>
   */
  RecurrenceInHours?: number;

  /**
   * <p>The snapshot description.</p>
   */
  Description?: string;

  /**
   * <p>A value that indicates the time zone of the gateway.</p>
   */
  Timezone?: string;

  /**
   * <p>A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key
   *          name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can
   *          view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Tag[];
}

export namespace DescribeSnapshotScheduleOutput {
  export const filterSensitiveLog = (obj: DescribeSnapshotScheduleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.</p>
 */
export interface DescribeStorediSCSIVolumesInput {
  /**
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          stored volume. All of the specified stored volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   */
  VolumeARNs: string[] | undefined;
}

export namespace DescribeStorediSCSIVolumesInput {
  export const filterSensitiveLog = (obj: DescribeStorediSCSIVolumesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an iSCSI stored volume.</p>
 */
export interface StorediSCSIVolume {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The unique identifier of the volume, e.g., vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeStatus?: string;

  /**
   * <p>A value that indicates whether a storage volume is attached to, detached from, or is in
   *          the process of detaching from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving
   *             your volumes to a different gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the stored volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * <p>The ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p>
   */
  VolumeDiskId?: string;

  /**
   * <p>If the stored volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g. snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * <p>Indicates if when the stored volume was created, existing data on the underlying local
   *          disk was preserved.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  PreservedExistingData?: boolean;

  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *          attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;

  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   *          timestamp.</p>
   */
  CreatedDate?: Date;

  /**
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
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
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

export namespace StorediSCSIVolume {
  export const filterSensitiveLog = (obj: StorediSCSIVolume): any => ({
    ...obj,
  });
}

export interface DescribeStorediSCSIVolumesOutput {
  /**
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

export namespace DescribeStorediSCSIVolumesOutput {
  export const filterSensitiveLog = (obj: DescribeStorediSCSIVolumesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTapeArchivesInput</p>
 */
export interface DescribeTapeArchivesInput {
  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe.</p>
   */
  TapeARNs?: string[];

  /**
   * <p>An opaque string that indicates the position at which to begin describing virtual
   *          tapes.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   */
  Limit?: number;
}

export namespace DescribeTapeArchivesInput {
  export const filterSensitiveLog = (obj: DescribeTapeArchivesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>
 */
export interface TapeArchive {
  /**
   * <p>The Amazon Resource Name (ARN) of an archived virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The barcode that identifies the archived virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date;

  /**
   * <p>The size, in bytes, of the archived virtual tape.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The time that the archiving of the virtual tape was completed.</p>
   *
   *          <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being
   *          retrieved to.</p>
   *
   *          <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>
   */
  RetrievedTo?: string;

  /**
   * <p>The current state of the archived virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   */
  TapeUsedInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that was used to archive the tape. The tapes in this pool are
   *          archived in the S3 storage class that is associated with the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId?: string;

  /**
   * <p>Set to <code>true</code> if the archived tape is stored as write-once-read-many
   *          (WORM).</p>
   */
  Worm?: boolean;

  /**
   * <p>If the archived tape is subject to tape retention lock, the date that the archived tape
   *          started being retained.</p>
   */
  RetentionStartDate?: Date;

  /**
   * <p>The time that the tape entered the custom tape pool.</p>
   *
   *          <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   */
  PoolEntryDate?: Date;
}

export namespace TapeArchive {
  export const filterSensitiveLog = (obj: TapeArchive): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTapeArchivesOutput</p>
 */
export interface DescribeTapeArchivesOutput {
  /**
   * <p>An array of virtual tape objects in the virtual tape shelf (VTS). The description
   *          includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned
   *          includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the
   *          tapes, progress of the description, and tape barcode.</p>
   */
  TapeArchives?: TapeArchive[];

  /**
   * <p>An opaque string that indicates the position at which the virtual tapes that were
   *          fetched for description ended. Use this marker in your next request to fetch the next set
   *          of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to
   *          describe, this field does not appear in the response.</p>
   */
  Marker?: string;
}

export namespace DescribeTapeArchivesOutput {
  export const filterSensitiveLog = (obj: DescribeTapeArchivesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTapeRecoveryPointsInput</p>
 */
export interface DescribeTapeRecoveryPointsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>An opaque string that indicates the position at which to begin describing the virtual
   *          tape recovery points.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the number of virtual tape recovery points that are described be limited
   *          to the specified number.</p>
   */
  Limit?: number;
}

export namespace DescribeTapeRecoveryPointsInput {
  export const filterSensitiveLog = (obj: DescribeTapeRecoveryPointsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recovery point.</p>
 */
export interface TapeRecoveryPointInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The time when the point-in-time view of the virtual tape was replicated for later
   *          recovery.</p>
   *
   *          <p>The default timestamp format of the tape recovery point time is in the ISO8601 extended
   *          YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   */
  TapeRecoveryPointTime?: Date;

  /**
   * <p>The size, in bytes, of the virtual tapes to recover.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The status of the virtual tapes.</p>
   */
  TapeStatus?: string;
}

export namespace TapeRecoveryPointInfo {
  export const filterSensitiveLog = (obj: TapeRecoveryPointInfo): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTapeRecoveryPointsOutput</p>
 */
export interface DescribeTapeRecoveryPointsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of TapeRecoveryPointInfos that are available for the specified gateway.</p>
   */
  TapeRecoveryPointInfos?: TapeRecoveryPointInfo[];

  /**
   * <p>An opaque string that indicates the position at which the virtual tape recovery points
   *          that were listed for description ended.</p>
   *
   *          <p>Use this marker in your next request to list the next set of virtual tape recovery
   *          points in the list. If there are no more recovery points to describe, this field does not
   *          appear in the response.</p>
   */
  Marker?: string;
}

export namespace DescribeTapeRecoveryPointsOutput {
  export const filterSensitiveLog = (obj: DescribeTapeRecoveryPointsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTapesInput</p>
 */
export interface DescribeTapesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe. If this parameter is not specified, Tape gateway returns a
   *          description of all virtual tapes associated with the specified gateway.</p>
   */
  TapeARNs?: string[];

  /**
   * <p>A marker value, obtained in a previous call to <code>DescribeTapes</code>. This marker
   *          indicates which page of results to retrieve.</p>
   *
   *          <p>If not specified, the first page of results is retrieved.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   *
   *          <note>
   *             <p>Amazon Web Services may impose its own limit, if this field is not set.</p>
   *          </note>
   */
  Limit?: number;
}

export namespace DescribeTapesInput {
  export const filterSensitiveLog = (obj: DescribeTapesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual tape object.</p>
 */
export interface Tape {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The barcode that identifies a specific virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date;

  /**
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The current state of the virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The virtual tape library (VTL) device that the virtual tape is associated with.</p>
   */
  VTLDevice?: string;

  /**
   * <p>For archiving virtual tapes, indicates how much data remains to be uploaded before
   *          archiving is complete.</p>
   *
   *          <p>Range: 0 (not started) to 100 (complete).</p>
   */
  Progress?: number;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   */
  TapeUsedInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that contains tapes that will be archived. The tapes in this pool are
   *          archived in the S3 storage class that is associated with the pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId?: string;

  /**
   * <p>If the tape is archived as write-once-read-many (WORM), this value is
   *          <code>true</code>.</p>
   */
  Worm?: boolean;

  /**
   * <p>The date that the tape is first archived with tape retention lock enabled.</p>
   */
  RetentionStartDate?: Date;

  /**
   * <p>The date that the tape enters a custom tape pool.</p>
   */
  PoolEntryDate?: Date;
}

export namespace Tape {
  export const filterSensitiveLog = (obj: Tape): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeTapesOutput</p>
 */
export interface DescribeTapesOutput {
  /**
   * <p>An array of virtual tape descriptions.</p>
   */
  Tapes?: Tape[];

  /**
   * <p>An opaque string which can be used as part of a subsequent DescribeTapes call to
   *          retrieve the next page of results.</p>
   *
   *          <p>If a response does not contain a marker, then there are no more results to be
   *          retrieved.</p>
   */
  Marker?: string;
}

export namespace DescribeTapesOutput {
  export const filterSensitiveLog = (obj: DescribeTapesOutput): any => ({
    ...obj,
  });
}

export interface DescribeUploadBufferInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeUploadBufferInput {
  export const filterSensitiveLog = (obj: DescribeUploadBufferInput): any => ({
    ...obj,
  });
}

export interface DescribeUploadBufferOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage.
   *          Each local disk ID is specified as a string (minimum length of 1 and maximum length of
   *          300). If no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   */
  DiskIds?: string[];

  /**
   * <p>The total number of bytes being used in the gateway's upload buffer.</p>
   */
  UploadBufferUsedInBytes?: number;

  /**
   * <p>The total number of bytes allocated in the gateway's as upload buffer.</p>
   */
  UploadBufferAllocatedInBytes?: number;
}

export namespace DescribeUploadBufferOutput {
  export const filterSensitiveLog = (obj: DescribeUploadBufferOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeVTLDevicesInput</p>
 */
export interface DescribeVTLDevicesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
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
   * <p>An opaque string that indicates the position at which to begin describing the VTL
   *          devices.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the number of VTL devices described be limited to the specified
   *          number.</p>
   */
  Limit?: number;
}

export namespace DescribeVTLDevicesInput {
  export const filterSensitiveLog = (obj: DescribeVTLDevicesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Lists iSCSI information about a VTL device.</p>
 */
export interface DeviceiSCSIAttributes {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified
   *          name(iqn) of a tape drive or media changer target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The network interface identifier of the VTL device.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The port used to communicate with iSCSI VTL device targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;
}

export namespace DeviceiSCSIAttributes {
  export const filterSensitiveLog = (obj: DeviceiSCSIAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a device object associated with a tape gateway.</p>
 */
export interface VTLDevice {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media
   *          changer).</p>
   */
  VTLDeviceARN?: string;

  /**
   * <p>Specifies the type of device that the VTL device emulates.</p>
   */
  VTLDeviceType?: string;

  /**
   * <p>Specifies the vendor of the device that the VTL device object emulates.</p>
   */
  VTLDeviceVendor?: string;

  /**
   * <p>Specifies the model number of device that the VTL device emulates.</p>
   */
  VTLDeviceProductIdentifier?: string;

  /**
   * <p>A list of iSCSI information about a VTL device.</p>
   */
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
}

export namespace VTLDevice {
  export const filterSensitiveLog = (obj: VTLDevice): any => ({
    ...obj,
  });
}

/**
 * <p>DescribeVTLDevicesOutput</p>
 */
export interface DescribeVTLDevicesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL
   *          devices.</p>
   */
  VTLDevices?: VTLDevice[];

  /**
   * <p>An opaque string that indicates the position at which the VTL devices that were fetched
   *          for description ended. Use the marker in your next request to fetch the next set of VTL
   *          devices in the list. If there are no more VTL devices to describe, this field does not
   *          appear in the response.</p>
   */
  Marker?: string;
}

export namespace DescribeVTLDevicesOutput {
  export const filterSensitiveLog = (obj: DescribeVTLDevicesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface DescribeWorkingStorageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeWorkingStorageInput {
  export const filterSensitiveLog = (obj: DescribeWorkingStorageInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeWorkingStorageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage.
   *          Each local disk ID is specified as a string (minimum length of 1 and maximum length of
   *          300). If no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   */
  DiskIds?: string[];

  /**
   * <p>The total working storage in bytes in use by the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageUsedInBytes?: number;

  /**
   * <p>The total working storage in bytes allocated for the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageAllocatedInBytes?: number;
}

export namespace DescribeWorkingStorageOutput {
  export const filterSensitiveLog = (obj: DescribeWorkingStorageOutput): any => ({
    ...obj,
  });
}

/**
 * <p>AttachVolumeInput</p>
 */
export interface DetachVolumeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume to detach from the gateway.</p>
   */
  VolumeARN: string | undefined;

  /**
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

export namespace DetachVolumeInput {
  export const filterSensitiveLog = (obj: DetachVolumeInput): any => ({
    ...obj,
  });
}

/**
 * <p>AttachVolumeOutput</p>
 */
export interface DetachVolumeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was detached.</p>
   */
  VolumeARN?: string;
}

export namespace DetachVolumeOutput {
  export const filterSensitiveLog = (obj: DetachVolumeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>DisableGatewayInput</p>
 */
export interface DisableGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DisableGatewayInput {
  export const filterSensitiveLog = (obj: DisableGatewayInput): any => ({
    ...obj,
  });
}

/**
 * <p>DisableGatewayOutput</p>
 */
export interface DisableGatewayOutput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the disabled gateway.</p>
   */
  GatewayARN?: string;
}

export namespace DisableGatewayOutput {
  export const filterSensitiveLog = (obj: DisableGatewayOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a gateway's local disk.</p>
 */
export interface Disk {
  /**
   * <p>The unique device ID or other distinguishing data that identifies a local disk.</p>
   */
  DiskId?: string;

  /**
   * <p>The path of a local disk in the gateway virtual machine (VM).</p>
   */
  DiskPath?: string;

  /**
   * <p>The device node of a local disk as assigned by the virtualization environment.</p>
   */
  DiskNode?: string;

  /**
   * <p>A value that represents the status of a local disk.</p>
   */
  DiskStatus?: string;

  /**
   * <p>The local disk size in bytes.</p>
   */
  DiskSizeInBytes?: number;

  /**
   * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a
   *          local disk is used.</p>
   *
   *          <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code>
   *          </p>
   */
  DiskAllocationType?: string;

  /**
   * <p>The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in
   *          the response if the local disk is not defined as an iSCSI target. The format of this field
   *          is <i>targetIqn::LUNNumber::region-volumeId</i>.</p>
   */
  DiskAllocationResource?: string;

  /**
   * <p>A list of values that represents attributes of a local disk.</p>
   */
  DiskAttributeList?: string[];
}

export namespace Disk {
  export const filterSensitiveLog = (obj: Disk): any => ({
    ...obj,
  });
}

export type FileShareType = "NFS" | "SMB";

/**
 * <p>Describes a file share.</p>
 */
export interface FileShareInfo {
  /**
   * <p>The type of the file share.</p>
   */
  FileShareType?: FileShareType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share.</p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share.</p>
   *
   *          <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> |
   *             <code>DELETING</code>
   *          </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace FileShareInfo {
  export const filterSensitiveLog = (obj: FileShareInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a gateway object.</p>
 */
export interface GatewayInfo {
  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   */
  GatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * <p>The state of the gateway.</p>
   *
   *          <p>Valid Values: <code>DISABLED</code> | <code>ACTIVE</code>
   *          </p>
   */
  GatewayOperationalState?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The AWS Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;
}

export namespace GatewayInfo {
  export const filterSensitiveLog = (obj: GatewayInfo): any => ({
    ...obj,
  });
}

/**
 * <p>JoinDomainInput</p>
 */
export interface JoinDomainInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The name of the domain that you want the gateway to join.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The organizational unit (OU) is a container in an Active Directory that can hold users,
   *          groups, computers, and other OUs and this parameter specifies the OU that the gateway will
   *          join within the AD domain.</p>
   */
  OrganizationalUnit?: string;

  /**
   * <p>List of IPv4 addresses, NetBIOS names, or host names of your domain server. If you need
   *          to specify the port number include it after the colon (“:”). For example,
   *             <code>mydc.mydomain.com:389</code>.</p>
   */
  DomainControllers?: string[];

  /**
   * <p>Specifies the time in seconds, in which the <code>JoinDomain</code> operation must
   *          complete. The default is 20 seconds.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>Sets the user name of user who has permission to add the gateway to the Active Directory
   *          domain. The domain user account should be enabled to join computers to the domain. For
   *          example, you can use the domain administrator account or an account with delegated
   *          permissions to join computers to the domain.</p>
   */
  UserName: string | undefined;

  /**
   * <p>Sets the password of the user who has permission to add the gateway to the Active
   *          Directory domain.</p>
   */
  Password: string | undefined;
}

export namespace JoinDomainInput {
  export const filterSensitiveLog = (obj: JoinDomainInput): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>JoinDomainOutput</p>
 */
export interface JoinDomainOutput {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that joined the domain.</p>
   */
  GatewayARN?: string;

  /**
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

export namespace JoinDomainOutput {
  export const filterSensitiveLog = (obj: JoinDomainOutput): any => ({
    ...obj,
  });
}

export interface ListAutomaticTapeCreationPoliciesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ListAutomaticTapeCreationPoliciesInput {
  export const filterSensitiveLog = (obj: ListAutomaticTapeCreationPoliciesInput): any => ({
    ...obj,
  });
}

export interface ListAutomaticTapeCreationPoliciesOutput {
  /**
   * <p>Gets a listing of information about the gateway's automatic tape creation policies,
   *          including the automatic tape creation rules and the gateway that is using the
   *          policies.</p>
   */
  AutomaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[];
}

export namespace ListAutomaticTapeCreationPoliciesOutput {
  export const filterSensitiveLog = (obj: ListAutomaticTapeCreationPoliciesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>ListFileShareInput</p>
 */
export interface ListFileSharesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If
   *          this field is not present, all file shares under your account are listed.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The maximum number of file shares to return in the response. The value must be an
   *          integer with a value greater than zero. Optional.</p>
   */
  Limit?: number;

  /**
   * <p>Opaque pagination token returned from a previous ListFileShares operation. If present,
   *             <code>Marker</code> specifies where to continue the list from after a previous call to
   *          ListFileShares. Optional.</p>
   */
  Marker?: string;
}

export namespace ListFileSharesInput {
  export const filterSensitiveLog = (obj: ListFileSharesInput): any => ({
    ...obj,
  });
}

/**
 * <p>ListFileShareOutput</p>
 */
export interface ListFileSharesOutput {
  /**
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field.</p>
   */
  Marker?: string;

  /**
   * <p>If a value is present, there are more file shares to return. In a subsequent request,
   *          use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set
   *          of file shares.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of information about the file gateway's file shares.</p>
   */
  FileShareInfoList?: FileShareInfo[];
}

export namespace ListFileSharesOutput {
  export const filterSensitiveLog = (obj: ListFileSharesOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>An opaque string that indicates the position at which to begin the returned list of
   *          gateways.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the list of gateways returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;
}

export namespace ListGatewaysInput {
  export const filterSensitiveLog = (obj: ListGatewaysInput): any => ({
    ...obj,
  });
}

export interface ListGatewaysOutput {
  /**
   * <p>An array of <a>GatewayInfo</a> objects.</p>
   */
  Gateways?: GatewayInfo[];

  /**
   * <p>Use the marker in your next request to fetch the next set of gateways in the list. If
   *          there are no more gateways to list, this field does not appear in the response.</p>
   */
  Marker?: string;
}

export namespace ListGatewaysOutput {
  export const filterSensitiveLog = (obj: ListGatewaysOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway.</p>
 */
export interface ListLocalDisksInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ListLocalDisksInput {
  export const filterSensitiveLog = (obj: ListLocalDisksInput): any => ({
    ...obj,
  });
}

export interface ListLocalDisksOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
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

export namespace ListLocalDisksOutput {
  export const filterSensitiveLog = (obj: ListLocalDisksOutput): any => ({
    ...obj,
  });
}

/**
 * <p>ListTagsForResourceInput</p>
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the list of
   *          tags.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the list of tags returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>ListTagsForResourceOutput</p>
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  ResourceARN?: string;

  /**
   * <p>An opaque string that indicates the position at which to stop returning the list of
   *          tags.</p>
   */
  Marker?: string;

  /**
   * <p>An array that contains the tags for the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

export interface ListTapePoolsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you
   *          don't specify a custom tape pool ARN, the response lists all custom tape pools. </p>
   */
  PoolARNs?: string[];

  /**
   * <p>A string that indicates the position at which to begin the returned list of tape
   *          pools.</p>
   */
  Marker?: string;

  /**
   * <p>An optional number limit for the tape pools in the list returned by this call.</p>
   */
  Limit?: number;
}

export namespace ListTapePoolsInput {
  export const filterSensitiveLog = (obj: ListTapePoolsInput): any => ({
    ...obj,
  });
}

export type PoolStatus = "ACTIVE" | "DELETED";

/**
 * <p>Describes a custom tape pool.</p>
 */
export interface PoolInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom tape pool. Use the <a>ListTapePools</a> operation to return a list of custom tape pools for your
   *          account and AWS Region.</p>
   */
  PoolARN?: string;

  /**
   * <p>The name of the custom tape pool. <code>PoolName</code> can use all ASCII characters,
   *          except '/' and '\'.</p>
   */
  PoolName?: string;

  /**
   * <p>The storage class that is associated with the custom pool. When you use your backup
   *          application to eject the tape, the tape is archived directly into the storage class (S3
   *          Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   */
  StorageClass?: TapeStorageClass | string;

  /**
   * <p>Tape retention lock type, which can be configured in two modes. When configured in
   *          governance mode, AWS accounts with specific IAM permissions are authorized to remove the
   *          tape retention lock from archived virtual tapes. When configured in compliance mode, the
   *          tape retention lock cannot be removed by any user, including the root AWS account.</p>
   */
  RetentionLockType?: RetentionLockType | string;

  /**
   * <p>Tape retention lock time is set in days. Tape retention lock can be enabled for up to
   *          100 years (36,500 days).</p>
   */
  RetentionLockTimeInDays?: number;

  /**
   * <p>Status of the custom tape pool. Pool can be <code>ACTIVE</code> or
   *          <code>DELETED</code>.</p>
   */
  PoolStatus?: PoolStatus | string;
}

export namespace PoolInfo {
  export const filterSensitiveLog = (obj: PoolInfo): any => ({
    ...obj,
  });
}

export interface ListTapePoolsOutput {
  /**
   * <p>An array of <code>PoolInfo</code> objects, where each object describes a single custom
   *          tape pool. If there are no custom tape pools, the <code>PoolInfos</code> is an empty array.
   *       </p>
   */
  PoolInfos?: PoolInfo[];

  /**
   * <p>A string that indicates the position at which to begin the returned list of tape pools.
   *          Use the marker in your next request to continue pagination of tape pools. If there are no
   *          more tape pools to list, this element does not appear in the response body. </p>
   */
  Marker?: string;
}

export namespace ListTapePoolsOutput {
  export const filterSensitiveLog = (obj: ListTapePoolsOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't
   *          specify a tape ARN, the response lists all tapes in both your VTL and VTS.</p>
   */
  TapeARNs?: string[];

  /**
   * <p>A string that indicates the position at which to begin the returned list of
   *          tapes.</p>
   */
  Marker?: string;

  /**
   * <p>An optional number limit for the tapes in the list returned by this call.</p>
   */
  Limit?: number;
}

export namespace ListTapesInput {
  export const filterSensitiveLog = (obj: ListTapesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual tape.</p>
 */
export interface TapeInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of a virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The barcode that identifies a specific virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * <p>The size, in bytes, of a virtual tape.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The status of the tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this
   *          pool is archived in the S3 storage class that is associated with the pool. When you use
   *          your backup application to eject the tape, the tape is archived directly into the storage
   *          class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p>
   *
   *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
   *          </p>
   */
  PoolId?: string;

  /**
   * <p>The date that the tape became subject to tape retention lock.</p>
   */
  RetentionStartDate?: Date;

  /**
   * <p>The date that the tape entered the custom tape pool with tape retention lock
   *          enabled.</p>
   */
  PoolEntryDate?: Date;
}

export namespace TapeInfo {
  export const filterSensitiveLog = (obj: TapeInfo): any => ({
    ...obj,
  });
}

/**
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
   * <p>An array of <a>TapeInfo</a> objects, where each object describes a single
   *          tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is
   *          an empty array.</p>
   */
  TapeInfos?: TapeInfo[];

  /**
   * <p>A string that indicates the position at which to begin returning the next list of tapes.
   *          Use the marker in your next request to continue pagination of tapes. If there are no more
   *          tapes to list, this element does not appear in the response body.</p>
   */
  Marker?: string;
}

export namespace ListTapesOutput {
  export const filterSensitiveLog = (obj: ListTapesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>ListVolumeInitiatorsInput</p>
 */
export interface ListVolumeInitiatorsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes for the gateway.</p>
   */
  VolumeARN: string | undefined;
}

export namespace ListVolumeInitiatorsInput {
  export const filterSensitiveLog = (obj: ListVolumeInitiatorsInput): any => ({
    ...obj,
  });
}

/**
 * <p>ListVolumeInitiatorsOutput</p>
 */
export interface ListVolumeInitiatorsOutput {
  /**
   * <p>The host names and port numbers of all iSCSI initiators that are connected to the
   *          gateway.</p>
   */
  Initiators?: string[];
}

export namespace ListVolumeInitiatorsOutput {
  export const filterSensitiveLog = (obj: ListVolumeInitiatorsOutput): any => ({
    ...obj,
  });
}

export interface ListVolumeRecoveryPointsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ListVolumeRecoveryPointsInput {
  export const filterSensitiveLog = (obj: ListVolumeRecoveryPointsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a storage volume recovery point object.</p>
 */
export interface VolumeRecoveryPointInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>The size of the data stored on the volume in bytes.</p>
   *
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   */
  VolumeUsageInBytes?: number;

  /**
   * <p>The time the recovery point was taken.</p>
   */
  VolumeRecoveryPointTime?: string;
}

export namespace VolumeRecoveryPointInfo {
  export const filterSensitiveLog = (obj: VolumeRecoveryPointInfo): any => ({
    ...obj,
  });
}

export interface ListVolumeRecoveryPointsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of <a>VolumeRecoveryPointInfo</a> objects.</p>
   */
  VolumeRecoveryPointInfos?: VolumeRecoveryPointInfo[];
}

export namespace ListVolumeRecoveryPointsOutput {
  export const filterSensitiveLog = (obj: ListVolumeRecoveryPointsOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>A string that indicates the position at which to begin the returned list of volumes.
   *          Obtain the marker from the response of a previous List iSCSI Volumes request.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the list of volumes returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;
}

export namespace ListVolumesInput {
  export const filterSensitiveLog = (obj: ListVolumesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a storage volume object.</p>
 */
export interface VolumeInfo {
  /**
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
   * <p>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon
   *          Resource Name (ARN), which you use as input for other operations.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part
   *          of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  GatewayId?: string;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   *
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeAttachmentStatus?: string;
}

export namespace VolumeInfo {
  export const filterSensitiveLog = (obj: VolumeInfo): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>Use the marker in your next request to continue pagination of iSCSI volumes. If there
   *          are no more volumes to list, this field does not appear in the response body.</p>
   */
  Marker?: string;

  /**
   * <p>An array of <a>VolumeInfo</a> objects, where each object describes an iSCSI
   *          volume. If no volumes are defined for the gateway, then <code>VolumeInfos</code> is an
   *          empty array "[]".</p>
   */
  VolumeInfos?: VolumeInfo[];
}

export namespace ListVolumesOutput {
  export const filterSensitiveLog = (obj: ListVolumesOutput): any => ({
    ...obj,
  });
}

export interface NotifyWhenUploadedInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN: string | undefined;
}

export namespace NotifyWhenUploadedInput {
  export const filterSensitiveLog = (obj: NotifyWhenUploadedInput): any => ({
    ...obj,
  });
}

export interface NotifyWhenUploadedOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID
   *          format.</p>
   */
  NotificationId?: string;
}

export namespace NotifyWhenUploadedOutput {
  export const filterSensitiveLog = (obj: NotifyWhenUploadedOutput): any => ({
    ...obj,
  });
}

/**
 * <p>RefreshCacheInput</p>
 */
export interface RefreshCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share you want to refresh.</p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>A comma-separated list of the paths of folders to refresh in the cache. The default is
   *             [<code>"/"</code>]. The default refreshes objects and folders at the root of the Amazon
   *          S3 bucket. If <code>Recursive</code> is set to <code>true</code>, the entire S3 bucket that
   *          the file share has access to is refreshed.</p>
   */
  FolderList?: string[];

  /**
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

export namespace RefreshCacheInput {
  export const filterSensitiveLog = (obj: RefreshCacheInput): any => ({
    ...obj,
  });
}

/**
 * <p>RefreshCacheOutput</p>
 */
export interface RefreshCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share.</p>
   */
  FileShareARN?: string;

  /**
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID
   *          format.</p>
   */
  NotificationId?: string;
}

export namespace RefreshCacheOutput {
  export const filterSensitiveLog = (obj: RefreshCacheOutput): any => ({
    ...obj,
  });
}

/**
 * <p>RemoveTagsFromResourceInput</p>
 */
export interface RemoveTagsFromResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to remove the tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags you want to remove from the specified resource. A tag is composed
   *          of a key-value pair.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceInput {
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>RemoveTagsFromResourceOutput</p>
 */
export interface RemoveTagsFromResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the tags were removed from.</p>
   */
  ResourceARN?: string;
}

export namespace RemoveTagsFromResourceOutput {
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceOutput): any => ({
    ...obj,
  });
}

export interface ResetCacheInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ResetCacheInput {
  export const filterSensitiveLog = (obj: ResetCacheInput): any => ({
    ...obj,
  });
}

export interface ResetCacheOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ResetCacheOutput {
  export const filterSensitiveLog = (obj: ResetCacheOutput): any => ({
    ...obj,
  });
}

/**
 * <p>RetrieveTapeArchiveInput</p>
 */
export interface RetrieveTapeArchiveInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual
   *          tape shelf (VTS).</p>
   */
  TapeARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to.
   *          Use the <a>ListGateways</a> operation to return a list of gateways for your
   *          account and AWS Region.</p>
   *
   *          <p>You retrieve archived virtual tapes to only one gateway and the gateway must be a tape
   *          gateway.</p>
   */
  GatewayARN: string | undefined;
}

export namespace RetrieveTapeArchiveInput {
  export const filterSensitiveLog = (obj: RetrieveTapeArchiveInput): any => ({
    ...obj,
  });
}

/**
 * <p>RetrieveTapeArchiveOutput</p>
 */
export interface RetrieveTapeArchiveOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the retrieved virtual tape.</p>
   */
  TapeARN?: string;
}

export namespace RetrieveTapeArchiveOutput {
  export const filterSensitiveLog = (obj: RetrieveTapeArchiveOutput): any => ({
    ...obj,
  });
}

/**
 * <p>RetrieveTapeRecoveryPointInput</p>
 */
export interface RetrieveTapeRecoveryPointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the
   *          recovery point.</p>
   */
  TapeARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace RetrieveTapeRecoveryPointInput {
  export const filterSensitiveLog = (obj: RetrieveTapeRecoveryPointInput): any => ({
    ...obj,
  });
}

/**
 * <p>RetrieveTapeRecoveryPointOutput</p>
 */
export interface RetrieveTapeRecoveryPointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was
   *          retrieved.</p>
   */
  TapeARN?: string;
}

export namespace RetrieveTapeRecoveryPointOutput {
  export const filterSensitiveLog = (obj: RetrieveTapeRecoveryPointOutput): any => ({
    ...obj,
  });
}

/**
 * <p>SetLocalConsolePasswordInput</p>
 */
export interface SetLocalConsolePasswordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The password you want to set for your VM local console.</p>
   */
  LocalConsolePassword: string | undefined;
}

export namespace SetLocalConsolePasswordInput {
  export const filterSensitiveLog = (obj: SetLocalConsolePasswordInput): any => ({
    ...obj,
    ...(obj.LocalConsolePassword && { LocalConsolePassword: SENSITIVE_STRING }),
  });
}

export interface SetLocalConsolePasswordOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace SetLocalConsolePasswordOutput {
  export const filterSensitiveLog = (obj: SetLocalConsolePasswordOutput): any => ({
    ...obj,
  });
}

/**
 * <p>SetSMBGuestPasswordInput</p>
 */
export interface SetSMBGuestPasswordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway the SMB file share is associated
   *          with.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The password that you want to set for your SMB server.</p>
   */
  Password: string | undefined;
}

export namespace SetSMBGuestPasswordInput {
  export const filterSensitiveLog = (obj: SetSMBGuestPasswordInput): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface SetSMBGuestPasswordOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace SetSMBGuestPasswordOutput {
  export const filterSensitiveLog = (obj: SetSMBGuestPasswordOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut
 *          down.</p>
 */
export interface ShutdownGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ShutdownGatewayInput {
  export const filterSensitiveLog = (obj: ShutdownGatewayInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut
 *          down.</p>
 */
export interface ShutdownGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ShutdownGatewayOutput {
  export const filterSensitiveLog = (obj: ShutdownGatewayOutput): any => ({
    ...obj,
  });
}

export interface StartAvailabilityMonitorTestInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace StartAvailabilityMonitorTestInput {
  export const filterSensitiveLog = (obj: StartAvailabilityMonitorTestInput): any => ({
    ...obj,
  });
}

export interface StartAvailabilityMonitorTestOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace StartAvailabilityMonitorTestOutput {
  export const filterSensitiveLog = (obj: StartAvailabilityMonitorTestOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.</p>
 */
export interface StartGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace StartGatewayInput {
  export const filterSensitiveLog = (obj: StartGatewayInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          restarted.</p>
 */
export interface StartGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace StartGatewayOutput {
  export const filterSensitiveLog = (obj: StartGatewayOutput): any => ({
    ...obj,
  });
}

export interface UpdateAutomaticTapeCreationPolicyInput {
  /**
   * <p>An automatic tape creation policy consists of a list of automatic tape creation rules.
   *          The rules determine when and how to automatically create new tapes.</p>
   */
  AutomaticTapeCreationRules: AutomaticTapeCreationRule[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace UpdateAutomaticTapeCreationPolicyInput {
  export const filterSensitiveLog = (obj: UpdateAutomaticTapeCreationPolicyInput): any => ({
    ...obj,
  });
}

export interface UpdateAutomaticTapeCreationPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateAutomaticTapeCreationPolicyOutput {
  export const filterSensitiveLog = (obj: UpdateAutomaticTapeCreationPolicyOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The average upload bandwidth rate limit in bits per second.</p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * <p>The average download bandwidth rate limit in bits per second.</p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;
}

export namespace UpdateBandwidthRateLimitInput {
  export const filterSensitiveLog = (obj: UpdateBandwidthRateLimitInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle
 *          information was updated.</p>
 */
export interface UpdateBandwidthRateLimitOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateBandwidthRateLimitOutput {
  export const filterSensitiveLog = (obj: UpdateBandwidthRateLimitOutput): any => ({
    ...obj,
  });
}

export interface UpdateBandwidthRateLimitScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>
   *          An array containing bandwidth rate limit schedule intervals for a gateway.
   *          When no bandwidth rate limit intervals have been scheduled, the array is empty.
   *       </p>
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

export namespace UpdateBandwidthRateLimitScheduleInput {
  export const filterSensitiveLog = (obj: UpdateBandwidthRateLimitScheduleInput): any => ({
    ...obj,
  });
}

export interface UpdateBandwidthRateLimitScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateBandwidthRateLimitScheduleOutput {
  export const filterSensitiveLog = (obj: UpdateBandwidthRateLimitScheduleOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return the TargetARN for specified
   *          VolumeARN.</p>
   */
  TargetARN: string | undefined;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   *
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   */
  SecretToAuthenticateInitiator: string | undefined;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName: string | undefined;

  /**
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

export namespace UpdateChapCredentialsInput {
  export const filterSensitiveLog = (obj: UpdateChapCredentialsInput): any => ({
    ...obj,
    ...(obj.SecretToAuthenticateInitiator && { SecretToAuthenticateInitiator: SENSITIVE_STRING }),
    ...(obj.SecretToAuthenticateTarget && { SecretToAuthenticateTarget: SENSITIVE_STRING }),
  });
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface UpdateChapCredentialsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target. This is the same target specified in the
   *          request.</p>
   */
  TargetARN?: string;

  /**
   * <p>The iSCSI initiator that connects to the target. This is the same initiator name
   *          specified in the request.</p>
   */
  InitiatorName?: string;
}

export namespace UpdateChapCredentialsOutput {
  export const filterSensitiveLog = (obj: UpdateChapCredentialsOutput): any => ({
    ...obj,
  });
}

export interface UpdateGatewayInformationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>A value that indicates the time zone of the gateway.</p>
   */
  GatewayTimezone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use
   *          to monitor and log events in the gateway.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">What is Amazon CloudWatch
   *             Logs?</a>
   *          </p>
   */
  CloudWatchLogGroupARN?: string;
}

export namespace UpdateGatewayInformationInput {
  export const filterSensitiveLog = (obj: UpdateGatewayInformationInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          updated.</p>
 */
export interface UpdateGatewayInformationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;
}

export namespace UpdateGatewayInformationOutput {
  export const filterSensitiveLog = (obj: UpdateGatewayInformationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.</p>
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace UpdateGatewaySoftwareNowInput {
  export const filterSensitiveLog = (obj: UpdateGatewaySoftwareNowInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway that was
 *          updated.</p>
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateGatewaySoftwareNowOutput {
  export const filterSensitiveLog = (obj: UpdateGatewaySoftwareNowOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *          where <i>hh</i> is the hour (00 to 23). The hour of the day is in the time
   *          zone of the gateway.</p>
   */
  HourOfDay: number | undefined;

  /**
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (00 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour: number | undefined;

  /**
   * <p>The day of the week component of the maintenance start time week represented as an
   *          ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.</p>
   */
  DayOfWeek?: number;

  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal
   *          number from 1 to 28, where 1 represents the first day of the month and 28 represents the
   *          last day of the month.</p>
   */
  DayOfMonth?: number;
}

export namespace UpdateMaintenanceStartTimeInput {
  export const filterSensitiveLog = (obj: UpdateMaintenanceStartTimeInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance
 *          start time is updated.</p>
 */
export interface UpdateMaintenanceStartTimeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateMaintenanceStartTimeOutput {
  export const filterSensitiveLog = (obj: UpdateMaintenanceStartTimeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateNFSFileShareInput</p>
 */
export interface UpdateNFSFileShareInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share to be updated.</p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The default values for the file share. Optional.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway.
   *          The default value is <code>S3_INTELLIGENT_TIERING</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must contain
   *          either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
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
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set the write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
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
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * <p>Refresh cache information.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * <p>The notification policy of the file share.</p>
   */
  NotificationPolicy?: string;
}

export namespace UpdateNFSFileShareInput {
  export const filterSensitiveLog = (obj: UpdateNFSFileShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateNFSFileShareOutput</p>
 */
export interface UpdateNFSFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated file share.</p>
   */
  FileShareARN?: string;
}

export namespace UpdateNFSFileShareOutput {
  export const filterSensitiveLog = (obj: UpdateNFSFileShareOutput): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateSMBFileShareInput</p>
 */
export interface UpdateSMBFileShareInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the SMB file share that you want to update.</p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own AWS KMS
   *          key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon
   *          S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can
   *          only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway.
   *          The default value is <code>S3_INTELLIGENT_TIERING</code>. Optional.</p>
   *
   *          <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> |
   *             <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code>
   *          </p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list (ACL) permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is <code>private</code>.</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. Set this value to <code>true</code>
   *          to set write status to read-only, otherwise set to <code>false</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set
   *          to <code>false</code>. The default value is <code>true</code>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
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
   * <p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file
   *          share. Set it to <code>false</code> to map file and directory permissions to the POSIX
   *          permissions.</p>
   *
   *
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to
   *             control access to an SMB file share</a> in the <i>AWS Storage Gateway User
   *             Guide</i>.</p>
   *
   *          <p>Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>The files and folders on this share will only be visible to users with read
   *          access.</p>
   */
  AccessBasedEnumeration?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: string[];

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. Acceptable formats include:
   *             <code>DOMAIN\User1</code>, <code>user1</code>, <code>@group1</code>, and
   *             <code>@DOMAIN\group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the storage used for the audit logs.</p>
   */
  AuditDestinationARN?: string;

  /**
   * <p>The case of an object name in an Amazon S3 bucket. For <code>ClientSpecified</code>, the
   *          client determines the case sensitivity. For <code>CaseSensitive</code>, the gateway
   *          determines the case sensitivity. The default value is <code>ClientSpecified</code>.</p>
   */
  CaseSensitivity?: CaseSensitivity | string;

  /**
   * <p>The name of the file share. Optional.</p>
   *
   *          <note>
   *             <p>
   *                <code>FileShareName</code> must be set if an S3 prefix name is set in
   *                <code>LocationARN</code>.</p>
   *          </note>
   */
  FileShareName?: string;

  /**
   * <p>Refresh cache information.</p>
   */
  CacheAttributes?: CacheAttributes;

  /**
   * <p>The notification policy of the file share.</p>
   */
  NotificationPolicy?: string;
}

export namespace UpdateSMBFileShareInput {
  export const filterSensitiveLog = (obj: UpdateSMBFileShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateSMBFileShareOutput</p>
 */
export interface UpdateSMBFileShareOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated SMB file share.</p>
   */
  FileShareARN?: string;
}

export namespace UpdateSMBFileShareOutput {
  export const filterSensitiveLog = (obj: UpdateSMBFileShareOutput): any => ({
    ...obj,
  });
}

export interface UpdateSMBFileShareVisibilityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The shares on this gateway appear when listing shares.</p>
   */
  FileSharesVisible: boolean | undefined;
}

export namespace UpdateSMBFileShareVisibilityInput {
  export const filterSensitiveLog = (obj: UpdateSMBFileShareVisibilityInput): any => ({
    ...obj,
  });
}

export interface UpdateSMBFileShareVisibilityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateSMBFileShareVisibilityOutput {
  export const filterSensitiveLog = (obj: UpdateSMBFileShareVisibilityOutput): any => ({
    ...obj,
  });
}

export interface UpdateSMBSecurityStrategyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies the type of security strategy.</p>
   *
   *          <p>ClientSpecified: if you use this option, requests are established based on what is
   *          negotiated by the client. This option is recommended when you want to maximize
   *          compatibility across different clients in your environment.</p>
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

export namespace UpdateSMBSecurityStrategyInput {
  export const filterSensitiveLog = (obj: UpdateSMBSecurityStrategyInput): any => ({
    ...obj,
  });
}

export interface UpdateSMBSecurityStrategyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateSMBSecurityStrategyOutput {
  export const filterSensitiveLog = (obj: UpdateSMBSecurityStrategyOutput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  StartAt: number | undefined;

  /**
   * <p>Frequency of snapshots. Specify the number of hours between snapshots.</p>
   */
  RecurrenceInHours: number | undefined;

  /**
   * <p>Optional description of the snapshot that overwrites the existing description.</p>
   */
  Description?: string;

  /**
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

export namespace UpdateSnapshotScheduleInput {
  export const filterSensitiveLog = (obj: UpdateSnapshotScheduleInput): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the updated storage
 *          volume.</p>
 */
export interface UpdateSnapshotScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN?: string;
}

export namespace UpdateSnapshotScheduleOutput {
  export const filterSensitiveLog = (obj: UpdateSnapshotScheduleOutput): any => ({
    ...obj,
  });
}

export interface UpdateVTLDeviceTypeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the medium changer you want to select.</p>
   */
  VTLDeviceARN: string | undefined;

  /**
   * <p>The type of medium changer you want to select.</p>
   *
   *          <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> |
   *             <code>IBM-03584L32-0402</code>
   *          </p>
   */
  DeviceType: string | undefined;
}

export namespace UpdateVTLDeviceTypeInput {
  export const filterSensitiveLog = (obj: UpdateVTLDeviceTypeInput): any => ({
    ...obj,
  });
}

/**
 * <p>UpdateVTLDeviceTypeOutput</p>
 */
export interface UpdateVTLDeviceTypeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the medium changer you have selected.</p>
   */
  VTLDeviceARN?: string;
}

export namespace UpdateVTLDeviceTypeOutput {
  export const filterSensitiveLog = (obj: UpdateVTLDeviceTypeOutput): any => ({
    ...obj,
  });
}
