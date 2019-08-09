import { _UnmarshalledDetector } from "./_Detector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDetectorOutput shape
 */
export interface DescribeDetectorOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the detector (instance).</p>
   */
  detector?: _UnmarshalledDetector;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
