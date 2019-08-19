import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectStackDriftOutput shape
 */
export interface DetectStackDriftOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the drift detection results of this operation. </p> <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results AWS CloudFormation retains for any given stack, and for how long, may vary. </p>
   */
  StackDriftDetectionId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
