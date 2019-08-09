import { _UnmarshalledSizeConstraintSet } from "./_SizeConstraintSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSizeConstraintSetOutput shape
 */
export interface GetSizeConstraintSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>SizeConstraintSet</a> that you specified in the <code>GetSizeConstraintSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>SizeConstraintSet</a>: Contains <code>SizeConstraintSetId</code>, <code>SizeConstraints</code>, and <code>Name</code> </p> </li> <li> <p> <code>SizeConstraints</code>: Contains an array of <a>SizeConstraint</a> objects. Each <code>SizeConstraint</code> object contains <a>FieldToMatch</a>, <code>TextTransformation</code>, <code>ComparisonOperator</code>, and <code>Size</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>
   */
  SizeConstraintSet?: _UnmarshalledSizeConstraintSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
