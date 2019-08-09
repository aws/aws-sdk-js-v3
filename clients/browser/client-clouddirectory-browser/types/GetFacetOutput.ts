import { _UnmarshalledFacet } from "./_Facet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFacetOutput shape
 */
export interface GetFacetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <a>Facet</a> structure that is associated with the facet.</p>
   */
  Facet?: _UnmarshalledFacet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
