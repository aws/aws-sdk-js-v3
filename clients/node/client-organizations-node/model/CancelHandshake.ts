import { CancelHandshakeInput } from "./CancelHandshakeInput";
import { CancelHandshakeOutput } from "./CancelHandshakeOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { HandshakeNotFoundException } from "./HandshakeNotFoundException";
import { InvalidHandshakeTransitionException } from "./InvalidHandshakeTransitionException";
import { HandshakeAlreadyInStateException } from "./HandshakeAlreadyInStateException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
