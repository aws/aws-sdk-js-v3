import { _UnmarshalledElevation } from "./_Elevation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeContactOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * <p>Status of a contact.</p>
   */
  contactStatus?:
    | "AVAILABLE"
    | "AWS_CANCELLED"
    | "CANCELLED"
    | "COMPLETED"
    | "FAILED"
    | "FAILED_TO_SCHEDULE"
    | "PASS"
    | "POSTPASS"
    | "PREPASS"
    | "SCHEDULED"
    | "SCHEDULING"
    | string;

  /**
   * <p>End time of a contact.</p>
   */
  endTime?: Date;

  /**
   * <p>Error message for a contact.</p>
   */
  errorMessage?: string;

  /**
   * <p>Ground station for a contact.</p>
   */
  groundStation?: string;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: _UnmarshalledElevation;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime?: Date;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
