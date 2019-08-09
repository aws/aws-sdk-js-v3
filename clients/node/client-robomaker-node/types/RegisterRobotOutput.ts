import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterRobotOutput shape
 */
export interface RegisterRobotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet that the robot will join.</p>
   */
  fleet?: string;

  /**
   * <p>Information about the robot registration.</p>
   */
  robot?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
