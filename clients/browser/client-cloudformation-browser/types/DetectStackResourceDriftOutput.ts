import { _UnmarshalledStackResourceDrift } from "./_StackResourceDrift";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectStackResourceDriftOutput shape
 */
export interface DetectStackResourceDriftOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about whether the resource's actual configuration has drifted from its expected template configuration, including actual and expected property values and any differences detected.</p>
   */
  StackResourceDrift: _UnmarshalledStackResourceDrift;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
