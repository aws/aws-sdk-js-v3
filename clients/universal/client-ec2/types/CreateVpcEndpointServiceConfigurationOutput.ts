import { _UnmarshalledServiceConfiguration } from "./_ServiceConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateVpcEndpointServiceConfigurationOutput shape
 */
export interface CreateVpcEndpointServiceConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the service configuration.</p>
   */
  ServiceConfiguration?: _UnmarshalledServiceConfiguration;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
