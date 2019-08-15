import { AcceptHandshakeInput } from "../shapes/AcceptHandshakeInput";
import { AcceptHandshakeOutput } from "../shapes/AcceptHandshakeOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { HandshakeConstraintViolationException } from "../shapes/HandshakeConstraintViolationException";
import { HandshakeNotFoundException } from "../shapes/HandshakeNotFoundException";
import { InvalidHandshakeTransitionException } from "../shapes/InvalidHandshakeTransitionException";
import { HandshakeAlreadyInStateException } from "../shapes/HandshakeAlreadyInStateException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { AccessDeniedForDependencyException } from "../shapes/AccessDeniedForDependencyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
