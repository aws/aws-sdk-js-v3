import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface UpdateConfigOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>ARN of a <code>Config</code>.</p>
   */
  configArn?: string;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?:
    | "antenna-downlink"
    | "antenna-downlink-demod-decode"
    | "antenna-uplink"
    | "dataflow-endpoint"
    | "tracking"
    | "uplink-echo"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
