import { DescribeApplicationStateInput } from "./DescribeApplicationStateInput";
import { DescribeApplicationStateOutput } from "./DescribeApplicationStateOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyErrorException } from "./PolicyErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeApplicationState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApplicationState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeApplicationStateInput
  },
  output: {
    shape: DescribeApplicationStateOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
