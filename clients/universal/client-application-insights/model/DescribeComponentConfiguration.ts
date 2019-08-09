import { DescribeComponentConfigurationInput } from "./DescribeComponentConfigurationInput";
import { DescribeComponentConfigurationOutput } from "./DescribeComponentConfigurationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
