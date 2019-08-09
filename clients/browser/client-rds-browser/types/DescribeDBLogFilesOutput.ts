import { _UnmarshalledDescribeDBLogFilesDetails } from "./_DescribeDBLogFilesDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The response from a call to <code>DescribeDBLogFiles</code>. </p>
 */
export interface DescribeDBLogFilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The DB log files returned.</p>
   */
  DescribeDBLogFiles?: Array<_UnmarshalledDescribeDBLogFilesDetails>;

  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBLogFiles request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
