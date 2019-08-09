import { _UnmarshalledTemplateParameter } from "./_TemplateParameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>TemplateParameter</code> structures.</p>
   */
  Parameters?: Array<_UnmarshalledTemplateParameter>;

  /**
   * <p>The description found within the template.</p>
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
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
