import { _UnmarshalledTelemetryMetadata } from "./_TelemetryMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTelemetryMetadataOutput shape
 */
export interface GetTelemetryMetadataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Telemetry details.</p>
   */
  telemetryMetadata: Array<_UnmarshalledTelemetryMetadata>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
