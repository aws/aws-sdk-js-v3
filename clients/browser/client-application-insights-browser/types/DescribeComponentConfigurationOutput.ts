import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeComponentConfigurationOutput shape
 */
export interface DescribeComponentConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB_TIER</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code> </p>
   */
  Tier?: string;

  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the configuration.</p>
   */
  ComponentConfiguration?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
