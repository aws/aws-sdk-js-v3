import { _UnmarshalledApp } from "./_App";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeApps</code> request.</p>
 */
export interface DescribeAppsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>App</code> objects that describe the specified apps. </p>
   */
  Apps?: Array<_UnmarshalledApp>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
