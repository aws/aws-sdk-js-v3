import { _UnmarshalledDisk } from "./_Disk";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDisksOutput shape
 */
export interface GetDisksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects containing information about all block storage disks.</p>
   */
  disks?: Array<_UnmarshalledDisk>;

  /**
   * <p>A token used for advancing to the next page of results from your GetDisks request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
