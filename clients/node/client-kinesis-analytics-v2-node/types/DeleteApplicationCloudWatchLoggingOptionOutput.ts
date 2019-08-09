import { _UnmarshalledCloudWatchLoggingOptionDescription } from "./_CloudWatchLoggingOptionDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteApplicationCloudWatchLoggingOptionOutput shape
 */
export interface DeleteApplicationCloudWatchLoggingOptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application's Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The version ID of the application. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging options.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the remaining CloudWatch logging options for the application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: Array<
    _UnmarshalledCloudWatchLoggingOptionDescription
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
