import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRuleNamesByTargetOutput shape
 */
export interface ListRuleNamesByTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the rules that can invoke the given target.</p>
   */
  RuleNames?: Array<string>;

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
