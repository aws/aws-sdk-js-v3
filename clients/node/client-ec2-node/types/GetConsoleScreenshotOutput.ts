import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConsoleScreenshotOutput shape
 */
export interface GetConsoleScreenshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The data that comprises the image.</p>
   */
  ImageData?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
