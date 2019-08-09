import { _UnmarshalledTypedLinkAttributeDefinition } from "./_TypedLinkAttributeDefinition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTypedLinkFacetAttributesOutput shape
 */
export interface ListTypedLinkFacetAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An ordered set of attributes associate with the typed link.</p>
   */
  Attributes?: Array<_UnmarshalledTypedLinkAttributeDefinition>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
