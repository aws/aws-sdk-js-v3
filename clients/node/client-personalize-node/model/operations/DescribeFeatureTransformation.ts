import { DescribeFeatureTransformationInput } from "../shapes/DescribeFeatureTransformationInput";
import { DescribeFeatureTransformationOutput } from "../shapes/DescribeFeatureTransformationOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFeatureTransformation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFeatureTransformation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFeatureTransformationInput
  },
  output: {
    shape: DescribeFeatureTransformationOutput
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
