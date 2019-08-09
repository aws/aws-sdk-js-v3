import { _UnmarshalledRegexPatternSet } from "./_RegexPatternSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRegexPatternSetOutput shape
 */
export interface CreateRegexPatternSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>RegexPatternSet</a> that contains no objects.</p>
   */
  RegexPatternSet?: _UnmarshalledRegexPatternSet;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateRegexPatternSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
