import { _UnmarshalledActivation } from "./_Activation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeActivationsOutput shape
 */
export interface DescribeActivationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of activations for your AWS account.</p>
   */
  ActivationList?: Array<_UnmarshalledActivation>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
