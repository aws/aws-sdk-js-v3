import { _UnmarshalledSchemaFacet } from "./_SchemaFacet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectInformationOutput shape
 */
export interface GetObjectInformationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.</p>
   */
  SchemaFacets?: Array<_UnmarshalledSchemaFacet>;

  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
