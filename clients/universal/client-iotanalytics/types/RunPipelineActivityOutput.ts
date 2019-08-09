import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RunPipelineActivityOutput shape
 */
export interface RunPipelineActivityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The enriched or transformed sample message payloads as base64-encoded strings. (The results of running the pipeline activity on each input sample message payload, encoded in base64.)</p>
   */
  payloads?: Array<Uint8Array>;

  /**
   * <p>In case the pipeline activity fails, the log message that is generated.</p>
   */
  logResult?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
