import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCachediSCSIVolumeOutput shape
 */
export interface CreateCachediSCSIVolumeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.</p>
   */
  TargetARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
