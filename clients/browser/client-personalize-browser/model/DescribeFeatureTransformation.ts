import { DescribeFeatureTransformationInput } from "./DescribeFeatureTransformationInput";
import { DescribeFeatureTransformationOutput } from "./DescribeFeatureTransformationOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
