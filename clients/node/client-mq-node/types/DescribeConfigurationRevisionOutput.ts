import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationRevisionOutput shape
 */
export interface DescribeConfigurationRevisionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * Required. The base64-encoded XML configuration.
   */
  Data?: string;

  /**
   * The description of the configuration.
   */
  Description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
