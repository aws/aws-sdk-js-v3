import { _UnmarshalledSqlInjectionMatchSet } from "./_SqlInjectionMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a <code>CreateSqlInjectionMatchSet</code> request.</p>
 */
export interface CreateSqlInjectionMatchSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>SqlInjectionMatchSet</a>.</p>
   */
  SqlInjectionMatchSet?: _UnmarshalledSqlInjectionMatchSet;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateSqlInjectionMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
