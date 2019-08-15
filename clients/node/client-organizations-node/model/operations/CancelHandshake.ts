import { CancelHandshakeInput } from "../shapes/CancelHandshakeInput";
import { CancelHandshakeOutput } from "../shapes/CancelHandshakeOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { HandshakeNotFoundException } from "../shapes/HandshakeNotFoundException";
import { InvalidHandshakeTransitionException } from "../shapes/InvalidHandshakeTransitionException";
import { HandshakeAlreadyInStateException } from "../shapes/HandshakeAlreadyInStateException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelHandshake: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelHandshake",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelHandshakeInput
  },
  output: {
    shape: CancelHandshakeOutput
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
      shape: InvalidHandshakeTransitionException
    },
    {
      shape: HandshakeAlreadyInStateException
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
