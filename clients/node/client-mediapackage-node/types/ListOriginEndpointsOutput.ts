import { _UnmarshalledOriginEndpoint } from "./_OriginEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOriginEndpointsOutput shape
 */
export interface ListOriginEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of OriginEndpoint records.
   */
  OriginEndpoints?: Array<_UnmarshalledOriginEndpoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
