/**
 * <p>Describes a storage volume object.</p>
 */
export interface _VolumeInfo {
  /**
   * <p>The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN:</p> <p> <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB</code> </p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeARN?: string;

  /**
   * <p>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN), which you use as input for other operations.</p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  GatewayId?: string;

  /**
   * <p>One of the VolumeType enumeration values describing the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * <p>The size of the volume in bytes.</p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume. </p>
   */
  VolumeAttachmentStatus?: string;
}

export type _UnmarshalledVolumeInfo = _VolumeInfo;
