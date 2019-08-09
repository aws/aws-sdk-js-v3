import { _UnmarshalledResource } from "./_Resource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourcesOutput shape
 */
export interface ListResourcesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One page of the organization's resource representation.</p>
   */
  Resources?: Array<_UnmarshalledResource>;

  /**
   * <p> The token used to paginate through all the organization's resources. While results are still available, it has an associated value. When the last page is reached, the token is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
