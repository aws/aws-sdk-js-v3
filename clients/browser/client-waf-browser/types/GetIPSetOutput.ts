import { _UnmarshalledIPSet } from "./_IPSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIPSetOutput shape
 */
export interface GetIPSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>IPSet</a> that you specified in the <code>GetIPSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>IPSet</a>: Contains <code>IPSetDescriptors</code>, <code>IPSetId</code>, and <code>Name</code> </p> </li> <li> <p> <code>IPSetDescriptors</code>: Contains an array of <a>IPSetDescriptor</a> objects. Each <code>IPSetDescriptor</code> object contains <code>Type</code> and <code>Value</code> </p> </li> </ul>
   */
  IPSet?: _UnmarshalledIPSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
