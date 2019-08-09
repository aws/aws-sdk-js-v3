import { _UnmarshalledScalableTarget } from "./_ScalableTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalableTargetsOutput shape
 */
export interface DescribeScalableTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The scalable targets that match the request parameters.</p>
   */
  ScalableTargets?: Array<_UnmarshalledScalableTarget>;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
