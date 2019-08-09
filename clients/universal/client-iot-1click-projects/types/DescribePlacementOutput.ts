import { _UnmarshalledPlacementDescription } from "./_PlacementDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePlacementOutput shape
 */
export interface DescribePlacementOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the placement.</p>
   */
  placement: _UnmarshalledPlacementDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
