import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a mapping template used to transform a payload.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a> </div>
 */
export interface GetModelTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Apache <a href="https://velocity.apache.org/engine/devel/vtl-reference-guide.html" target="_blank">Velocity Template Language (VTL)</a> template content used for the template resource.</p>
   */
  value?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
