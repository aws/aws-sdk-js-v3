import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestRenderTemplateOutput shape
 */
export interface TestRenderTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.</p>
   */
  RenderedTemplate?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
