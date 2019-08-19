import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DisableGatewayOutput</p>
 */
export interface DisableGatewayOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the disabled gateway.</p>
   */
  GatewayARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
