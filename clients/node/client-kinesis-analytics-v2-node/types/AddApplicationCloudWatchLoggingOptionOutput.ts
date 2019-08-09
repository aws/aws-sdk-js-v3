import { _UnmarshalledCloudWatchLoggingOptionDescription } from "./_CloudWatchLoggingOptionDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationCloudWatchLoggingOptionOutput shape
 */
export interface AddApplicationCloudWatchLoggingOptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application's ARN.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The new version ID of the Kinesis Data Analytics application. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging options. </p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the current CloudWatch logging options for the Kinesis Data Analytics application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: Array<
    _UnmarshalledCloudWatchLoggingOptionDescription
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
