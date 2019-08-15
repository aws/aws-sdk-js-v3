import { DescribeComponentConfigurationRecommendationInput } from "../shapes/DescribeComponentConfigurationRecommendationInput";
import { DescribeComponentConfigurationRecommendationOutput } from "../shapes/DescribeComponentConfigurationRecommendationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeComponentConfigurationRecommendation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComponentConfigurationRecommendation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeComponentConfigurationRecommendationInput
  },
  output: {
    shape: DescribeComponentConfigurationRecommendationOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
