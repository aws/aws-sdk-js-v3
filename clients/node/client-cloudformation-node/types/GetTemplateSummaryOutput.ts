import { _UnmarshalledParameterDeclaration } from "./_ParameterDeclaration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of parameter declarations that describe various properties for each parameter.</p>
   */
  Parameters?: Array<_UnmarshalledParameterDeclaration>;

  /**
   * <p>The value that is defined in the <code>Description</code> property of the template.</p>
   */
  Description?: string;

  /**
   * <p>The capabilities found within the template. If your template contains IAM resources, you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with your template; otherwise, those actions return an InsufficientCapabilities error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>
   */
  Capabilities?: Array<
    | "CAPABILITY_IAM"
    | "CAPABILITY_NAMED_IAM"
    | "CAPABILITY_AUTO_EXPAND"
    | string
  >;

  /**
   * <p>The list of resources that generated the values in the <code>Capabilities</code> response element.</p>
   */
  CapabilitiesReason?: string;

  /**
   * <p>A list of all the template resource types that are defined in the template, such as <code>AWS::EC2::Instance</code>, <code>AWS::Dynamo::Table</code>, and <code>Custom::MyCustomInstance</code>.</p>
   */
  ResourceTypes?: Array<string>;

  /**
   * <p>The AWS template format version, which identifies the capabilities of the template.</p>
   */
  Version?: string;

  /**
   * <p>The value that is defined for the <code>Metadata</code> property of the template.</p>
   */
  Metadata?: string;

  /**
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
