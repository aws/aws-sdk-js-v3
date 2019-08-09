import { _UnmarshalledSqlInjectionMatchSet } from "./_SqlInjectionMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a <a>GetSqlInjectionMatchSet</a> request.</p>
 */
export interface GetSqlInjectionMatchSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>SqlInjectionMatchSet</a> that you specified in the <code>GetSqlInjectionMatchSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>SqlInjectionMatchSet</a>: Contains <code>Name</code>, <code>SqlInjectionMatchSetId</code>, and an array of <code>SqlInjectionMatchTuple</code> objects</p> </li> <li> <p> <a>SqlInjectionMatchTuple</a>: Each <code>SqlInjectionMatchTuple</code> object contains <code>FieldToMatch</code> and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>
   */
  SqlInjectionMatchSet?: _UnmarshalledSqlInjectionMatchSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
