import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Structure containing the stack policy body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the AWS CloudFormation User Guide.)</p>
   */
  StackPolicyBody?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
