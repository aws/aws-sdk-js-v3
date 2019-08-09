import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterRobotOutput shape
 */
export interface DeregisterRobotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
