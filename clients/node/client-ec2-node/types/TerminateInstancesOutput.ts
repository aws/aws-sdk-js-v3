import { _UnmarshalledInstanceStateChange } from "./_InstanceStateChange";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TerminateInstancesOutput shape
 */
export interface TerminateInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: Array<_UnmarshalledInstanceStateChange>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
