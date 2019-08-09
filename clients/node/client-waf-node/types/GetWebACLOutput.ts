import { _UnmarshalledWebACL } from "./_WebACL";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWebACLOutput shape
 */
export interface GetWebACLOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>WebACL</a> that you specified in the <code>GetWebACL</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>WebACL</a>: Contains <code>DefaultAction</code>, <code>MetricName</code>, <code>Name</code>, an array of <code>Rule</code> objects, and <code>WebACLId</code> </p> </li> <li> <p> <code>DefaultAction</code> (Data type is <a>WafAction</a>): Contains <code>Type</code> </p> </li> <li> <p> <code>Rules</code>: Contains an array of <code>ActivatedRule</code> objects, which contain <code>Action</code>, <code>Priority</code>, and <code>RuleId</code> </p> </li> <li> <p> <code>Action</code>: Contains <code>Type</code> </p> </li> </ul>
   */
  WebACL?: _UnmarshalledWebACL;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
