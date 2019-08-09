import { _UnmarshalledRegexPatternSet } from "./_RegexPatternSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRegexPatternSetOutput shape
 */
export interface GetRegexPatternSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>RegexPatternSet</a> that you specified in the <code>GetRegexPatternSet</code> request, including the identifier of the pattern set and the regular expression patterns you want AWS WAF to search for. </p>
   */
  RegexPatternSet?: _UnmarshalledRegexPatternSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
