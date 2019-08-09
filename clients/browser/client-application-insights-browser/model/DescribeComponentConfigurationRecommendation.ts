import { DescribeComponentConfigurationRecommendationInput } from "./DescribeComponentConfigurationRecommendationInput";
import { DescribeComponentConfigurationRecommendationOutput } from "./DescribeComponentConfigurationRecommendationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
