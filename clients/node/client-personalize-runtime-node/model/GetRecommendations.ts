import { GetRecommendationsInput } from "./GetRecommendationsInput";
import { GetRecommendationsOutput } from "./GetRecommendationsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRecommendations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRecommendations",
  http: {
    method: "POST",
    requestUri: "/recommendations"
  },
  input: {
    shape: GetRecommendationsInput
  },
  output: {
    shape: GetRecommendationsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
