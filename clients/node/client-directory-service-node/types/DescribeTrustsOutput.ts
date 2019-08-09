import { _UnmarshalledTrust } from "./_Trust";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a DescribeTrust request.</p>
 */
export interface DescribeTrustsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of Trust objects that were retrieved.</p> <p>It is possible that this list contains less than the number of items specified in the <i>Limit</i> member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.</p>
   */
  Trusts?: Array<_UnmarshalledTrust>;

  /**
   * <p>If not null, more results are available. Pass this value for the <i>NextToken</i> parameter in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
