import { _UnmarshalledByteMatchSet } from "./_ByteMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetByteMatchSetOutput shape
 */
export interface GetByteMatchSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>ByteMatchSet</a> that you specified in the <code>GetByteMatchSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>ByteMatchSet</a>: Contains <code>ByteMatchSetId</code>, <code>ByteMatchTuples</code>, and <code>Name</code> </p> </li> <li> <p> <code>ByteMatchTuples</code>: Contains an array of <a>ByteMatchTuple</a> objects. Each <code>ByteMatchTuple</code> object contains <a>FieldToMatch</a>, <code>PositionalConstraint</code>, <code>TargetString</code>, and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>
   */
  ByteMatchSet?: _UnmarshalledByteMatchSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
