import { _UnmarshalledLifecycleHook } from "./_LifecycleHook";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLifecycleHooksOutput shape
 */
export interface DescribeLifecycleHooksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The lifecycle hooks for the specified group.</p>
   */
  LifecycleHooks?: Array<_UnmarshalledLifecycleHook>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
