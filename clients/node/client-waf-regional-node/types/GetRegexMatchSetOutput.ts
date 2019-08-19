import { _UnmarshalledRegexMatchSet } from "./_RegexMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRegexMatchSetOutput shape
 */
export interface GetRegexMatchSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>RegexMatchSet</a> that you specified in the <code>GetRegexMatchSet</code> request. For more information, see <a>RegexMatchTuple</a>.</p>
   */
  RegexMatchSet?: _UnmarshalledRegexMatchSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
