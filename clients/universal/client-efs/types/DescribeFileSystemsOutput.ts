import { _UnmarshalledFileSystemDescription } from "./_FileSystemDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFileSystemsOutput shape
 */
export interface DescribeFileSystemsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Present if provided by caller in the request (String).</p>
   */
  Marker?: string;

  /**
   * <p>An array of file system descriptions.</p>
   */
  FileSystems?: Array<_UnmarshalledFileSystemDescription>;

  /**
   * <p>Present if there are more file systems than returned in the response (String). You can use the <code>NextMarker</code> in the subsequent request to fetch the descriptions.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
