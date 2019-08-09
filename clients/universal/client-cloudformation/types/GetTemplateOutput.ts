import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Structure containing the template body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>AWS CloudFormation returns the same template that was used when the stack was created.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The stage of the template that you can retrieve. For stacks, the <code>Original</code> and <code>Processed</code> templates are always available. For change sets, the <code>Original</code> template is always available. After AWS CloudFormation finishes creating the change set, the <code>Processed</code> template becomes available.</p>
   */
  StagesAvailable?: Array<"Original" | "Processed" | string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
