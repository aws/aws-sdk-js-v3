import { _UnmarshalledTarget } from "./_Target";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTargetsByRuleOutput shape
 */
export interface ListTargetsByRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The targets assigned to the rule.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
