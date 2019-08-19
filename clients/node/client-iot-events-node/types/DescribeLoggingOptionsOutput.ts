import { _UnmarshalledLoggingOptions } from "./_LoggingOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLoggingOptionsOutput shape
 */
export interface DescribeLoggingOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current settings of the AWS IoT Events logging options.</p>
   */
  loggingOptions?: _UnmarshalledLoggingOptions;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
