import { DescribeHandshakeInput } from "./DescribeHandshakeInput";
import { DescribeHandshakeOutput } from "./DescribeHandshakeOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { HandshakeNotFoundException } from "./HandshakeNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
