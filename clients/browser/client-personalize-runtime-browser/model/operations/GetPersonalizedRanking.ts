import { GetPersonalizedRankingInput } from "../shapes/GetPersonalizedRankingInput";
import { GetPersonalizedRankingOutput } from "../shapes/GetPersonalizedRankingOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPersonalizedRanking: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPersonalizedRanking",
  http: {
    method: "POST",
    requestUri: "/personalize-ranking"
  },
  input: {
    shape: GetPersonalizedRankingInput
  },
  output: {
    shape: GetPersonalizedRankingOutput
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
