import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DiscoverPollEndpointOutput shape
 */
export interface DiscoverPollEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The endpoint for the Amazon ECS agent to poll.</p>
   */
  endpoint?: string;

  /**
   * <p>The telemetry endpoint for the Amazon ECS agent.</p>
   */
  telemetryEndpoint?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
