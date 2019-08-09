import { DescribeCommandsInput } from "./DescribeCommandsInput";
import { DescribeCommandsOutput } from "./DescribeCommandsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
