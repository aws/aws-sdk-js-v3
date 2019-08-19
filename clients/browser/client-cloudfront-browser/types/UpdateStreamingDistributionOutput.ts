import { _UnmarshalledStreamingDistribution } from "./_StreamingDistribution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateStreamingDistributionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: _UnmarshalledStreamingDistribution;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
