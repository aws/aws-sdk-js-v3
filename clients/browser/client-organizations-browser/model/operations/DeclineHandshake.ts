import { DeclineHandshakeInput } from "../shapes/DeclineHandshakeInput";
import { DeclineHandshakeOutput } from "../shapes/DeclineHandshakeOutput";
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

export const DeclineHandshake: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeclineHandshake",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeclineHandshakeInput
  },
  output: {
    shape: DeclineHandshakeOutput
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
