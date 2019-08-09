import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSecurityConfigurationOutput shape
 */
export interface DescribeSecurityConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The security configuration details in JSON format.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The date and time the security configuration was created</p>
   */
  CreationDateTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
