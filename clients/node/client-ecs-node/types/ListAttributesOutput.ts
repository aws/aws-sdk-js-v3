import { _UnmarshalledAttribute } from "./_Attribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAttributesOutput shape
 */
export interface ListAttributesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of attribute objects that meet the criteria of the request.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListAttributes</code> request. When the results of a <code>ListAttributes</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
