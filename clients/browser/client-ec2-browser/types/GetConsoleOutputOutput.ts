import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConsoleOutputOutput shape
 */
export interface GetConsoleOutputOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool decodes the output for you.</p>
   */
  Output?: string;

  /**
   * <p>The time at which the output was last updated.</p>
   */
  Timestamp?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
