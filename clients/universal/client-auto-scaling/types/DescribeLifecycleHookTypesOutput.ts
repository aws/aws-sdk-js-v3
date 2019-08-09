import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLifecycleHookTypesOutput shape
 */
export interface DescribeLifecycleHookTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The lifecycle hook types.</p>
   */
  LifecycleHookTypes?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
