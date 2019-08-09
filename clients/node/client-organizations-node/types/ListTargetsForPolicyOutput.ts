import { _UnmarshalledPolicyTargetSummary } from "./_PolicyTargetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTargetsForPolicyOutput shape
 */
export interface ListTargetsForPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of structures, each of which contains details about one of the entities to which the specified policy is attached.</p>
   */
  Targets?: Array<_UnmarshalledPolicyTargetSummary>;

  /**
   * <p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
