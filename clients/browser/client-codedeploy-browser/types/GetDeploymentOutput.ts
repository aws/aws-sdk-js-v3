import { _UnmarshalledDeploymentInfo } from "./_DeploymentInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a GetDeployment operation.</p>
 */
export interface GetDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the deployment.</p>
   */
  deploymentInfo?: _UnmarshalledDeploymentInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
