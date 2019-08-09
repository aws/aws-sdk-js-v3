import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCloudFormationChangeSetOutput shape
 */
export interface CreateCloudFormationChangeSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the change set.</p><p>Length constraints: Minimum length of 1.</p><p>Pattern: ARN:[-a-zA-Z0-9:/]*</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
