import { _UnmarshalledXssMatchSet } from "./_XssMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a <a>GetXssMatchSet</a> request.</p>
 */
export interface GetXssMatchSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>XssMatchSet</a> that you specified in the <code>GetXssMatchSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>XssMatchSet</a>: Contains <code>Name</code>, <code>XssMatchSetId</code>, and an array of <code>XssMatchTuple</code> objects</p> </li> <li> <p> <a>XssMatchTuple</a>: Each <code>XssMatchTuple</code> object contains <code>FieldToMatch</code> and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>
   */
  XssMatchSet?: _UnmarshalledXssMatchSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
