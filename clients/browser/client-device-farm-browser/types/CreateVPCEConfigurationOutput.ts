import { _UnmarshalledVPCEConfiguration } from "./_VPCEConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateVPCEConfigurationOutput shape
 */
export interface CreateVPCEConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about your VPC endpoint configuration.</p>
   */
  vpceConfiguration?: _UnmarshalledVPCEConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
