import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a DeleteGitHubAccountToken operation.</p>
 */
export interface DeleteGitHubAccountTokenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the GitHub account connection that was deleted.</p>
   */
  tokenName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
