import { _UnmarshalledInstanceStateChange } from "./_InstanceStateChange";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopInstancesOutput shape
 */
export interface StopInstancesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: Array<_UnmarshalledInstanceStateChange>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
