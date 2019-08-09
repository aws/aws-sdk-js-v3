import { _UnmarshalledLoggingConfiguration } from "./_LoggingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLoggingConfigurationOutput shape
 */
export interface GetLoggingConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <a>LoggingConfiguration</a> for the specified web ACL.</p>
   */
  LoggingConfiguration?: _UnmarshalledLoggingConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
