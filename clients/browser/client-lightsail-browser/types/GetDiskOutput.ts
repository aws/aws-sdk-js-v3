import { _UnmarshalledDisk } from "./_Disk";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDiskOutput shape
 */
export interface GetDiskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the disk.</p>
   */
  disk?: _UnmarshalledDisk;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
