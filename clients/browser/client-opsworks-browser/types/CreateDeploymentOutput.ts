import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>CreateDeployment</code> request.</p>
 */
export interface CreateDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The deployment ID, which can be used with other requests to identify the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
