import { _UnmarshalledByteMatchSet } from "./_ByteMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateByteMatchSetOutput shape
 */
export interface CreateByteMatchSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>ByteMatchSet</a> that contains no <code>ByteMatchTuple</code> objects.</p>
   */
  ByteMatchSet?: _UnmarshalledByteMatchSet;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateByteMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
