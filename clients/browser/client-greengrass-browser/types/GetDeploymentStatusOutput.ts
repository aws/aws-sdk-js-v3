import { _UnmarshalledErrorDetail } from "./_ErrorDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDeploymentStatusOutput shape
 */
export interface GetDeploymentStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?:
    | "NewDeployment"
    | "Redeployment"
    | "ResetDeployment"
    | "ForceResetDeployment"
    | string;

  /**
   * Error details
   */
  ErrorDetails?: Array<_UnmarshalledErrorDetail>;

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * The time, in milliseconds since the epoch, when the deployment status was updated.
   */
  UpdatedAt?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
