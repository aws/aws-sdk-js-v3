import { _UnmarshalledConfigurationRecorder } from "./_ConfigurationRecorder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DescribeConfigurationRecorders</a> action.</p>
 */
export interface DescribeConfigurationRecordersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the descriptions of the specified configuration recorders.</p>
   */
  ConfigurationRecorders?: Array<_UnmarshalledConfigurationRecorder>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
