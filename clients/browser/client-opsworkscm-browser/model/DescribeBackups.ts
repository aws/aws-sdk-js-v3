import { DescribeBackupsInput } from "./DescribeBackupsInput";
import { DescribeBackupsOutput } from "./DescribeBackupsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
