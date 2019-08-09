import { _UnmarshalledConfigurationRecorderStatus } from "./_ConfigurationRecorderStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.</p>
 */
export interface DescribeConfigurationRecorderStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains status of the specified recorders.</p>
   */
  ConfigurationRecordersStatus?: Array<
    _UnmarshalledConfigurationRecorderStatus
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
