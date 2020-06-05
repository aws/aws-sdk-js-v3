import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
 *                   <a>ActivateGatewayInput$TapeDriveType</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ActivateGatewayInput$MediumChangerType</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface ActivateGatewayInput {
  __type?: "ActivateGatewayInput";
  /**
   * <p>Your gateway activation key. You can obtain the activation key by sending an HTTP GET
   *          request with redirects enabled to the gateway IP address (port 80). The redirect URL
   *          returned in the response provides you the activation key for your gateway in the query
   *          string parameter <code>activationKey</code>. It may also include other activation-related
   *          parameters, however, these are merely defaults -- the arguments you pass to the
   *             <code>ActivateGateway</code> API call determine the actual configuration of your
   *          gateway. </p>
   *
   *          <p>For more information, see
   *          https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html in the
   *          Storage Gateway User Guide.</p>
   */
  ActivationKey: string | undefined;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName: string | undefined;

  /**
   * <p>A value that indicates the AWS Region where you want to store your data. The gateway
   *          AWS Region specified must be the same AWS Region as the AWS Region in your
   *             <code>Host</code> header in the request. For more information about available AWS
   *          Regions and endpoints for AWS Storage Gateway, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region">Regions and Endpoints</a> in the
   *             <i>Amazon Web Services Glossary</i>.</p>
   *          <p> Valid Values: See <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region">AWS Storage
   *             Gateway Regions and Endpoints</a> in the AWS General Reference.
   *
   *       </p>
   */
  GatewayRegion: string | undefined;

  /**
   * <p>A value that indicates the time zone you want to set for the gateway. The time zone
   *          is of the format "GMT-hr:mm" or "GMT+hr:mm". For example, GMT-4:00 indicates the time is 4
   *          hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is
   *          used, for example, for scheduling snapshots and your gateway's maintenance
   *          schedule.</p>
   */
  GatewayTimezone: string | undefined;

  /**
   * <p>A value that defines the type of gateway to activate. The type specified is critical
   *          to all later functions of the gateway and cannot be changed after activation. The default
   *          value is <code>CACHED</code>. </p>
   *          <p> Valid Values: "STORED", "CACHED", "VTL", "FILE_S3"</p>
   */
  GatewayType?: string;

  /**
   * <p>The value that indicates the type of medium changer to use for tape gateway. This
   *          field is optional.</p>
   *          <p> Valid Values: "STK-L700", "AWS-Gateway-VTL"</p>
   */
  MediumChangerType?: string;

  /**
   * <p>A list of up to 50 tags that you can assign to the gateway. Each tag is a key-value
   *          pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers that can be
   *             represented in UTF-8 format, and the following special characters: + - = . _ : / @. The
   *             maximum length of a tag's key is 128 characters, and the maximum length for a
   *             tag's value is 256 characters.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The value that indicates the type of tape drive to use for tape gateway. This field
   *          is optional.</p>
   *          <p> Valid Values: "IBM-ULT3580-TD5" </p>
   */
  TapeDriveType?: string;
}

