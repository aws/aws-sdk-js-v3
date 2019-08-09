import { _UnmarshalledSource } from "./_Source";
import { _UnmarshalledRobotSoftwareSuite } from "./_RobotSoftwareSuite";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRobotApplicationOutput shape
 */
export interface CreateRobotApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Array<_UnmarshalledSource>;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite?: _UnmarshalledRobotSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The list of all tags added to the robot application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
