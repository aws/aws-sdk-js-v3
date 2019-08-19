import { GetRightsizingRecommendationInput } from "../shapes/GetRightsizingRecommendationInput";
import { GetRightsizingRecommendationOutput } from "../shapes/GetRightsizingRecommendationOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
