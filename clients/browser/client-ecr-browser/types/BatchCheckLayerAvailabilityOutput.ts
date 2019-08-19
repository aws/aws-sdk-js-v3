import { _UnmarshalledLayer } from "./_Layer";
import { _UnmarshalledLayerFailure } from "./_LayerFailure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchCheckLayerAvailabilityOutput shape
 */
export interface BatchCheckLayerAvailabilityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of image layer objects corresponding to the image layer references in the request.</p>
   */
  layers?: Array<_UnmarshalledLayer>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledLayerFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
