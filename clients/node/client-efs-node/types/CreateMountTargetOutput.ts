import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Provides a description of a mount target.</p>
 */
export interface CreateMountTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>AWS account ID that owns the resource.</p>
   */
  OwnerId?: string;

  /**
   * <p>System-assigned mount target ID.</p>
   */
  MountTargetId: string;

  /**
   * <p>The ID of the file system for which the mount target is intended.</p>
   */
  FileSystemId: string;

  /**
   * <p>The ID of the mount target's subnet.</p>
   */
  SubnetId: string;

  /**
   * <p>Lifecycle state of the mount target.</p>
   */
  LifeCycleState:
    | "creating"
    | "available"
    | "updating"
    | "deleting"
    | "deleted"
    | string;

  /**
   * <p>Address at which the file system can be mounted by using the mount target.</p>
   */
  IpAddress?: string;

  /**
   * <p>The ID of the network interface that Amazon EFS created when it created the mount target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
