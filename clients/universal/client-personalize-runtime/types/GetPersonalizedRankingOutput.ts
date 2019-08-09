import { _UnmarshalledPredictedItem } from "./_PredictedItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPersonalizedRankingOutput shape
 */
export interface GetPersonalizedRankingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of items in order of most likely interest to the user.</p>
   */
  personalizedRanking?: Array<_UnmarshalledPredictedItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
