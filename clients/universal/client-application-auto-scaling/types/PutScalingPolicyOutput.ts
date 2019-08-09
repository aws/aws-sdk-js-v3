import { _UnmarshalledAlarm } from "./_Alarm";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutScalingPolicyOutput shape
 */
export interface PutScalingPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the resulting scaling policy.</p>
   */
  PolicyARN: string;

  /**
   * <p>The CloudWatch alarms created for the target tracking scaling policy.</p>
   */
  Alarms?: Array<_UnmarshalledAlarm>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
