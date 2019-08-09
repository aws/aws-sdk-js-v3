import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A snapshot of the documentation of an API.</p> <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., OpenAPI) file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a> </div>
 */
export interface CreateDocumentationVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The version identifier of the API documentation snapshot.</p>
   */
  version?: string;

  /**
   * <p>The date when the API documentation snapshot is created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The description of the API documentation snapshot.</p>
   */
  description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
