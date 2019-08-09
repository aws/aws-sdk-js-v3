import { _UnmarshalledActionTarget } from "./_ActionTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeActionTargetsOutput shape
 */
export interface DescribeActionTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>, <code>Description</code>, and <code>Name</code> of a custom action target available in Security Hub.</p>
   */
  ActionTargets: Array<_UnmarshalledActionTarget>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
