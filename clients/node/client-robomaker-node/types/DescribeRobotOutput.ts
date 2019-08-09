import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRobotOutput shape
 */
export interface DescribeRobotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The status of the fleet.</p>
   */
  status?:
    | "Available"
    | "Registered"
    | "PendingNewDeployment"
    | "Deploying"
    | "Failed"
    | "InSync"
    | "NoResponse"
    | string;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The target architecture of the robot application.</p>
   */
  architecture?: "X86_64" | "ARM64" | "ARMHF" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment job.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The list of all tags added to the specified robot.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
