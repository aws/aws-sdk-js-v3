import { DescribeImagesInput } from "../shapes/DescribeImagesInput";
import { DescribeImagesOutput } from "../shapes/DescribeImagesOutput";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImagesInput
  },
  output: {
    shape: DescribeImagesOutput
  },
  errors: [
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
