import { _UnmarshalledSizeConstraintSet } from "./_SizeConstraintSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSizeConstraintSetOutput shape
 */
export interface CreateSizeConstraintSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>SizeConstraintSet</a> that contains no <code>SizeConstraint</code> objects.</p>
   */
  SizeConstraintSet?: _UnmarshalledSizeConstraintSet;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateSizeConstraintSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
