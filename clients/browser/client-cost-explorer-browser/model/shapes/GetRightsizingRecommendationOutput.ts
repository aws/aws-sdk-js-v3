import { _RightsizingRecommendationMetadata } from "./_RightsizingRecommendationMetadata";
import { _RightsizingRecommendationSummary } from "./_RightsizingRecommendationSummary";
import { _RightsizingRecommendationList } from "./_RightsizingRecommendationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRightsizingRecommendationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _RightsizingRecommendationMetadata
    },
    Summary: {
      shape: _RightsizingRecommendationSummary
    },
    RightsizingRecommendations: {
      shape: _RightsizingRecommendationList
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
