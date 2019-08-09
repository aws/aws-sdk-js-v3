import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes volume attachment details.</p>
 */
export interface AttachVolumeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The attachment state of the volume.</p>
   */
  State?: "attaching" | "attached" | "detaching" | "detached" | "busy" | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
