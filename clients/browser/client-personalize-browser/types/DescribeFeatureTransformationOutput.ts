import { _UnmarshalledFeatureTransformation } from "./_FeatureTransformation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFeatureTransformationOutput shape
 */
export interface DescribeFeatureTransformationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A listing of the FeatureTransformation properties.</p>
   */
  featureTransformation?: _UnmarshalledFeatureTransformation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
