import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the output of a CreateDeployment operation. </p>
 */
export interface CreateDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
