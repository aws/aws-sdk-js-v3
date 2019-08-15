import { DescribeBackupsInput } from "../shapes/DescribeBackupsInput";
import { DescribeBackupsOutput } from "../shapes/DescribeBackupsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBackupsInput
  },
  output: {
    shape: DescribeBackupsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
