import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSecurityConfigurationOutput shape
 */
export interface CreateSecurityConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name assigned to the new security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The time at which the new security configuration was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
