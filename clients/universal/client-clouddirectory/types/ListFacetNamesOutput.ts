import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFacetNamesOutput shape
 */
export interface ListFacetNamesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of facets that exist within the schema.</p>
   */
  FacetNames?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
