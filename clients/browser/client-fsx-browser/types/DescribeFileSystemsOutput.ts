import { _UnmarshalledFileSystem } from "./_FileSystem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of file system descriptions.</p>
   */
  FileSystems?: Array<_UnmarshalledFileSystem>;

  /**
   * <p>Present if there are more file systems than returned in the response (String). You can use the <code>NextToken</code> value in the later request to fetch the descriptions. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
