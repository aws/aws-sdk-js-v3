import { DescribeHandshakeInput } from "../shapes/DescribeHandshakeInput";
import { DescribeHandshakeOutput } from "../shapes/DescribeHandshakeOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { HandshakeNotFoundException } from "../shapes/HandshakeNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeHandshake: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHandshake",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHandshakeInput
  },
  output: {
    shape: DescribeHandshakeOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: HandshakeNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
