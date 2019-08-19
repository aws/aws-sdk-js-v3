import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetV2LoggingOptionsOutput shape
 */
export interface GetV2LoggingOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IAM role ARN AWS IoT uses to write to your CloudWatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default log level.</p>
   */
  defaultLogLevel?: "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED" | string;

  /**
   * <p>Disables all logs.</p>
   */
  disableAllLogs?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
