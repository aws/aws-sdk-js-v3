import { DescribeComponentConfigurationInput } from "../shapes/DescribeComponentConfigurationInput";
import { DescribeComponentConfigurationOutput } from "../shapes/DescribeComponentConfigurationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeComponentConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComponentConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeComponentConfigurationInput
  },
  output: {
    shape: DescribeComponentConfigurationOutput
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
