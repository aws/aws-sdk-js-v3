import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSkillGroupOutput shape
 */
export interface CreateSkillGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the newly created skill group in the response.</p>
   */
  SkillGroupArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
