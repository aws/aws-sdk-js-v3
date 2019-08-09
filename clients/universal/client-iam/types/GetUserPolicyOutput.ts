import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetUserPolicy</a> request. </p>
 */
export interface GetUserPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user the policy is associated with.</p>
   */
  UserName: string;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string;

  /**
   * <p>The policy document.</p> <p>IAM stores policies in JSON format. However, resources that were created using AWS CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
