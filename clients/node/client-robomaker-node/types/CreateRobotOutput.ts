import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRobotOutput shape
 */
export interface CreateRobotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture?: "X86_64" | "ARM64" | "ARMHF" | string;

  /**
   * <p>The list of all tags added to the robot.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
