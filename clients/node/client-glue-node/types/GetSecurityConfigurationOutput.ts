import { _UnmarshalledSecurityConfiguration } from "./_SecurityConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSecurityConfigurationOutput shape
 */
export interface GetSecurityConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested security configuration.</p>
   */
  SecurityConfiguration?: _UnmarshalledSecurityConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
