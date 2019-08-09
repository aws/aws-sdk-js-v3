import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the ARN of the gateway that was updated.</p>
 */
export interface UpdateGatewayInformationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The name you configured for your gateway.</p>
   */
  GatewayName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
