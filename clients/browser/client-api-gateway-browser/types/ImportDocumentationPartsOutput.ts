import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A collection of the imported <a>DocumentationPart</a> identifiers.</p> <div class="remarks">This is used to return the result when documentation parts in an external (e.g., OpenAPI) file are imported into API Gateway</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a href="https://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/">documentationpart:import</a>, <a>DocumentationPart</a> </div>
 */
export interface ImportDocumentationPartsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the returned documentation part identifiers.</p>
   */
  ids?: Array<string>;

  /**
   * <p>A list of warning messages reported during import of documentation parts.</p>
   */
  warnings?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
