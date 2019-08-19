import { _UnmarshalledBundleTask } from "./_BundleTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBundleTasksOutput shape
 */
export interface DescribeBundleTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the bundle tasks.</p>
   */
  BundleTasks?: Array<_UnmarshalledBundleTask>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
