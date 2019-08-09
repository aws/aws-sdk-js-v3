import { AcceptHandshakeInput } from "./AcceptHandshakeInput";
import { AcceptHandshakeOutput } from "./AcceptHandshakeOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { HandshakeConstraintViolationException } from "./HandshakeConstraintViolationException";
import { HandshakeNotFoundException } from "./HandshakeNotFoundException";
import { InvalidHandshakeTransitionException } from "./InvalidHandshakeTransitionException";
import { HandshakeAlreadyInStateException } from "./HandshakeAlreadyInStateException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptHandshake: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptHandshake",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptHandshakeInput
  },
  output: {
    shape: AcceptHandshakeOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: HandshakeConstraintViolationException
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
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: AccessDeniedForDependencyException
    }
  ]
};
