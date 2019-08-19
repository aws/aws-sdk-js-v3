import { _UnmarshalledDocumentationPart } from "./_DocumentationPart";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
 */
export interface GetDocumentationPartsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Array<_UnmarshalledDocumentationPart>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
