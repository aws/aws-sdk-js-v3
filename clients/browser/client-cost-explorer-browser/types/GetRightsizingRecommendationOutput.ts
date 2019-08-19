import { _UnmarshalledRightsizingRecommendationMetadata } from "./_RightsizingRecommendationMetadata";
import { _UnmarshalledRightsizingRecommendationSummary } from "./_RightsizingRecommendationSummary";
import { _UnmarshalledRightsizingRecommendation } from "./_RightsizingRecommendation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRightsizingRecommendationOutput shape
 */
export interface GetRightsizingRecommendationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information regarding this specific recommendation set.</p>
   */
  Metadata?: _UnmarshalledRightsizingRecommendationMetadata;

  /**
   * <p>Summary of this recommendation set.</p>
   */
  Summary?: _UnmarshalledRightsizingRecommendationSummary;

  /**
   * <p>Recommendations to rightsize resources.</p>
   */
  RightsizingRecommendations?: Array<_UnmarshalledRightsizingRecommendation>;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
