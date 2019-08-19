import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTypedLinkFacetNamesOutput shape
 */
export interface ListTypedLinkFacetNamesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of typed link facets that exist within the schema.</p>
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
