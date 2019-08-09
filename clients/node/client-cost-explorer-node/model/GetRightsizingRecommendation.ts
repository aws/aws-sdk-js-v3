import { GetRightsizingRecommendationInput } from "./GetRightsizingRecommendationInput";
import { GetRightsizingRecommendationOutput } from "./GetRightsizingRecommendationOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRightsizingRecommendation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRightsizingRecommendation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRightsizingRecommendationInput
  },
  output: {
    shape: GetRightsizingRecommendationOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
