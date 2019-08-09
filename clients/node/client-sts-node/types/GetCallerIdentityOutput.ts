import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.</p>
 */
export interface GetCallerIdentityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier of the calling entity. The exact value depends on the type of entity that is making the call. The values returned are those listed in the <b>aws:userid</b> column in the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html#principaltable">Principal table</a> found on the <b>Policy Variables</b> reference page in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;

  /**
   * <p>The AWS account ID number of the account that owns or contains the calling entity.</p>
   */
  Account?: string;

  /**
   * <p>The AWS ARN associated with the calling entity.</p>
   */
  Arn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
