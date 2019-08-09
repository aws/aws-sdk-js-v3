import { _UnmarshalledRobot } from "./_Robot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetOutput shape
 */
export interface DescribeFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>A list of robots.</p>
   */
  robots?: Array<_UnmarshalledRobot>;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The status of the last deployment.</p>
   */
  lastDeploymentStatus?:
    | "Pending"
    | "Preparing"
    | "InProgress"
    | "Failed"
    | "Succeeded"
    | "Canceled"
    | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The list of all tags added to the specified fleet.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
