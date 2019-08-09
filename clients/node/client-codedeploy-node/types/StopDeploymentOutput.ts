import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the output of a StopDeployment operation. </p>
 */
export interface StopDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the stop deployment operation:</p> <ul> <li> <p>Pending: The stop operation is pending.</p> </li> <li> <p>Succeeded: The stop operation was successful.</p> </li> </ul>
   */
  status?: "Pending" | "Succeeded" | string;

  /**
   * <p>An accompanying status message.</p>
   */
  statusMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
