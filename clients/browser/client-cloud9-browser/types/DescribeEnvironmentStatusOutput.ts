import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEnvironmentStatusOutput shape
 */
export interface DescribeEnvironmentStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the environment. Available values include:</p> <ul> <li> <p> <code>connecting</code>: The environment is connecting.</p> </li> <li> <p> <code>creating</code>: The environment is being created.</p> </li> <li> <p> <code>deleting</code>: The environment is being deleted.</p> </li> <li> <p> <code>error</code>: The environment is in an error state.</p> </li> <li> <p> <code>ready</code>: The environment is ready.</p> </li> <li> <p> <code>stopped</code>: The environment is stopped.</p> </li> <li> <p> <code>stopping</code>: The environment is stopping.</p> </li> </ul>
   */
  status?:
    | "error"
    | "creating"
    | "connecting"
    | "ready"
    | "stopping"
    | "stopped"
    | "deleting"
    | string;

  /**
   * <p>Any informational message about the status of the environment.</p>
   */
  message?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
