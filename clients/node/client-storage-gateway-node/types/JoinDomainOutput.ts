import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>JoinDomainOutput</p>
 */
export interface JoinDomainOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique Amazon Resource Name (ARN) of the gateway that joined the domain.</p>
   */
  GatewayARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
