import { DescribeCommandsInput } from "../shapes/DescribeCommandsInput";
import { DescribeCommandsOutput } from "../shapes/DescribeCommandsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCommands: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCommands",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCommandsInput
  },
  output: {
    shape: DescribeCommandsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
