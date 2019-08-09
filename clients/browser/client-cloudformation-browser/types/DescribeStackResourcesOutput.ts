import { _UnmarshalledStackResource } from "./_StackResource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for a <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackResource</code> structures.</p>
   */
  StackResources?: Array<_UnmarshalledStackResource>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
