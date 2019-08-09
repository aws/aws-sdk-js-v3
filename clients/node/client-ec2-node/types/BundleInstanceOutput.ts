import { _UnmarshalledBundleTask } from "./_BundleTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of BundleInstance.</p>
 */
export interface BundleInstanceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: _UnmarshalledBundleTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
