import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportClientVpnClientConfigurationOutput shape
 */
export interface ExportClientVpnClientConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   */
  ClientConfiguration?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
