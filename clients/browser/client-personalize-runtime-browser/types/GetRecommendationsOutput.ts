import { _UnmarshalledPredictedItem } from "./_PredictedItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRecommendationsOutput shape
 */
export interface GetRecommendationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of recommendations.</p>
   */
  itemList?: Array<_UnmarshalledPredictedItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
