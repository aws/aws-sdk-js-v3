import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn?: string;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
