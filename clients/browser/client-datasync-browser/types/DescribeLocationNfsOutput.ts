import { _UnmarshalledOnPremConfig } from "./_OnPremConfig";
import { _UnmarshalledNfsMountOptions } from "./_NfsMountOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeLocationNfsResponse</p>
 */
export interface DescribeLocationNfsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon resource Name (ARN) of the NFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the source NFS location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.</p>
   */
  OnPremConfig?: _UnmarshalledOnPremConfig;

  /**
   * <p>The NFS mount options that DataSync used to mount your NFS share.</p>
   */
  MountOptions?: _UnmarshalledNfsMountOptions;

  /**
   * <p>The time that the NFS location was created.</p>
   */
  CreationTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