export namespace ActivateGatewayInput {
  export const filterSensitiveLog = (obj: ActivateGatewayInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivateGatewayInput =>
    __isa(o, "ActivateGatewayInput");
}

/**
 * <p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway.
 *          It is a string made of information such as your account, gateway name, and AWS Region. This
 *          ARN is used to reference the gateway in other API operations as well as resource-based
 *          authorization.</p>
 *          <note>
 *             <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the
 *             gateway name rather than the gateway ID. Changing the name of the gateway has no effect
 *             on the gateway ARN.</p>
 *          </note>
 */
export interface ActivateGatewayOutput {
  __type?: "ActivateGatewayOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ActivateGatewayOutput {
  export const filterSensitiveLog = (obj: ActivateGatewayOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivateGatewayOutput =>
    __isa(o, "ActivateGatewayOutput");
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
  __type?: "AddCacheInput";
  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace AddCacheInput {
  export const filterSensitiveLog = (obj: AddCacheInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddCacheInput => __isa(o, "AddCacheInput");
}

export interface AddCacheOutput {
  __type?: "AddCacheOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AddCacheOutput {
  export const filterSensitiveLog = (obj: AddCacheOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddCacheOutput =>
    __isa(o, "AddCacheOutput");
}

/**
 * <p>AddTagsToResourceInput</p>
 */
export interface AddTagsToResourceInput {
  __type?: "AddTagsToResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key-value pair that represents the tag you want to add to the resource. The value
   *          can be an empty string.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceInput {
  export const filterSensitiveLog = (obj: AddTagsToResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceInput =>
    __isa(o, "AddTagsToResourceInput");
}

/**
 * <p>AddTagsToResourceOutput</p>
 */
export interface AddTagsToResourceOutput {
  __type?: "AddTagsToResourceOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>
   */
  ResourceARN?: string;
}

export namespace AddTagsToResourceOutput {
  export const filterSensitiveLog = (obj: AddTagsToResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceOutput =>
    __isa(o, "AddTagsToResourceOutput");
}

export interface AddUploadBufferInput {
  __type?: "AddUploadBufferInput";
  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace AddUploadBufferInput {
  export const filterSensitiveLog = (obj: AddUploadBufferInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddUploadBufferInput =>
    __isa(o, "AddUploadBufferInput");
}

export interface AddUploadBufferOutput {
  __type?: "AddUploadBufferOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AddUploadBufferOutput {
  export const filterSensitiveLog = (obj: AddUploadBufferOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddUploadBufferOutput =>
    __isa(o, "AddUploadBufferOutput");
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
 */
export interface AddWorkingStorageInput {
  __type?: "AddWorkingStorageInput";
  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace AddWorkingStorageInput {
  export const filterSensitiveLog = (obj: AddWorkingStorageInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddWorkingStorageInput =>
    __isa(o, "AddWorkingStorageInput");
}

/**
 * <p>A JSON object containing the of the gateway for which working storage was
 *          configured.</p>
 */
export interface AddWorkingStorageOutput {
  __type?: "AddWorkingStorageOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace AddWorkingStorageOutput {
  export const filterSensitiveLog = (obj: AddWorkingStorageOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddWorkingStorageOutput =>
    __isa(o, "AddWorkingStorageOutput");
}

export interface AssignTapePoolInput {
  __type?: "AssignTapePoolInput";
  /**
   * <p>The ID of the pool that you want to add your tape to for archiving.
   *          The tape in this pool is archived in the S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p>
   *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the tape pool.</p>
   */
  TapeARN: string | undefined;
}

export namespace AssignTapePoolInput {
  export const filterSensitiveLog = (obj: AssignTapePoolInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssignTapePoolInput =>
    __isa(o, "AssignTapePoolInput");
}

export interface AssignTapePoolOutput {
  __type?: "AssignTapePoolOutput";
  /**
   * <p>The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape
   *          pool.</p>
   */
  TapeARN?: string;
}

export namespace AssignTapePoolOutput {
  export const filterSensitiveLog = (obj: AssignTapePoolOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssignTapePoolOutput =>
    __isa(o, "AssignTapePoolOutput");
}

/**
 * <p>AttachVolumeInput</p>
 */
export interface AttachVolumeInput {
  __type?: "AttachVolumeInput";
  /**
   * <p>The unique device ID or other distinguishing data that identifies the local disk used
   *          to create the volume. This value is only required when you are attaching a stored
   *          volume.</p>
   */
  DiskId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that you want to attach the volume
   *          to.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *          <p> Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as
   *          a suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously used
   *          for this volume as the new target name.</p>
   */
  TargetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume to attach to the specified
   *          gateway.</p>
   */
  VolumeARN: string | undefined;
}

export namespace AttachVolumeInput {
  export const filterSensitiveLog = (obj: AttachVolumeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachVolumeInput =>
    __isa(o, "AttachVolumeInput");
}

/**
 * <p>AttachVolumeOutput</p>
 */
export interface AttachVolumeOutput {
  __type?: "AttachVolumeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name
   *          for the initiator that was used to connect to the target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was attached to the
   *          gateway.</p>
   */
  VolumeARN?: string;
}

export namespace AttachVolumeOutput {
  export const filterSensitiveLog = (obj: AttachVolumeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachVolumeOutput =>
    __isa(o, "AttachVolumeOutput");
}

export type AvailabilityMonitorTestStatus = "COMPLETE" | "FAILED" | "PENDING";

/**
 * <p>Describes an iSCSI cached volume.</p>
 */
export interface CachediSCSIVolume {
  __type?: "CachediSCSIVolume";
  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have
   *          this time stamp.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>If the cached volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g. snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as
   *          a suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously used
   *          for this volume as the new target name.</p>
   */
  TargetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>A value that indicates whether a storage volume is attached to or detached from a
   *          gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving Your Volumes to a Different Gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * <p>The unique identifier of the volume, e.g. vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the cached volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * <p>The size, in bytes, of the volume capacity.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage
   *          volume.</p>
   */
  VolumeStatus?: string;

  /**
   * <p>One of the VolumeType enumeration values that describes the type of the
   *          volume.</p>
   */
  VolumeType?: string;

  /**
   * <p>The size of the data stored on the volume in bytes. This value is calculated based on
   *          the number of blocks that are touched, instead of the actual amount of data written. This
   *          value can be useful for sequential write patterns but less accurate for random write
   *          patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the
   *          volume, which is the value that is used to calculate your bill.</p>
   *
   *
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   */
  VolumeUsedInBytes?: number;

  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of
   *          iSCSI attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
}

export namespace CachediSCSIVolume {
  export const filterSensitiveLog = (obj: CachediSCSIVolume): any => ({
    ...obj
  });
  export const isa = (o: any): o is CachediSCSIVolume =>
    __isa(o, "CachediSCSIVolume");
}

/**
 * <p>CancelArchivalInput</p>
 */
export interface CancelArchivalInput {
  __type?: "CancelArchivalInput";
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
    ...obj
  });
  export const isa = (o: any): o is CancelArchivalInput =>
    __isa(o, "CancelArchivalInput");
}

/**
 * <p>CancelArchivalOutput</p>
 */
export interface CancelArchivalOutput {
  __type?: "CancelArchivalOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which archiving was
   *          canceled.</p>
   */
  TapeARN?: string;
}

export namespace CancelArchivalOutput {
  export const filterSensitiveLog = (obj: CancelArchivalOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelArchivalOutput =>
    __isa(o, "CancelArchivalOutput");
}

/**
 * <p>CancelRetrievalInput</p>
 */
export interface CancelRetrievalInput {
  __type?: "CancelRetrievalInput";
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
    ...obj
  });
  export const isa = (o: any): o is CancelRetrievalInput =>
    __isa(o, "CancelRetrievalInput");
}

/**
 * <p>CancelRetrievalOutput</p>
 */
export interface CancelRetrievalOutput {
  __type?: "CancelRetrievalOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which retrieval was
   *          canceled.</p>
   */
  TapeARN?: string;
}

export namespace CancelRetrievalOutput {
  export const filterSensitiveLog = (obj: CancelRetrievalOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelRetrievalOutput =>
    __isa(o, "CancelRetrievalOutput");
}

/**
 * <p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that
 *          supports authentication between your gateway and iSCSI initiators.</p>
 */
export interface ChapInfo {
  __type?: "ChapInfo";
  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   */
  SecretToAuthenticateInitiator?: string;

  /**
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g. Windows client).</p>
   */
  SecretToAuthenticateTarget?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume.</p>
   *          <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
   *          (-).</p>
   */
  TargetARN?: string;
}

export namespace ChapInfo {
  export const filterSensitiveLog = (obj: ChapInfo): any => ({
    ...obj,
    ...(obj.SecretToAuthenticateInitiator && {
      SecretToAuthenticateInitiator: SENSITIVE_STRING
    }),
    ...(obj.SecretToAuthenticateTarget && {
      SecretToAuthenticateTarget: SENSITIVE_STRING
    })
  });
  export const isa = (o: any): o is ChapInfo => __isa(o, "ChapInfo");
}

export interface CreateCachediSCSIVolumeInput {
  __type?: "CreateCachediSCSIVolumeInput";
  /**
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *          <p> Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot
   *          otherwise do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ARN for an existing volume. Specifying this ARN makes the new volume into an
   *          exact copy of the specified existing volume's latest recovery point. The
   *             <code>VolumeSizeInBytes</code> value for this new volume must be equal to or larger than
   *          the size of the existing volume, in bytes.</p>
   */
  SourceVolumeARN?: string;

  /**
   * <p>A list of up to 50 tags that you can assign to a cached volume. Each tag is a
   *          key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers that you can
   *             represent in UTF-8 format, and the following special characters: + - = . _ : / @. The
   *             maximum length of a tag's key is 128 characters, and the maximum length for a
   *             tag's value is 256 characters.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as
   *          a suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously used
   *          for this volume as the new target name.</p>
   */
  TargetName: string | undefined;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes: number | undefined;
}

export namespace CreateCachediSCSIVolumeInput {
  export const filterSensitiveLog = (
    obj: CreateCachediSCSIVolumeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCachediSCSIVolumeInput =>
    __isa(o, "CreateCachediSCSIVolumeInput");
}

export interface CreateCachediSCSIVolumeOutput {
  __type?: "CreateCachediSCSIVolumeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name
   *          that initiators can use to connect to the target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;
}

export namespace CreateCachediSCSIVolumeOutput {
  export const filterSensitiveLog = (
    obj: CreateCachediSCSIVolumeOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCachediSCSIVolumeOutput =>
    __isa(o, "CreateCachediSCSIVolumeOutput");
}

/**
 * <p>CreateNFSFileShareInput</p>
 */
export interface CreateNFSFileShareInput {
  __type?: "CreateNFSFileShareInput";
  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must
   *          contain either valid IP addresses or valid CIDR blocks. </p>
   */
  ClientList?: string[];

  /**
   * <p>A unique string value that you supply that is used by file gateway to ensure
   *          idempotent file share creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file
   *          gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or
   *             <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value
   *             <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway on which you want to create a file
   *          share.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to true to enable MIME type guessing, and otherwise to false.
   *          The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) AWS KMS key used for Amazon S3 server side encryption.
   *          This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the backed storage used for storing file data. </p>
   */
  LocationARN: string | undefined;

  /**
   * <p>File share default values. Optional.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write
   *          status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with
   *          data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3
   *          bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share,
   *          so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p>
   *          </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway
   *          assumes when it accesses the underlying storage. </p>
   */
  Role: string | undefined;

  /**
   * <p>A value that maps a user to anonymous user. Valid options are the following: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RootSquash</code> - Only root is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoSquash</code> - No one is mapped to anonymous user</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllSquash</code> - Everyone is mapped to anonymous user.</p>
   *             </li>
   *          </ul>
   */
  Squash?: string;

  /**
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateNFSFileShareInput {
  export const filterSensitiveLog = (obj: CreateNFSFileShareInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateNFSFileShareInput =>
    __isa(o, "CreateNFSFileShareInput");
}

/**
 * <p>CreateNFSFileShareOutput</p>
 */
export interface CreateNFSFileShareOutput {
  __type?: "CreateNFSFileShareOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share. </p>
   */
  FileShareARN?: string;
}

export namespace CreateNFSFileShareOutput {
  export const filterSensitiveLog = (obj: CreateNFSFileShareOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateNFSFileShareOutput =>
    __isa(o, "CreateNFSFileShareOutput");
}

/**
 * <p>CreateSMBFileShareInput</p>
 */
export interface CreateSMBFileShareInput {
  __type?: "CreateSMBFileShareInput";
  /**
   * <p>A list of users in the Active Directory that will be granted administrator privileges on the
   *          file share. These users can do all file operations as the super-user.
   *       </p>
   *          <important>
   *             <p>Use this option very carefully, because any user in this list can do
   *          anything they like on the file share, regardless of file permissions.</p>
   *          </important>
   */
  AdminUserList?: string[];

  /**
   * <p>The authentication method that users use to access the file share.</p>
   *          <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The
   *          default is <code>ActiveDirectory</code>.</p>
   */
  Authentication?: string;

  /**
   * <p>A unique string value that you supply that is used by file gateway to ensure
   *          idempotent file share creation.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file
   *          gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or
   *             <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value
   *             <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway on which you want to create a file
   *          share.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to true to enable MIME type guessing, and otherwise to false.
   *          The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. For example
   *          <code>@group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the backed storage used for storing file data. </p>
   */
  LocationARN: string | undefined;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write
   *          status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with
   *          data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3
   *          bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share,
   *          so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p>
   *          </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway
   *          assumes when it accesses the underlying storage. </p>
   */
  Role: string | undefined;

  /**
   * <p>Set this value to "true to enable ACL (access control list) on the SMB file share. Set it to "false" to
   *          map file and directory permissions to the POSIX permissions.</p>
   *
   *          <p>For more information, see
   *          https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html in the
   *          Storage Gateway User Guide.</p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can
   *          only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];
}

export namespace CreateSMBFileShareInput {
  export const filterSensitiveLog = (obj: CreateSMBFileShareInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSMBFileShareInput =>
    __isa(o, "CreateSMBFileShareInput");
}

/**
 * <p>CreateSMBFileShareOutput</p>
 */
export interface CreateSMBFileShareOutput {
  __type?: "CreateSMBFileShareOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created file share. </p>
   */
  FileShareARN?: string;
}

export namespace CreateSMBFileShareOutput {
  export const filterSensitiveLog = (obj: CreateSMBFileShareOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSMBFileShareOutput =>
    __isa(o, "CreateSMBFileShareOutput");
}

export interface CreateSnapshotFromVolumeRecoveryPointInput {
  __type?: "CreateSnapshotFromVolumeRecoveryPointInput";
  /**
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the AWS Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field</p>
   */
  SnapshotDescription: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  VolumeARN: string | undefined;
}

export namespace CreateSnapshotFromVolumeRecoveryPointInput {
  export const filterSensitiveLog = (
    obj: CreateSnapshotFromVolumeRecoveryPointInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CreateSnapshotFromVolumeRecoveryPointInput =>
    __isa(o, "CreateSnapshotFromVolumeRecoveryPointInput");
}

export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  __type?: "CreateSnapshotFromVolumeRecoveryPointOutput";
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
  export const filterSensitiveLog = (
    obj: CreateSnapshotFromVolumeRecoveryPointOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CreateSnapshotFromVolumeRecoveryPointOutput =>
    __isa(o, "CreateSnapshotFromVolumeRecoveryPointOutput");
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
 */
export interface CreateSnapshotInput {
  __type?: "CreateSnapshotInput";
  /**
   * <p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic
   *          Block Store snapshots panel in the <b>Description</b> field, and
   *          in the AWS Storage Gateway snapshot <b>Details</b> pane,
   *             <b>Description</b> field</p>
   */
  SnapshotDescription: string | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

export namespace CreateSnapshotInput {
  export const filterSensitiveLog = (obj: CreateSnapshotInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotInput =>
    __isa(o, "CreateSnapshotInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface CreateSnapshotOutput {
  __type?: "CreateSnapshotOutput";
  /**
   * <p>The snapshot ID that is used to refer to the snapshot in future operations such as
   *          describing snapshots (Amazon Elastic Compute Cloud API <code>DescribeSnapshots</code>) or
   *          creating a volume from a snapshot (<a>CreateStorediSCSIVolume</a>).</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume of which the snapshot was
   *          taken.</p>
   */
  VolumeARN?: string;
}

export namespace CreateSnapshotOutput {
  export const filterSensitiveLog = (obj: CreateSnapshotOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotOutput =>
    __isa(o, "CreateSnapshotOutput");
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
 */
export interface CreateStorediSCSIVolumeInput {
  __type?: "CreateStorediSCSIVolumeInput";
  /**
   * <p>The unique identifier for the gateway local disk that is configured as a stored
   *          volume. Use <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html">ListLocalDisks</a> to
   *          list disk IDs for a gateway.</p>
   */
  DiskId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4
   *          addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of
   *          the network interfaces available on a gateway.</p>
   *          <p> Valid Values: A valid IP address.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>Specify this field as true if you want to preserve the data on the local disk.
   *          Otherwise, specifying this field as false creates an empty volume.</p>
   *          <p> Valid Values: true, false</p>
   */
  PreserveExistingData: boolean | undefined;

  /**
   * <p>The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new stored
   *          volume. Specify this field if you want to create the iSCSI storage volume from a snapshot
   *          otherwise do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
   *             Reference</i>.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as
   *          a suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously used
   *          for this volume as the new target name.</p>
   */
  TargetName: string | undefined;
}

export namespace CreateStorediSCSIVolumeInput {
  export const filterSensitiveLog = (
    obj: CreateStorediSCSIVolumeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStorediSCSIVolumeInput =>
    __isa(o, "CreateStorediSCSIVolumeInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface CreateStorediSCSIVolumeOutput {
  __type?: "CreateStorediSCSIVolumeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name
   *          that initiators can use to connect to the target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;
}

export namespace CreateStorediSCSIVolumeOutput {
  export const filterSensitiveLog = (
    obj: CreateStorediSCSIVolumeOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStorediSCSIVolumeOutput =>
    __isa(o, "CreateStorediSCSIVolumeOutput");
}

/**
 * <p>CreateTapesInput</p>
 */
export interface CreateTapesInput {
  __type?: "CreateTapesInput";
  /**
   * <p>A unique identifier that you use to retry a request. If you retry a request, use the
   *          same <code>ClientToken</code> you specified in the initial request.</p>
   *          <note>
   *             <p>Using the same <code>ClientToken</code> prevents creating the tape multiple
   *             times.</p>
   *          </note>
   */
  ClientToken: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tapes with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The number of virtual tapes that you want to create.</p>
   */
  NumTapesToCreate: number | undefined;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving.
   *          The tape in this pool is archived in the S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p>
   *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;

  /**
   * <p>A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>A prefix that you append to the barcode of the virtual tape you are creating. This
   *          prefix makes the barcode unique.</p>
   *          <note>
   *             <p>The prefix must be 1 to 4 characters in length and must be one of the uppercase
   *             letters from A to Z.</p>
   *          </note>
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tapes that you want to create.</p>
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 byte).</p>
   *          </note>
   */
  TapeSizeInBytes: number | undefined;
}

export namespace CreateTapesInput {
  export const filterSensitiveLog = (obj: CreateTapesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTapesInput =>
    __isa(o, "CreateTapesInput");
}

/**
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapesOutput {
  __type?: "CreateTapesOutput";
  /**
   * <p>A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that
   *          were created.</p>
   */
  TapeARNs?: string[];
}

export namespace CreateTapesOutput {
  export const filterSensitiveLog = (obj: CreateTapesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTapesOutput =>
    __isa(o, "CreateTapesOutput");
}

/**
 * <p>CreateTapeWithBarcodeInput</p>
 */
export interface CreateTapeWithBarcodeInput {
  __type?: "CreateTapeWithBarcodeInput";
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the
   *          virtual tape with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS Key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving.
   *          The tape in this pool is archived in the S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p>
   *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;

  /**
   * <p>A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The barcode that you want to assign to the tape.</p>
   *          <note>
   *             <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been
   *             deleted.</p>
   *          </note>
   */
  TapeBarcode: string | undefined;

  /**
   * <p>The size, in bytes, of the virtual tape that you want to create.</p>
   *          <note>
   *             <p>The size must be aligned by gigabyte (1024*1024*1024 byte).</p>
   *          </note>
   */
  TapeSizeInBytes: number | undefined;
}

export namespace CreateTapeWithBarcodeInput {
  export const filterSensitiveLog = (obj: CreateTapeWithBarcodeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTapeWithBarcodeInput =>
    __isa(o, "CreateTapeWithBarcodeInput");
}

/**
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapeWithBarcodeOutput {
  __type?: "CreateTapeWithBarcodeOutput";
  /**
   * <p>A unique Amazon Resource Name (ARN) that represents the virtual tape that was
   *          created.</p>
   */
  TapeARN?: string;
}

export namespace CreateTapeWithBarcodeOutput {
  export const filterSensitiveLog = (
    obj: CreateTapeWithBarcodeOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTapeWithBarcodeOutput =>
    __isa(o, "CreateTapeWithBarcodeOutput");
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
 */
export interface DeleteBandwidthRateLimitInput {
  __type?: "DeleteBandwidthRateLimitInput";
  /**
   * <p>One of the BandwidthType values that indicates the gateway bandwidth rate limit to
   *          delete.</p>
   *          <p>Valid Values: <code>Upload</code>, <code>Download</code>, <code>All</code>.</p>
   */
  BandwidthType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DeleteBandwidthRateLimitInput {
  export const filterSensitiveLog = (
    obj: DeleteBandwidthRateLimitInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBandwidthRateLimitInput =>
    __isa(o, "DeleteBandwidthRateLimitInput");
}

/**
 * <p>A JSON object containing the of the gateway whose bandwidth rate information was
 *          deleted.</p>
 */
export interface DeleteBandwidthRateLimitOutput {
  __type?: "DeleteBandwidthRateLimitOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DeleteBandwidthRateLimitOutput {
  export const filterSensitiveLog = (
    obj: DeleteBandwidthRateLimitOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBandwidthRateLimitOutput =>
    __isa(o, "DeleteBandwidthRateLimitOutput");
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
 */
export interface DeleteChapCredentialsInput {
  __type?: "DeleteChapCredentialsInput";
  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  TargetARN: string | undefined;
}

export namespace DeleteChapCredentialsInput {
  export const filterSensitiveLog = (obj: DeleteChapCredentialsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteChapCredentialsInput =>
    __isa(o, "DeleteChapCredentialsInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DeleteChapCredentialsOutput {
  __type?: "DeleteChapCredentialsOutput";
  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  TargetARN?: string;
}

export namespace DeleteChapCredentialsOutput {
  export const filterSensitiveLog = (
    obj: DeleteChapCredentialsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteChapCredentialsOutput =>
    __isa(o, "DeleteChapCredentialsOutput");
}

/**
 * <p>DeleteFileShareInput</p>
 */
export interface DeleteFileShareInput {
  __type?: "DeleteFileShareInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the file share to be deleted. </p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>If this value is set to true, the operation deletes a file share immediately and
   *          aborts all data uploads to AWS. Otherwise, the file share is not deleted until all data is
   *          uploaded to AWS. This process aborts the data upload process, and the file share enters the
   *          FORCE_DELETING status.</p>
   */
  ForceDelete?: boolean;
}

export namespace DeleteFileShareInput {
  export const filterSensitiveLog = (obj: DeleteFileShareInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFileShareInput =>
    __isa(o, "DeleteFileShareInput");
}

/**
 * <p>DeleteFileShareOutput</p>
 */
export interface DeleteFileShareOutput {
  __type?: "DeleteFileShareOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted file share. </p>
   */
  FileShareARN?: string;
}

export namespace DeleteFileShareOutput {
  export const filterSensitiveLog = (obj: DeleteFileShareOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFileShareOutput =>
    __isa(o, "DeleteFileShareOutput");
}

/**
 * <p>A JSON object containing the ID of the gateway to delete.</p>
 */
export interface DeleteGatewayInput {
  __type?: "DeleteGatewayInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DeleteGatewayInput {
  export const filterSensitiveLog = (obj: DeleteGatewayInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGatewayInput =>
    __isa(o, "DeleteGatewayInput");
}

/**
 * <p>A JSON object containing the ID of the deleted gateway.</p>
 */
export interface DeleteGatewayOutput {
  __type?: "DeleteGatewayOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DeleteGatewayOutput {
  export const filterSensitiveLog = (obj: DeleteGatewayOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGatewayOutput =>
    __isa(o, "DeleteGatewayOutput");
}

export interface DeleteSnapshotScheduleInput {
  __type?: "DeleteSnapshotScheduleInput";
  /**
   * <p>The volume which snapshot schedule to delete.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DeleteSnapshotScheduleInput {
  export const filterSensitiveLog = (
    obj: DeleteSnapshotScheduleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotScheduleInput =>
    __isa(o, "DeleteSnapshotScheduleInput");
}

export interface DeleteSnapshotScheduleOutput {
  __type?: "DeleteSnapshotScheduleOutput";
  /**
   * <p>The volume which snapshot schedule was deleted.</p>
   */
  VolumeARN?: string;
}

export namespace DeleteSnapshotScheduleOutput {
  export const filterSensitiveLog = (
    obj: DeleteSnapshotScheduleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotScheduleOutput =>
    __isa(o, "DeleteSnapshotScheduleOutput");
}

/**
 * <p>DeleteTapeArchiveInput</p>
 */
export interface DeleteTapeArchiveInput {
  __type?: "DeleteTapeArchiveInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape
   *          shelf (VTS).</p>
   */
  TapeARN: string | undefined;
}

export namespace DeleteTapeArchiveInput {
  export const filterSensitiveLog = (obj: DeleteTapeArchiveInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTapeArchiveInput =>
    __isa(o, "DeleteTapeArchiveInput");
}

/**
 * <p>DeleteTapeArchiveOutput</p>
 */
export interface DeleteTapeArchiveOutput {
  __type?: "DeleteTapeArchiveOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual
   *          tape shelf (VTS).</p>
   */
  TapeARN?: string;
}

export namespace DeleteTapeArchiveOutput {
  export const filterSensitiveLog = (obj: DeleteTapeArchiveOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTapeArchiveOutput =>
    __isa(o, "DeleteTapeArchiveOutput");
}

/**
 * <p>DeleteTapeInput</p>
 */
export interface DeleteTapeInput {
  __type?: "DeleteTapeInput";
  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete
   *          is associated with. Use the <a>ListGateways</a> operation to return a list of
   *          gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape to delete.</p>
   */
  TapeARN: string | undefined;
}

export namespace DeleteTapeInput {
  export const filterSensitiveLog = (obj: DeleteTapeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTapeInput =>
    __isa(o, "DeleteTapeInput");
}

/**
 * <p>DeleteTapeOutput</p>
 */
export interface DeleteTapeOutput {
  __type?: "DeleteTapeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted virtual tape.</p>
   */
  TapeARN?: string;
}

export namespace DeleteTapeOutput {
  export const filterSensitiveLog = (obj: DeleteTapeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTapeOutput =>
    __isa(o, "DeleteTapeOutput");
}

/**
 * <p>A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to
 *          delete.</p>
 */
export interface DeleteVolumeInput {
  __type?: "DeleteVolumeInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DeleteVolumeInput {
  export const filterSensitiveLog = (obj: DeleteVolumeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVolumeInput =>
    __isa(o, "DeleteVolumeInput");
}

/**
 * <p>A JSON object containing the of the storage volume that was deleted</p>
 */
export interface DeleteVolumeOutput {
  __type?: "DeleteVolumeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same
   *          ARN you provided in the request.</p>
   */
  VolumeARN?: string;
}

export namespace DeleteVolumeOutput {
  export const filterSensitiveLog = (obj: DeleteVolumeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVolumeOutput =>
    __isa(o, "DeleteVolumeOutput");
}

export interface DescribeAvailabilityMonitorTestInput {
  __type?: "DescribeAvailabilityMonitorTestInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeAvailabilityMonitorTestInput {
  export const filterSensitiveLog = (
    obj: DescribeAvailabilityMonitorTestInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAvailabilityMonitorTestInput =>
    __isa(o, "DescribeAvailabilityMonitorTestInput");
}

export interface DescribeAvailabilityMonitorTestOutput {
  __type?: "DescribeAvailabilityMonitorTestOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The time the High Availability monitoring test was started. If a test hasn't been
   *          performed, the value of this field is null.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the High Availability monitoring test. If a test hasn't been performed,
   *          the value of this field is null.</p>
   */
  Status?: AvailabilityMonitorTestStatus | string;
}

export namespace DescribeAvailabilityMonitorTestOutput {
  export const filterSensitiveLog = (
    obj: DescribeAvailabilityMonitorTestOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAvailabilityMonitorTestOutput =>
    __isa(o, "DescribeAvailabilityMonitorTestOutput");
}

/**
 * <p>A JSON object containing the of the gateway.</p>
 */
export interface DescribeBandwidthRateLimitInput {
  __type?: "DescribeBandwidthRateLimitInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeBandwidthRateLimitInput {
  export const filterSensitiveLog = (
    obj: DescribeBandwidthRateLimitInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBandwidthRateLimitInput =>
    __isa(o, "DescribeBandwidthRateLimitInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeBandwidthRateLimitOutput {
  __type?: "DescribeBandwidthRateLimitOutput";
  /**
   * <p>The average download bandwidth rate limit in bits per second. This field does not
   *          appear in the response if the download rate limit is not set.</p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;

  /**
   * <p>The average upload bandwidth rate limit in bits per second. This field does not
   *          appear in the response if the upload rate limit is not set.</p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DescribeBandwidthRateLimitOutput {
  export const filterSensitiveLog = (
    obj: DescribeBandwidthRateLimitOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBandwidthRateLimitOutput =>
    __isa(o, "DescribeBandwidthRateLimitOutput");
}

export interface DescribeCachediSCSIVolumesInput {
  __type?: "DescribeCachediSCSIVolumesInput";
  /**
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          cached volume. All of the specified cached volumes must from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   */
  VolumeARNs: string[] | undefined;
}

export namespace DescribeCachediSCSIVolumesInput {
  export const filterSensitiveLog = (
    obj: DescribeCachediSCSIVolumesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCachediSCSIVolumesInput =>
    __isa(o, "DescribeCachediSCSIVolumesInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeCachediSCSIVolumesOutput {
  __type?: "DescribeCachediSCSIVolumesOutput";
  /**
   * <p>An array of objects where each object contains metadata about one cached
   *          volume.</p>
   */
  CachediSCSIVolumes?: CachediSCSIVolume[];
}

export namespace DescribeCachediSCSIVolumesOutput {
  export const filterSensitiveLog = (
    obj: DescribeCachediSCSIVolumesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCachediSCSIVolumesOutput =>
    __isa(o, "DescribeCachediSCSIVolumesOutput");
}

export interface DescribeCacheInput {
  __type?: "DescribeCacheInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeCacheInput {
  export const filterSensitiveLog = (obj: DescribeCacheInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheInput =>
    __isa(o, "DescribeCacheInput");
}

export interface DescribeCacheOutput {
  __type?: "DescribeCacheOutput";
  /**
   * <p>The amount of cache in bytes allocated to the a gateway.</p>
   */
  CacheAllocatedInBytes?: number;

  /**
   * <p>The file share's contribution to the overall percentage of the gateway's cache that has
   *          not been persisted to AWS. The sample is taken at the end of the reporting period.</p>
   */
  CacheDirtyPercentage?: number;

  /**
   * <p>Percent of application read operations from the file shares that are served from cache.
   *          The sample is taken at the end of the reporting period.</p>
   */
  CacheHitPercentage?: number;

  /**
   * <p>Percent of application read operations from the file shares that are not served from cache.
   *          The sample is taken at the end of the reporting period.</p>
   */
  CacheMissPercentage?: number;

  /**
   * <p>Percent use of the gateway's cache storage. This metric applies only to the
   *          gateway-cached volume setup. The sample is taken at the end of the reporting period.</p>
   */
  CacheUsedPercentage?: number;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage.
   *          Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs
   *          from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace DescribeCacheOutput {
  export const filterSensitiveLog = (obj: DescribeCacheOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheOutput =>
    __isa(o, "DescribeCacheOutput");
}

/**
 * <p>A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume
 *          target.</p>
 */
export interface DescribeChapCredentialsInput {
  __type?: "DescribeChapCredentialsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for
   *          specified VolumeARN.</p>
   */
  TargetARN: string | undefined;
}

export namespace DescribeChapCredentialsInput {
  export const filterSensitiveLog = (
    obj: DescribeChapCredentialsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeChapCredentialsInput =>
    __isa(o, "DescribeChapCredentialsInput");
}

/**
 * <p>A JSON object containing a .</p>
 */
export interface DescribeChapCredentialsOutput {
  __type?: "DescribeChapCredentialsOutput";
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
  export const filterSensitiveLog = (
    obj: DescribeChapCredentialsOutput
  ): any => ({
    ...obj,
    ...(obj.ChapCredentials && {
      ChapCredentials: obj.ChapCredentials.map(item =>
        ChapInfo.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeChapCredentialsOutput =>
    __isa(o, "DescribeChapCredentialsOutput");
}

/**
 * <p>A JSON object containing the ID of the gateway.</p>
 */
export interface DescribeGatewayInformationInput {
  __type?: "DescribeGatewayInformationInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeGatewayInformationInput {
  export const filterSensitiveLog = (
    obj: DescribeGatewayInformationInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGatewayInformationInput =>
    __isa(o, "DescribeGatewayInformationInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeGatewayInformationOutput {
  __type?: "DescribeGatewayInformationOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Log Group that is used to monitor events in the gateway.</p>
   */
  CloudWatchLogGroupARN?: string;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The AWS Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes
   *          part of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   */
  GatewayId?: string;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>A <a>NetworkInterface</a> array that contains descriptions of the gateway
   *          network interfaces.</p>
   */
  GatewayNetworkInterfaces?: NetworkInterface[];

  /**
   * <p>A value that indicates the operating state of the gateway.</p>
   */
  GatewayState?: string;

  /**
   * <p>A value that indicates the time zone configured for the gateway.</p>
   */
  GatewayTimezone?: string;

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * <p>The type of hypervisor environment used by the host.</p>
   */
  HostEnvironment?: HostEnvironment | string;

  /**
   * <p>The date on which the last software update was applied to the gateway. If the gateway
   *          has never been updated, this field does not return a value in the response.</p>
   */
  LastSoftwareUpdate?: string;

  /**
   * <p>The date on which an update to the gateway is available. This date is in the time
   *          zone of the gateway. If the gateway is not available for an update this field is not
   *          returned in the response.</p>
   */
  NextUpdateAvailabilityDate?: string;

  /**
   * <p>A list of up to 50 tags assigned to the gateway, sorted
   *          alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10
   *          tags assigned, you can view all tags using the <code>ListTagsForResource</code>
   *          API operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration settings for the virtual private cloud (VPC) endpoint for your gateway. </p>
   */
  VPCEndpoint?: string;
}

export namespace DescribeGatewayInformationOutput {
  export const filterSensitiveLog = (
    obj: DescribeGatewayInformationOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGatewayInformationOutput =>
    __isa(o, "DescribeGatewayInformationOutput");
}

/**
 * <p>A JSON object containing the of the gateway.</p>
 */
export interface DescribeMaintenanceStartTimeInput {
  __type?: "DescribeMaintenanceStartTimeInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeMaintenanceStartTimeInput {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceStartTimeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceStartTimeInput =>
    __isa(o, "DescribeMaintenanceStartTimeInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
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
  __type?: "DescribeMaintenanceStartTimeOutput";
  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal number from
   *          1 to 28, where 1 represents the first day of the month and 28 represents the last day of
   *          the month.</p>
   *          <note>
   *             <p>This value is only available for tape and volume gateways.</p>
   *          </note>
   */
  DayOfMonth?: number;

  /**
   * <p>An ordinal number between 0 and 6 that represents the day of the week, where 0
   *          represents Sunday and 6 represents Saturday. The day of week is in the time zone of the
   *          gateway.</p>
   */
  DayOfWeek?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The hour component of the maintenance start time represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  HourOfDay?: number;

  /**
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (0 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour?: number;

  /**
   * <p>A value that indicates the time zone that is set for the gateway. The start time and
   *          day of week specified should be in the time zone of the gateway.</p>
   */
  Timezone?: string;
}

export namespace DescribeMaintenanceStartTimeOutput {
  export const filterSensitiveLog = (
    obj: DescribeMaintenanceStartTimeOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMaintenanceStartTimeOutput =>
    __isa(o, "DescribeMaintenanceStartTimeOutput");
}

/**
 * <p>DescribeNFSFileSharesInput</p>
 */
export interface DescribeNFSFileSharesInput {
  __type?: "DescribeNFSFileSharesInput";
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described. </p>
   */
  FileShareARNList: string[] | undefined;
}

export namespace DescribeNFSFileSharesInput {
  export const filterSensitiveLog = (obj: DescribeNFSFileSharesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNFSFileSharesInput =>
    __isa(o, "DescribeNFSFileSharesInput");
}

/**
 * <p>DescribeNFSFileSharesOutput</p>
 */
export interface DescribeNFSFileSharesOutput {
  __type?: "DescribeNFSFileSharesOutput";
  /**
   * <p>An array containing a description for each requested file share. </p>
   */
  NFSFileShareInfoList?: NFSFileShareInfo[];
}

export namespace DescribeNFSFileSharesOutput {
  export const filterSensitiveLog = (
    obj: DescribeNFSFileSharesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNFSFileSharesOutput =>
    __isa(o, "DescribeNFSFileSharesOutput");
}

/**
 * <p>DescribeSMBFileSharesInput</p>
 */
export interface DescribeSMBFileSharesInput {
  __type?: "DescribeSMBFileSharesInput";
  /**
   * <p>An array containing the Amazon Resource Name (ARN) of each file share to be
   *          described. </p>
   */
  FileShareARNList: string[] | undefined;
}

export namespace DescribeSMBFileSharesInput {
  export const filterSensitiveLog = (obj: DescribeSMBFileSharesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSMBFileSharesInput =>
    __isa(o, "DescribeSMBFileSharesInput");
}

/**
 * <p>DescribeSMBFileSharesOutput</p>
 */
export interface DescribeSMBFileSharesOutput {
  __type?: "DescribeSMBFileSharesOutput";
  /**
   * <p>An array containing a description for each requested file share. </p>
   */
  SMBFileShareInfoList?: SMBFileShareInfo[];
}

export namespace DescribeSMBFileSharesOutput {
  export const filterSensitiveLog = (
    obj: DescribeSMBFileSharesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSMBFileSharesOutput =>
    __isa(o, "DescribeSMBFileSharesOutput");
}

export interface DescribeSMBSettingsInput {
  __type?: "DescribeSMBSettingsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeSMBSettingsInput {
  export const filterSensitiveLog = (obj: DescribeSMBSettingsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSMBSettingsInput =>
    __isa(o, "DescribeSMBSettingsInput");
}

export interface DescribeSMBSettingsOutput {
  __type?: "DescribeSMBSettingsOutput";
  /**
   * <p>Indicates the status of a gateway that is a member of the Active Directory
   *          domain.</p>
   *          <ul>
   *             <li>
   *                <p>ACCESS_DENIED: Indicates that the <code>JoinDomain</code> operation failed due to an
   *                authentication error.</p>
   *             </li>
   *             <li>
   *                <p>DETACHED: Indicates that gateway is not joined to a domain.</p>
   *             </li>
   *             <li>
   *                <p>JOINED:  Indicates that the gateway has successfully joined a domain.</p>
   *             </li>
   *             <li>
   *                <p>JOINING: Indicates that a <code>JoinDomain</code> operation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>NETWORK_ERROR: Indicates that <code>JoinDomain</code> operation failed due to a network or
   *                connectivity error.</p>
   *             </li>
   *             <li>
   *                <p>TIMEOUT: Indicates that the <code>JoinDomain</code> operation failed because the operation
   *                didn't complete within the allotted time.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN_ERROR: Indicates that the <code>JoinDomain</code> operation failed due to another type
   *                of error.</p>
   *             </li>
   *          </ul>
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | string;

  /**
   * <p>The name of the domain that the gateway is joined to.</p>
   */
  DomainName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>This value is true if a password for the guest user “smbguest” is set, and otherwise
   *          false.</p>
   */
  SMBGuestPasswordSet?: boolean;

  /**
   * <p>The type of security strategy that was specified for file gateway.</p>
   *          <p>ClientSpecified: if you use this option, requests are established based on what is
   *          negotiated by the client. This option is recommended when you want to maximize
   *          compatibility across different clients in your environment. </p>
   *          <p>MandatorySigning: if you use this option, file gateway only allows connections from
   *          SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on
   *          Microsoft Windows Vista, Windows Server 2008 or newer. </p>
   *          <p>MandatoryEncryption: if you use this option, file gateway only allows connections from
   *          SMBv3 clients that have encryption enabled. This option is highly recommended for
   *          environments that handle sensitive data. This option works with SMB clients on Microsoft
   *          Windows 8, Windows Server 2012 or newer. </p>
   */
  SMBSecurityStrategy?: SMBSecurityStrategy | string;
}

export namespace DescribeSMBSettingsOutput {
  export const filterSensitiveLog = (obj: DescribeSMBSettingsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSMBSettingsOutput =>
    __isa(o, "DescribeSMBSettingsOutput");
}

/**
 * <p>A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.</p>
 */
export interface DescribeSnapshotScheduleInput {
  __type?: "DescribeSnapshotScheduleInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DescribeSnapshotScheduleInput {
  export const filterSensitiveLog = (
    obj: DescribeSnapshotScheduleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotScheduleInput =>
    __isa(o, "DescribeSnapshotScheduleInput");
}

export interface DescribeSnapshotScheduleOutput {
  __type?: "DescribeSnapshotScheduleOutput";
  /**
   * <p>The snapshot description.</p>
   */
  Description?: string;

  /**
   * <p>The number of hours between snapshots.</p>
   */
  RecurrenceInHours?: number;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  StartAt?: number;

  /**
   * <p>A list of up to 50 tags assigned to the snapshot schedule, sorted
   *          alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10
   *          tags assigned, you can view all tags using the <code>ListTagsForResource</code>
   *          API operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that indicates the time zone of the gateway.</p>
   */
  Timezone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was specified in the request.</p>
   */
  VolumeARN?: string;
}

export namespace DescribeSnapshotScheduleOutput {
  export const filterSensitiveLog = (
    obj: DescribeSnapshotScheduleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotScheduleOutput =>
    __isa(o, "DescribeSnapshotScheduleOutput");
}

/**
 * <p>A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.</p>
 */
export interface DescribeStorediSCSIVolumesInput {
  __type?: "DescribeStorediSCSIVolumesInput";
  /**
   * <p>An array of strings where each string represents the Amazon Resource Name (ARN) of a
   *          stored volume. All of the specified stored volumes must from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>
   */
  VolumeARNs: string[] | undefined;
}

export namespace DescribeStorediSCSIVolumesInput {
  export const filterSensitiveLog = (
    obj: DescribeStorediSCSIVolumesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStorediSCSIVolumesInput =>
    __isa(o, "DescribeStorediSCSIVolumesInput");
}

export interface DescribeStorediSCSIVolumesOutput {
  __type?: "DescribeStorediSCSIVolumesOutput";
  /**
   * <p>Describes a single unit of output from <a>DescribeStorediSCSIVolumes</a>.
   *          The following fields are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ChapEnabled</b>: Indicates whether mutual CHAP is
   *                enabled for the iSCSI target.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>LunNumber</b>: The logical disk number.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NetworkInterfaceId</b>: The network interface ID of the
   *                stored volume that initiator use to map the stored volume as an iSCSI
   *                target.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NetworkInterfacePort</b>: The port used to communicate
   *                with iSCSI targets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PreservedExistingData</b>: Indicates if when the stored
   *                volume was created, existing data on the underlying local disk was
   *                preserved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SourceSnapshotId</b>: If the stored volume was created
   *                from a snapshot, this field contains the snapshot ID used, e.g. snap-1122aabb.
   *                Otherwise, this field is not included.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StorediSCSIVolumes</b>: An array of StorediSCSIVolume
   *                objects where each object contains metadata about one stored volume.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TargetARN</b>: The Amazon Resource Name (ARN) of the
   *                volume target.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeARN</b>: The Amazon Resource Name (ARN) of the
   *                stored volume.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeDiskId</b>: The disk ID of the local disk that was
   *                specified in the <a>CreateStorediSCSIVolume</a> operation.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeId</b>: The unique identifier of the storage
   *                volume, e.g. vol-1122AABB.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeiSCSIAttributes</b>: An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI
   *                attributes for one stored volume.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeProgress</b>: Represents the percentage complete
   *                if the volume is restoring or bootstrapping that represents the percent of data
   *                transferred. This field does not appear in the response if the stored volume is not
   *                restoring or bootstrapping.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeSizeInBytes</b>: The size of the volume in
   *                bytes.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeStatus</b>: One of the <code>VolumeStatus</code>
   *                values that indicates the state of the volume.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VolumeType</b>: One of the enumeration values describing
   *                the type of the volume. Currently, on STORED volumes are supported.</p>
   *
   *             </li>
   *          </ul>
   */
  StorediSCSIVolumes?: StorediSCSIVolume[];
}

export namespace DescribeStorediSCSIVolumesOutput {
  export const filterSensitiveLog = (
    obj: DescribeStorediSCSIVolumesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStorediSCSIVolumesOutput =>
    __isa(o, "DescribeStorediSCSIVolumesOutput");
}

/**
 * <p>DescribeTapeArchivesInput</p>
 */
export interface DescribeTapeArchivesInput {
  __type?: "DescribeTapeArchivesInput";
  /**
   * <p>Specifies that the number of virtual tapes descried be limited to the specified
   *          number.</p>
   */
  Limit?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin describing virtual
   *          tapes.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe.</p>
   */
  TapeARNs?: string[];
}

export namespace DescribeTapeArchivesInput {
  export const filterSensitiveLog = (obj: DescribeTapeArchivesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTapeArchivesInput =>
    __isa(o, "DescribeTapeArchivesInput");
}

/**
 * <p>DescribeTapeArchivesOutput</p>
 */
export interface DescribeTapeArchivesOutput {
  __type?: "DescribeTapeArchivesOutput";
  /**
   * <p>An opaque string that indicates the position at which the virtual tapes that were
   *          fetched for description ended. Use this marker in your next request to fetch the next set
   *          of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to
   *          describe, this field does not appear in the response.</p>
   */
  Marker?: string;

  /**
   * <p>An array of virtual tape objects in the virtual tape shelf (VTS). The description
   *          includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned
   *          includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the
   *          tapes, progress of the description and tape barcode.</p>
   */
  TapeArchives?: TapeArchive[];
}

export namespace DescribeTapeArchivesOutput {
  export const filterSensitiveLog = (obj: DescribeTapeArchivesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTapeArchivesOutput =>
    __isa(o, "DescribeTapeArchivesOutput");
}

/**
 * <p>DescribeTapeRecoveryPointsInput</p>
 */
export interface DescribeTapeRecoveryPointsInput {
  __type?: "DescribeTapeRecoveryPointsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies that the number of virtual tape recovery points that are described be
   *          limited to the specified number.</p>
   */
  Limit?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin describing the virtual
   *          tape recovery points.</p>
   */
  Marker?: string;
}

export namespace DescribeTapeRecoveryPointsInput {
  export const filterSensitiveLog = (
    obj: DescribeTapeRecoveryPointsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTapeRecoveryPointsInput =>
    __isa(o, "DescribeTapeRecoveryPointsInput");
}

/**
 * <p>DescribeTapeRecoveryPointsOutput</p>
 */
export interface DescribeTapeRecoveryPointsOutput {
  __type?: "DescribeTapeRecoveryPointsOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An opaque string that indicates the position at which the virtual tape recovery
   *          points that were listed for description ended.</p>
   *          <p>Use this marker in your next request to list the next set of virtual tape recovery
   *          points in the list. If there are no more recovery points to describe, this field does not
   *          appear in the response.</p>
   */
  Marker?: string;

  /**
   * <p>An array of TapeRecoveryPointInfos that are available for the specified
   *          gateway.</p>
   */
  TapeRecoveryPointInfos?: TapeRecoveryPointInfo[];
}

export namespace DescribeTapeRecoveryPointsOutput {
  export const filterSensitiveLog = (
    obj: DescribeTapeRecoveryPointsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTapeRecoveryPointsOutput =>
    __isa(o, "DescribeTapeRecoveryPointsOutput");
}

/**
 * <p>DescribeTapesInput</p>
 */
export interface DescribeTapesInput {
  __type?: "DescribeTapesInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies that the number of virtual tapes described be limited to the specified
   *          number.</p>
   *          <note>
   *             <p>Amazon Web Services may impose its own limit, if this field is not set.</p>
   *          </note>
   */
  Limit?: number;

  /**
   * <p>A marker value, obtained in a previous call to <code>DescribeTapes</code>. This
   *          marker indicates which page of results to retrieve. </p>
   *          <p>If not specified, the first page of results is retrieved.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual
   *          tapes you want to describe. If this parameter is not specified, Tape gateway returns a
   *          description of all virtual tapes associated with the specified gateway.</p>
   */
  TapeARNs?: string[];
}

export namespace DescribeTapesInput {
  export const filterSensitiveLog = (obj: DescribeTapesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTapesInput =>
    __isa(o, "DescribeTapesInput");
}

/**
 * <p>DescribeTapesOutput</p>
 */
export interface DescribeTapesOutput {
  __type?: "DescribeTapesOutput";
  /**
   * <p>An opaque string which can be used as part of a subsequent DescribeTapes call to
   *          retrieve the next page of results.</p>
   *          <p>If a response does not contain a marker, then there are no more results to be
   *          retrieved.</p>
   */
  Marker?: string;

  /**
   * <p>An array of virtual tape descriptions.</p>
   */
  Tapes?: Tape[];
}

export namespace DescribeTapesOutput {
  export const filterSensitiveLog = (obj: DescribeTapesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTapesOutput =>
    __isa(o, "DescribeTapesOutput");
}

export interface DescribeUploadBufferInput {
  __type?: "DescribeUploadBufferInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeUploadBufferInput {
  export const filterSensitiveLog = (obj: DescribeUploadBufferInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUploadBufferInput =>
    __isa(o, "DescribeUploadBufferInput");
}

export interface DescribeUploadBufferOutput {
  __type?: "DescribeUploadBufferOutput";
  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage. Each
   *          local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If
   *          no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   */
  DiskIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The total number of bytes allocated in the gateway's as upload buffer.</p>
   */
  UploadBufferAllocatedInBytes?: number;

  /**
   * <p>The total number of bytes being used in the gateway's upload buffer.</p>
   */
  UploadBufferUsedInBytes?: number;
}

export namespace DescribeUploadBufferOutput {
  export const filterSensitiveLog = (obj: DescribeUploadBufferOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUploadBufferOutput =>
    __isa(o, "DescribeUploadBufferOutput");
}

/**
 * <p>DescribeVTLDevicesInput</p>
 */
export interface DescribeVTLDevicesInput {
  __type?: "DescribeVTLDevicesInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies that the number of VTL devices described be limited to the specified
   *          number.</p>
   */
  Limit?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin describing the VTL
   *          devices.</p>
   */
  Marker?: string;

  /**
   * <p>An array of strings, where each string represents the Amazon Resource Name (ARN) of a
   *          VTL device.</p>
   *          <note>
   *             <p>All of the specified VTL devices must be from the same gateway. If no VTL devices
   *             are specified, the result will contain all devices on the specified gateway.</p>
   *          </note>
   */
  VTLDeviceARNs?: string[];
}

export namespace DescribeVTLDevicesInput {
  export const filterSensitiveLog = (obj: DescribeVTLDevicesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVTLDevicesInput =>
    __isa(o, "DescribeVTLDevicesInput");
}

/**
 * <p>DescribeVTLDevicesOutput</p>
 */
export interface DescribeVTLDevicesOutput {
  __type?: "DescribeVTLDevicesOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An opaque string that indicates the position at which the VTL devices that were
   *          fetched for description ended. Use the marker in your next request to fetch the next set of
   *          VTL devices in the list. If there are no more VTL devices to describe, this field does not
   *          appear in the response.</p>
   */
  Marker?: string;

  /**
   * <p>An array of VTL device objects composed of the Amazon Resource Name(ARN) of the VTL
   *          devices.</p>
   */
  VTLDevices?: VTLDevice[];
}

export namespace DescribeVTLDevicesOutput {
  export const filterSensitiveLog = (obj: DescribeVTLDevicesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeVTLDevicesOutput =>
    __isa(o, "DescribeVTLDevicesOutput");
}

/**
 * <p>A JSON object containing the of the gateway.</p>
 */
export interface DescribeWorkingStorageInput {
  __type?: "DescribeWorkingStorageInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DescribeWorkingStorageInput {
  export const filterSensitiveLog = (
    obj: DescribeWorkingStorageInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkingStorageInput =>
    __isa(o, "DescribeWorkingStorageInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeWorkingStorageOutput {
  __type?: "DescribeWorkingStorageOutput";
  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage. Each
   *          local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If
   *          no local disks are configured as working storage, then the DiskIds array is
   *          empty.</p>
   */
  DiskIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The total working storage in bytes allocated for the gateway. If no working storage
   *          is configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageAllocatedInBytes?: number;

  /**
   * <p>The total working storage in bytes in use by the gateway. If no working storage is
   *          configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageUsedInBytes?: number;
}

export namespace DescribeWorkingStorageOutput {
  export const filterSensitiveLog = (
    obj: DescribeWorkingStorageOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkingStorageOutput =>
    __isa(o, "DescribeWorkingStorageOutput");
}

/**
 * <p>AttachVolumeInput</p>
 */
export interface DetachVolumeInput {
  __type?: "DetachVolumeInput";
  /**
   * <p>Set to <code>true</code> to forcibly remove the iSCSI connection of the target volume
   *          and detach the volume. The default is <code>false</code>. If this value is set to
   *             <code>false</code>, you must manually disconnect the iSCSI connection from the target
   *          volume.</p>
   */
  ForceDetach?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume to detach from the gateway.</p>
   */
  VolumeARN: string | undefined;
}

export namespace DetachVolumeInput {
  export const filterSensitiveLog = (obj: DetachVolumeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachVolumeInput =>
    __isa(o, "DetachVolumeInput");
}

/**
 * <p>AttachVolumeOutput</p>
 */
export interface DetachVolumeOutput {
  __type?: "DetachVolumeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was detached.</p>
   */
  VolumeARN?: string;
}

export namespace DetachVolumeOutput {
  export const filterSensitiveLog = (obj: DetachVolumeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachVolumeOutput =>
    __isa(o, "DetachVolumeOutput");
}

/**
 * <p>Lists iSCSI information about a VTL device.</p>
 */
export interface DeviceiSCSIAttributes {
  __type?: "DeviceiSCSIAttributes";
  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;

  /**
   * <p>The network interface identifier of the VTL device.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The port used to communicate with iSCSI VTL device targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified
   *          name(iqn) of a tape drive or media changer target.</p>
   */
  TargetARN?: string;
}

export namespace DeviceiSCSIAttributes {
  export const filterSensitiveLog = (obj: DeviceiSCSIAttributes): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceiSCSIAttributes =>
    __isa(o, "DeviceiSCSIAttributes");
}

/**
 * <p>DisableGatewayInput</p>
 */
export interface DisableGatewayInput {
  __type?: "DisableGatewayInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace DisableGatewayInput {
  export const filterSensitiveLog = (obj: DisableGatewayInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableGatewayInput =>
    __isa(o, "DisableGatewayInput");
}

/**
 * <p>DisableGatewayOutput</p>
 */
export interface DisableGatewayOutput {
  __type?: "DisableGatewayOutput";
  /**
   * <p>The unique Amazon Resource Name (ARN) of the disabled gateway.</p>
   */
  GatewayARN?: string;
}

export namespace DisableGatewayOutput {
  export const filterSensitiveLog = (obj: DisableGatewayOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableGatewayOutput =>
    __isa(o, "DisableGatewayOutput");
}

/**
 * <p>Represents a gateway's local disk.</p>
 */
export interface Disk {
  __type?: "Disk";
  /**
   * <p>The iSCSI qualified name (IQN) that is defined for a disk. This field is not included
   *          in the response if the local disk is not defined as an iSCSI target. The format of this
   *          field is <i>targetIqn::LUNNumber::region-volumeId</i>. </p>
   */
  DiskAllocationResource?: string;

  /**
   * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a
   *          local disk is used. Valid values: <code>UPLOAD_BUFFER</code>,
   *          <code>CACHE_STORAGE</code>
   *          </p>
   */
  DiskAllocationType?: string;

  /**
   * <p>A list of values that represents attributes of a local disk.</p>
   */
  DiskAttributeList?: string[];

  /**
   * <p>The unique device ID or other distinguishing data that identifies a local
   *          disk.</p>
   */
  DiskId?: string;

  /**
   * <p>The device node of a local disk as assigned by the virtualization
   *          environment.</p>
   */
  DiskNode?: string;

  /**
   * <p>The path of a local disk in the gateway virtual machine (VM).</p>
   */
  DiskPath?: string;

  /**
   * <p>The local disk size in bytes.</p>
   */
  DiskSizeInBytes?: number;

  /**
   * <p>A value that represents the status of a local disk.</p>
   */
  DiskStatus?: string;
}

export namespace Disk {
  export const filterSensitiveLog = (obj: Disk): any => ({
    ...obj
  });
  export const isa = (o: any): o is Disk => __isa(o, "Disk");
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
 * <p>Describes a file share.</p>
 */
export interface FileShareInfo {
  __type?: "FileShareInfo";
  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share. </p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share. Possible values are <code>CREATING</code>,
   *             <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>. </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The type of the file share.</p>
   */
  FileShareType?: FileShareType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace FileShareInfo {
  export const filterSensitiveLog = (obj: FileShareInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileShareInfo => __isa(o, "FileShareInfo");
}

export type FileShareType = "NFS" | "SMB";

/**
 * <p>Describes a gateway object.</p>
 */
export interface GatewayInfo {
  __type?: "GatewayInfo";
  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The AWS Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes
   *          part of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   */
  GatewayId?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>The state of the gateway.</p>
   *          <p>Valid Values: DISABLED or ACTIVE</p>
   */
  GatewayOperationalState?: string;

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;
}

export namespace GatewayInfo {
  export const filterSensitiveLog = (obj: GatewayInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is GatewayInfo => __isa(o, "GatewayInfo");
}

export type HostEnvironment = "EC2" | "HYPER-V" | "OTHER" | "VMWARE";

/**
 * <p>An internal server error has occurred during the request. For more information, see
 *          the error and message fields.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the
   *          cause of the error.</p>
   */
  error?: StorageGatewayError;

  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerError =>
    __isa(o, "InternalServerError");
}

/**
 * <p>An exception occurred because an invalid gateway request was issued to the service.
 *          For more information, see the error and message fields.</p>
 */
export interface InvalidGatewayRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidGatewayRequestException";
  $fault: "client";
  /**
   * <p>A <a>StorageGatewayError</a> that provides more detail about the cause of
   *          the error.</p>
   */
  error?: StorageGatewayError;

  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;
}

export namespace InvalidGatewayRequestException {
  export const filterSensitiveLog = (
    obj: InvalidGatewayRequestException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidGatewayRequestException =>
    __isa(o, "InvalidGatewayRequestException");
}

/**
 * <p>JoinDomainInput</p>
 */
export interface JoinDomainInput {
  __type?: "JoinDomainInput";
  /**
   * <p>List of IPv4 addresses, NetBIOS names, or host names of your domain server. If you
   *          need to specify the port number include it after the colon (“:”). For example,
   *             <code>mydc.mydomain.com:389</code>.</p>
   */
  DomainControllers?: string[];

  /**
   * <p>The name of the domain that you want the gateway to join.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The organizational unit (OU) is a container in an Active Directory that can hold
   *          users, groups, computers, and other OUs and this parameter specifies the OU that the
   *          gateway will join within the AD domain.</p>
   */
  OrganizationalUnit?: string;

  /**
   * <p>Sets the password of the user who has permission to add the gateway to the Active
   *          Directory domain.</p>
   */
  Password: string | undefined;

  /**
   * <p>Specifies the time in seconds, in which the <code>JoinDomain</code> operation must
   *          complete. The default is 20 seconds.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>Sets the user name of user who has permission to add the gateway to the Active
   *          Directory domain. The domain user account should be enabled to join computers to the domain. For example,
   *          you can use the domain administrator account or an account with delegated permissions to join computers to the domain.</p>
   */
  UserName: string | undefined;
}

export namespace JoinDomainInput {
  export const filterSensitiveLog = (obj: JoinDomainInput): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is JoinDomainInput =>
    __isa(o, "JoinDomainInput");
}

/**
 * <p>JoinDomainOutput</p>
 */
export interface JoinDomainOutput {
  __type?: "JoinDomainOutput";
  /**
   * <p>Indicates the status of the gateway as a member of the Active Directory domain.</p>
   *          <ul>
   *             <li>
   *                <p>ACCESS_DENIED: Indicates that the <code>JoinDomain</code> operation failed due to an
   *                authentication error.</p>
   *             </li>
   *             <li>
   *                <p>DETACHED: Indicates that gateway is not joined to a domain.</p>
   *             </li>
   *             <li>
   *                <p>JOINED:  Indicates that the gateway has successfully joined a domain.</p>
   *             </li>
   *             <li>
   *                <p>JOINING: Indicates that a <code>JoinDomain</code> operation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>NETWORK_ERROR: Indicates that <code>JoinDomain</code> operation failed due to a network or
   *                connectivity error.</p>
   *             </li>
   *             <li>
   *                <p>TIMEOUT: Indicates that the <code>JoinDomain</code> operation failed because the operation
   *                didn't complete within the allotted time.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN_ERROR: Indicates that the <code>JoinDomain</code> operation failed due to another type
   *                of error.</p>
   *             </li>
   *          </ul>
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | string;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that joined the
   *          domain.</p>
   */
  GatewayARN?: string;
}

export namespace JoinDomainOutput {
  export const filterSensitiveLog = (obj: JoinDomainOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is JoinDomainOutput =>
    __isa(o, "JoinDomainOutput");
}

/**
 * <p>ListFileShareInput</p>
 */
export interface ListFileSharesInput {
  __type?: "ListFileSharesInput";
  /**
   * <p>The Amazon resource Name (ARN) of the gateway whose file shares you want to list. If
   *          this field is not present, all file shares under your account are listed.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The maximum number of file shares to return in the response. The value must be an
   *          integer with a value greater than zero. Optional.</p>
   */
  Limit?: number;

  /**
   * <p>Opaque pagination token returned from a previous ListFileShares operation. If
   *          present, <code>Marker</code> specifies where to continue the list from after a previous
   *          call to ListFileShares. Optional.</p>
   */
  Marker?: string;
}

export namespace ListFileSharesInput {
  export const filterSensitiveLog = (obj: ListFileSharesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListFileSharesInput =>
    __isa(o, "ListFileSharesInput");
}

/**
 * <p>ListFileShareOutput</p>
 */
export interface ListFileSharesOutput {
  __type?: "ListFileSharesOutput";
  /**
   * <p>An array of information about the file gateway's file shares. </p>
   */
  FileShareInfoList?: FileShareInfo[];

  /**
   * <p>If the request includes <code>Marker</code>, the response returns that value in this
   *          field. </p>
   */
  Marker?: string;

  /**
   * <p>If a value is present, there are more file shares to return. In a subsequent request,
   *          use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set
   *          of file shares. </p>
   */
  NextMarker?: string;
}

export namespace ListFileSharesOutput {
  export const filterSensitiveLog = (obj: ListFileSharesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListFileSharesOutput =>
    __isa(o, "ListFileSharesOutput");
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
 */
export interface ListGatewaysInput {
  __type?: "ListGatewaysInput";
  /**
   * <p>Specifies that the list of gateways returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the returned list of
   *          gateways.</p>
   */
  Marker?: string;
}

export namespace ListGatewaysInput {
  export const filterSensitiveLog = (obj: ListGatewaysInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGatewaysInput =>
    __isa(o, "ListGatewaysInput");
}

export interface ListGatewaysOutput {
  __type?: "ListGatewaysOutput";
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
    ...obj
  });
  export const isa = (o: any): o is ListGatewaysOutput =>
    __isa(o, "ListGatewaysOutput");
}

/**
 * <p>A JSON object containing the of the gateway.</p>
 */
export interface ListLocalDisksInput {
  __type?: "ListLocalDisksInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ListLocalDisksInput {
  export const filterSensitiveLog = (obj: ListLocalDisksInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLocalDisksInput =>
    __isa(o, "ListLocalDisksInput");
}

export interface ListLocalDisksOutput {
  __type?: "ListLocalDisksOutput";
  /**
   * <p>A JSON object containing the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListLocalDisksOutput$Disks</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  Disks?: Disk[];

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ListLocalDisksOutput {
  export const filterSensitiveLog = (obj: ListLocalDisksOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLocalDisksOutput =>
    __isa(o, "ListLocalDisksOutput");
}

/**
 * <p>ListTagsForResourceInput</p>
 */
export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   * <p>Specifies that the list of tags returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the list of
   *          tags.</p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list
   *          tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceInput =>
    __isa(o, "ListTagsForResourceInput");
}

/**
 * <p>ListTagsForResourceOutput</p>
 */
export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>An opaque string that indicates the position at which to stop returning the list of
   *          tags.</p>
   */
  Marker?: string;

  /**
   * <p>he Amazon Resource Name (ARN) of the resource for which you want to list
   *          tags.</p>
   */
  ResourceARN?: string;

  /**
   * <p>An array that contains the tags for the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceOutput =>
    __isa(o, "ListTagsForResourceOutput");
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
 */
export interface ListTapesInput {
  __type?: "ListTapesInput";
  /**
   * <p>An optional number limit for the tapes in the list returned by this call.</p>
   */
  Limit?: number;

  /**
   * <p>A string that indicates the position at which to begin the returned list of
   *          tapes.</p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't
   *          specify a tape ARN, the response lists all tapes in both your VTL and VTS.</p>
   */
  TapeARNs?: string[];
}

export namespace ListTapesInput {
  export const filterSensitiveLog = (obj: ListTapesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTapesInput =>
    __isa(o, "ListTapesInput");
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
 */
export interface ListTapesOutput {
  __type?: "ListTapesOutput";
  /**
   * <p>A string that indicates the position at which to begin returning the next list of
   *          tapes. Use the marker in your next request to continue pagination of tapes. If there are no
   *          more tapes to list, this element does not appear in the response body.</p>
   */
  Marker?: string;

  /**
   * <p>An array of <a>TapeInfo</a> objects, where each object describes an a
   *          single tape. If there not tapes in the tape library or VTS, then the <code>TapeInfos</code>
   *          is an empty array.</p>
   */
  TapeInfos?: TapeInfo[];
}

export namespace ListTapesOutput {
  export const filterSensitiveLog = (obj: ListTapesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTapesOutput =>
    __isa(o, "ListTapesOutput");
}

/**
 * <p>ListVolumeInitiatorsInput</p>
 */
export interface ListVolumeInitiatorsInput {
  __type?: "ListVolumeInitiatorsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes for the gateway.</p>
   */
  VolumeARN: string | undefined;
}

export namespace ListVolumeInitiatorsInput {
  export const filterSensitiveLog = (obj: ListVolumeInitiatorsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVolumeInitiatorsInput =>
    __isa(o, "ListVolumeInitiatorsInput");
}

/**
 * <p>ListVolumeInitiatorsOutput</p>
 */
export interface ListVolumeInitiatorsOutput {
  __type?: "ListVolumeInitiatorsOutput";
  /**
   * <p>The host names and port numbers of all iSCSI initiators that are connected to the
   *          gateway.</p>
   */
  Initiators?: string[];
}

export namespace ListVolumeInitiatorsOutput {
  export const filterSensitiveLog = (obj: ListVolumeInitiatorsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVolumeInitiatorsOutput =>
    __isa(o, "ListVolumeInitiatorsOutput");
}

export interface ListVolumeRecoveryPointsInput {
  __type?: "ListVolumeRecoveryPointsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ListVolumeRecoveryPointsInput {
  export const filterSensitiveLog = (
    obj: ListVolumeRecoveryPointsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVolumeRecoveryPointsInput =>
    __isa(o, "ListVolumeRecoveryPointsInput");
}

export interface ListVolumeRecoveryPointsOutput {
  __type?: "ListVolumeRecoveryPointsOutput";
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
  export const filterSensitiveLog = (
    obj: ListVolumeRecoveryPointsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVolumeRecoveryPointsOutput =>
    __isa(o, "ListVolumeRecoveryPointsOutput");
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
 */
export interface ListVolumesInput {
  __type?: "ListVolumesInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>Specifies that the list of volumes returned be limited to the specified number of
   *          items.</p>
   */
  Limit?: number;

  /**
   * <p>A string that indicates the position at which to begin the returned list of volumes.
   *          Obtain the marker from the response of a previous List iSCSI Volumes request.</p>
   */
  Marker?: string;
}

export namespace ListVolumesInput {
  export const filterSensitiveLog = (obj: ListVolumesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVolumesInput =>
    __isa(o, "ListVolumesInput");
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
 */
export interface ListVolumesOutput {
  __type?: "ListVolumesOutput";
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
   * <p>An array of <a>VolumeInfo</a> objects, where each object describes an
   *          iSCSI volume. If no volumes are defined for the gateway, then <code>VolumeInfos</code> is
   *          an empty array "[]".</p>
   */
  VolumeInfos?: VolumeInfo[];
}

export namespace ListVolumesOutput {
  export const filterSensitiveLog = (obj: ListVolumesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVolumesOutput =>
    __isa(o, "ListVolumesOutput");
}

/**
 * <p>Describes a gateway's network interface.</p>
 */
export interface NetworkInterface {
  __type?: "NetworkInterface";
  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the interface.</p>
   */
  Ipv4Address?: string;

  /**
   * <p>The Internet Protocol version 6 (IPv6) address of the interface. <i>Currently
   *             not supported</i>.</p>
   */
  Ipv6Address?: string;

  /**
   * <p>The Media Access Control (MAC) address of the interface.</p>
   *          <note>
   *             <p>This is currently unsupported and will not be returned in output.</p>
   *          </note>
   */
  MacAddress?: string;
}

export namespace NetworkInterface {
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj
  });
  export const isa = (o: any): o is NetworkInterface =>
    __isa(o, "NetworkInterface");
}

/**
 * <p>Describes Network File System (NFS) file share default values. Files and folders
 *          stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions
 *          assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that
 *          represent files and folders are assigned these default Unix permissions. This operation is
 *          only supported for file gateways.</p>
 */
export interface NFSFileShareDefaults {
  __type?: "NFSFileShareDefaults";
  /**
   * <p>The Unix directory mode in the form "nnnn". For example, "0666" represents the
   *          default access mode for all directories inside the file share. The default value is
   *          0777.</p>
   */
  DirectoryMode?: string;

  /**
   * <p>The Unix file mode in the form "nnnn". For example, "0666" represents the default
   *          file mode inside the file share. The default value is 0666. </p>
   */
  FileMode?: string;

  /**
   * <p>The default group ID for the file share (unless the files have another group ID
   *          specified). The default value is nfsnobody. </p>
   */
  GroupId?: number;

  /**
   * <p>The default owner ID for files in the file share (unless the files have another owner
   *          ID specified). The default value is nfsnobody. </p>
   */
  OwnerId?: number;
}

export namespace NFSFileShareDefaults {
  export const filterSensitiveLog = (obj: NFSFileShareDefaults): any => ({
    ...obj
  });
  export const isa = (o: any): o is NFSFileShareDefaults =>
    __isa(o, "NFSFileShareDefaults");
}

/**
 * <p>The Unix file permissions and ownership information assigned, by default, to native
 *          S3 objects when file gateway discovers them in S3 buckets. This operation is only supported
 *          in file gateways.</p>
 */
export interface NFSFileShareInfo {
  __type?: "NFSFileShareInfo";
  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must
   *          contain either valid IP addresses or valid CIDR blocks. </p>
   */
  ClientList?: string[];

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file
   *          gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or
   *             <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value
   *             <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share. </p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share. Possible values are <code>CREATING</code>,
   *             <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>. </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to true to enable MIME type guessing, and otherwise to false.
   *          The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional. </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the backend storage used for storing file data. </p>
   */
  LocationARN?: string;

  /**
   * <p>Describes Network File System (NFS) file share default values. Files and folders
   *          stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions
   *          assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that
   *          represent files and folders are assigned these default Unix permissions. This operation is
   *          only supported for file gateways.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>The file share path used by the NFS client to identify the mount point. </p>
   */
  Path?: string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write
   *          status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with
   *          data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3
   *          bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share,
   *          so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p>
   *          </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>The ARN of the IAM role that file gateway assumes when it accesses the underlying
   *          storage. </p>
   */
  Role?: string;

  /**
   * <p>The user mapped to anonymous user. Valid options are the following: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RootSquash</code> - Only root is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoSquash</code> - No one is mapped to anonymous user</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllSquash</code> - Everyone is mapped to anonymous user.</p>
   *             </li>
   *          </ul>
   */
  Squash?: string;

  /**
   * <p>A list of up to 50 tags assigned to the NFS file share, sorted
   *          alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10
   *          tags assigned, you can view all tags using the <code>ListTagsForResource</code>
   *          API operation.</p>
   */
  Tags?: Tag[];
}

export namespace NFSFileShareInfo {
  export const filterSensitiveLog = (obj: NFSFileShareInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is NFSFileShareInfo =>
    __isa(o, "NFSFileShareInfo");
}

export interface NotifyWhenUploadedInput {
  __type?: "NotifyWhenUploadedInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN: string | undefined;
}

export namespace NotifyWhenUploadedInput {
  export const filterSensitiveLog = (obj: NotifyWhenUploadedInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyWhenUploadedInput =>
    __isa(o, "NotifyWhenUploadedInput");
}

export interface NotifyWhenUploadedOutput {
  __type?: "NotifyWhenUploadedOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
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
    ...obj
  });
  export const isa = (o: any): o is NotifyWhenUploadedOutput =>
    __isa(o, "NotifyWhenUploadedOutput");
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
 * <p>RefreshCacheInput</p>
 */
export interface RefreshCacheInput {
  __type?: "RefreshCacheInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the file share you want to refresh.</p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>A comma-separated list of the paths of folders to refresh in the cache. The default
   *          is [<code>"/"</code>]. The default refreshes objects and folders at the root of the Amazon
   *          S3 bucket. If <code>Recursive</code> is set to "true", the entire S3 bucket that the file
   *          share has access to is refreshed.</p>
   */
  FolderList?: string[];

  /**
   * <p>A value that specifies whether to recursively refresh folders in the cache. The
   *          refresh includes folders that were in the cache the last time the gateway listed the
   *          folder's contents. If this value set to "true", each folder that is listed in
   *             <code>FolderList</code> is recursively updated. Otherwise, subfolders listed in
   *             <code>FolderList</code> are not refreshed. Only objects that are in folders listed
   *          directly under <code>FolderList</code> are found and used for the update. The default is
   *          "true".</p>
   */
  Recursive?: boolean;
}

export namespace RefreshCacheInput {
  export const filterSensitiveLog = (obj: RefreshCacheInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RefreshCacheInput =>
    __isa(o, "RefreshCacheInput");
}

/**
 * <p>RefreshCacheOutput</p>
 */
export interface RefreshCacheOutput {
  __type?: "RefreshCacheOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
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
    ...obj
  });
  export const isa = (o: any): o is RefreshCacheOutput =>
    __isa(o, "RefreshCacheOutput");
}

/**
 * <p>RemoveTagsFromResourceInput</p>
 */
export interface RemoveTagsFromResourceInput {
  __type?: "RemoveTagsFromResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to remove the tags
   *          from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags you want to remove from the specified resource. A tag is
   *          composed of a key/value pair.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceInput {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceInput =>
    __isa(o, "RemoveTagsFromResourceInput");
}

/**
 * <p>RemoveTagsFromResourceOutput</p>
 */
export interface RemoveTagsFromResourceOutput {
  __type?: "RemoveTagsFromResourceOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the tags were removed
   *          from.</p>
   */
  ResourceARN?: string;
}

export namespace RemoveTagsFromResourceOutput {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceOutput =>
    __isa(o, "RemoveTagsFromResourceOutput");
}

export interface ResetCacheInput {
  __type?: "ResetCacheInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ResetCacheInput {
  export const filterSensitiveLog = (obj: ResetCacheInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetCacheInput =>
    __isa(o, "ResetCacheInput");
}

export interface ResetCacheOutput {
  __type?: "ResetCacheOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ResetCacheOutput {
  export const filterSensitiveLog = (obj: ResetCacheOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetCacheOutput =>
    __isa(o, "ResetCacheOutput");
}

/**
 * <p>RetrieveTapeArchiveInput</p>
 */
export interface RetrieveTapeArchiveInput {
  __type?: "RetrieveTapeArchiveInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape
   *          to. Use the <a>ListGateways</a> operation to return a list of gateways for your
   *          account and AWS Region.</p>
   *          <p>You retrieve archived virtual tapes to only one gateway and the gateway must be a
   *          tape gateway.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the
   *          virtual tape shelf (VTS).</p>
   */
  TapeARN: string | undefined;
}

export namespace RetrieveTapeArchiveInput {
  export const filterSensitiveLog = (obj: RetrieveTapeArchiveInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveTapeArchiveInput =>
    __isa(o, "RetrieveTapeArchiveInput");
}

/**
 * <p>RetrieveTapeArchiveOutput</p>
 */
export interface RetrieveTapeArchiveOutput {
  __type?: "RetrieveTapeArchiveOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the retrieved virtual tape.</p>
   */
  TapeARN?: string;
}

export namespace RetrieveTapeArchiveOutput {
  export const filterSensitiveLog = (obj: RetrieveTapeArchiveOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveTapeArchiveOutput =>
    __isa(o, "RetrieveTapeArchiveOutput");
}

/**
 * <p>RetrieveTapeRecoveryPointInput</p>
 */
export interface RetrieveTapeRecoveryPointInput {
  __type?: "RetrieveTapeRecoveryPointInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the
   *          recovery point.</p>
   */
  TapeARN: string | undefined;
}

export namespace RetrieveTapeRecoveryPointInput {
  export const filterSensitiveLog = (
    obj: RetrieveTapeRecoveryPointInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveTapeRecoveryPointInput =>
    __isa(o, "RetrieveTapeRecoveryPointInput");
}

/**
 * <p>RetrieveTapeRecoveryPointOutput</p>
 */
export interface RetrieveTapeRecoveryPointOutput {
  __type?: "RetrieveTapeRecoveryPointOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was
   *          retrieved.</p>
   */
  TapeARN?: string;
}

export namespace RetrieveTapeRecoveryPointOutput {
  export const filterSensitiveLog = (
    obj: RetrieveTapeRecoveryPointOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveTapeRecoveryPointOutput =>
    __isa(o, "RetrieveTapeRecoveryPointOutput");
}

/**
 * <p>An internal server error has occurred because the service is unavailable. For more
 *          information, see the error and message fields.</p>
 */
export interface ServiceUnavailableError
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableError";
  $fault: "server";
  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the
   *          cause of the error.</p>
   */
  error?: StorageGatewayError;

  /**
   * <p>A human-readable message describing the error that occurred.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableError {
  export const filterSensitiveLog = (obj: ServiceUnavailableError): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableError =>
    __isa(o, "ServiceUnavailableError");
}

/**
 * <p>SetLocalConsolePasswordInput</p>
 */
export interface SetLocalConsolePasswordInput {
  __type?: "SetLocalConsolePasswordInput";
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
  export const filterSensitiveLog = (
    obj: SetLocalConsolePasswordInput
  ): any => ({
    ...obj,
    ...(obj.LocalConsolePassword && { LocalConsolePassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is SetLocalConsolePasswordInput =>
    __isa(o, "SetLocalConsolePasswordInput");
}

export interface SetLocalConsolePasswordOutput {
  __type?: "SetLocalConsolePasswordOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace SetLocalConsolePasswordOutput {
  export const filterSensitiveLog = (
    obj: SetLocalConsolePasswordOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetLocalConsolePasswordOutput =>
    __isa(o, "SetLocalConsolePasswordOutput");
}

/**
 * <p>SetSMBGuestPasswordInput</p>
 */
export interface SetSMBGuestPasswordInput {
  __type?: "SetSMBGuestPasswordInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway the SMB file share is associated
   *          with.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The password that you want to set for your SMB Server.</p>
   */
  Password: string | undefined;
}

export namespace SetSMBGuestPasswordInput {
  export const filterSensitiveLog = (obj: SetSMBGuestPasswordInput): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is SetSMBGuestPasswordInput =>
    __isa(o, "SetSMBGuestPasswordInput");
}

export interface SetSMBGuestPasswordOutput {
  __type?: "SetSMBGuestPasswordOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace SetSMBGuestPasswordOutput {
  export const filterSensitiveLog = (obj: SetSMBGuestPasswordOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetSMBGuestPasswordOutput =>
    __isa(o, "SetSMBGuestPasswordOutput");
}

/**
 * <p>A JSON object containing the of the gateway to shut down.</p>
 */
export interface ShutdownGatewayInput {
  __type?: "ShutdownGatewayInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace ShutdownGatewayInput {
  export const filterSensitiveLog = (obj: ShutdownGatewayInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShutdownGatewayInput =>
    __isa(o, "ShutdownGatewayInput");
}

/**
 * <p>A JSON object containing the of the gateway that was shut down.</p>
 */
export interface ShutdownGatewayOutput {
  __type?: "ShutdownGatewayOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace ShutdownGatewayOutput {
  export const filterSensitiveLog = (obj: ShutdownGatewayOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShutdownGatewayOutput =>
    __isa(o, "ShutdownGatewayOutput");
}

/**
 * <p>The Windows file permissions and ownership information assigned, by default, to
 *          native S3 objects when file gateway discovers them in S3 buckets. This operation is only
 *          supported for file gateways.</p>
 */
export interface SMBFileShareInfo {
  __type?: "SMBFileShareInfo";
  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. For example
   *          <code>@group1</code>. Can only be set if Authentication is set to
   *          <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: string[];

  /**
   * <p>The authentication method of the file share.</p>
   *          <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The
   *          default is <code>ActiveDirectory</code>.</p>
   */
  Authentication?: string;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file
   *          gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or
   *             <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value
   *             <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share. </p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share. Possible values are <code>CREATING</code>,
   *             <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>. </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to true to enable MIME type guessing, and otherwise to false.
   *          The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. For example
   *          <code>@group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * <p>True to use Amazon S3 server-side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional. </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the backend storage used for storing file data. </p>
   */
  LocationARN?: string;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>The file share path used by the SMB client to identify the mount point.</p>
   */
  Path?: string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write
   *          status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with
   *          data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3
   *          bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share,
   *          so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p>
   *          </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>The ARN of the IAM role that file gateway assumes when it accesses the underlying
   *          storage. </p>
   */
  Role?: string;

  /**
   * <p>If this value is set to "true", indicates that ACL (access control list) is enabled on the SMB file share. If it is set to "false",
   *          it indicates that file and directory permissions are mapped to the POSIX permission.</p>
   *
   *          <p>For more information, see
   *          https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html in the
   *          Storage Gateway User Guide.</p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted
   *          alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10
   *          tags assigned, you can view all tags using the <code>ListTagsForResource</code>
   *          API operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can
   *          only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];
}

export namespace SMBFileShareInfo {
  export const filterSensitiveLog = (obj: SMBFileShareInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is SMBFileShareInfo =>
    __isa(o, "SMBFileShareInfo");
}

export type SMBSecurityStrategy =
  | "ClientSpecified"
  | "MandatoryEncryption"
  | "MandatorySigning";

export interface StartAvailabilityMonitorTestInput {
  __type?: "StartAvailabilityMonitorTestInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace StartAvailabilityMonitorTestInput {
  export const filterSensitiveLog = (
    obj: StartAvailabilityMonitorTestInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAvailabilityMonitorTestInput =>
    __isa(o, "StartAvailabilityMonitorTestInput");
}

export interface StartAvailabilityMonitorTestOutput {
  __type?: "StartAvailabilityMonitorTestOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace StartAvailabilityMonitorTestOutput {
  export const filterSensitiveLog = (
    obj: StartAvailabilityMonitorTestOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAvailabilityMonitorTestOutput =>
    __isa(o, "StartAvailabilityMonitorTestOutput");
}

/**
 * <p>A JSON object containing the of the gateway to start.</p>
 */
export interface StartGatewayInput {
  __type?: "StartGatewayInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace StartGatewayInput {
  export const filterSensitiveLog = (obj: StartGatewayInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartGatewayInput =>
    __isa(o, "StartGatewayInput");
}

/**
 * <p>A JSON object containing the of the gateway that was restarted.</p>
 */
export interface StartGatewayOutput {
  __type?: "StartGatewayOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace StartGatewayOutput {
  export const filterSensitiveLog = (obj: StartGatewayOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartGatewayOutput =>
    __isa(o, "StartGatewayOutput");
}

/**
 * <p>Provides additional information about an error that was returned by the service as an
 *          or. See the <code>errorCode</code> and <code>errorDetails</code> members for more
 *          information about the error.</p>
 */
export interface StorageGatewayError {
  __type?: "StorageGatewayError";
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
    ...obj
  });
  export const isa = (o: any): o is StorageGatewayError =>
    __isa(o, "StorageGatewayError");
}

/**
 * <p>Describes an iSCSI stored volume.</p>
 */
export interface StorediSCSIVolume {
  __type?: "StorediSCSIVolume";
  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have
   *          this time stamp.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>Indicates if when the stored volume was created, existing data on the underlying
   *          local disk was preserved.</p>
   *          <p> Valid Values: true, false</p>
   */
  PreservedExistingData?: boolean;

  /**
   * <p>If the stored volume was created from a snapshot, this field contains the snapshot ID
   *          used, e.g. snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as
   *          a suffix for the target ARN. For example, specifying <code>TargetName</code> as
   *             <i>myvolume</i> results in the target ARN of
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>.
   *          The target name must be unique across all volumes on a gateway.</p>
   *          <p>If you don't specify a value, Storage Gateway uses the value that was previously used
   *          for this volume as the new target name.</p>
   */
  TargetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>A value that indicates whether a storage volume is attached to, detached from, or is
   *          in the process of detaching from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving Your Volumes to a Different Gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * <p>The ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p>
   */
  VolumeDiskId?: string;

  /**
   * <p>The unique identifier of the volume, e.g. vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that
   *          represents the percent of data transferred. This field does not appear in the response if
   *          the stored volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage
   *          volume.</p>
   */
  VolumeStatus?: string;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;

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
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of
   *          iSCSI attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
}

export namespace StorediSCSIVolume {
  export const filterSensitiveLog = (obj: StorediSCSIVolume): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorediSCSIVolume =>
    __isa(o, "StorediSCSIVolume");
}

/**
 * <p>A key-value pair that helps you manage, filter, and search for your resource. Allowed
 *          characters: letters, white space, and numbers, representable in UTF-8, and the following
 *          characters: + - = . _ : /</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>Tag key (String). The key can't start with aws:. </p>
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag key.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>Describes a virtual tape object.</p>
 */
export interface Tape {
  __type?: "Tape";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p>
   *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;

  /**
   * <p>For archiving virtual tapes, indicates how much data remains to be uploaded before
   *          archiving is complete.</p>
   *          <p>Range: 0 (not started) to 100 (complete).</p>
   */
  Progress?: number;

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
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   */
  TapeUsedInBytes?: number;

  /**
   * <p>The virtual tape library (VTL) device that the virtual tape is associated
   *          with.</p>
   */
  VTLDevice?: string;
}

export namespace Tape {
  export const filterSensitiveLog = (obj: Tape): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tape => __isa(o, "Tape");
}

/**
 * <p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>
 */
export interface TapeArchive {
  __type?: "TapeArchive";
  /**
   * <p>The time that the archiving of the virtual tape was completed.</p>
   *          <p>The default time stamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z'
   *          format.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool.</p>
   *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being
   *          retrieved to.</p>
   *          <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>
   */
  RetrievedTo?: string;

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
   * <p>The current state of the archived virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p>
   *          <note>
   *             <p>This value is not available for tapes created prior to May 13, 2015.</p>
   *          </note>
   */
  TapeUsedInBytes?: number;
}

export namespace TapeArchive {
  export const filterSensitiveLog = (obj: TapeArchive): any => ({
    ...obj
  });
  export const isa = (o: any): o is TapeArchive => __isa(o, "TapeArchive");
}

/**
 * <p>Describes a virtual tape.</p>
 */
export interface TapeInfo {
  __type?: "TapeInfo";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving.
   *          The tape in this pool is archived in the S3 storage class that is associated with the pool.
   *          When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p>
   *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;

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
}

export namespace TapeInfo {
  export const filterSensitiveLog = (obj: TapeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is TapeInfo => __isa(o, "TapeInfo");
}

/**
 * <p>Describes a recovery point.</p>
 */
export interface TapeRecoveryPointInfo {
  __type?: "TapeRecoveryPointInfo";
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The time when the point-in-time view of the virtual tape was replicated for later
   *          recovery.</p>
   *          <p>The default time stamp format of the tape recovery point time is in the ISO8601
   *          extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
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
    ...obj
  });
  export const isa = (o: any): o is TapeRecoveryPointInfo =>
    __isa(o, "TapeRecoveryPointInfo");
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
 */
export interface UpdateBandwidthRateLimitInput {
  __type?: "UpdateBandwidthRateLimitInput";
  /**
   * <p>The average download bandwidth rate limit in bits per second.</p>
   */
  AverageDownloadRateLimitInBitsPerSec?: number;

  /**
   * <p>The average upload bandwidth rate limit in bits per second.</p>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace UpdateBandwidthRateLimitInput {
  export const filterSensitiveLog = (
    obj: UpdateBandwidthRateLimitInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBandwidthRateLimitInput =>
    __isa(o, "UpdateBandwidthRateLimitInput");
}

/**
 * <p>A JSON object containing the of the gateway whose throttle information was
 *          updated.</p>
 */
export interface UpdateBandwidthRateLimitOutput {
  __type?: "UpdateBandwidthRateLimitOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateBandwidthRateLimitOutput {
  export const filterSensitiveLog = (
    obj: UpdateBandwidthRateLimitOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBandwidthRateLimitOutput =>
    __isa(o, "UpdateBandwidthRateLimitOutput");
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
  __type?: "UpdateChapCredentialsInput";
  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName: string | undefined;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to
   *          participate in mutual CHAP with the target.</p>
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   */
  SecretToAuthenticateInitiator: string | undefined;

  /**
   * <p>The secret key that the target must provide to participate in mutual CHAP with the
   *          initiator (e.g. Windows client).</p>
   *          <p>Byte constraints: Minimum bytes of 12. Maximum bytes of 16.</p>
   *          <note>
   *             <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p>
   *          </note>
   */
  SecretToAuthenticateTarget?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return the TargetARN for specified
   *          VolumeARN.</p>
   */
  TargetARN: string | undefined;
}

export namespace UpdateChapCredentialsInput {
  export const filterSensitiveLog = (obj: UpdateChapCredentialsInput): any => ({
    ...obj,
    ...(obj.SecretToAuthenticateInitiator && {
      SecretToAuthenticateInitiator: SENSITIVE_STRING
    }),
    ...(obj.SecretToAuthenticateTarget && {
      SecretToAuthenticateTarget: SENSITIVE_STRING
    })
  });
  export const isa = (o: any): o is UpdateChapCredentialsInput =>
    __isa(o, "UpdateChapCredentialsInput");
}

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface UpdateChapCredentialsOutput {
  __type?: "UpdateChapCredentialsOutput";
  /**
   * <p>The iSCSI initiator that connects to the target. This is the same initiator name
   *          specified in the request.</p>
   */
  InitiatorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target. This is the same target specified in
   *          the request.</p>
   */
  TargetARN?: string;
}

export namespace UpdateChapCredentialsOutput {
  export const filterSensitiveLog = (
    obj: UpdateChapCredentialsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateChapCredentialsOutput =>
    __isa(o, "UpdateChapCredentialsOutput");
}

export interface UpdateGatewayInformationInput {
  __type?: "UpdateGatewayInformationInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use to monitor and log events in the gateway. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">What Is Amazon CloudWatch Logs?</a>.</p>
   */
  CloudWatchLogGroupARN?: string;

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
}

export namespace UpdateGatewayInformationInput {
  export const filterSensitiveLog = (
    obj: UpdateGatewayInformationInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayInformationInput =>
    __isa(o, "UpdateGatewayInformationInput");
}

/**
 * <p>A JSON object containing the ARN of the gateway that was updated.</p>
 */
export interface UpdateGatewayInformationOutput {
  __type?: "UpdateGatewayInformationOutput";
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
  export const filterSensitiveLog = (
    obj: UpdateGatewayInformationOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayInformationOutput =>
    __isa(o, "UpdateGatewayInformationOutput");
}

/**
 * <p>A JSON object containing the of the gateway to update.</p>
 */
export interface UpdateGatewaySoftwareNowInput {
  __type?: "UpdateGatewaySoftwareNowInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;
}

export namespace UpdateGatewaySoftwareNowInput {
  export const filterSensitiveLog = (
    obj: UpdateGatewaySoftwareNowInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewaySoftwareNowInput =>
    __isa(o, "UpdateGatewaySoftwareNowInput");
}

/**
 * <p>A JSON object containing the of the gateway that was updated.</p>
 */
export interface UpdateGatewaySoftwareNowOutput {
  __type?: "UpdateGatewaySoftwareNowOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateGatewaySoftwareNowOutput {
  export const filterSensitiveLog = (
    obj: UpdateGatewaySoftwareNowOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewaySoftwareNowOutput =>
    __isa(o, "UpdateGatewaySoftwareNowOutput");
}

/**
 * <p>A JSON object containing the following fields:</p>
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
  __type?: "UpdateMaintenanceStartTimeInput";
  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal number from
   *          1 to 28, where 1 represents the first day of the month and 28 represents the last day of
   *          the month.</p>
   *          <note>
   *             <p>This value is only available for tape and volume gateways.</p>
   *          </note>
   */
  DayOfMonth?: number;

  /**
   * <p>The day of the week component of the maintenance start time week represented as an
   *          ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.</p>
   */
  DayOfWeek?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>The hour component of the maintenance start time represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (00 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  HourOfDay: number | undefined;

  /**
   * <p>The minute component of the maintenance start time represented as
   *             <i>mm</i>, where <i>mm</i> is the minute (00 to 59). The
   *          minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour: number | undefined;
}

export namespace UpdateMaintenanceStartTimeInput {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceStartTimeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMaintenanceStartTimeInput =>
    __isa(o, "UpdateMaintenanceStartTimeInput");
}

/**
 * <p>A JSON object containing the of the gateway whose maintenance start time is
 *          updated.</p>
 */
export interface UpdateMaintenanceStartTimeOutput {
  __type?: "UpdateMaintenanceStartTimeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateMaintenanceStartTimeOutput {
  export const filterSensitiveLog = (
    obj: UpdateMaintenanceStartTimeOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMaintenanceStartTimeOutput =>
    __isa(o, "UpdateMaintenanceStartTimeOutput");
}

/**
 * <p>UpdateNFSFileShareInput</p>
 */
export interface UpdateNFSFileShareInput {
  __type?: "UpdateNFSFileShareInput";
  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must
   *          contain either valid IP addresses or valid CIDR blocks.</p>
   */
  ClientList?: string[];

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file
   *          gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or
   *             <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value
   *             <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share to be updated. </p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to true to enable MIME type guessing, and otherwise to false.
   *          The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional. </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional. </p>
   */
  KMSKey?: string;

  /**
   * <p>The default values for the file share. Optional.</p>
   */
  NFSFileShareDefaults?: NFSFileShareDefaults;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write
   *          status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with
   *          data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3
   *          bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share,
   *          so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p>
   *          </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>The user mapped to anonymous user. Valid options are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RootSquash</code> - Only root is mapped to anonymous user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoSquash</code> - No one is mapped to anonymous user</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllSquash</code> - Everyone is mapped to anonymous user.</p>
   *             </li>
   *          </ul>
   */
  Squash?: string;
}

export namespace UpdateNFSFileShareInput {
  export const filterSensitiveLog = (obj: UpdateNFSFileShareInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNFSFileShareInput =>
    __isa(o, "UpdateNFSFileShareInput");
}

/**
 * <p>UpdateNFSFileShareOutput</p>
 */
export interface UpdateNFSFileShareOutput {
  __type?: "UpdateNFSFileShareOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the updated file share. </p>
   */
  FileShareARN?: string;
}

export namespace UpdateNFSFileShareOutput {
  export const filterSensitiveLog = (obj: UpdateNFSFileShareOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNFSFileShareOutput =>
    __isa(o, "UpdateNFSFileShareOutput");
}

/**
 * <p>UpdateSMBFileShareInput</p>
 */
export interface UpdateSMBFileShareInput {
  __type?: "UpdateSMBFileShareInput";
  /**
   * <p>A list of users in the Active Directory that have administrator rights to the
   *          file share. A group must be prefixed with the @ character. For example
   *          <code>@group1</code>. Can only be set if Authentication is set to
   *          <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: string[];

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file
   *          gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or
   *             <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value
   *             <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SMB file share that you want to
   *          update.</p>
   */
  FileShareARN: string | undefined;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file
   *          extensions. Set this value to true to enable MIME type guessing, and otherwise to false.
   *          The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the
   *          file share. A group must be prefixed with the @ character. For example
   *          <code>@group1</code>. Can only be set if Authentication is set to
   *             <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: string[];

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to
   *          use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side
   *          encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket
   *          that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?: ObjectACL | string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write
   *          status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with
   *          data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3
   *          bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p>
   *          <note>
   *             <p>
   *                <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share,
   *          so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p>
   *          </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>Set this value to "true to enable ACL (access control list) on the SMB file share. Set it to "false" to
   *          map file and directory permissions to the POSIX permissions.</p>
   *
   *          <p>For more information, see
   *          https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.htmlin the
   *          Storage Gateway User Guide.</p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file
   *          share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can
   *          only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: string[];
}

export namespace UpdateSMBFileShareInput {
  export const filterSensitiveLog = (obj: UpdateSMBFileShareInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSMBFileShareInput =>
    __isa(o, "UpdateSMBFileShareInput");
}

/**
 * <p>UpdateSMBFileShareOutput</p>
 */
export interface UpdateSMBFileShareOutput {
  __type?: "UpdateSMBFileShareOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the updated SMB file share. </p>
   */
  FileShareARN?: string;
}

export namespace UpdateSMBFileShareOutput {
  export const filterSensitiveLog = (obj: UpdateSMBFileShareOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSMBFileShareOutput =>
    __isa(o, "UpdateSMBFileShareOutput");
}

export interface UpdateSMBSecurityStrategyInput {
  __type?: "UpdateSMBSecurityStrategyInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN: string | undefined;

  /**
   * <p>Specifies the type of security strategy.</p>
   *          <p>ClientSpecified: if you use this option, requests are established based on what is
   *          negotiated by the client. This option is recommended when you want to maximize
   *          compatibility across different clients in your environment. </p>
   *          <p>MandatorySigning: if you use this option, file gateway only allows connections from
   *          SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on
   *          Microsoft Windows Vista, Windows Server 2008 or newer. </p>
   *          <p>MandatoryEncryption: if you use this option, file gateway only allows connections from
   *          SMBv3 clients that have encryption enabled. This option is highly recommended for
   *          environments that handle sensitive data. This option works with SMB clients on Microsoft
   *          Windows 8, Windows Server 2012 or newer. </p>
   */
  SMBSecurityStrategy: SMBSecurityStrategy | string | undefined;
}

export namespace UpdateSMBSecurityStrategyInput {
  export const filterSensitiveLog = (
    obj: UpdateSMBSecurityStrategyInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSMBSecurityStrategyInput =>
    __isa(o, "UpdateSMBSecurityStrategyInput");
}

export interface UpdateSMBSecurityStrategyOutput {
  __type?: "UpdateSMBSecurityStrategyOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;
}

export namespace UpdateSMBSecurityStrategyOutput {
  export const filterSensitiveLog = (
    obj: UpdateSMBSecurityStrategyOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSMBSecurityStrategyOutput =>
    __isa(o, "UpdateSMBSecurityStrategyOutput");
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
 */
export interface UpdateSnapshotScheduleInput {
  __type?: "UpdateSnapshotScheduleInput";
  /**
   * <p>Optional description of the snapshot that overwrites the existing
   *          description.</p>
   */
  Description?: string;

  /**
   * <p>Frequency of snapshots. Specify the number of hours between snapshots.</p>
   */
  RecurrenceInHours: number | undefined;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as
   *             <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour
   *          of the day is in the time zone of the gateway.</p>
   */
  StartAt: number | undefined;

  /**
   * <p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.</p>
   *          <note>
   *             <p>Valid characters for key and value are letters, spaces, and numbers representable
   *             in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum
   *             length of a tag's key is 128 characters, and the maximum length for a tag's value is
   *             256.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN: string | undefined;
}

export namespace UpdateSnapshotScheduleInput {
  export const filterSensitiveLog = (
    obj: UpdateSnapshotScheduleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSnapshotScheduleInput =>
    __isa(o, "UpdateSnapshotScheduleInput");
}

/**
 * <p>A JSON object containing the of the updated storage volume.</p>
 */
export interface UpdateSnapshotScheduleOutput {
  __type?: "UpdateSnapshotScheduleOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a>
   *          operation to return a list of gateway volumes.</p>
   */
  VolumeARN?: string;
}

export namespace UpdateSnapshotScheduleOutput {
  export const filterSensitiveLog = (
    obj: UpdateSnapshotScheduleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSnapshotScheduleOutput =>
    __isa(o, "UpdateSnapshotScheduleOutput");
}

export interface UpdateVTLDeviceTypeInput {
  __type?: "UpdateVTLDeviceTypeInput";
  /**
   * <p>The type of medium changer you want to select.</p>
   *          <p> Valid Values: "STK-L700", "AWS-Gateway-VTL"</p>
   */
  DeviceType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the medium changer you want to select.</p>
   */
  VTLDeviceARN: string | undefined;
}

export namespace UpdateVTLDeviceTypeInput {
  export const filterSensitiveLog = (obj: UpdateVTLDeviceTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVTLDeviceTypeInput =>
    __isa(o, "UpdateVTLDeviceTypeInput");
}

/**
 * <p>UpdateVTLDeviceTypeOutput</p>
 */
export interface UpdateVTLDeviceTypeOutput {
  __type?: "UpdateVTLDeviceTypeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the medium changer you have selected.</p>
   */
  VTLDeviceARN?: string;
}

export namespace UpdateVTLDeviceTypeOutput {
  export const filterSensitiveLog = (obj: UpdateVTLDeviceTypeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateVTLDeviceTypeOutput =>
    __isa(o, "UpdateVTLDeviceTypeOutput");
}

/**
 * <p>Describes a storage volume object.</p>
 */
export interface VolumeInfo {
  __type?: "VolumeInfo";
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a>
   *          operation to return a list of gateways for your account and AWS Region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes
   *          part of the gateway Amazon Resource Name (ARN), which you use as input for other
   *          operations.</p>
   *          <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
   *          (-).</p>
   */
  GatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the storage volume. For example, the following is
   *          a valid ARN:</p>
   *          <p>
   *             <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB</code>
   *          </p>
   *          <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
   *          (-).</p>
   */
  VolumeARN?: string;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume. </p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * <p>The unique identifier assigned to the volume. This ID becomes part of the volume
   *          Amazon Resource Name (ARN), which you use as input for other operations.</p>
   *          <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
   *          (-).</p>
   */
  VolumeId?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   *          <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
   *          (-).</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;
}

export namespace VolumeInfo {
  export const filterSensitiveLog = (obj: VolumeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is VolumeInfo => __isa(o, "VolumeInfo");
}

/**
 * <p>Lists iSCSI information about a volume.</p>
 */
export interface VolumeiSCSIAttributes {
  __type?: "VolumeiSCSIAttributes";
  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;

  /**
   * <p>The logical disk number.</p>
   */
  LunNumber?: number;

  /**
   * <p>The network interface identifier.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The port used to communicate with iSCSI targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  TargetARN?: string;
}

export namespace VolumeiSCSIAttributes {
  export const filterSensitiveLog = (obj: VolumeiSCSIAttributes): any => ({
    ...obj
  });
  export const isa = (o: any): o is VolumeiSCSIAttributes =>
    __isa(o, "VolumeiSCSIAttributes");
}

/**
 * <p>Describes a storage volume recovery point object.</p>
 */
export interface VolumeRecoveryPointInfo {
  __type?: "VolumeRecoveryPointInfo";
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The time the recovery point was taken.</p>
   */
  VolumeRecoveryPointTime?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>The size of the data stored on the volume in bytes.</p>
   *          <note>
   *             <p>This value is not available for volumes created prior to May 13, 2015, until you
   *             store data on the volume.</p>
   *          </note>
   */
  VolumeUsageInBytes?: number;
}

export namespace VolumeRecoveryPointInfo {
  export const filterSensitiveLog = (obj: VolumeRecoveryPointInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is VolumeRecoveryPointInfo =>
    __isa(o, "VolumeRecoveryPointInfo");
}

/**
 * <p>Represents a device object associated with a tape gateway.</p>
 */
export interface VTLDevice {
  __type?: "VTLDevice";
  /**
   * <p>A list of iSCSI information about a VTL device.</p>
   */
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes;

  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media
   *          changer).</p>
   */
  VTLDeviceARN?: string;

  /**
   * <p>Specifies the model number of device that the VTL device emulates.</p>
   */
  VTLDeviceProductIdentifier?: string;

  /**
   * <p>Specifies the type of device that the VTL device emulates.</p>
   */
  VTLDeviceType?: string;

  /**
   * <p>Specifies the vendor of the device that the VTL device object emulates.</p>
   */
  VTLDeviceVendor?: string;
}

export namespace VTLDevice {
  export const filterSensitiveLog = (obj: VTLDevice): any => ({
    ...obj
  });
  export const isa = (o: any): o is VTLDevice => __isa(o, "VTLDevice");
}
